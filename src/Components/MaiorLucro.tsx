import { useEffect, useState } from "react";
import Plot from 'react-plotly.js'

type Empresa = {
    name: string;
    change: number;
  };

function FigEmpresa() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    fetch("https://brapi.dev/api/quote/list?sortBy=change&sortOrder=desc&limit=10&token=eJGEyu8vVHctULdVdHYzQd")
    .then(res => res.json())
    .then(dado => {
        console.log(dado)
      setEmpresas(dado.stocks);
    })
  }, [])
  
  const acaoNome = empresas.map(acao => acao.name);
  const acaoVariacao = empresas.map(acao => acao.change);

// console.log(acaoNome)
  return (
    <Plot data={[
      {
        x: acaoNome,
        y: acaoVariacao,
        type: 'bar',
        mode: 'lines+markers',
        marker: {color: 'red'}
      },
    ]}
    layout={{width: 700, height: 500, title: 'Ações mais valorizadas'}}
    />
  )
}

export default FigEmpresa