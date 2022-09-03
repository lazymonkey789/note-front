import { useEffect } from "react";
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
    console.log(LineNo);

    const queryClient = useQueryClient();

    const modiAlarm = useMutation(
        async () => {
            await axios.patch(
                `http://localhost:8080/detail-list/${id}`,
                modimodi
            );
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("modiAlarm");
                return window.confirm("수정하였습니다.");
            },
            onError: (error) => {
                console.log("onError");
            },
        }
    );

    modiAlarm.mutate();

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

    return (
        <div>
            <h3>Hi Update</h3>
            <hr></hr>
        </div>
    );
};

export default Modifyalarm;
