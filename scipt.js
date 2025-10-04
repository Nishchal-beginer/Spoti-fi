console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Mi-Amor (Slow-Reverd)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Soulmate-Arijit", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Brown Rang", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Galiyaan - Ek Villain", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ishq-Faheem Bhat", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Zara si -Jannat", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Jhol", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Yeh Rateein Ye Mausam", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tose Naina-Arijit Singh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Jeena-Jeena Badlapur", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Saware-Arijit Singh", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "Manchala-Hasee Toh Fasee", filePath: "songs/12.mp3", coverPath: "covers/2.jpg"},
    {songName: "Fakira-Sanam", filePath: "songs/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "Zehnaseeb", filePath: "songs/14.mp3", coverPath: "covers/4.jpg"},
    {songName: "Moh Moh k Dhagee", filePath: "songs/15.mp3", coverPath: "covers/5.jpg"},
    {songName: "Aja We mahiya-Imran Khaan", filePath: "songs/16.mp3", coverPath: "covers/6.jpg"},
    {songName: "Admiring-KAran Aujla", filePath: "songs/17.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ananya Birla-Circles", filePath: "songs/18.mp3", coverPath: "covers/8.jpg"},
    {songName: "Aye KHuda", filePath: "songs/19.mp3", coverPath: "covers/9.jpg"},
    {songName: "Bikhraa", filePath: "songs/20.mp3", coverPath: "covers/10.jpg"},
    {songName: "We Don't Talk Anymore", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Kafira", filePath: "songs/22.mp3", coverPath: "covers/2.jpg"},
    {songName: "Love me like you do", filePath: "songs/23.mp3", coverPath: "covers/3.jpg"},
    {songName: "Haan Tu Hain", filePath: "songs/24.mp3", coverPath: "covers/3.jpg"},
    {songName: "Haaye Tauba", filePath: "songs/25.mp3", coverPath: "covers/4.jpg"},
    {songName: "Her-Shubh", filePath: "songs/26.mp3", coverPath: "covers/5.jpg"},
    {songName: "Husn-Anubhav Jhain", filePath: "songs/27.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ijazat-Falak Shabir", filePath: "songs/28.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ik Supna - Amber Vishist", filePath: "songs/29.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jaan Nisaar", filePath: "songs/30.mp3", coverPath: "covers/9.jpg"},
    {songName: "Javeda Zindagi", filePath: "songs/31.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kya baat hai- Karan Aujla", filePath: "songs/32.mp3", coverPath: "covers/1.jpg"},
    {songName: "Let me Down Slowly", filePath: "songs/33.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mahiya Tere Vekhan Nu", filePath: "songs/34.mp3", coverPath: "covers/3.jpg"},
    {songName: "Memories-Maroon 5", filePath: "songs/35.mp3", coverPath: "covers/4.jpg"},
    {songName: "Mast Magan", filePath: "songs/36.mp3", coverPath: "covers/5.jpg"},
    {songName: "Nadiyo Paar", filePath: "songs/37.mp3", coverPath: "covers/6.jpg"},
    {songName: "Night changes", filePath: "songs/38.mp3", coverPath: "covers/7.jpg"},
    {songName: "Pachtaoge", filePath: "songs/39.mp3", coverPath: "covers/8.jpg"},
    {songName: "Paris Ka Trip", filePath: "songs/40.mp3", coverPath: "covers/9.jpg"},
    {songName: "Parshawan", filePath: "songs/41.mp3", coverPath: "covers/10.jpg"},
    {songName: "Perfect-Ed Shareen", filePath: "songs/42.mp3", coverPath: "covers/1.jpg"},
    {songName: "Playdate", filePath: "songs/43.mp3", coverPath: "covers/2.jpg"},
    {songName: "Love Is Gone", filePath: "songs/44.mp3", coverPath: "covers/3.jpg"},
    {songName: "Suroor", filePath: "songs/45.mp3", coverPath: "covers/4.jpg"},
    {songName: "Take It Easy", filePath: "songs/46.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tu hi Ah_ The Probhec", filePath: "songs/47.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tu he Hakeekat", filePath: "songs/48.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tu hi meri shab Hai", filePath: "songs/49.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tu Janne Na", filePath: "songs/50.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tum Se hi-jab We Met", filePath: "songs/51.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tune Jo Na Kaha", filePath: "songs/52.mp3", coverPath: "covers/1.jpg"},
    {songName: "Waalian", filePath: "songs/53.mp3", coverPath: "covers/2.jpg"},
    {songName: "Wajah Tum HO", filePath: "songs/54.mp3", coverPath: "covers/3.jpg"},
    {songName: "Wavy", filePath: "songs/55.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tere Hawale", filePath: "songs/56.mp3", coverPath: "covers/5.jpg"},
    {songName: "Winning Speech", filePath: "songs/57.mp3", coverPath: "covers/6.jpg"},
    {songName: "Yaar Bathere", filePath: "songs/58.mp3", coverPath: "covers/7.jpg"},
    {songName: "Zindagi Haseen", filePath: "songs/59.mp3", coverPath: "covers/8.jpg"},
    {songName: "Main Tenu Yaad ", filePath: "songs/60.mp3", coverPath: "covers/9.jpg"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})