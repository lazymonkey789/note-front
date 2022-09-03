import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const Modifyalarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    const axios = require("axios").default;
    const { id } = useParams();

    const modimodi = {
        LineNo: LineNo,
        Worker: Worker,
        ReportTime: ReportTime,
        Cause: Cause,
    };

    const queryClient = useQueryClient();

    const newAlarm = async () => {
        await axios.patch(`http://localhost:8080/detail-list/${id}`, modimodi);
    };

    const { data, mutate } = useMutation(newAlarm, {
        onSuccess: () => {
            queryClient.invalidateQueries(data);
            return window.confirm("수정하였습니다.");
        },
        onError: (error) => {
            console.log("onError");
        },
    });

    /* 
    const newAlarm = async () => {
        await axios.patch(`http://localhost:8080/detail-list/${id}`, {
            LineNo: `${LineNo}`,
            Worker: `${Worker}`,
            ReportTime: `${ReportTime}`,
            Cause: `${Cause}`,
        });
    };

    useEffect(() => {
        newAlarm();
    }, []); */

    return <div>{mutate(modimodi)}</div>;
};

export default Modifyalarm;
