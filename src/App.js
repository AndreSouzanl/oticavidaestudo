import './App.css';
import Topo from './componentes/Topo';
import Main from './componentes/conteudo';
import Rodape from './componentes/Rodape';

import './App.css'

function App() {
  return (
    <div className='container'>
       <Topo/>
       <Main/>
       <Rodape />
    </div>
  );
}

export default App;
