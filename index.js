//initialize the variables
let songIndex=0;
let audio= new Audio('pasoris.mp3')
let masterPlay=document.getElementById("playicon")
let myProgressBar=document.getElementById("progress_bar")


let song=[
    {songName:"pasori",filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"pasori",filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"pasori",filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"pasori",filePath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"pasori",filePath:"song/1.mp3",coverpath:"covers/1.jpg"}
]

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
    }
    else{
        audio.pause()
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        $("#playicon").css("animation-play-state", "paused")
    }
})

myProgressBar.addEventListener('time',()=>{
    alert("time update")

    //update seek bar
})