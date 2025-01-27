document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    const formData = new FormData(this);

    fetch('sendMail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        showToast(data.message); // Show the message from the server response
    })
    .catch(error => {
        showToast('Error sending message. Please try again later.');
        console.error('Error:', error);
    });
});

// Function to show the toast and optionally reload the page
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.className = 'show';
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
        //location.reload(); // Optional: Refresh the page after the toast disappears
    }, 3000); // Display toast for 3 seconds
}
