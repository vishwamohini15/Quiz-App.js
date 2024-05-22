const quizdata=[
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "Hyperlinks and Text Markup Language",
              "Home Tool Markup Language",
              "Hyper Tool Markup Language"
            ],
            answer:0,
          },
          {
            question: "What is the correct way to create a hyperlink in HTML?",
            options: [
              "<a url='http://example.com'>Example</a>",
              "<a src='http://example.com'>Example</a>",
              "<a href='http://example.com'>Example</a>",
              "<link>http://example.com</link>"
            ],
            answer: 2,
          },
          {
            question: "Which HTML tag is used to define an unordered list?",
            options: [
              "<ol>",
              "<li>",
              "<ul>",
              "<dl>"
            ],
            answer: 2,
          },
          {
            question: "What does the <img> tag do in HTML?",
            options: [
              "Defines a paragraph",
              "Defines an image",
              "Defines a line break",
              "Defines a table"
            ],
            answer: 1,
          },
          {
               question: "What does the <br> tag represent in HTML?",
               options: [
                 "Break line",
                 "Bold text",
                 "Background",
                 "Block"
               ],
               answer:0,
             },
             {
               question: "Which tag is used to define a table row?",
               options: [
                 "<tr>",
                 "<td>",
                 "<table>",
                 "<th>"
               ],
               answer: 0,
             },
          {
            question: "Which attribute is used to specify that an input field must be filled out?",
            options: [
              "required",
              "placeholder",
              "validate",
              "mandatory"
            ],
            answer:0,
          }
        ];
        
     const quiz=document.querySelector("#quiz")
     const scores=document.querySelector(".score")

     const answerEl=document.querySelectorAll(".answer") 
     const questionEl=document.querySelector("#question")
     const option_1=document.querySelector("#option_1")
     const option_2=document.querySelector("#option_2")
     const option_3=document.querySelector("#option_3")
     const option_4=document.querySelector("#option_4")
     const btn=document.querySelector("#submit")

     
     let currentquiz=0;
     let score=0;

function loadquiz(){
const {question, options}=quizdata[currentquiz]
questionEl.innerText=`${currentquiz +1}: ${question}`;
scores.innerText=`score: ${score}: ${quizdata.length}`;

// console.log(question);

options.forEach((curoption,index)=> {
  window [`option_${index+1}`].innerText=curoption
  // `option_${value+1}.innerHTML=options`
});
}

     loadquiz()


const getselectedoption=()=>{
let answerelem=Array.from(answerEl)
return answerelem.findIndex((curelem)=>curelem.checked)

}

const deselectedAnswer=()=>{
return answerEl.forEach((curelm)=>curelm.checked=false)
}


btn.addEventListener("click",()=>{
const selectedoptionindex=getselectedoption()
console.log(selectedoptionindex);

if (selectedoptionindex===quizdata[currentquiz].answer) {
  score=score+1
}

currentquiz++;

if (currentquiz < quizdata.length) {
  deselectedAnswer()
  loadquiz()
}else{
  quiz.innerHTML=`
  <div class="result">
  <h2> your score: ${score}/${quizdata.length} correct Answer </h2>
  <p> ✨Congrutulation on completing the quiz✨ </p>
  <button class="reload-button" onclick="location.reload()">play Again</button>
  </div>
  `
}
})
