import { useEffect, useState } from 'react';
import './Products.css';
import MbAddButton from '../../components/ProductAddButton/MbAddButton';
import getImages from '../../assets/gpuImages'; 

const columnMap = {
  name: "Name",
  socket: "Socket",
  form_factor: "Form Factor",
  max_memory: "Max Memory",
  memory_slots: "Memory Slots",
  color: "Color",
  rating: "Rating",
  price: "Price",
};

export default function MbTab(){
  const [columns, setColumns] = useState([]);
  const [mbs, setMbs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsToShow = 10;

  useEffect(() => {
    fetch("http://localhost:3001/api/table/motherboards")
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
    fetch("http://localhost:3001/api/all_mbs")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((mb) => {
  
          const formattedMb = {};

          columns.forEach((col) => {
            const originalKey = Object.keys(mb).find(
              (key) => columnMap[key] === col.COLUMN_NAME
            );

            if (originalKey) {
              const value = mb[originalKey];
              formattedMb[col.COLUMN_NAME] = formatValue(value, col.DATA_TYPE, col.COLUMN_NAME);
            } else {
              formattedMb[col.COLUMN_NAME] = "N/A";
            }
          });

          return { ...mb, ...formattedMb };
        });
        setMbs(formattedData);
      })
      .catch((error) => console.error("Failed fetching mbs:", error));
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
    const currentItems = mbs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(mbs.length / itemsToShow);

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
          {currentItems.map((mb) => (
            <tr key={mb.id_mb}>
              {columns.map((col) => (
                <td key={`${mb.id_mb}-${col.COLUMN_NAME}`}>
                  {col.COLUMN_NAME === "Name" ? (
                    <>
                      {getImages({ product: mb })}
                      {mb[col.COLUMN_NAME] || "N/A"}
                    </>
                  ) : (
                    mb[col.COLUMN_NAME] || "N/A"
                  )}
                </td>
              ))}
              <td>
                {columns.find((col) => col.COLUMN_NAME === "Price") && (
                  <MbAddButton
                  productId={mb.id_mb} 
                  componentData={{ name: mb.name, price: mb.price, socket: mb.socket}}  // Pass componentData
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