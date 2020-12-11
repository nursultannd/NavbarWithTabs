import React from "react";

export default function History() {
  //import change history from somewhere

  const HistoryList = [
    {
      dateTime: "07/25/2020 13:45",
      userName: "User Name",
      changeType: "Created WO#1234567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#1874567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Created WO#4567123",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Edited WO#1267345",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Edited WO#9234567",
    },
  ];

  return (
    <div className="history-container">
      <div className="history-title">Change History</div>

      <div className="history-table">
        <table className="tabl">
          <thead>
            <tr>
              <th className="date">Date</th>
              <th className="user">User</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {HistoryList.map((item) => {
              return (
                <tr>
                  <td>{item.dateTime}</td>
                  <td>{item.userName}</td>
                  <td>{item.changeType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
