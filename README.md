# QuizApp

The Quiz Application is a web-based platform designed to test the user's knowledge through a series of questions presented one at a time. The app includes functionalities for starting the quiz, displaying instructions, navigating through questions, submitting the quiz, viewing answers, and exiting the application. Each question comes with a set time limit to enhance the challenge.

## Functionalities

### 1. Quiz Initialization: 

	The application starts with a welcome screen displaying a introduction to the quiz.
	The "Start Quiz" button initiates the quiz, transitioning the user to the instructions screen.

### 2. Instructions Display:

	Before the quiz begins, users are presented with a set of instructions detailing how to proceed through the quiz, the scoring mechanism, and other relevant information.
	The "Proceed" button takes the user to the first question of the quiz after they have read the instructions.

### 3. Question Display and Navigation:

	Each question is displayed one at a time along with multiple-choice answers.
	A timer is visible at the top of the screen, counting down from 15 seconds for each question.
	The "Next" button allows users to move to the next question if they have selected an answer or if the time has run out.
	The "Submit" button appears once the user reaches the final question, allowing them to submit their answers and view their score.

### 4. Answer Selection:

	Users select their answer by clicking on one of the provided options.
	Once an option is selected, it changes color to indicate selection and all other options are disabled to prevent changes.
	If the user does not select any option within the given time, the quiz moves to the next question.

### 5. Timer Functionality:

	A 15-second timer is implemented for each question.
	The timer resets at the start of each new question.
	If the timer runs out before the user selects an answer, the application automatically moves to the next question.

### 6. Scoring and Submission:

	Users receive one point for each correct answer.
	Upon submission, the total score is displayed along with the number of correct answers out of the total questions.
	If the quiz is completed before answering all questions, the remaining questions are considered not attempted and do not count towards the score.

### 7. View Answers:

	After submitting the quiz, users have the option to view their answers by clicking the "View Answers" button.
	The correct answers are highlighted in green, incorrect answers selected by the user are highlighted in red, and the question status is displayed (attempted and correct, attempted but wrong, or not attempted).

### 8. Exit Functionality: 

	An "Exit" button is available after viewing the answers.
	Clicking the exit button clears the screen and displays a thank you message, indicating the end of the quiz session.
