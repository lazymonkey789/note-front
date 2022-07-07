const DetailAlarm = ({ id, LineNo, Worker, ReportTime, Cause }) => {
    return (
        <div>
            <>DetailAlarm</>
            <hr></hr>
            <ul>
                <li>전용회선번호= {LineNo}</li>
                <li>근무자= {Worker}</li>
                <li>장애시간= {ReportTime}</li>
                <li>원인= {Cause}</li>
            </ul>
        </div>
    );
};

export default DetailAlarm;
