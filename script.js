const timer = document.querySelector(".timer")
const content=document.querySelector(".content")

let time=0;
let score=0;
const wordArr= [
    "apple", "banana", "orange", "grape", "kiwi", "strawberry", "blueberry", "melon", "pineapple", "peach",
    "cat", "dog", "rabbit", "hamster", "guinea pig", "parrot", "goldfish", "turtle", "snake", "frog",
    "car", "bicycle", "motorcycle", "bus", "train", "truck", "boat", "airplane", "helicopter", "rocket",
    "house", "apartment", "mansion", "cabin", "tent", "castle", "igloo", "hut", "lighthouse", "skyscraper",
    
  ]
let sentence="";
function startTime(){
   setInterval(()=>{
    time+=1;
    timer.innerHTML=time;
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
    
    if (e.key==sentence[index]){
        
        return true
    }else{
        
        return false
    }
    
}
genrateRandomSentences()


document.addEventListener("keypress",()=>{
    startTime()
},{once:true})

document.addEventListener("keypress",(e)=>{
    
    if (checkLetter(e)){
        sentence=sentence.substring(0,index)+"<span class='correct'>"+sentence.substring(index,index+1)+"</span>"+sentence.substring(index+1)
        console.log(index)
        console.log(index+1)
        content.innerHTML=sentence;
        console.log(sentence)
        index+=30
        score++
        
    }else{
        sentence=sentence.substring(0,index)+"<span class='wrong'>"+sentence.substring(index,index+1)+"</span>"+sentence.substring(index+1)
        content.innerHTML=sentence;
        console.log(index)
        index+=28
    }
    // change css of single letter using .substring
    // Update content.innerHTML and sentence based on check letter
})

// function changeLetterCss(){
//     sentence=sentence.substring(0,1)+"<span class=correct>"+sentence.substring(1,2)+"</span>"+sentence.substring(2)
//     content.innerHTML=sentence
// }
// changeLetterCss()
// handleStart - which starts time,generate the content and a loop 
// updateContent - update content based on input and end and start
// checkLetter - check if the input letter is correct and change the color of the letter accordingly
// random content generator - we can set preset sentences and choose a random one form it or generate random words from a database to form a sentence
 