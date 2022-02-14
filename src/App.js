import './App.css';

import MainComponent from './MainComponent';
import "antd/dist/antd.css";
function App() {
  const data = [
    {
      label: "Speed",
      min: 1,
      max: 30,
      values: [1, 30],
    },
    {
      label: "Power",
      min: 20,
      max: 1000,
      values: [20, 1000],
    },
    {
      label: "Luck",
      min: 1,
      max: 777,
      values: [1, 777],
    },
    {
      label: "Attitude",
      min: 1,
      max: 10,
      values: [1, 10],
    },
    {
      label: "Autonomy",
      min: 0,
      max: 50,
      values: [0, 50],
    },
    {
      label: "Range",
      min: -180,
      max: 180,
      values: [-180, 180],
    },
    {
      label: "Weight",
      min: 40.5,
      max: 200,
      values: [40.5, 200],
    },
    {
      label: "Battery",
      min: 1,
      max: 2500,
      values: [1, 2500],
    },
    {
      label: "Awesomeness",
      min: 0,
      max: 100,
      values: [0, 100],
    },
    {
      label: "Fairness",
      min: 0,
      max: 10,
      values: [0, 10],
    },
    {
      label: "Logical",
      min: 0,
      max: 40,
      values: [0, 40],
    },
    {
      label: "Baldness",
      min: 0,
      max: 50,
      values: [0, 50],
    },
  ];

  return (
    <div className="App">
      <MainComponent data={data} />

    </div>
  );
}

export default App;
