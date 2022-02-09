
import { Slider, InputNumber } from "antd"

const SliderComponent = ({ start, end, nameTag, onChange, defaultValues, onChangeInputLeft, onChangeInputRight }) => {
    const marks = {
        0: start,
        100: end
    }
    //console.log(defaultValues)
    if (nameTag === "Luck") console.log(defaultValues[0])
    return (<div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ marginRight: "350px", marginTop: "15px" }}>{nameTag}</h3>
        <div style={{ height: "30px", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "10%" }}>
                <InputNumber
                    min={start}
                    max={defaultValues[1]}
                    value={defaultValues[0]}
                    onChange={onChangeInputLeft}
                />
            </div>
            <div style={{ width: "60%" }}>
                <Slider
                    disabled={false}
                    defaultValue={[defaultValues[0] * 100 / (end - start), defaultValues[1] * 100 / (end - start)]}
                    range={true}
                    marks={marks}
                    onChange={onChange}
                    tooltipVisible={false}
                    value={[(defaultValues[0] - start) * 100 / (end - start), (defaultValues[1] - start) * 100 / (end - start)]}
                />
            </div>
            <div style={{ width: "10%" }}>
                <InputNumber
                    min={start}
                    max={end}
                    value={defaultValues[1]}
                    onChange={onChangeInputRight}
                />
            </div>
        </div>
    </div>)

}
export default SliderComponent;