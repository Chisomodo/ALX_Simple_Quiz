// Define the function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";

    // Get the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Change feedback color to green
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Change feedback color to red
        }
    } else {
        // If no answer was selected
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange"; // Optional: Change feedback color to orange
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
