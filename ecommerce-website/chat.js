const contactEmail = "support@owlbanapparel.com"; // Contact email

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    if (userInput) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        chatMessages.appendChild(userMessage);

        // Clear input field
        document.getElementById('user-input').value = '';

        // Simulate AI response
        const aiResponse = document.createElement('div');
        aiResponse.className = 'message ai-message';
        aiResponse.textContent = "Thank you for your message! How can I assist you further?";
        chatMessages.appendChild(aiResponse);
    }
}
