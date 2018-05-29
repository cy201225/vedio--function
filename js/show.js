window.onload=function(){

	
    // 获取元素
    var playBtn=document.querySelector(".play-btn");
    var video=document.querySelector("video");
    var total=document.querySelector(".total");
    var current=document.querySelector(".current");
    var progressBar=document.querySelector(".progress-bar");
    var progress=document.querySelector(".progress");
    var fullpage=document.querySelector(".fullpage");
    
    //绑定事件
    playBtn.onclick=function(){
        //判断是不是播放状态  paused 暂停状态
        if(video.paused){//如果暂停状态就会进到这里
            video.play();
            if(!video.webkitFullScreenElement){
                var content=document.getElementsByClassName("fullpage")[0]
                for(var i=0;i<content.classList.length;i++){
                    if(content.classList[i].className=="fa-compress"){
                        return false
                    }else {
                        if(i==content.classList.length-1){
                            content.classList.add("fa-compress")
                        }
                    }
                }
                video.webkitRequestFullscreen();
            }
            this.classList.toggle("fa-pause-circle");
        }else{
            video.pause();
            this.classList.toggle("fa-pause-circle");
            
        }
    }
    
    
    //获取视频总时间
    video.oncanplay=function(){
        var long=this.duration;
        var min=Math.floor(long/60);         
        var s=Math.floor(long%60);  
        // h=h>9?h:'0'+h;
        min=min<10?'0'+min:min;
        s=s<10?'0'+s:s;
        total.innerHTML=min+":"+s;
    
    }
    
    
    
    //获取当前执行中的时间
    video.ontimeupdate=function(){
        var currentTime=video.currentTime;
        var min=Math.floor(currentTime/60);
        var s=Math.floor(currentTime%60);
       min= min<10?'0'+min:min;
       s= s<10?'0'+s:s;
    
        current.innerHTML=min+':'+s;
        progressBar.style.width=currentTime/video.duration*100+'%';
    
    }
    
    progress.onclick=function(event){
        var x=event.offsetX;
        var pWidth=progress.offsetWidth;
        video.currentTime=x/pWidth*video.duration;
    
        if(video.paused){
            video.play();
            playBtn.classList.toggle("fa-pause-circle");
        }
    }
    
    
    fullpage.onclick=function(){
        // 之前不是全屏时
        if(!video.webkitFullScreenElement){
            video.webkitRequestFullscreen();
            for(var i=0;i<this.classList.length;i++){
                if(this.classList[i]=="fa-compress"){
                    return false
                }else {
                    if(i==this.classList.length-1){
                        this.classList.add("fa-compress")
                    }
                }
            }
        }
        
    }
    video.onclick=function(){ 
        if(!video.webkitFullScreenElement){
            video.webkitExitFullScreen();
            var content=document.getElementsByClassName("fullpage")[0]
	            for(var i=0;i<content.classList.length;i++){
	                if(content.classList[i]=="fa-compress"){
	                    content.classList.remove("fa-compress")
	                }
	            }
	        }
        }
        
    }