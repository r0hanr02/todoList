const input =document.querySelector(".input")
const button =document.querySelector("#btn")
const addElement = document.querySelector("#list")

button.addEventListener("click",()=>{
    
    if(input.value === ""){
        alert("Add Your Items Here")
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
    }
},false)

console.log(input.value)

function saveData(){
    localStorage.setItem("data", addElement.innerHTML )
}

function showTask(){
    addElement.innerHTML=localStorage.getItem("data")
}
showTask()