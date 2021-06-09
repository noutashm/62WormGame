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
      
   
   
    
})


