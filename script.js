const slideList = [];
for(let i=0;i<=5;i++){
    slideList.push(document.getElementById(`callbacks1_s${i}`));
}

let curr=0;

setInterval(()=>{
    slideList[curr].style.opacity="0";
    curr++;
    curr%=slideList.length;
    slideList[curr].style.opacity="1";
},5*1000)

