

import {useState } from "react";
import './Products/Products.css'
import CpuTab from './Products/CpuTab';
import GpuTab from './Products/GpuTab';
import MotherboardTab from './Products/MbTab';
import PowerSupplyTab from './Products/PsuTab';
import MemoryTab from './Products/RamTab';


export default function Products() {

  const [selectedOption, setSelectedOption] = useState('1');

  const handleSelectedOption = (event) =>{
    setSelectedOption(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <>
      <select className="form-select container my-5" aria-label="Default select example" onChange={handleSelectedOption} value={selectedOption}>
        <option value="1">CPUs</option>
        <option value="2">GPUs</option>
        <option value="3">Motherboards</option>
        <option value="4">Power Supplies</option>
        <option value="5">Memory</option>
      </select>
      {selectedOption === '1' && <CpuTab />}
      {selectedOption === '2' && <GpuTab />}
      {selectedOption === '3' && <MotherboardTab />}
      {selectedOption === '4' && <PowerSupplyTab />}
      {selectedOption === '5' && <MemoryTab />}
    </>
  );
}