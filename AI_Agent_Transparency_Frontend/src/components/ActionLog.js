import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActionLog = () => {
    const [actions, setActions] = useState([]);

    useEffect(() => {
    const fetchActions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/calls');
            setActions(response.data);
        } catch (error) {
            console.error("Error fetching actions:", error);
            alert("Failed to fetch actions. Please try again later.");
        };
        fetchActions();
    }, []);

    return (
        <div>
            <h2>Action Log</h2>
            <ul>
                {actions.map(action => (
                    <li key={action._id}>
                        {action.callerId} - {action.callStatus} - {action.timeOfCall}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActionLog;
