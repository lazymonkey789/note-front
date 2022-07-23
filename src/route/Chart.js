import { useEffect, useState } from "react";
import { Line } from "recharts";
import SetChart from "../component/SetChart";

const Chart = () => {
    const [Datas, setDatas] = useState([]);
    const [ButtonId, SetButtonId] = useState("");
    const [Xindex, SetXindex] = useState([]);

    const axios = require("axios").default;

    const getDatas = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setDatas(json.data);
    };
    useEffect(() => {
        getDatas();
    }, []);
    console.log(Datas.LineNo);
    const onChartClick = (e) => {
        const {
            target: { id },
        } = e;
        SetButtonId(id);

        if (id === "전용회선") {
            let LineTemp = Datas.map((data) => data.LineNo);
            let LTemp = Array.from(new Set(LineTemp));

            const LineInfo = LTemp.map((d) => {
                return {
                    name: d,
                    count: LineTemp.filter((element) => d === element).length,
                };
            });

            SetXindex(LineInfo);
        }

        /*         if (id === "근무자") {
            let result = Datas.map((data) => data.Worker);

            result.forEach((x) => {
                res[x] = (res[x] || 0) + 1;
            });
            SetChartX(res);
            console.log(res);
        } */
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
