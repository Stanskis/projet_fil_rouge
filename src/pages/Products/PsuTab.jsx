import { psus } from '../../components/Data/Psus.js';

export default function PsuTab(){
  return (
    <div className="table-responsive">
      <table className="table table-striped text-center todo">
        <thead>
          <tr>
            <th>Name</th>
            <th>Wattage</th>
            <th>Type</th>
            <th>Energy Rating</th>
            <th>Length</th>
            <th>Modular</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {psus.map((psu) => (
            <tr key={psu.title}>
              <td>
                <img className="product-img p-2" src={psu.img} alt="" />
                <h5 className="m-0">{psu.title}</h5>
              </td>
              <td>
                <h6 className="m-0">{psu.wattage}</h6>
              </td>
              <td>
                <h6 className="m-0">{psu.type}</h6>
              </td>
              <td>
                <h6 className="">{psu.rating}</h6>
              </td>
              <td>
                <h6>{psu.length}</h6>
              </td>
              <td>
                <h6>{psu.modular}</h6>
              </td>
              <td>
                <h6>{psu.color}</h6>
              </td>
              <td>
                <h6>{psu.price}x€</h6>
                <button className="btn btn-primary">+Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}