(function() {

    const messages = ['Greeting', 'Hello', 'Nice to see you'];
    function getMessage() {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    };
    const title = document.querySelector('.greeting');
    title.innerHTML = getMessage();
    
}) ();