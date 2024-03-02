const timer = document.querySelector(".timer")
const content=document.querySelector(".content")
const endScreen = document.querySelector(".endScreen")
var clock
let time=31;
let score=0;
const wordArr= [
    "apple", "banana", "orange", "grape", "kiwi", "strawberry", "blueberry", "melon", "pineapple", "peach",
    "cat", "dog", "rabbit", "hamster", "guinea pig", "parrot", "goldfish", "turtle", "snake", "frog",
    "car", "bicycle", "motorcycle", "bus", "train", "truck", "boat", "airplane", "helicopter", "rocket",
    "house", "apartment", "mansion", "cabin", "tent", "castle", "igloo", "hut", "lighthouse", "skyscraper",
    
  ]
let sentence="";
function startTime(){
    clock = setInterval(()=>{
    if(time<1){
        handleStop()
    }else{
        time--;
        timer.innerHTML=time;
    }

   },1000) 
}
function genrateRandomSentences(){
    for(i=0;i<100;i++){
        sentence= sentence +wordArr[Math.floor(Math.random()*(39+1))]+" "
            
    }
    content.innerHTML=sentence;
}

var index=0;
function checkLetter(e){
    if (sentence[index]==" "){
        score++
        
    }
    if (e.key==sentence[index]){
        
        return true
    }else{
        
        return false
    }
    
}
function updateContent(e){
    console.log("eventListener still live")
    if (checkLetter(e)){
        sentence=sentence.substring(0,index)+"<span class='correct'>"+sentence.substring(index,index+1)+"</span>"+sentence.substring(index+1)
        
        content.innerHTML=sentence;
        console.log("yes")
        
        index+=30
        
        
    }else{
        sentence=sentence.substring(0,index)+"<span class='wrong'>"+sentence.substring(index,index+1)+"</span>"+sentence.substring(index+1)
        content.innerHTML=sentence;
        console.log("no")
        index+=28
        
    }
}
function handleStart(){
    timer.style.display="";
    content.style.display="";
    endScreen.style.display='none';    
    genrateRandomSentences()
    timer.style.display=""
    document.addEventListener("keypress",startTime,{once:true})

    document.addEventListener("keypress",updateContent)

}

function handleStop(){
    timer.style.display="none";
    content.style.display="none"; 
    const speed= score/(30/60);
    score=0;
    endScreen.innerHTML=`Your speed was ${speed}wpm<br>.press any key to restart`
    endScreen.style.display='block';
  
 
    sentence="";
    clearInterval(clock)
    time =30;
    index =0;
    timer.innerHTML=time;
    
    document.removeEventListener("keypress",updateContent)
    setTimeout(()=>{
        document.addEventListener("keypress",handleStart,{once:true})   
    },1000)
    


 
}


handleStart()





// count number of words - done
// make function for starting and ending
// stop after 60 sec
// show end screnn with typing speed words per minute 