import React, { useEffect, useState } from 'react';
import { format } from 'd3-format';

import { RadarChart } from 'react-vis';

const basicFormat = format('.2r');

const RadarComponent = ({ domains, data }) => {

    const [borderData, setBorderData] = useState({
        name: 'Border',
        fill: 'grey',
        stroke: 'rgba(114,172,240,1)'
    });

    useEffect(() => {
        let intermediaryBorder = {
            name: 'Border',
            fill: 'grey',
            stroke: 'rgba(114,172,240,1)'
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
                        strokeWidth: 0.5,
                        strokeOpacity: 1,
                        fillOpacity: 0.1
                    }

                }}
                data={[...data, borderData]}
                tickFormat={t => basicFormat(t)}
                startingAngle={0}
                renderAxesOverPolygons={true}
                domains={domains}
                width={800}
                height={800}
                margin={{ left: 80, right: 80, top: 80, bottom: 80 }}

            />
        </div>

    );
}
export default RadarComponent;