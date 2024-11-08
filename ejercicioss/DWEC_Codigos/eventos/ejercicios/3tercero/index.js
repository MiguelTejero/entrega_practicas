const table = document.getElementsByTagName("td");

for(let celda of table){
    celda.addEventListener("mouseover",(event)=> {
        if (event.ctrlKey){
            event.target.style.backgroundColor = "red";
        } else if (event.shiftKey){
            event.target.style.backgroundColor = "blue";
        }
    })
    }

    






/*
function colorCell(event)
    if (event.ctrlKey){
        event.target.style.backgroundColor = "red";
    } else if (event.shiftKey){
        event.target.style.backgroundColor = "blue";
    }
}
*/