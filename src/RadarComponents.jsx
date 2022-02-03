import React, { useState } from 'react';
import { format } from 'd3-format';

import { RadarChart } from 'react-vis';

const basicFormat = format('.2r');
const wideFormat = format('.3r');

const RadarComponent = ({ domains, data }) => {

    console.log(data)

    return (
        <div style={{ marginLeft: "60px", marginTop: "200px" }}>
            <RadarChart
                style={{
                    axes: {
                        line: {},
                        ticks: {},
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
                data={data}
                tickFormat={t => basicFormat(t)}
                startingAngle={0}
                domains={domains}
                width={800}
                height={800}
                margin={{ left: 80, right: 80, top: 80, bottom: 80 }}

            />
        </div>

    );
}
export default RadarComponent;