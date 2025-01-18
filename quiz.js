function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Retrieve the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer is selected
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
if (submitButton) {
    submitButton.addEventListener("click", checkAnswer);
} else {
    console.error("Submit button not found.");
}
