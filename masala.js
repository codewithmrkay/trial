let value = document.querySelector("h1")
let btn = document.querySelectorAll(".btns")
let count = 0;
btn.forEach((opt)=> {
    opt.addEventListener("click",()=>{
        // console.log(e)
        let ids = opt.getAttribute("id")
       if(ids =="plus"){
        count++;
    value.textContent=count;
    value.style.color="lightgreen"
       }
       else if(ids=="minus"){
        count--;
        value.textContent=count;
        value.style.color="red"
    }
    else{
        count=0;
        value.style.color="white"
        value.textContent=count;
       }
    })
});