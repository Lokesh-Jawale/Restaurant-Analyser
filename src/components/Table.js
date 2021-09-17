import React, { useState, useEffect } from 'react';
import './Table.css';

function Table() {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        var data = JSON.parse(localStorage.getItem('feedback-data-list'));
        setFeedbackData(data)
    }, [])

    return (
        <div className="table">
            <h2>All Feedback</h2>
            {console.log(feedbackData)}
                <div style={{"overflow": "auto"}}>
                    <table>
                        <colgroup>
                            <col span="1" style={{"width": "10%"}} />
                            <col span="1" style={{"width": "10%"}}/>
                            <col span="1" style={{"width": "20%"}} />
                            <col span="2" style={{"width": "50%"}} />
                            <col span="1" style={{"width": "10%"}} />
                        </colgroup>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Field</th>
                                <th>Email Field</th>
                                <th>Feedback</th>
                                <th>rating</th>
                            </tr>
                        </thead>

                        <tbody>
                            {feedbackData?.map(item => (
                                // <TableBody
                                //     name= {item?.name}
                                //     phoneNumber= {item?.phoneNumber}
                                //     email= {item?.email}
                                //     feedback= {item?.feedback}
                                //     rating= {item?.rating}
                                // />,
                                <tr>
                                    <td>{item?.name}</td>
                                    <td>{item?.phoneNumber}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.feedback}</td>
                                    <td>{item?.rating}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
        </div>
    )
}

export default Table;
