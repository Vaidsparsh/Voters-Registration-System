function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value;

    alert(`Thank you for your feedback, ${name}!\n\nYour Rating: ${rating}\nYour Feedback: ${feedback}`);

    document.getElementById("feedbackForm").reset();
}