import './PCBuilder/PcBuilder.css';
import React, { useEffect, useState } from 'react';
import getImages from '../assets/cpuImages';
import ListButton from './PCBuilder/ListButton'; // Assuming ListButton is fine

const componentTypes = ['CPU','CPU Cooler', 'GPU', 'Motherboard', 'PSU', 'RAM', 'HDD/SSD', 'Case'];

export default function PcBuilder() {
  const [selectedComponents, setSelectedComponents] = useState({
    CPU: JSON.parse(localStorage.getItem('selectedCPU')) || null,
    GPU: JSON.parse(localStorage.getItem('selectedGPU')) || null,
    Motherboard: JSON.parse(localStorage.getItem('selectedMb')) || null,
    PSU: JSON.parse(localStorage.getItem('selectedPsu')) || null,
    RAM: JSON.parse(localStorage.getItem('selectedRam')) || null
  });

  return (
    <main className="container todo build bg-img">
      <h2 className="bg-secondary m-0 p-0 text-center text-white">
        PC Builder
      </h2>
      <section>
        <h3 className="text-center text-white">Choose parts:</h3>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Components</th>
              <th>Selected</th>
              <th>Search component</th>
            </tr>
          </thead>
          <tbody>
            {componentTypes.map((type) => (
              <tr key={type}>
                <td className="fs-5 fw-bold">{type}</td>
                <td>
                  {selectedComponents[type] ? (
                    <div className="d-flex justify-content-center">
                      <div>
                        {getImages({ product: selectedComponents[type] })}
                      </div>
                      <div className="m-2">
                        <div>
                          {selectedComponents[type]?.name}
                          {selectedComponents[type]?.chipset &&
                            ` - ${selectedComponents[type]?.chipset}`}
                        </div>
                        <div>{`Price: ` + selectedComponents[type].price}€</div>
                        <div>{selectedComponents[type]?.tdp &&
                          `TDP: ${selectedComponents[type]?.tdp}W`}
                        </div>
                        <div>{selectedComponents[type]?.socket &&
                          `Socket: ${selectedComponents[type]?.socket}`}
                        </div>
                      </div>
                    </div>
                  ) : (
                    "Please select one"
                  )}
                </td>
                <td>
                  <ListButton componentType={type} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="text-end text-white">Total price:</h4>
        <h4 className="text-end text-white">Estimated Power Consumption:</h4>
      </section>
    </main>
  );
}