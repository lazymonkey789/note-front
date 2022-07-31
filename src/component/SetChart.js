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
            <>
                <BarChart width={630} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        wrapperStyle={{
                            backgroundColor: "#f5f5f5",
                        }}
                    />

                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </>
        </div>
    );
};

export default SetChart;
