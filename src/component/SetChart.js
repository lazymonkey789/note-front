import { useEffect, useState } from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";

const SetChart = ({ ButtonId, Index }) => {
    const data = Index.sort();
    return (
        <div>
            <h2>Hi Chart</h2>
            <>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </>
        </div>
    );
};

export default SetChart;
