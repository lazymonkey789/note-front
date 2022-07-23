import { useEffect, useState } from "react";
import { Line } from "recharts";
import SetChart from "../component/SetChart";

const Chart = () => {
    const [Datas, setDatas] = useState([]);
    const [ButtonId, setButtonId] = useState("전용회선");
    const [Xindex, setXindex] = useState([]);
    const [Loading, setLoading] = useState(false);

    const axios = require("axios").default;

    const getDatas = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setDatas(json.data);
        setLoading((prev) => !prev);
    };

    const getChart = async () => {
        const LineTemp = await Datas.map((data) => data.LineNo);
        const LTemp = await Array.from(new Set(LineTemp));

        const LineInfo = await LTemp.map((d) => {
            return {
                name: d,
                count: LineTemp.filter((element) => d === element).length,
            };
        });
        setXindex(LineInfo);
    };

    useEffect(() => {
        getDatas();
    }, []);

    useEffect(() => {
        getChart();
    }, [Loading]);

    const onChartClick = (e) => {
        const {
            target: { id },
        } = e;

        setButtonId(id);
        getChart();
    };
    return (
        <div>
            <>
                <h2>Chart</h2>
            </>
            <>
                <button id="전용회선" onClick={onChartClick}>
                    전용회선
                </button>
            </>
            <>
                <button id="근무자" onClick={onChartClick}>
                    근무자
                </button>
            </>

            <SetChart ButtonId={ButtonId} Index={Xindex} />
        </div>
    );
};

export default Chart;
