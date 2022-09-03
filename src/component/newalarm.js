import { useMutation, useQueryClient } from "react-query";

const NewAlarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    const axios = require("axios").default;
    /* 
    const addAlarm = async () => {
       
        await axios.post("http://localhost:8080/detail-list", {
            LineNo: `${LineNo}`,
            Worker: `${Worker}`,
            ReportTime: `${ReportTime}`,
            Cause: `${Cause}`,
        });
    };
    useEffect(() => {
        addAlarm();
    }, []);
 */

    const newnew = {
        LineNo: LineNo,
        Worker: Worker,
        ReportTime: ReportTime,
        Cause: Cause,
    };

    const queryClient = useQueryClient();

    const addAlarm = useMutation(
        async () => {
            await axios.post("http://localhost:8080/detail-list", newnew);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("addAlarm");
                return window.confirm("작성하였습니다.");
            },
            onError: (error) => {
                console.log("onError");
            },
        }
    );

    addAlarm.mutate();

    /* 
    const { data, isLoading, mutate, mutateAsync } = useMutation(
        (addAlarm) => {
            return axios.post(
                "http://localhost:8080/detail-list",
                {
                    LineNo: `${LineNo}`,
                    Worker: `${Worker}`,
                    ReportTime: `${ReportTime}`,
                    Cause: `${Cause}`,
                },
                addAlarm
            );
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("addAlarm");
                return window.confirm("작성하였습니다.");
            },
            onError: (error) => {
                console.log("onError");
            },
        }
    );
 */
    return (
        <div>
            <h3>Hi input</h3>
        </div>
    );
};

export default NewAlarm;
