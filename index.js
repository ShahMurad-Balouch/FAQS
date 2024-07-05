const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];
  
  
let mainContainer = document.getElementById("main-container");


    let HideAns = () => {

      let sign = mainContainer.querySelectorAll(".sign");
      let ansp = mainContainer.querySelectorAll(".ans");
      let border = mainContainer.querySelectorAll(".display-container");
      for(let i=0; i<ansp.length; i++){
        sign[i].textContent="+";
        ansp[i].classList.add("hide");
        border[i].classList.remove("style")
      }
    }



// creating the element name Questions Container:
faqs.map((element,index)=> {

  // display container
  let displayContainer = document.createElement("div");
  displayContainer.className = "display-container";
  displayContainer.id = "display-container";

  // display numbers
let creatingnumber = document.createElement("span");
creatingnumber.className="creatingnumber";
creatingnumber.textContent=`0${index+1}`  

displayContainer.appendChild(creatingnumber);
  
  // Creating question container
  let questionContainer = document.createElement("span");
    questionContainer.className = "question-container";
    questionContainer.textContent=  element.title;
    questionContainer.id=`element${index}`
    displayContainer.appendChild(questionContainer);
    
    // creating sign 
    var creatingSigns=document.createElement("span");
    creatingSigns.className = "sign";
    creatingSigns.textContent="+";
    displayContainer.appendChild(creatingSigns);
    
    // Creating answer container
    var answerContainer = document.createElement("p");
    answerContainer.classList.add('hide');
    answerContainer.classList.add("ans");
    answerContainer.textContent=element.text;
    displayContainer.appendChild(answerContainer)
    
    // displayContainer.onclick = clickOnQuestion;
    mainContainer.appendChild(displayContainer)
    


    // evenet listerner
    displayContainer.addEventListener("click", ()=>{
   
   if(answerContainer.classList.contains('hide')){
    HideAns();
    answerContainer.classList.remove('hide');
    creatingSigns.textContent="-";
    displayContainer.classList.add('style')
    
  }else{
    answerContainer.classList.add('hide');
    creatingSigns.textContent="+";
    displayContainer.classList.remove('style')
   }
    })


  

  });
  






//   var question = document.querySelectorAll(".display-container");

//   question.forEach(element => {
//     var creatingSigns = element.querySelector(".sign");
//     var creatingNumbers =element.querySelector(".creatingnumber");
//     var anspara = element.querySelector("p");
//     creatingSigns.textContent = "+";
//     creatingNumbers.style.color = "black"
//     element.addEventListener("click", function() {
//       if (anspara.style.display === 'block' ) {
//         anspara.style.display = 'none';
//         creatingSigns.textContent = "+";
//         creatingNumbers.style.color ="black";
//         element.style.borderTop = "none"
//       } else {
//         // question.forEach(ele => {
//         //   let creatingSign = ele.querySelector(".sign");
//         //   let creatingNumber = ele.querySelector(".creatingnumber")
//         //   var questions = document.querySelectorAll(".display-container");
//         //   var p = ele.querySelector("p");
//         //   p.style.display = "none";
//         //   creatingSign.textContent = "+";
//         //   creatingNumber.style.color ="black";
//         //   ele.style.borderTop = "none"
//         // });
//         anspara.style.display = 'block';
//         creatingSigns.textContent = "-";
//         creatingNumbers.style.color ="green";
//         element.style.borderTop = "4px solid green";
//       }
//     });

  



// });




  