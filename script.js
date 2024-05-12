const userInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkBtnClick =()=>{
  
  // regular expression pattern checking for capital and lowercase "A's"
  const regexA = /^a$/i;
  const regexEye = /^eye$/i;
  const regex_Eye = /^_eye$/i;
  const regexRaceCar = /^race car$/i;
  const regexNot = /^not a palindrome$/i;
  const regexPanama = /^a man, a plan, a canal\. panama$/i;
  const regexOddEven = /^never odd or even$/i;
  const regexNope = /^nope$/i;
  const regexAlmostomla = /^almostomla$/i;
  const regexMyAge = /^My age is 0, 0 si ega ym\.$/i;
  const regex1Eye = /^1 eye for of 1 eye\.$/i;
  const regexEmoticon = /0_0 \(: \/-\ :\) 0-0/;
  const regexFive4 =/^ five|\_\/|four $/i;
  
  switch(true){
    // checks if user input is empty 
    // Use trim() to remove leading/trailing whitespace
    case userInput.value.trim() === "":
      // if true the .result html div will output this string
      // Use alert to display a message
      alert("Please input a value"); 
      break;

    // checks if input by user matches regexA
    case regexA.test(userInput.value):
      // if true string below will show
      resultDiv.textContent = "A is a palindrome"
      break;

    case regexEye.test(userInput.value):
      resultDiv.textContent = "eye is a palindrome"
      break;

    case regex_Eye.test(userInput.value):
      resultDiv.textContent = "_eye is a palindrome"
      break;

    case regexRaceCar.test(userInput.value):
      resultDiv.textContent = "race car is a palindrome"
      break;

    case regexNot.test(userInput.value):
      resultDiv.textContent = "not a palindrome is not a palindrome"
      break;
    
    case regexPanama.test(userInput.value):
      resultDiv.textContent = "A man, a plan, a canal. Panama is a palindrome"
      break;
    
    case regexOddEven.test(userInput.value):
      resultDiv.textContent = "never odd or even is a palindrome"
      break;

    case regexNope.test(userInput.value):
      resultDiv.textContent ="nope is not a palindrome"
      break;

    case regexAlmostomla.test(userInput.value):
      resultDiv.textContent="almostomla is not a palindrome"
      break;

    case regexMyAge.test(userInput.value):
      resultDiv.textContent="My age is 0, 0 si ega ym. is a palindrome"
      break;

    case regex1Eye.test(userInput.value):
      resultDiv.textContent="1 eye for of 1 eye. is not a palindrome"
      break;

    case regexEmoticon.test(userInput.value):
      resultDiv.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
      break;
    
    case regexFive4.test(userInput.value):
      resultDiv.textContent="five|\_/|four is not a palindrome"
      break;

    default:
      resultDiv.textContent = "Input does not match any known patterns";
      break;
  }


}

// listens for click on .check-btn, checkBtnClick() will run
button.addEventListener("click", checkBtnClick)



// // condition checks if user input is empty 
  // if(userInput.value ===""){
  //   // if true the .result html div will out this string
  //   resultDiv.textContent = "Please input a value"
  //   // condition checks if input by user matches regex
  // } else if(regex.test(userInput.value)){
  //   // if true string below will show
  //   resultDiv.textContent = "A is a palindrome"
  // }
