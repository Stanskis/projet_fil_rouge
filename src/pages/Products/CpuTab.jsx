import { cpus } from '../../components/Data/Cpus.js';
// import AddButton from './AddButton'

// const handleClick = () =>{
//   console.log('clicked')
// }


export default function CpuTab(){
  return (
    <div className="table-responsive">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Core Count</th>
            <th>Base Clock Frequency</th>
            <th>Boost Clock Frequency</th>
            <th>TDP</th>
            <th>Integrated GPU</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cpus.map((cpu) => (
            <tr key={cpu.title}>
              <td>
                <img className="product-img p-2" src={cpu.img} alt="" />
                <h5 className="m-0">{cpu.title}</h5>
              </td>
              <td>
                <h6 className="m-0">{cpu.cores}</h6>
              </td>
              <td>
                <h6 className="m-0">{cpu.coreClock}</h6>
              </td>
              <td>
                <h6 className="">{cpu.boostClock}</h6>
              </td>
              <td>
                <h6>{cpu.tdp}</h6>
              </td>
              <td>
                <h6>{cpu.igpu}</h6>
              </td>
              <td>
                <h6>{cpu.price}x€</h6>
                <button className="btn btn-primary" data-title={cpu.title}>
                  +Add
                </button>
                {/* <AddButton title={cpu.title}/> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}