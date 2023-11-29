import { useEffect, useState } from "react";
import Plot from 'react-plotly.js'

type Inflacao = {
  date: Date;
  value: string;
  epochDate:Number};

function FigInflacao() {
  const [inflacoes, setInflacoes] = useState<Inflacao[]>([]);

  useEffect(() => {
    fetch('https://brapi.dev/api/v2/inflation?country=brazil&start=01/07/2022&end=01/11/2023&sortBy=date&sortOrder=asc&token=aNTh9GxZXFhcmFiF7aLhVw')
    .then(res => res.json())
    .then(data => {
      setInflacoes(data.inflation);
    })
  }, [])

  var valores: number[] =   []
  var datas: Date[] = []
  inflacoes.map(val => {
    valores.push(parseFloat(val.value))
    datas.push(val.date)
  })

  return (
    <Plot data={[
      {
        x: datas,
        y: valores,
        type: 'scatter',
        mode: 'lines+markers',
      },
    ]}
    layout={{width: 700, height: 500, title: 'Inflação no Brasil'}}
    />
  )
}

export default FigInflacao