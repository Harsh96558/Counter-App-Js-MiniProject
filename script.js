const Count=document.querySelector('#counter')

function increment(){
    let value=parseInt(Count.innerText);
    value=value+1;
    Count.innerText=value
}


function decrement(){
    let value=parseInt(Count.innerText);
    value=value-1;
    Count.innerText=value
}


// const increment=()=>{
//     let value=parseInt(Count.innerText);
//     value=value+1;
//     Count.innerText=value
// }


// const decrement=()=>{
//     let value=parseInt(Count.innerText);
//     value=value-1;
//     Count.innerText=value
// }