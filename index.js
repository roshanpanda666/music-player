//initialize the variables
let songIndex=0;
let audio= new Audio('songs/1.mp3')
let masterPlay=document.getElementById("playicon")
let myProgressBar=document.getElementById("progress_bar")
let gif=document.getElementById("songanime")
let songitem=Array.from(document.getElementsByClassName('songitem'))
let song=[
    {songName:"unstopablei",filePath:"song/1.mp3",coverpath:"covers/1.jpeg"},
    {songName:"industry bby",filePath:"song/2.mp3",coverpath:"covers/2.jpeg"},
    {songName:"heat waves",filePath:"song/3.mp3",coverpath:"covers/3.jpeg"},
    {songName:"pasori",filePath:"song/4.mp3",coverpath:"covers/4.jpeg"},
    {songName:"test",filePath:"song/5.mp3",coverpath:"covers/5.jpeg"},
]


songitem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=song[i].coverpath
    element.getElementsByClassName("songname")[0].innerText=song[i].songName
})
// audio.play()

//listen to event

//handel play pause
masterPlay.addEventListener('click',()=>
{
    if(audio.paused || audio.currentTime<=0){
        
        
        $("#playicon").css("animation-play-state", "running")
        audio.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.display="block"
    }
    else{
        audio.pause()
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        $("#playicon").css("animation-play-state", "paused")
        gif.style.display="none"
    }
})

audio.addEventListener('timeupdate',()=>{
    // alert("time update")

    //update seek bar
    progress=parseInt((audio.currentTime/audio.duration)*100)
    myProgressBar.value=progress
})

myProgressBar.addEventListener('change',()=>{
    audio.currentTime=myProgressBar.value*audio.duration/100
})


document.getElementById("1stsong").addEventListener('click',()=>{
    let audio2= new Audio('songs/2.mp3')
    // audio2.play()
    // if(audio.paused || audio.currentTime<=0){
        
        
    //     $("#playicon").css("animation-play-state", "running")
    //     audio2.play()
    //     masterPlay.classList.remove('fa-play-circle')
    //     masterPlay.classList.add('fa-pause-circle')
    //     gif.style.display="block"
    // }
    // else{
    //     audio2.pause()
    //     masterPlay.classList.add('fa-play-circle')
    //     masterPlay.classList.remove('fa-pause-circle')
    //     $("#playicon").css("animation-play-state", "paused")
    //     gif.style.display="none"
    // }
})