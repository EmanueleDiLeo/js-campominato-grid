const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
  reset();
  const difficulty = (document.querySelector("#difficulty").value).toLowerCase();
  const rowCol = rowColBox(difficulty);
  console.log(rowCol);

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