import React, { useEffect, useState } from 'react';
import { format } from 'd3-format';

import { RadarChart } from 'react-vis';

const basicFormat = format('.2r');

const RadarComponent = ({ data }) => {
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
                    fill: 'blue',
                    stroke: 'blue'
                }
            }
            if (i === 1) {
                intermediaryValues[i] = {
                    fill: 'rgba(254,0,20,0.8)',
                    stroke: 'red'
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
    }, [data]);

    const [borderData, setBorderData] = useState({
        name: 'Border',
        fill: 'grey',
        stroke: 'grey'
    });

    useEffect(() => {
        let intermediaryBorder = {
            name: 'Border',
            fill: 'grey',
            stroke: 'grey'
        };
        domains.map((element) => {
            intermediaryBorder[element.name] = element.domain[1];
        })
        setBorderData(intermediaryBorder);

    }, [domains, data]);

    return (
        <div style={{ marginLeft: "60px", marginTop: "200px" }}>
            <RadarChart
                style={{
                    axes: {
                        line: {
                            // fill: "black",
                            strokeWidth: 0.5,
                            stroke: "black"
                        },
                        ticks: {
                            fillOpacity: 1,
                            strokeOpacity: 1
                        },
                        text: {}
                    },
                    labels: {
                        fontSize: 12
                    },
                    polygons: {
                        strokeWidth: 2.5,
                        strokeOpacity: 1,
                        fillOpacity: 0.15
                    }

                }}
                data={[...values, borderData]}
                tickFormat={t => basicFormat(t)}
                startingAngle={0}
                renderAxesOverPolygons={true}
                domains={domains}
                width={600}
                height={600}
                margin={{ left: 80, right: 80, top: 80, bottom: 80 }}

            />
        </div>

    );
}
export default RadarComponent;