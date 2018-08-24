import React, { Component } from 'react';
import './ContentViews.css';
import {Bar,Line,Pie} from 'react-chartjs-2';
let data= {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45],
  }]
}
let data2= {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45],
  }]
}
let data3= {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
  label: "My First dataset",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [0, 10, 5, 2, 20, 30, 45],
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
            <Line data={data} width='30vw' height='20vh' />
          </div>
          <div className="cardChart" >
            <Bar data={data2} width='30vw' height='20vh' />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentViews;
