import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/feedback', { feedback });
            setFeedback('');
            alert('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('There was an error submitting your feedback. Please try again.');
        } // Closing brace for the try-catch block

    }; // Closing brace for the handleSubmit function

    return (
        <form onSubmit={handleSubmit}>
            <h2>Feedback Form</h2>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here"
                required
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
