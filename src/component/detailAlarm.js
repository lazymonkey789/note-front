const DetailAlarm = ({ id, LineNo, Worker, ReportTime, Cause }) => {
    return (
        <div>
            <>DetailAlarm</>
            <hr></hr>
            <ul>
                <li>LineNo= {LineNo}</li>
                <li>Worker= {Worker}</li>
                <li>ReportTime= {ReportTime}</li>
                <li>Cause= {Cause}</li>
            </ul>
        </div>
    );
};

export default DetailAlarm;
