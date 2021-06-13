var lodges =[];

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
xhttp.open("GET", "pages/lodges.xml", true);
xhttp.send();

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var status = xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue
  var lodge1 = document.getElementById('lodge1')
  if (status == "book") {
    lodge1.style.backgroundColor = "red"
  }
    var popover = new bootstrap.Popover(lodge1, {
      html: true,
      trigger: 'hover',
      title: 'Lodge 1',
      content: function() {
        return "cost:"+ xmlDoc.getElementsByTagName("cost")[0].childNodes[0].nodeValue+ "<br>" +
               "Capacity:"+ xmlDoc.getElementsByTagName("people")[0].childNodes[0].nodeValue + "<br>" +
               "Availability:"+status+ "<br>" +
              "Image"+'<div class="media"><img src="images/lodge/lodge1.jpg" id="image1" alt="Sample Image">'
      }
    })
}


//get data in popover from XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction1(this);
    }
};
xhttp.open("GET", "pages/lodges.xml", true);
xhttp.send();
function myFunction1(xml) {
  var xmlDoc = xml.responseXML;
  
    var popover = new bootstrap.Popover(lodge2, {
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
xhttp.open("GET", "pages/lodges.xml", true);
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
xhttp.open("GET", "pages/lodges.xml", true);
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
xhttp.open("GET", "pages/lodges.xml", true);
xhttp.send();
function myFunction4(xml) {
  var xmlDoc = xml.responseXML;
  var status = xmlDoc.getElementsByTagName("status")[4].childNodes[0].nodeValue
  var lodge5 = document.getElementById('lodge5')
  if (status == "book") {
    lodge5.style.backgroundColor = "red"
  }
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
xhttp.open("GET", "pages/lodges.xml", true);
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
  xhttp.open("GET","pages/lodges.xml" , true);
  xhttp.send();
  function myFunction6(xml) {
    var xmlDoc = xml.responseXML;
    var status = xmlDoc.getElementsByTagName("status")[6].childNodes[0].nodeValue
  var lodge7 = document.getElementById('lodge7')
  if (status == "book") {
    lodge7.style.backgroundColor = "red"
  }
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
    xhttp.open("GET", "pages/lodges.xml", true);
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
      xhttp.open("GET", "pages/lodges.xml", true);
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
        xhttp.open("GET", "pages/lodges.xml", true);
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
  
         
            var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        prebooked(this);
    }
};
xhttp.open("GET","pages/lodges.xml", true);
xhttp.send();

function prebooked(xml) {
    var x, i, xmlDoc, txt;
  
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName('status');
    console.log(x);
    for (i = 0 ; i <x.length; i++) {
      txt = x[i].innerHTML
      
        //txt += x[i].childNodes[0].nodeValue + "<br>";
        //console.log(x);
        var lodgeList = document.querySelector("#lodgesBtn").children

        if(lodgeList.innerHTML == "book"){
         
         for (var j = 0; j < lodgeList.length; j++) {
           lodgeList[j].style.backgroundColor = "red"
         }
      
        //lodge1.popover.disable();
       // document.getElementById("lodge3").style.backgroundColor="red";
        //document.getElementById("lodge6").style.backgroundColor="red";
        }
    }
   
   // document.getElementById("demo").innerHTML = txt;

            

 
              
            
}

function Search()
{
	//document.getElementById("statementDetails").style.display = "none";
	//document.getElementById("bookingSummary").style.display = "none";
	var checkInDate =document.getElementById('checkIn').value;
	var checkOutDate = document.getElementById('checkOut').value

	var bookedDays = date_diff_indays(checkInDate,checkOutDate);
	var today = new Date();
	if(date_diff_indays(today,checkInDate) <0)
	{
		alert("Check In Date Can't be in past");
	}
	if(bookedDays <=0)
	{
		alert("Invalid Check Out Date, Minimum Booking 1 night");
	}

	var allLodges = document.getElementsByClassName("lodge");
	for(i=0; i<=allLodges.length;i++)
	{
		if(parseInt(lodges[i].people) < parseInt(document.getElementById('numPeople').value))
		{
			allLodges[i].style.opacity = ".3";
		}
		else
		{
			allLodges[i].style.opacity = "1";
		}
			
	}

}
//getting the difference in days
var date_diff_indays = function(date1, date2) {
	dt1 = new Date(date1);
	dt2 = new Date(date2);
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}



  















function summaryDetails() {
  //here is a summary

  // name
  var inputfirstname = document.getElementById("inputfirstname").value;
  document.getElementById("sName").innerHTML ="First Name: " + inputfirstname;


  //checkin
  var inputcheckin = document.getElementById("startdate").value;
  document.getElementById("scheckindate").innerHTML ="Check in: " + inputcheckin;

  //checkout
  var inputcheckout = document.getElementById("finishdate").value;
  document.getElementById("scheckoutdate").innerHTML ="Check out: " + inputcheckout;
  
  //number of people
  var capacity = document.getElementById("numPeople").value;
  document.getElementById("sNumber").innerHTML ="Number of people staying: " + capacity;


}

