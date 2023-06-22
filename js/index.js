const firstplayerInputnumber=[0];
const secplayerInputnumber=[0];
const thredplayerInputnumber=[0];
// 3 input declear
const firstplayerInput=document.querySelector("#firstInput");
const secplayerInput=document.querySelector("#secInput");
const thrInput=document.querySelector("#thrInput");
const tt=document.querySelector("#tt");
// 3 div declear
const firstPLayer=document.querySelector("#firstPLayer");
const secondPLayer=document.querySelector("#secondPLayer");
const ThreePLayer=document.querySelector("#ThreePLayer");
// three btn diclear
document.querySelector("#Firstplaybtn").addEventListener("click",()=>{
    if(firstInput.value==""||firstInput.value==null){
        alert("Pleace enter your inpur number")
     }else{
         let d=firstInput.value;
         if(d.length==1){
             const f=parseInt(firstInput.value)
             firstplayerInputnumber.pop()
             firstplayerInputnumber.push(f)
             firstPLayer.style.display="none";
             tt.style.display="block";
         }else{
             alert("Pleace input number only 0-9")
         }
     }
});
const snumber=[4];const swin=[];const sloss=[];
const Displaytwo=document.querySelector("#Displaytwo")
document.querySelector("#secondplaybtn").addEventListener("click",()=>{
    var num=snumber[0];
    Displaytwo.innerHTML=num;
    if(firstplayerInputnumber[0]==secplayerInput.value){
        swin.push(1);
        alert("You Win Your Guess is Right")
        secondPLayer.style.display="none";
        ThreePLayer.style.display="block";
        windisplay();
        return false;
    }else if(snumber[0]==0){
        sloss.push(1);
        alert("Your 5 Chance is Over Thank You")
        secondPLayer.style.display="none";
        ThreePLayer.style.display="block";
        windisplay();
        return false;
    }else{
        const snum=snumber[0]-1;
        snumber.pop();
        snumber.push(snum);
        secplayerInput.value='';
    } 
});
const tnumber=[4];const twin=[];const tloss=[];
document.querySelector("#thredplaybtn").addEventListener("click",()=>{
    var numm=tnumber[0];
    Displaythree.innerHTML=numm;
    if(firstplayerInputnumber[0]==thrInput.value){
        twin.push(1);
        alert("You Win Your Guess is Right")
        secondPLayer.style.display="block";
        ThreePLayer.style.display="none";
        windisplay();
        return false;
    }else if(tnumber[0]==0){
        tloss.push(1);
        alert("Your 5 Chance is Over Thank You")
        secondPLayer.style.display="block";
        ThreePLayer.style.display="none";
        windisplay();
        return false;
    }else{
        const tnum=tnumber[0]-1;
        tnumber.pop();
        tnumber.push(tnum);
        thrInput.value='';
    }  
});
const winlossPLayer=document.querySelector("#winlossPLayer");
const WinlossResult=document.querySelector("#WinlossResult");
document.querySelector("#playbtn").addEventListener("click",()=>{
    window.location.href='index.html';
});
function windisplay(){
    if(swin[0]==1 && twin[0]==1){
      firstPLayer.style.display="none";
      secondPLayer.style.display="none";
      ThreePLayer.style.display="none";
      winlossPLayer.style.display="block";
      WinlossResult.innerHTML="Win Second Player "+"</br>"+"Win Thred Player ";
    }else if(sloss[0]==1 && tloss[0]==1){
      firstPLayer.style.display="none";
      secondPLayer.style.display="none";
      ThreePLayer.style.display="none";
      winlossPLayer.style.display="block";
      WinlossResult.innerHTML="Loss Second Player "+"</br>"+"Loss Thred Player ";
    }else if(swin[0]==1 && tloss[0]==1){
      firstPLayer.style.display="none";
      secondPLayer.style.display="none";
      ThreePLayer.style.display="none";
      winlossPLayer.style.display="block";
      WinlossResult.innerHTML="Win Second Player "+"</br>"+"Loss Thred Player ";
    }else if(sloss[0]==1 && twin[0]==1){
      firstPLayer.style.display="none";
      secondPLayer.style.display="none";
      ThreePLayer.style.display="none";
      winlossPLayer.style.display="block";
      WinlossResult.innerHTML="Loss Second Player "+"</br>"+"Win Thred Player ";
    }
}
// toss 
document.querySelector("#tttt").addEventListener("click",tttt);
function tttt(){
    let number = Math.floor(Math.random()*6)+1;
    if(number%2==0){
        secondPLayer.style.display="block";
        tt.style.display="none";
    }else{
        ThreePLayer.style.display="block";
        tt.style.display="none";
    }
}

