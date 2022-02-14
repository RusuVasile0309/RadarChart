
import { Slider, InputNumber } from "antd"

const SliderComponent = ({ start, end, nameTag, onChange, defaultValues, onChangeInputLeft, onChangeInputRight }) => {
    const marks = {
        0: start,
        100: end
    }

    return (<div style={{ display: "flex", flexDirection: "column", transform: "scale(0.8)" }}>
        <h3 style={{ textAlign: " center" }}>{nameTag}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "10%", transform: "scale(0.9)" }}>
                <InputNumber
                    min={start}
                    max={defaultValues[1]}
                    value={defaultValues[0]}
                    onChange={onChangeInputLeft}
                />
            </div>
            <div style={{ width: "60%", transform: "scale(0.85)" }}>
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
            <div style={{ width: "10%", transform: "scale(0.9)" }}>
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