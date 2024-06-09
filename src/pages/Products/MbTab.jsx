import { mbs } from '../../components/Data/Mbs.js';

export default function MbsTab(){
  return (
    <div className="table-responsive">
      <table className="table table-striped text-center todo">
        <thead>
          <tr>
            <th>Name</th>
            <th>Socket</th>
            <th>Form Factor</th>
            <th>Chipset</th>
            <th>Memory Max</th>
            <th>Memory Slots</th>
            <th>Memory Speed</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {mbs.map((mb) => (
            <tr key={mb.title}>
              <td>
                <img className="product-img p-2" src={mb.img} alt="" />
                <h5 className="m-0">{mb.title}</h5>
              </td>
              <td>
                <h6 className="m-0">{mb.socket}</h6>
              </td>
              <td>
                <h6 className="m-0">{mb.form_factor}</h6>
              </td>
              <td>
                <h6 className="">{mb.chipset}</h6>
              </td>
              <td>
                <h6>{mb.memory_max}</h6>
              </td>
              <td>
                <h6>{mb.memory_slots}</h6>
              </td>
              <td>
                <h6>{mb.memory_speed}</h6>
              </td>
              <td>
                <h6>{mb.color}</h6>
              </td>
              <td>
                <h6>{mb.price}x€</h6>
                <button className="btn btn-primary">+Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}