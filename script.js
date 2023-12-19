let array=[];
    let i;
    let val;

    let selector=document.querySelector(".output");
   
    function myFunction(){
    const tasks=document.querySelector(".forms").value;
    let selector=document.querySelector(".calen").value;
    array.push({
        tasks,
        selector
    });
    console.log(array);
    printdata();
}
function printdata()
{   
    let html="";
    for(i=0;i<array.length;i++){
        html+=`<div>${array[i].tasks}</div><div>${array[i].selector} </div> <button onclick="array.splice(${i},1);
            printdata();">Delete</button>`;
    }
    console.log(html)
    selector.innerHTML=html;
}