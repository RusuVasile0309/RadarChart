import './App.css';

import MainComponent from './MainComponent';
import "antd/dist/antd.css";
function App() {
  const data = [
    {
      label: "Speed",
      min: 1,
      max: 30,
      values: [10, 27],
    },
    {
      label: "Power",
      min: 20,
      max: 1000,
      values: [400, 777],
    },
    {
      label: "Luck",
      min: 1,
      max: 777,
      values: [100, 427],
    },
    {
      label: "Attitude",
      min: 1,
      max: 10,
      values: [2, 7],
    },
    {
      label: "Autonomy",
      min: 0,
      max: 50,
      values: [40, 47],
    },
    {
      label: "Range",
      min: 0,
      max: 180,
      values: [40, 120],
    },
    {
      label: "Weight",
      min: 40.5,
      max: 200,
      values: [90, 150],
    },
    {
      label: "Battery",
      min: 1,
      max: 2500,
      values: [1000, 2000],
    },
    {
      label: "Awesomeness",
      min: 0,
      max: 100,
      values: [10, 27],
    },
    {
      label: "Fairness",
      min: 0,
      max: 10,
      values: [4, 7],
    },
    {
      label: "Logical",
      min: 0,
      max: 40,
      values: [12, 35],
    },
    {
      label: "Baldness",
      min: 0,
      max: 50,
      values: [10, 50],
    },
  ];

  return (
    <div className="App">
      <MainComponent data={data} />

    </div>
  );
}

export default App;
