import logo from './logo.svg';
import './App.css';
import RadarComponent from './RadarComponents';
import SliderComponent from './Slider';
import { useState } from 'react';
import "antd/dist/antd.css";
function App() {



  const [data1, setData1] = useState({
    name: 'Jon Snow',
    Speed: 20,
    Power: 40.5,
    Luck: 666,
    Attitude: 8,
    Autonomy: 4,
    Range: 120,
    Weight: 88.3,
    Battery: 2500,
    Awesomeness: 40,
    Fair: 1.32,
    Logical: 8,
    Bald: 5
  },
  );
  const [data2, setData2] = useState({
    name: 'Peter Parker',
    Speed: 30,
    Power: 42.5,
    Luck: 200,
    Attitude: 9,
    Autonomy: 14,
    Range: 160,
    Weight: 50.3,
    Battery: 2000,
    Awesomeness: 20,
    Fair: 1.82,
    Logical: 9,
    Bald: 5
  });

  const domains = [
    {
      name: "Speed",
      domain: [1, 30],
      getValue: d => d.Speed,
    },
    {
      name: "Power",
      domain: [20, 100],
      getValue: d => d.Power,
    },
    {
      name: "Luck",
      domain: [1, 777],
      getValue: d => d.Luck,
    },
    {
      name: "Attitude",
      domain: [1, 10],
      getValue: d => d.Attitude,
    },
    {
      name: "Autonomy",
      domain: [0, 50],
      getValue: d => d.Autonomy,
    },
    {
      name: "Range",
      domain: [-180, 180],
      getValue: d => d.Range,
    },
    {
      name: "Weight",
      domain: [10.5, 120.8],
      getValue: d => d.Weight,
    },
    {
      name: "Battery",
      domain: [1, 2500],
      getValue: d => d.Battery,
    },
    {
      name: "Awesomeness",
      domain: [0, 100],
      getValue: d => d.Awesomeness,
    },
    {
      name: "Fair",
      domain: [0.1, 2.5],
      getValue: d => d.Fair,
    },
    {
      name: "Logical",
      domain: [1, 10],
      getValue: d => d.Logical,
    },
    {
      name: "Bald",
      domain: [0, 50],
      getValue: d => d.Bald,
    },
  ]

  const onChange = (value, end, start, type) => {
    const value1 = (end - start) * value[0] / 100;
    const value2 = (end - start) * value[1] / 100;
    console.log((end - start) * value[0] / 100);
    console.log((end - start) * value[1] / 100);
    switch (type) {
      case 'Speed':
        console.log("enters here");
        setData1({ ...data1, Speed: value1 });
        setData2({ ...data2, Speed: value2 });
        break;
      case 'Power':
        console.log("enters here");
        setData1({ ...data1, Power: value1 });
        setData2({ ...data2, Power: value2 });
        break;
      case 'Luck':
        console.log("enters here");
        setData1({ ...data1, Luck: value1 });
        setData2({ ...data2, Luck: value2 });
        break;
      case 'Attitude':
        console.log("enters here");
        setData1({ ...data1, Attitude: value1 });
        setData2({ ...data2, Attitude: value2 });
        break;
      case 'Autonomy':
        console.log("enters here");
        setData1({ ...data1, Autonomy: value1 });
        setData2({ ...data2, Autonomy: value2 });
        break;
      case 'Range':
        console.log("enters here");
        setData1({ ...data1, Range: value1 });
        setData2({ ...data2, Range: value2 });
        break;
      case 'Weight':
        console.log("enters here");
        setData1({ ...data1, Weight: value1 });
        setData2({ ...data2, Weight: value2 });
        break;
      case 'Battery':
        console.log("enters here");
        setData1({ ...data1, Battery: value1 });
        setData2({ ...data2, Battery: value2 });
        break;
      case 'Awesonmeness':
        console.log("enters here");
        setData1({ ...data1, Awesonmeness: value1 });
        setData2({ ...data2, Awesonmeness: value2 });
        break;
      case 'Fair':
        console.log("enters here");
        setData1({ ...data1, Fair: value1 });
        setData2({ ...data2, Fair: value2 });
        break;
      case 'Logical':
        console.log("enters here");
        setData1({ ...data1, Logical: value1 });
        setData2({ ...data2, Logical: value2 });
        break;
      case 'Bald':
        console.log("enters here");
        setData1({ ...data1, Bald: value1 });
        setData2({ ...data2, Bald: value2 });
        break;

    }

  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RadarComponent domains={domains} data={[data1, data2]} />
        <div style={{ marginTop: "200px" }}>
          {domains.map((elem) =>
            <SliderComponent
              start={elem.domain[0]}
              end={elem.domain[1]}
              nameTag={elem.name}
              onChange={(value) => onChange(value, elem.domain[1], elem.domain[0], elem.name)}
            />)
          }

        </div>

      </div>

    </div>
  );
}

export default App;
