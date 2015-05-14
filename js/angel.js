
var cien = "100";
var cientocincuenta = "150";

var textArray = new Array("TE PROTEGE DESDE EL CIELO","SISTEMAS DE GEOLOCALIZACIÓN","GPS EN TU AUTO", "PROTECCIÓN EN CUALQUIER LUGAR","LOCALIZA TU FLOTILLA");


function changeOp(){
    
    $( "#marker1" ).fadeTo( "slow" , 0.1, function() {
        $( "#marker1" ).fadeTo( "slow" , 1, function() {  
        }); 
    });
       
}

function move(){
    
    $( "#marker3" ).animate({ "left": "+=" +cien +"px", "top": "-=" +cien +"px" }, 12000 );
    $( "#marker3" ).animate({ "left": "-=" +cien + "px", "top": "+="+ cien +"px"  }, 12000 );

    $( "#marker4" ).animate({ "left": "+=" + cientocincuenta + "px", "top": "+= "+ cien +"px" }, 15000 );
    $( "#marker4" ).animate({ "left": "-=" + cientocincuenta + "px", "top": "-=" + cien + "px"  }, 15000 );

    $( "#marker2" ).animate({ "left": "+=" + cien + "px"}, 10000 );
    $( "#marker2" ).animate({ "left": "-=" + cien + "px"  }, 10000 );
    
}

window.addEventListener('resize', function(event){
  

    var w = window.getWidth();

    if (w <= 768) {
        cien = "0";
        cientocincuenta = "0";
        document.getElementById("marker1").style.visibility= "hidden";
        document.getElementById("marker2").style.visibility= "hidden";
        document.getElementById("marker3").style.visibility= "hidden";
        document.getElementById("marker4").style.visibility= "hidden";

        $("#marker1").stop(true, false);
        $("#marker2").stop(true, false);
        $("#marker3").stop(true, false);
        $("#marker4").stop(true, false);
        document.getElementById("marker4").style.left= "-100px";
        document.getElementById("marker3").style.left= "-100px";
        document.getElementById("marker2").style.left= "-100px";
        document.getElementById("marker1").style.left= "-100px";

    } else {
        cien = "100";
        cientocincuenta = "150";
        
        document.getElementById("marker1").style.visibility= "visible";
        document.getElementById("marker2").style.visibility= "visible";
        document.getElementById("marker3").style.visibility= "visible";
        document.getElementById("marker4").style.visibility= "visible";

        document.getElementById("marker4").style.left= "400px";
        document.getElementById("marker3").style.left= "-200px";
        document.getElementById("marker2").style.left= "500px";
        document.getElementById("marker1").style.left= "-300px";

        
    }

  
});

window.addEventListener('load', function(event){
    console.log("load");
    var w = window.getWidth();
   
    if (w <= 768) {
        cien = "0";
        cientocincuenta = "0";

        document.getElementById("marker1").style.visibility= "hidden";
        document.getElementById("marker2").style.visibility= "hidden";
        document.getElementById("marker3").style.visibility= "hidden";
        document.getElementById("marker4").style.visibility= "hidden";

        document.getElementById("marker4").style.left= "0px";
        document.getElementById("marker3").style.left= "0px";
        document.getElementById("marker2").style.left= "0px";
        document.getElementById("marker1").style.left= "0px";

     
    } else {
        document.getElementById("marker1").style.visibility= "visible";
        document.getElementById("marker2").style.visibility= "visible";
        document.getElementById("marker3").style.visibility= "visible";
        document.getElementById("marker4").style.visibility= "visible";

        window.setInterval("changeOp()", 1200);
        window.setInterval("move()", 1500);
    }

});
var i = 0;
function changeText (){
    var head = document.getElementById("phrase");
    
    head.innerHTML = textArray[i];
   

    if (i === 4){
        i=-1;
    
    }
    i++;

}
