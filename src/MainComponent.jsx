import { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import RadarComponent from "./RadarComponents";
import SliderComponent from "./Slider";

const MainComponent = ({ data }) => {
    const [domains, setDomains] = useState([]);
    const [values, setValues] = useState([]);
    useEffect(() => {
        const intermediaryDomains = [];
        let intermediaryValues = [];
        for (let i = 0; i <= data[0].values.length - 1; i++) {
            intermediaryValues[i] = {
                name: `Name${i}`
            };
            if (i === 0) {
                intermediaryValues[i] = {
                    fill: 'rgba(24,250,20,0.8)',
                    stroke: 'rgba(114,172,240,1)'
                }
            }
            if (i === 1) {
                intermediaryValues[i] = {
                    fill: 'rgba(254,0,20,0.8)',
                    stroke: 'rgba(114,172,240,1)'
                }
            }
        }
        data.map((element) => {
            intermediaryDomains.push({
                name: element.label,
                domain: [element.min, element.max],
                getValue: d => d[element.label]
            })
            for (let i = 0; i <= element.values.length - 1; i++) {
                intermediaryValues[i][element.label] = element.values[i];
            }
        })
        setDomains(intermediaryDomains);
        setValues(intermediaryValues);
    }, []);

    const onChange = (value, end, start, type) => {

        let value1 = (end - start) * value[0] / 100 + start;
        let value2 = (end - start) * value[1] / 100 + start;
        let intermediaryValues = values;
        intermediaryValues[0][type] = value1;
        intermediaryValues[1][type] = value2;
        setValues([...intermediaryValues]);
    }

    const onChangeInputLeft = (value, type) => {
        const intermediaryValues = values;
        intermediaryValues[0][type] = value;
        console.log(intermediaryValues[0][type])
        setValues([...intermediaryValues]);
    }

    const onChangeInputRight = (value, type) => {
        const intermediaryValues = values;
        intermediaryValues[1][type] = value;
        console.log(intermediaryValues[1][type]);
        setValues([...intermediaryValues]);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ height: "100%", width: "40%" }}>
                <RadarComponent domains={domains} data={values} />
            </div>
            <div style={{ marginTop: "200px", height: "100%", width: "60%" }}>
                {domains.map((elem) =>
                    <SliderComponent
                        start={elem.domain[0]}
                        end={elem.domain[1]}
                        nameTag={elem.name}
                        onChange={(value) => onChange(value, elem.domain[1], elem.domain[0], elem.name)}
                        defaultValues={[values[0][elem.name], values[1][elem.name]]}
                        onChangeInputLeft={(value) => onChangeInputLeft(value, elem.name)}
                        onChangeInputRight={(value) => onChangeInputRight(value, elem.name)}
                    />)
                }

            </div>

        </div>
    )
}

export default MainComponent;