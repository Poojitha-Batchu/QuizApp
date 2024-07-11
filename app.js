const questionArray = [
    {
        question : "HTML stands for -",
        answers : ['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','None of these'],
        correctOption: 3
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answers: ['Head, Title, HTML, body', 'HTML, Body, Title, Head', 'HTML, Head, Title, Body', 'HTML, Head, Title, Body'],
        correctOption: 1
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        answers: ['&lt;br&gt;', '&lt;a&gt;', '&lt;pre&gt;', '&lt;b&gt;'],
        correctOption: 1
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: ['variable x = 10;','var x = 10;',' x = 10;','int x = 10;'],
        correctOption : 2
    }, 
    {
        question: "How do you check if a variable is an array in JavaScript?",
        answers: ['isArray(x)', 'x.isArray()', 'x instanceof Array', 'typeof Array '],
        correctOption: 1
    },
    {
        question: "How do you properly comment on a single line in JavaScript?",
        answers: ['# This is a comment.', '// This is a comment.', '/* This is a comment. */', '&lt;!-- This is a comment. &gt;'],
        correctOption: 2
    },
    {
        question: "Where is the correct place to insert JavaScript code in an HTML document?",
        answers: ['Both the &lt;head&gt; section and the &lt;body&gt; section', 'The &lt;head&gt; section', 'The &lt;body&gt; section', 'Anywhere in the HTML file'],
        correctOption: 1
    },
    {
        question: "Which loop is guaranteed to execute the block of code at least once?",
        answers: ['for loop', 'do...while loop','while loop', 'none'],
        correctOption: 2
    },
    {
        question: "What is the purpose of the break statement in a loop?",
        answers: ['It stops the execution of the loop immediately.', 'It skips the current iteration and moves to the next one.', 'It restarts the loop from the beginning.', 'It returns a value from the loop.'],
        correctOption: 1
    },
    {
        question: "Which operator is used to combine two or more strings in JavaScript?",
        answers: ['&&', '||', '+', '-'],
        correctOption: 3
    },
    {
        question: "What is JavaScript?",
        answers: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive', 'None of the mentioned'],
        correctOption: 1
    },
    {
        question: "Which of the following is correct about JavaScript?",
        answers: ['JavaScript is an Object-Based language', 'JavaScript is Assembly-language', 'JavaScript is an Object-Oriented language', 'JavaScript is a High-level language'],
        correctOption: 1
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        answers: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
        correctOption: 4
    },
    {
        question: "In JavaScript, what is a block of statement?",
        answers: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'],
        correctOption: 2
    },
    {
        question: "When interpreter encounters an empty statements, what it will do?",
        answers: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
        correctOption: 4
    },
    {
        question: "The 'function' and 'var' are known as",
        answers: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correctOption: 3
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answers: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
        correctOption: 3
    },
    {
        question: "In JavaScript the x===y statement implies that:",
        answers: ['Both x and y are equal in value, type and reference address as well', 'Both are x and y are equal in value only', 'Both are equal in the value and data type', 'Both are not same at all'],
        correctOption: 3
    },
    {
        question: "Choose the correct snippet from the following to check if the variable a' is not equal the 'NULL':",
        answers: ['if(a!==null)', 'if (a!)', 'if(a!null)', 'if(a!=null)'],
        correctOption: 1
    },
    {
        question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not",
        answers: ['=', '===', '==', '&&'],
        correctOption: 3
    }
]

const questionEle = document.getElementById('question');
const optionsContainer = document.querySelector('.options');    //options div
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const startQuizButton = document.getElementById('startQuizButton');
const proceedButton = document.getElementById('proceedButton');
const viewAnswersButton = document.getElementById('viewAnswersButton');
let exitButton = document.getElementById('exitButton');


const timerEle = document.createElement('p');                       // create <p> element
timerEle.innerHTML = '';                                            // text for <p> element is ''
timerEle.classList.add('timer');                                    // attaching <p> tag to class .timer
const div1 = document.querySelector('.quiz');
div1.insertBefore(timerEle, questionEle);                           // before question, inserting timer in the quiz

let questionNumber = 0;
let maxQuestions = 5;
let score = 0;
let selectedOption = null;
let uniqueQuestions = new Set();                                    // to store unique question numbers
let randomNumber = 0;
let timer;
let userAnswers = new Map();                                        // to store question Number and the user option, <question number : useroption>
let questionStatus = '';
let attemptedQuestions;                                             // to store number of questions attempted
let notattemptedQuestions;                                          // to store number of questions not attempted

// REMINDER: if user doesn't selects any option for a question, map doesn't store its question number 

function startQuiz(){
    // Welcome message
    questionEle.innerHTML = `
        <p><b>Welcome to our Quiz App! Test your knowledge and have fun.</b></p>
        <p>Click on the "Start Quiz" button to begin.</p>`;
    optionsContainer.innerHTML = '';
    startQuizButton.style.display = "block";                        // display start quiz button only
    timerEle.style.display = 'none';
}


nextButton.addEventListener('click', () => {
    clearInterval(timer);                                               // clear the timer 
    if(selectedOption !== null && selectedOption ===  questionArray[randomNumber].correctOption){
        score++;
    }

    if(questionNumber <= maxQuestions){
        showQuestion();
    } 
});

submitButton.addEventListener('click', () => {
    clearInterval(timer);
    if(selectedOption !== null && selectedOption ===  questionArray[randomNumber].correctOption){
        score++;
    }

    showScore();
});

startQuizButton.addEventListener('click', displayInstructions);

proceedButton.addEventListener('click', showQuestion);

viewAnswersButton.addEventListener('click', viewAnswer);

exitButton.addEventListener('click', exitFunction);

function displayInstructions(){
    questionEle.innerHTML = `
        <p><b>Instructions: </b></p><br>
            <ol>
                <li>Each question will be displayed one at a time. Read each question carefully and select your answer.</li>
                <li>Click "Next" to move to the next question. You cannot go back to the previous question once you click the Next button".</li>
                <li>After answering all the questions, click the "Submit" button to finish the quiz.</li>
                <li>Each question have <b>15 seconds time limit</b>, displayed at the top of the screen.</li>
                <li>Each question carries one mark. <b>No negative marking</b> for wrong answers.</li>
                <li>Your score will be calculated based on the number of correct answers. Results will be displayed immediately after you submit the quiz.</li>
            </ol>`;
    optionsContainer.innerHTML = '';
    proceedButton.style.display = "block";                      //display proceed button only
    startQuizButton.style.display = "none";
    timerEle.style.display = 'none';
}


function showQuestion(){
    randomNumber = Math.floor(Math.random() * questionArray.length);                 // generating random number
    if(uniqueQuestions.has(randomNumber)) {                                         //not repeating the same question
        showQuestion();
    } else {
        questionNumber++;
        uniqueQuestions.add(randomNumber);                                          // adding question number to the set
        let currentElement = questionArray[randomNumber];                           // getting question, answers, correctoption for given number
        questionEle.innerHTML = questionNumber + ". " + currentElement.question;
        optionsContainer.innerHTML = " ";

        currentElement.answers.forEach((element, arrayIndex) => {                   // looping through each option in the answers array
            let button = document.createElement('button');                          // creating a button for option
            button.innerHTML = element;                                             // element has the option text. displaying element as button text
            button.classList.add('optionBtn');                                      // attaching class .optionbtn to button

            button.addEventListener('click', () => {                                // if the option buttion is clicked by the user
                selectedOption = arrayIndex +1;                                     // stroring the respective +1(considering 1-based indexing) into the selectedoption
                button.style.backgroundColor = '#F1F1F1';                           // changing the selected option background color
                userAnswers.set(randomNumber, selectedOption);                      // storing question number and selected option into the userAnswers map

                document.querySelectorAll('.optionBtn').forEach(btn => {            
                    if(btn != button){                                              // disabling all the buttons except the selected button
                        btn.disabled = true;
                    }
                });
            });
            optionsContainer.appendChild(button);                                   // appending each button to the options container
        });

        if(questionNumber < maxQuestions){
            nextButton.style.display = 'block';
            proceedButton.style.display = 'none';
        } else {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        }
        displayTimer();                                                            // calling displayTimer function to display timer for each question
        timerEle.style.display = 'block';
    }
}

function displayTimer(){
    let timeLimit = 15;                                                           // setting each question time limit to 15secs
    timerEle.innerHTML = `Time left: ${timeLimit}s`;

    timer = setInterval(() => {                                                  // calling setInterval for every 1sec
        timeLimit--;
        timerEle.innerHTML = `Time left: ${timeLimit}s`;
        if(timeLimit <= 0){                                                      // if timerlimit is less than or equal to zero
            clearInterval(timer);                                                // clear the timer
            if(questionNumber < maxQuestions){                                   // if current quetsion number is less than the max questions  
                showQuestion();                                                  // calling showQuestions function to display next question
            } else {
                showScore();                                                     // else show score to the user
            }
        }
    }, 1000);                                                                    //1000 = 1sec
}

function showScore(){
    attemptedQuestions = userAnswers.size;                                      // no. of questions attempted = size of the userAnswers map
    notattemptedQuestions = uniqueQuestions.size - attemptedQuestions;          // no. of questions not attempted = maxQuestions(or) size of uniqueQuestions set - attempted

    questionEle.innerHTML = `Quiz Finished. Your score is: ${score} out of ${maxQuestions}.
                             <br><br>Attempted: ${attemptedQuestions}
                             <br><br>Not Attempted: ${notattemptedQuestions}`;
    optionsContainer.innerHTML = "";
    submitButton.style.display = 'none';
    timerEle.style.display = 'none';
    viewAnswersButton.style.display = 'block';
}

function viewAnswer(){
    questionEle.innerHTML = '';
    viewAnswersButton.style.display = 'none';
    const quiz = document.querySelector('.app');
    let quesNumber = 0;

    for (let quesId of uniqueQuestions) {                                    // looping through each question in the unique question set, quesId is the value stored in set
        let div1 = document.createElement('div');                            // creating <div> element
        div1.classList.add('quiz');                                          // attaching class .quiz to div1
        let quespara = document.createElement('p');                          // creating <p> element

        let userOptionNumber = userAnswers.get(quesId);                     // getting user selected answer for the particular question from map
        let answer = userOptionNumber ? questionArray[quesId].answers[userOptionNumber - 1] : null;  // if useroption has a value then answer stores option text from answers array else stores null
        let correctAnswer = questionArray[quesId].answers[questionArray[quesId].correctOption - 1];  // getting coorect option value from answer array

        let questionStatus;
        if (userOptionNumber !== undefined) {                               // user option is not null
            if (answer === correctAnswer) {                                 // user option is equal to correct answer
                questionStatus = 'attempted and correct answer';
            } else {
                questionStatus = 'attempted but wrong answer';
            }
        } else {                                                            // if user option is null
            questionStatus = 'not attempted';
        }

        quespara.innerHTML = `**${questionStatus} <br><br>                 
                             ${++quesNumber}. ${questionArray[quesId].question}`;
        div1.append(quespara);                                              // appending question to div1

        let container = document.createElement('div');                      // creating a div to store options button
        container.classList.add('options');
        let options = questionArray[quesId].answers;                        // getting answers array, option contains each option value
        options.forEach((option) => {                                       // loop through each option in answer array
            let btn = document.createElement('button');                     // creating a button
            btn.innerHTML = option;         
            btn.classList.add('optionBtn');
            btn.style.backgroundColor = 'white';
            btn.style.cursor = 'context-menu';
            container.append(btn);                                          // appending each button to containeroptions

            if (option === correctAnswer) {                                 // correct answers shows in green color
                btn.style.border = '2px solid #5FF764';
                btn.style.backgroundColor = '#B9FCD2';
            }

            if (answer !== undefined) {                                     // if answer is not null
                if (option === answer) {                                    // option is equal to answer and otion is equal to correct answer then otion button displays green color
                    if (option === correctAnswer) {
                        btn.style.border = '2px solid #5FF764';
                        btn.style.backgroundColor = '#B9FCD2';
                    } else {
                        btn.style.border = '2px solid red';
                        btn.style.backgroundColor = '#F98082';              // else red color
                    }
                }
            }
        });
        div1.append(container);
        quiz.append(div1);
    }
    exitButton.style.display = 'block';                                     // shows exit button
}

function exitFunction() {
    const exitMessage = document.getElementById('exitMessage');
    exitMessage.innerHTML = `<br>Thank you for using our Quiz App! <br><br>
                               See you again.`;
    document.querySelectorAll('.quiz').forEach(div => div.remove());        // removing every div element(every question and its option) in quiz div
    exitButton.style.display = 'none';
}

startQuiz();



