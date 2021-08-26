// let jshour=0;let jsminute=0;let jssecond=0; let jsmillisecond=0;
let [jshour,jsminute,jssecond,jsmillisecond]=[0,0,0,0];
let intervalId;
let i=1;

var audio=document.createElement("audio");
audio.setAttribute('src','sound.mp3')
audio.loop=true;
//ise dono support karte hai crome bhi aur internet exploler bhi, jab hai ise js me likhe.

function start_time()
{   
    htmlhour=document.getElementById("hour");
    htmlminute=document.getElementById("minute");
    htmlsecond=document.getElementById("second");
    htmlmillisecond=document.getElementById("millisecond");
    // button0=document.getElementById('btn0');
    button1=document.getElementById('btn1');
    button2=document.getElementById('btn2');

    
    if(i%2!=0)
    {  
        audio.play();
        button1.innerHTML="Stop";
        button1.style.backgroundColor="red"
        button2.style.backgroundColor="blue"
        intervalId=setInterval(start, 5);
        i++;
    }
    else
    {   
        audio.pause();
        btn1.innerHTML="Start";
        btn1.style.backgroundColor="blue"
        btn2.style.backgroundColor="blue"
        clearInterval(intervalId);
        i++;
    }
}
function start()
{   
    jsmillisecond+=5;
    if(jsmillisecond==1000)
    {
        jsmillisecond=0;
        jssecond++;
        if(jssecond==60)
        {
            jssecond=0;
            jsminute++;
            if(jsminute==60)
            {
                jsminute=0;
                jshour++;
            }
        }
    }
    htmlhour.innerHTML=jshour<10?"0"+jshour:jshour;
    htmlminute.innerHTML=jsminute<10?"0"+jsminute:jsminute;
    htmlsecond.innerHTML=jssecond<10?"0"+jssecond:jssecond;
    htmlmillisecond.innerHTML=jsmillisecond<100?"0"+jsmillisecond:jsmillisecond;
}    

function reset_time()
{   
    htmlhour=document.getElementById("hour");
    htmlminute=document.getElementById("minute");
    htmlsecond=document.getElementById("second");
    htmlmillisecond=document.getElementById("millisecond");
    lap_div=document.getElementById('lap');
    button0=document.getElementById('btn0');
    button1=document.getElementById('btn1');
    button2=document.getElementById('btn2');
    clearInterval(intervalId);

    [jshour,jsminute,jssecond,jsmillisecond]=[0,0,0,0];

    htmlhour.innerHTML="00";
    htmlminute.innerHTML="00";
    htmlsecond.innerHTML="00";
    htmlmillisecond.innerHTML="000";

    button2.style.backgroundColor="red" ;
    button1.style.backgroundColor="blue";
    button1.innerHTML="Start";
    
    lap_div.style.display="none";

    if(i%2==0){
        i++;
    } 
    audio.pause();  
}

function lap_time()
{
    lap_div=document.getElementById('lap');
    button0=document.getElementById('btn0');

    list_items=document.getElementById('list_item');
    
    lap_div.style.display="block";

    child_of_ol=document.createElement("li")
    x=list_item.appendChild(child_of_ol)
    //upar x, ol ke andar bane li ko reffer kar raha hai.
    p=x.appendChild(document.createElement("p"))
     //upar p, li ke andar bane paragraph tag ko reffer kar raha hai.
    p.innerHTML=(jshour<10?"0"+jshour:jshour)+(" : ")+(jsminute<10?"0"+jsminute:jsminute)+(" : ")+(jssecond<10?"0"+jssecond:jssecond)+(".")+(jsmillisecond<100?"0"+jsmillisecond:jsmillisecond);
}
