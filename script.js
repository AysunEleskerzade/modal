const item=document.querySelector(".item")
const item1=document.querySelector(".item1")
const item2=document.querySelector(".item2")
const button=document.querySelector(".button")
const body=document.querySelector("body")

item.addEventListener("click", function(){
    item1.style.display="block"
    // body.style.backgroundColor="aqua"

})
item2.addEventListener("click", function(){
    item1.style.display="none"
    body.style.backgroundColor=" "
})
button.addEventListener("click", function(){
    item1.style.display="none"
    body.style.backgroundColor=" "
})