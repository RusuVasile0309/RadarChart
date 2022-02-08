import React, { useState } from 'react';
import { format } from 'd3-format';

import { RadarChart } from 'react-vis';

const basicFormat = format('.2r');
const wideFormat = format('.3r');

const RadarComponent = ({ domains, data }) => {
    const borderMaxData = {
        name: 'Max',
        Speed: 30,
        Power: 100,
        Luck: 777,
        Attitude: 10,
        Autonomy: 50,
        Range: 180,
        Weight: 120.8,
        Battery: 2500,
        Awesomeness: 100,
        Fair: 2.5,
        Logical: 10,
        Bald: 50,
        fill: 'grey',
        stroke: 'rgba(114,172,240,1)'
    }
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
                data={[...data, borderMaxData]}
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