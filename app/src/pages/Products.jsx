import {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Products/Products.css'
import CpuTab from './Products/CpuTab';
import GpuTab from './Products/GpuTab';
import MbTab from './Products/MbTab';
import PsuTab from './Products/PsuTab';
import RamTab from './Products/RamTab';


export default function Products() {

  const [selectedOption, setSelectedOption] = useState('1');

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const option = queryParams.get('option');
    
    if (option) {
      console.log('Option found in URL:', option); // Debug log to see if the option is correctly fetched
      setSelectedOption(option);
    } else {
      console.log('No option in URL');
    }
  }, [location]);

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
        <option value="4">Memory RAM</option>
        <option value="5">Power Supplies</option>
      </select>
      {selectedOption === '1' && <CpuTab />}
      {selectedOption === '2' && <GpuTab />}
      {selectedOption === '3' && <MbTab />}
      {selectedOption === '5' && <RamTab />}
      {selectedOption === '4' && <PsuTab />}
    </>
  );
}