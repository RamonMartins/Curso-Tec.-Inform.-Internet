function acionar(){

    if (document.getElementById("luz").src.includes("pic_bulbon.gif")){
        document.getElementById("luz").src = "pic_bulboff.gif"
    }else{
        document.getElementById("luz").src = "pic_bulbon.gif"
    }
    
    
}