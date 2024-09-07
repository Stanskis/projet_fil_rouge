import { rams } from '../../components/Data/Rams.js';

export default function RamTab(){
  return (
    <div className="table-responsive">
      <table className="table table-striped text-center todo">
        <thead>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Form-factor</th>
            <th>Modules</th>
            <th>Latency</th>
            <th>CAS Latency</th>
            <th>Timings</th>
            <th>Voltage</th>
            <th>Heat dissipators</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rams.map((ram) => (
            <tr key={ram.title}>
              <td>
                <img className="product-img p-2" src={ram.img} alt="" />
                <h5 className="m-0">{ram.title}</h5>
              </td>
              <td>
                <h6 className="m-0">{ram.speed}</h6>
              </td>
              <td>
                <h6 className="m-0">{ram.form_factor}</h6>
              </td>
              <td>
                <h6 className="">{ram.modules}</h6>
              </td>
              <td>
                <h6>{ram.latency}</h6>
              </td>
              <td>
                <h6>{ram.cas_latency}</h6>
              </td>
              <td>
                <h6>{ram.timing}</h6>
              </td>
              <td>
                <h6>{ram.voltage}</h6>
              </td>
              <td>
                <h6>{ram.heat_diss}</h6>
              </td>
              <td>
                <h6>{ram.price}x€</h6>
                <button className="btn btn-primary">+Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}