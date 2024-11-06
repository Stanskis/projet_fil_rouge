// import { cpus } from '../../components/Data/Cpus.js';
import { useEffect, useState } from 'react';
import './Products.css';
import CpuAddButton from '../../components/ProductAddButton/CpuAddButton';
import getImages from '../../assets/cpuImages';

const columnMap = {
  name: "Name",
  core_count: "Core Count",
  core_clock: "Core Clock",
  boost_clock: "Boost Core Clock",
  tdp: "TDP",
  graphics: "Integrated Graphics",
  rating: "Rating",
  price: "Price",
};

export default function CpuTab(){
  const [columns, setColumns] = useState([]);
  const [cpus, setCpus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsToShow = 10;

  useEffect(() => {
    fetch("http://localhost:3001/api/table/cpus")
      .then((response) => response.json())
      .then((data) => {
        const transformedColumns = Object.keys(columnMap).map((key) => {
          const originalColumn = data.find((col) => col.COLUMN_NAME.toLowerCase() === key);
          return originalColumn 
            ? { ...originalColumn, COLUMN_NAME: columnMap[key] } 
            : { COLUMN_NAME: columnMap[key], DATA_TYPE: null };
        });
  
        setColumns(transformedColumns);
      })
      .catch((error) => console.error("Failed fetching columns:", error));
  }, []);



  useEffect(() => {
    fetch("http://localhost:3001/api/all_cpus")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((cpu) => {
  
          const formattedCpu = {};

          columns.forEach((col) => {
            const originalKey = Object.keys(cpu).find(
              (key) => columnMap[key] === col.COLUMN_NAME
            );

            if (originalKey) {
              const value = cpu[originalKey];
              formattedCpu[col.COLUMN_NAME] = formatValue(value, col.DATA_TYPE, col.COLUMN_NAME);
            } else {
              formattedCpu[col.COLUMN_NAME] = "N/A";
            }
          });

          return { ...cpu, ...formattedCpu };
        });
        setCpus(formattedData);
      })
      .catch((error) => console.error("Failed fetching CPUs:", error));
  }, [columns]);


      function formatValue(value, dataType, columnName) {
        let formattedValue = value;

        if (dataType === "decimal") {
          formattedValue = `${value} €`;
        } else if (dataType === "float") {
          formattedValue = `${value} GHz`;
        } else if (dataType === "int" && columnName === "TDP") {
          formattedValue = `${value} W`;
        }
        return formattedValue;
      }

    // Calculate items to show per page
    const indexOfLastItem = currentPage * itemsToShow;
    const indexOfFirstItem = indexOfLastItem - itemsToShow;
    const currentItems = cpus.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(cpus.length / itemsToShow);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };

    const handleFirstPage = () => {
      handlePageChange(1);
    }
    const handleLastPage = () => {
      handlePageChange(totalPages);
    }

  return (
    <div className="table-responsive table-container">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.COLUMN_NAME}>{col.COLUMN_NAME}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamically render rows based on the CPU data */}
          {currentItems.map((cpu) => (
            <tr key={cpu.id_cpu}>
              {columns.map((col) => (
                <td key={`${cpu.id_cpu}-${col.COLUMN_NAME}`}>
                  {col.COLUMN_NAME === "Name" ? (
                    <>
                      {getImages({ product: cpu })}
                      {cpu[col.COLUMN_NAME] || "N/A"}
                    </>
                  ) : (
                    cpu[col.COLUMN_NAME] || "N/A"
                  )}
                </td>
              ))}
              <td>
                {columns.find((col) => col.COLUMN_NAME === "Price") && (
                  <CpuAddButton 
                  productId={cpu.id_cpu} 
                  componentData={{ name: cpu.name, price: cpu.price, tdp: cpu.tdp }}  // Pass componentData
                />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls text-center m-5">
        <button onClick={handleFirstPage} className="btn btn-secondary mx-1">
          First Page
        </button>
        <button onClick={handleBack} className="btn btn-primary mx-1">
          Back
        </button>
        <span className="text-warning m-2">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} className="btn btn-primary mx-1">
          Next
        </button>
        <button onClick={handleLastPage} className="btn btn-secondary mx-1">
          Last Page
        </button>
      </div>
    </div>
  );
}