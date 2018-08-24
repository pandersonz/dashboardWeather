import React, { Component } from 'react';
import './ContentViews.css';
import {Bar,Line,Pie} from 'react-chartjs-2';
let dataDia= {
  labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45, 10, 5, 2, 20, 30, 45, 10, 5, 2, 20, 30, 45, 5, 2, 20, 30, 45],
  }]
}
let dataSemana= {
  labels: ["lunes", "martes", "miercoles", "jueves", "viernes","sabado","domingo"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45],
  }]
}
let dataMes= {
  labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45, 10, 5, 2, 20, 30, 45,0, 10, 5, 2, 20, 30, 45, 20, 30, 45,0, 10, 5, 2, 20, 30, 45],
  }]
}
let data4= {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45],
  }]
}
class ContentViews extends Component {
  render() {
    return (
      <div className="contentViews">
        <div className="rowContent">
          <div className="cardChart" >
          <h4>Historico de tiempo / dia</h4>
            <Bar data={dataDia} width='30vw' height='10vh' />
          </div>
          <div className="cardChart" >
          <h4>Historico de tiempo Semanal</h4>
            <Bar data={dataSemana} width='30vw' height='10vh' />
          </div>
        </div>
        <div className="rowContent">
        <div className="cardChartComplete" >
          <h4>Historico de tiempo Semanal</h4>
            <Bar data={dataMes} width='30vw' height='5vh' />
          </div>
        </div>  
      </div>
    );
  }
}

export default ContentViews;
