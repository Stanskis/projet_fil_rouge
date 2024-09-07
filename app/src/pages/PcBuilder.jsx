import './PCBuilder/PcBuilder.css'
import Products from './Products';
import AddButton from './PCBuilder/AddButton';
export default function PcBuilder() {




  return (
      <main className="container todo build bg-img">
        <h2 className="bg-secondary m-0 p-0 text-center text-white">PC Builder</h2>
        <section>
          <h3 className="text-center text-white">Choose parts:</h3>
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Components</th>
                <th></th>
                <th>Please Select</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CPUs</td>
                <td></td>
                {/* {selectedOption === '1' && <td>yep</td>} */}
                <td><AddButton/></td>
                {/* <td><AddButton /></td> */}
              </tr>
              <tr>
                <td>GPUs</td>
                <td></td>
                <td><AddButton/></td>
              </tr>
              <tr>
                <td>Motherboards</td>
                <td></td>
                <td><AddButton/></td>
              </tr>
              <tr>
                <td>PSUs</td>
                <td></td>
                <td><AddButton/></td>
              </tr>
              <tr>
                <td>RAMs</td>
                <td></td>
                <td><AddButton/></td>
              </tr>
            </tbody>
          </table>
          <h4 className="text-end text-white">Total price:</h4>
          <h4 className='text-end text-white'>Estimated Power Consumption:</h4>
        </section>
      </main>
  );
}