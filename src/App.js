import './App.css';
import FormCIA from './Components/FormCIA/FormCIA';
import FormLegal from './Components/FormLegal/FormLegal';

function App() {
  return (
    <div className="App">
          <h1 className='Titulo'>Registo de Empresa / Rep. Legal</h1>
          
          <div className='Container'>

              <FormCIA/>
              <FormLegal/>

          </div>

    </div>
  );
}

export default App;
