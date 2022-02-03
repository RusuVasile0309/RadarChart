import logo from './logo.svg';
import './App.css';
import RadarComponent from './RadarComponents';
import SliderComponent from './Slider';
import { useState } from 'react';
import "antd/dist/antd.css";
function App() {

  const getAttribute = (data, nameOfAtribute) => {

    switch (nameOfAtribute) {
      case 'Power':
        return data.Power;
      case 'Speed':
        return data.Speed;
      case 'Luck':
        return data.Luck;
      case 'Attitude':
        return data.Attitude;
      case 'Autonomy':
        return data.Autonomy;
      case 'Range':
        return data.Range;
      case 'Weight':
        return data.Weight;
      case 'Battery':
        return data.Battery;
      case 'Awesomeness':
        return data.Awesomeness;
      case 'Fair':
        return data.Fair;
      case 'Logical':
        return data.Logical;
      case 'Bald':
        return data.Bald;
    }
  }

  const [data1, setData1] = useState({
    name: 'Jon Snow',
    Speed: 20,
    Power: 40.5,
    Luck: 166,
    Attitude: 8,
    Autonomy: 4,
    Range: 120,
    Weight: 38.3,
    Battery: 200,
    Awesomeness: 13,
    Fair: 1.32,
    Logical: 8,
    Bald: 3,
    fill: 'rgba(24,250,20,0.8)',
    stroke: 'rgba(114,172,240,1)'
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
    Bald: 5,
    fill: 'rgba(254,0,20,0.8)',
    stroke: 'rgba(114,172,240,1)'
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
      domain: [0, 180],
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
    const value1 = (end - start) * value[0] / 100 + start;
    const value2 = (end - start) * value[1] / 100 + start;
    console.log((end - start) * value[0] / 100);
    console.log((end - start) * value[1] / 100);

    switch (type) {
      case 'Speed':
        setData1({ ...data1, Speed: value1 });
        setData2({ ...data2, Speed: value2 });
        break;
      case 'Power':
        setData1({ ...data1, Power: value1 });
        setData2({ ...data2, Power: value2 });
        break;
      case 'Luck':
        setData1({ ...data1, Luck: value1 });
        setData2({ ...data2, Luck: value2 });
        break;
      case 'Attitude':
        setData1({ ...data1, Attitude: value1 });
        setData2({ ...data2, Attitude: value2 });
        break;
      case 'Autonomy':
        setData1({ ...data1, Autonomy: value1 });
        setData2({ ...data2, Autonomy: value2 });
        break;
      case 'Range':
        setData1({ ...data1, Range: value1 });
        setData2({ ...data2, Range: value2 });
        break;
      case 'Weight':
        setData1({ ...data1, Weight: value1 });
        setData2({ ...data2, Weight: value2 });
        break;
      case 'Battery':
        setData1({ ...data1, Battery: value1 });
        setData2({ ...data2, Battery: value2 });
        break;
      case 'Awesomeness':
        setData1({ ...data1, Awesomeness: value1 });
        setData2({ ...data2, Awesomeness: value2 });
        break;
      case 'Fair':
        setData1({ ...data1, Fair: value1 });
        setData2({ ...data2, Fair: value2 });
        break;
      case 'Logical':
        setData1({ ...data1, Logical: value1 });
        setData2({ ...data2, Logical: value2 });
        break;
      case 'Bald':
        setData1({ ...data1, Bald: value1 });
        setData2({ ...data2, Bald: value2 });
        break;
    }
  }

  const onChangeInputLeft = (value, type) => {
    console.log(type);
    switch (type) {
      case 'Power':
        setData1({ ...data1, Power: value });
        break;
      case 'Speed':
        setData1({ ...data1, Speed: value });
        break;
      case 'Luck':
        setData1({ ...data1, Luck: value });
        break;
      case 'Attitude':
        setData1({ ...data1, Attitude: value });
        break;
      case 'Autonomy':
        setData1({ ...data1, Autonomy: value });
        break;
      case 'Range':
        setData1({ ...data1, Range: value });
        break;
      case 'Weight':
        setData1({ ...data1, Weight: value });
        break;
      case 'Battery':
        setData1({ ...data1, Battery: value });
        break;
      case 'Awesomeness':
        setData1({ ...data1, Awesomeness: value });
        break;
      case 'Fair':
        setData1({ ...data1, Fair: value });
        break;
      case 'Logical':
        setData1({ ...data1, Logical: value });
        break;
      case 'Bald':
        setData1({ ...data1, Bald: value });
        break;
    }
  }
  const onChangeInputRight = (value, type) => {
    console.log(type);
    switch (type) {
      case 'Power':
        setData2({ ...data2, Power: value });
        break;
      case 'Speed':
        setData2({ ...data2, Speed: value });
        break;
      case 'Luck':
        setData2({ ...data2, Luck: value });
        break;
      case 'Attitude':
        setData2({ ...data2, Attitude: value });
        break;
      case 'Autonomy':
        setData2({ ...data2, Autonomy: value });
        break;
      case 'Range':
        setData2({ ...data2, Range: value });
        break;
      case 'Weight':
        setData2({ ...data2, Weight: value });
        break;
      case 'Battery':
        setData2({ ...data2, Battery: value });
        break;
      case 'Awesomeness':
        setData2({ ...data2, Awesomeness: value });
        break;
      case 'Fair':
        setData2({ ...data2, Fair: value });
        break;
      case 'Logical':
        setData2({ ...data2, Logical: value });
        break;
      case 'Bald':
        setData2({ ...data2, Bald: value });
        break;
    }
  }
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ height: "100%", width: "40%" }}>
          <RadarComponent domains={domains} data={[data1, data2]} />
        </div>
        <div style={{ marginTop: "200px", height: "100%", width: "60%" }}>
          {domains.map((elem) =>
            <SliderComponent
              start={elem.domain[0]}
              end={elem.domain[1]}
              nameTag={elem.name}
              onChange={(value) => onChange(value, elem.domain[1], elem.domain[0], elem.name)}
              defaultValues={[getAttribute(data1, elem.name), getAttribute(data2, elem.name)]}
              onChangeInputLeft={(value) => onChangeInputLeft(value, elem.name)}
              onChangeInputRight={(value) => onChangeInputRight(value, elem.name)}
            />)
          }

        </div>

      </div>

    </div>
  );
}

export default App;
