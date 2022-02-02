import { useState } from "react";
import { Slider, InputNumber, Col, Row } from "antd"

const SliderComponent = ({ start, end, nameTag, onChange }) => {
    const marks = {
        0: start,
        100: end
    }

    return <div style={{ height: "60px", width: "1000px" }}>
        <h2 style={{ marginRight: "100px" }}>{nameTag}</h2>
        <Row>
            <Col span={15}>
                <Slider
                    disabled={false}
                    defaultValue={[start, end]}
                    range={true}
                    marks={marks}
                    onChange={onChange}
                />
            </Col>
            <Col span={5}>
                <InputNumber></InputNumber>
            </Col>
        </Row>




    </div>
}
export default SliderComponent;