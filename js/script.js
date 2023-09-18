const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
  reset();
  const difficulty = (document.querySelector("#difficulty").value).toLowerCase();
  const rowCol = rowColBox(difficulty);
  console.log(rowCol);
  startBox(difficulty);
  
  

});




// Function

function reset(){
  container.innerHTML = "";
}

function rowColBox(value){
  switch (value){
    case "hard":
      return 10;
    case "normal":
      return 9;
    case "easy":
      return 7;
    default:
      return "ERRORE"
  }
}

function startBox(difficulty){
  let counter = 1;
  const nRowCol = rowColBox(difficulty);
  const widthBox = 100 / nRowCol;

  for(let i = 1; i <= nRowCol; i++){
    for(let i = 1; i <= nRowCol; i++){
      const box = createBox(widthBox);
      
      // box.addEventListener("click",function(){
      //   this.classList.toggle("click")
      //   console.log(this.innerText);
      // });
      container.append(box);
      counter++;
    }
  }

  // const boxs = document.getElementsByClassName("square");



}

function createBox(widthBox){
  const newBox = document.createElement('div');
  newBox.className = "square";
  newBox.style.width = widthBox + "%";
  return newBox;
  
}
