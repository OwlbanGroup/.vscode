import React, { useState } from 'react';

const K4AIAgent = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const handleUserInput = (input) => {
        // Basic logic to generate a response based on user input
        if (input.toLowerCase().includes('hello')) {
            setResponse('Hello! How can I assist you today?');
        } else if (input.toLowerCase().includes('help')) {
            setResponse('Sure! What do you need help with?');
        } else {
            setResponse('I am here to assist you with anything you need.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUserInput(userInput);
        setUserInput('');
    };

    return (
        <div>
            <h2>4K AI Agent</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message here"
                    required
                />
                <button type="submit">Send</button>
            </form>
            <p>{response}</p>
        </div>
    );
};

export default K4AIAgent;
