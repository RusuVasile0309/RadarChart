import { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import RadarComponent from "./RadarComponents";
import SliderComponent from "./Slider";

const MainComponent = ({ data }) => {
    const [modifiedData, setModifiedData] = useState([...data]);

    const onChange = (value, end, start, type) => {

        let value1 = (end - start) * value[0] / 100 + start;
        let value2 = (end - start) * value[1] / 100 + start;
        let intermediaryValues = modifiedData;
        intermediaryValues.map((element) => {
            if (element.label === type) {
                element.values[0] = value1;
                element.values[1] = value2;
            }
        })
        setModifiedData([...intermediaryValues]);
    }

    const onChangeInputLeft = (value, type) => {
        const intermediaryValues = modifiedData;
        intermediaryValues.map((element) => {
            if (element.label === type) {
                element.values[0] = value;
            }
        })
        setModifiedData([...intermediaryValues]);
    }

    const onChangeInputRight = (value, type) => {
        const intermediaryValues = modifiedData;
        intermediaryValues.map((element) => {
            if (element.label === type) {
                element.values[1] = value;
            }
        })
        setModifiedData([...intermediaryValues]);
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ height: "100%", width: "40%" }}>
                <RadarComponent data={modifiedData} />
            </div>
            <div style={{ marginTop: "200px", height: "100%", width: "60%" }}>
                {modifiedData.map((elem) =>
                    <SliderComponent
                        start={elem.min}
                        end={elem.max}
                        nameTag={elem.label}
                        onChange={(value) => onChange(value, elem.max, elem.min, elem.label)}
                        defaultValues={[elem.values[0], elem.values[1]]}
                        onChangeInputLeft={(value) => onChangeInputLeft(value, elem.label)}
                        onChangeInputRight={(value) => onChangeInputRight(value, elem.label)}
                    />)
                }

            </div>

        </div>
    )
}

export default MainComponent;