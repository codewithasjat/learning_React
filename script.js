const input1 = document.querySelector(".question")
const input2 = document.querySelector(".answer1")
const input3 = document.querySelector(".answer2")
const submit = document.querySelector(".btn")
const ol = document.querySelector("ol")
 input1.addEventListener("input",(e)=>{
console.log(e);
 })
submit.addEventListener("click",(e)=>{
   console.log(e);
   e.preventDefault()
   ol.innerText = e.target.value
   
})