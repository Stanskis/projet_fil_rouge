import { gpus } from '../../components/Data/Gpus.js';
export default function GpuTab(){
  return (
    <div className="table-responsive">
      <table className="table table-striped text-center todo">
        <thead>
          <tr>
            <th>Name</th>
            <th>Chipset</th>
            <th>Base Clock Frequency</th>
            <th>Boost Clock Frequency</th>
            <th>Memory</th>
            <th>TDP</th>
            <th>Length</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {gpus.map((gpu) => (
            <tr key={gpu.title}>
              <td>
                <img className="product-img p-2" src={gpu.img} alt="" />
                <h5 className="m-0">{gpu.title}</h5>
              </td>
              <td>
                <h6 className="m-0">{gpu.chipset}</h6>
              </td>
              <td>
                <h6 className="m-0">{gpu.coreClock}</h6>
              </td>
              <td>
                <h6 className="">{gpu.boostClock}</h6>
              </td>
              <td>
                <h6>{gpu.memory}</h6>
              </td>
              <td>
                <h6>{gpu.tdp}</h6>
              </td>
              <td>
                <h6>{gpu.length}</h6>
              </td>
              <td>
                <h6>{gpu.color}</h6>
              </td>
              <td>
                <h6>{gpu.price}x€</h6>
                <button className="btn btn-primary">+Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}