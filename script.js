const input =document.querySelector(".input")
const button =document.querySelector("#btn")
const addElement = document.querySelector("#list")
let addedItems=[]

button.addEventListener("click",()=>{

    if(input.value === ""){
        alert("Add Your Items First")
    }else if(addedItems.includes(input.value)){
        alert("This item is already in the list");
    }
    else{
        let li=document.createElement("li")
        addElement.appendChild(li)
        let h3=document.createElement("h3")
        h3.innerHTML=input.value
        li.appendChild(h3)
        let span =document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        addedItems.push(input.value)
        console.log(addedItems)

    }
    input.value="";
    saveData()
})

addElement.addEventListener("click",(e)=>{
    if(e.target.tagName==="H3"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData()
        addedItems.pop(input.value)
        console.log(addedItems)
    }
},false)

console.log(addedItems)

function saveData(){
    localStorage.setItem("data", addElement.innerHTML )
}

function showTask(){
    addElement.innerHTML=localStorage.getItem("data")
}
showTask()