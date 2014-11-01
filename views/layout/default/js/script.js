//FUNCIONES PARA TODA LA APLICACION
    function rand (min, max) {
      	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function _(id){
        return document.getElementById(id);
    }



//FUNCION PARA CUANDO SE CARGA Y REDIMENSIONA LA APLICACION
    window.onload=function(){
    	load();
    }
    
    window.onresize=function(){
    	//load();
    }
    
    
    function clickMovile()
    {
        tiempo = 2;
        
        tiempo1 = Date.now();
        if(tiempoNow != 0){
            tiempoTotal += tiempo1 - tiempoNow;
        }
        else{
            _('btn_centro').style.display = "none";
            _('textFeel').style.display = "block";
            
        }
        
        teclas[teclas.length] = 1;
        teclas[teclas.length] = 1;
        teclas[teclas.length] = 1;
        
        switch(teclas.length){
            case 3: _('load1').style.display = 'block'; break;
            case 9: _('load2').style.display = 'block'; break;
            case 12: _('load3').style.display = 'block'; break;
            case 18: _('load4').style.display = 'block'; break;
            case 21: _('load5').style.display = 'block'; break;
            case 24: _('load6').style.display = 'block'; break;
            case 27: _('load7').style.display = 'block'; break;
            case 30: _('load8').style.display = 'block'; break;
            case 33: _('load9').style.display = 'block'; break;
        }
        if(!tiempoDown)
            setTimeout("contador()", 1000);
        
        tiempoDown = true;
        tiempoNow = Date.now();
    }
    
    
    
    
    tiempoDown = false;
    tiempo = 3;
    
    function contador()
    {
        tiempo--;
        
        if(tiempo == 0){
            if(tiempoTotal > 1)
                _('speed').value = (6000*teclas.length)/tiempoTotal
            else
                _('speed').value = 1;
                
            _('enviarSentimiento').submit();
        }
            
        setTimeout("contador()", 1000);
    }
    
    var teclas = Array();
    var tiempoNow = 0;
    var tiempoTotal = 0;
    
    
    window.addEventListener("touchstart", function(ev){
        ev.preventDefault();
    }, false);
    
    
    window.onkeydown=function(e){
        
        
        tiempo1 = Date.now();
        
        if(tiempoNow != 0){
            tiempoTotal += tiempo1 - tiempoNow;
        }
        else{
            _('btn_centro').style.display = "none";
            _('textFeel').style.display = "block";
        }
        
        teclas[teclas.length] = event.keyCode
    	tiempo = 2;
        
        if(!tiempoDown)
            setTimeout("contador()", 1000);
        
        switch(teclas.length){
            case 1: _('load1').style.display = 'block'; break;
            case 7: _('load2').style.display = 'block'; break;
            case 10: _('load3').style.display = 'block'; break;
            case 12: _('load4').style.display = 'block'; break;
            case 15: _('load5').style.display = 'block'; break;
            case 17: _('load6').style.display = 'block'; break;
            case 20: _('load7').style.display = 'block'; break;
            case 23: _('load8').style.display = 'block'; break;
            case 24: _('load9').style.display = 'block'; break;
        }
        
        tiempoDown = true;
        tiempoNow = Date.now();
    }


//VARIABLES DE LA APLICACION
    var w, h;


//FUNCTION PARA RESIZE
    function resize(){
    	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        
        _('marcoSup').style.width = w +"px";
        _('marcoSup').style.height = h +"px";
    }
    
//FUNCION INICIAL Y DE RECARGA DE LA APLICACION
    function load(){
    	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        try{
            _('btn_Sentimiento').style.height = (h-160) +"px";
            _('btn_centro').style.marginTop = ((h-160)/2)-100 +"px";
            _('btn_centro').style.display = "block";
            
            topLoad = 150;
            for(i=1;i<=9;i++){
                 _('load'+ i).style.marginTop = topLoad +"px";
                 topLoad-12.5;
            }
            
            _('marcoSup').style.width = w +"px";
            _('marcoSup').style.height = h +"px";
        }
        catch(e){
            
        }
        
        
        try{
            _('flecha_der').style.marginTop = ((h-160)/2)-70 +"px";
        }
        catch(e){
            
        }
    }
    
    
    sonido = new Audio();
    function loadSound(url)
    {
        sonido.src = url;
        sonido.addEventListener("canplaythrough", function(){
            //alert("eeee");
            sonido.play();
            
        });
        
        stadoTema = true;
        setTimeout("reproduciendo()", 1000);
    }
    
    
    var stadoTema = false;
    var dirImg = "http://localhost/bime2k14/views/layout/default/img/";
    function pauseTeme()
    {
        
        if(stadoTema){
            sonido.pause();
            _('btnRepro').src = dirImg + "play.png";
            stadoTema = false;
        }
        else{
            sonido.play();
            _('btnRepro').src = dirImg + "pause.png";
            stadoTema = true;
        }
    }
    
    function reproduciendo()
    {
        wTamanio = ((w-20)*sonido.currentTime)/sonido.duration;
        

        if(sonido.currentTime == sonido.duration){
            _('enviarSentimiento').submit();
        }
        
        _('estado').style.width = wTamanio +"px";
        setTimeout("reproduciendo()", 100);
        //alert(sonido.currentTime)
    }