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
                <BarChart
                    width={690}
                    height={350}
                    data={data}
                    margin={{ top: 30, right: 0, bottom: 20, left: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        wrapperStyle={{
                            backgroundColor: "#f5f5f5",
                        }}
                    />

                    <Bar dataKey="count" barSize={30} fill="#7ac4c0" />
                </BarChart>
            </>
        </div>
    );
};

export default SetChart;
