$(document).ready(function () {
    //Restricting Past values in check in field and setting default value
  $(function(){ 
        var dtToday = new Date();

        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var checkInDate = year + '-' + month + '-' + day;
        
        $('#checkIn').attr('min',checkInDate);
       document.getElementById("checkIn").value=checkInDate;
    });
    //Restricting Past values in check Out field and setting default value 
    $(function(){ 
        var dtToday = new Date();
        
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate()+1;
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var checkOutDate = year + '-' + month + '-' + day;
        
        $('#checkOut').attr('min', checkOutDate);
        document.getElementById("checkOut").value=checkOutDate;
    
       
    });

    $(function(){
        $('[data-toggle="popover"]').popover();
      });
      
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(35, 00, 60, 40);
   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(45, 75, 55, 90);
   
  

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(15, 320, 75, 60);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(150, 340, 85, 60);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(155, 205, 60, 50);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(300, 0, 60, 40);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(155, 83, 60, 55);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(275, 85, 85, 65);
   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(275, 218, 85, 68);
   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(275, 355, 80, 68);
   

    
})


