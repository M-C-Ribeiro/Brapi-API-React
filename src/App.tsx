import FigInflacao from "./Components/Inflacao";
import FigEmpresa from "./Components/MaiorLucro";
import './App.css';

const App = () => {
  return (
    <>
    <nav>
      <div className="container">
        <h1>Utilizando API Brabi para verificação da bolsa de valores</h1>
        <div className="figs">
          <FigInflacao/>
          <div className="separador"></div>
          <FigEmpresa/>
        </div>
      </div>

    </nav>
    </>
  )
}

export default App