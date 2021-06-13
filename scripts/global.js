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
      // Enables popover
      $("[data-toggle=popover]").popover();
  });
  
     
    
})

//Getting data from XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge1'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 1',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[0].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[0].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue+ "<br>" +
              "Image"+'<div class="media"><img src="images/lodge/lodge1.jpg" id="image1" alt="Sample Image">'
               
             
               

      }
    })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction1(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();
function myFunction1(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge2'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 2',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[1].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[1].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[1].childNodes[0].nodeValue+ "<br>" +
               "Image"+'<div class="media"><img src="images/lodge/lodge2.jpg" id="image1" alt="Sample Image">';
    }
    })
  }


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();
function myFunction2(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge3'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 3',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[2].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[2].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[2].childNodes[0].nodeValue+ "<br>" +
               "Image"+'<div class="media"><img src="images/lodge/lodge3.jpg" id="image1" alt="Sample Image">';
    }
    })
  }


  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction3(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();
function myFunction3(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge4'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 4',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[3].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[3].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[3].childNodes[0].nodeValue+ "<br>" +
               "Image"+'<div class="media"><img src="images/lodge/lodge4.jpg" id="image1" alt="Sample Image">';
    }
    })
  }

  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction4(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();
function myFunction4(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge5'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 5',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[4].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[4].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[4].childNodes[0].nodeValue+ "<br>" +
               "Image"+'<div class="media"><img src="images/lodge/lodge5.jpg" id="image1" alt="Sample Image">';
    }
    })
  }

  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction5(this);
    }
};
xhttp.open("GET", "lodges.xml", true);
xhttp.send();
function myFunction5(xml) {
  var xmlDoc = xml.responseXML;
    var popover = new bootstrap.Popover(document.getElementById('lodge6'), {
      html: true,
      trigger: 'hover',
      title: 'Lodge 6',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[5].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[5].childNodes[0].nodeValue + "<br>" +
               "Availability:"+xmlDoc.getElementsByTagName("status")[5].childNodes[0].nodeValue+ "<br>" +
               "Image"+'<div class="media"><img src="images/lodge/lodge6.jpg" id="image1" alt="Sample Image">';
    }
    })
  }


    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction6(this);
      }
  };
  xhttp.open("GET", "lodges.xml", true);
  xhttp.send();
  function myFunction6(xml) {
    var xmlDoc = xml.responseXML;
      var popover = new bootstrap.Popover(document.getElementById('lodge7'), {
        html: true,
        trigger: 'hover',
        title: 'Lodge 7',
        content: function() {
          return "cost:"+ xmlDoc.getElementsByTagName("cost")[6].childNodes[0].nodeValue+ "<br>" +
                 "Capacity:"+ xmlDoc.getElementsByTagName("people")[6].childNodes[0].nodeValue + "<br>" +
                 "Availability:"+xmlDoc.getElementsByTagName("status")[6].childNodes[0].nodeValue+ "<br>" +
                 "Image"+'<div class="media"><img src="images/lodge/lodge7.jpg" id="image1" alt="Sample Image">';
      }
      })
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction7(this);
        }
    };
    xhttp.open("GET", "lodges.xml", true);
    xhttp.send();
    function myFunction7(xml) {
      var xmlDoc = xml.responseXML;
        var popover = new bootstrap.Popover(document.getElementById('lodge8'), {
          html: true,
          trigger: 'hover',
          title: 'Lodge 8',
          content: function() {
            return "cost:"+ xmlDoc.getElementsByTagName("cost")[7].childNodes[0].nodeValue+ "<br>" +
                   "Capacity:"+ xmlDoc.getElementsByTagName("people")[7].childNodes[0].nodeValue + "<br>" +
                   "Availability:"+xmlDoc.getElementsByTagName("status")[7].childNodes[0].nodeValue+ "<br>" +
                   "Image"+'<div class="media"><img src="images/lodge/lodge8.jpg" id="image1" alt="Sample Image">';
        }
        })
      }

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              myFunction8(this);
          }
      };
      xhttp.open("GET", "lodges.xml", true);
      xhttp.send();
      function myFunction8(xml) {
        var xmlDoc = xml.responseXML;
          var popover = new bootstrap.Popover(document.getElementById('lodge9'), {
            html: true,
            trigger: 'hover',
            title: 'Lodge 9',
            content: function() {
              return "cost:"+ xmlDoc.getElementsByTagName("cost")[8].childNodes[0].nodeValue+ "<br>" +
                     "Capacity:"+ xmlDoc.getElementsByTagName("people")[8].childNodes[0].nodeValue + "<br>" +
                     "Availability:"+xmlDoc.getElementsByTagName("status")[8].childNodes[0].nodeValue+ "<br>" +
                     "Image"+'<div class="media"><img src="images/lodge/lodge9.jpg" id="image1" alt="Sample Image">';
          }
          })
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction9(this);
            }
        };
        xhttp.open("GET", "lodges.xml", true);
        xhttp.send();
        function myFunction9(xml) {
          var xmlDoc = xml.responseXML;
            var popover = new bootstrap.Popover(document.getElementById('lodge10'), {
              html: true,
              trigger: 'hover',
              title: 'Lodge 10',
              content: function() {
                return "cost:"+ xmlDoc.getElementsByTagName("cost")[9].childNodes[0].nodeValue+ "<br>" +
                       "Capacity:"+ xmlDoc.getElementsByTagName("people")[9].childNodes[0].nodeValue + "<br>" +
                       "Availability:"+xmlDoc.getElementsByTagName("status")[9].childNodes[0].nodeValue+ "<br>" +
                       "Image"+'<div class="media"><img src="images/lodge/lodge10.jpg" id="image1" alt="Sample Image">';
            }
            })
          }
  
          function showAvailabilty(){
            
          }
