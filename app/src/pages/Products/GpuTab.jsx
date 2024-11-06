// import { gpus } from '../../components/Data/Gpus.js';
import { useEffect, useState } from 'react';
import './Products.css';
import GpuAddButton from '../../components/ProductAddButton/GpuAddButton';
import getImages from '../../assets/gpuImages';

const columnMap = {
  name: "Name",
  chipset: "Chipset",
  memory: "Memory",
  core_clock: "Core Clock",
  color: "Color",
  legth: "Length",
  tdp: "TDP",
  rating: "Rating",
  price: "Price",
};

export default function GpuTab(){
  const [columns, setColumns] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsToShow = 10;

  useEffect(() => {
    fetch("http://localhost:3001/api/table/gpus")
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
    fetch("http://localhost:3001/api/all_gpus")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((gpu) => {
  
          const formattedGpu = {};

          columns.forEach((col) => {
            const originalKey = Object.keys(gpu).find(
              (key) => columnMap[key] === col.COLUMN_NAME
            );

            if (originalKey) {
              const value = gpu[originalKey];
              formattedGpu[col.COLUMN_NAME] = formatValue(value, col.DATA_TYPE, col.COLUMN_NAME);
            } else {
              formattedGpu[col.COLUMN_NAME] = "N/A";
            }
          });

          return { ...gpu, ...formattedGpu };
        });
        setGpus(formattedData);
      })
      .catch((error) => console.error("Failed fetching GPUs:", error));
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

    const indexOfLastItem = currentPage * itemsToShow;
    const indexOfFirstItem = indexOfLastItem - itemsToShow;
    const currentItems = gpus.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(gpus.length / itemsToShow);

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
          {currentItems.map((gpu) => (
            <tr key={gpu.id_gpu}>
              {columns.map((col) => (
                <td key={`${gpu.id_gpu}-${col.COLUMN_NAME}`}>
                  {col.COLUMN_NAME === "Name" ? (
                    <>
                      {getImages({ product: gpu })}
                      {gpu[col.COLUMN_NAME] || "N/A"}
                    </>
                  ) : (
                    gpu[col.COLUMN_NAME] || "N/A"
                  )}
                </td>
              ))}
              <td>
                {columns.find((col) => col.COLUMN_NAME === "Price") && (
                  <GpuAddButton 
                  productId={gpu.id_gpu} 
                  componentData={{ name: gpu.name, chipset: gpu.chipset, price: gpu.price, tdp: gpu.tdp }}  // Pass componentData
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