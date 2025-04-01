import React from 'react';
import ActionLog from './components/ActionLog';
import Monitoring from './components/Monitoring';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    return (
        <div>
            <h1>AI Agent Transparency System</h1>
            <ActionLog />
            <Monitoring />
            <FeedbackForm />
        </div>
    );
};

export default App;
