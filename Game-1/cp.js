let len=(Math.floor(Math.random()*100) % 20) + 3;
    
    function predict(){
        let box=document.getElementById('name');
        //let len=box.value.length;
        len=(Math.floor(Math.random()*100) % 20) + 3;
        
        let pre=document.getElementById('ans');
        let btn=document.getElementById('button');
        let name=document.getElementById('title');

        if(box.value.length>=3){
            name.innerHTML=box.value;
        }

        if(box.value.length<3){
            alert("Name must be more than three letters.");
        }
        else if(len>=3 && len<7){
            btn.style.boxShadow="none";
            pre.innerHTML="You find it hard to show and express feelings with words and action. Some of your aspiration can tend to be pretty unrealistic.";
            
        }
        else if(len>=7 && len<11){
            btn.style.boxShadow="none";           
            pre.innerHTML="You are stubborn and you are passionate about life. You are ccasionally daring or impulsive. And you sometimes do thing without thinking ahead.";
        }
        else if(len>=11 && len<15){
            btn.style.boxShadow="none";
            pre.innerHTML="You are at times extroverted, affable, sociable while at the other times introvert, wary and reserved. You like to be challenged by things.";       
        }
        else if(len>=15){
            btn.style.boxShadow="none";
            pre.innerHTML="You know what you want and you're passionate about life.Imaginative and inventive. You have an active mind. And you're constantly in search of something which you are not sure if you'll ever get.";
        }
    }

    function clr(){
        //let btn=document.getElementById('button');
        //let box=document.getElementById('name');
        //let name=document.getElementById('title');
        //let pre=document.getElementById('ans');

        //box.value="";
        //btn.style.boxShadow="0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
        //pre.innerHTML="";
        //name.innerHTML="";

        location.reload();
    }