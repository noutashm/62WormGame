
$(document).ready(function () {
  //Restricting Past values in check in field and setting default value
  $(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();

    var checkInDate = year + '-' + month + '-' + day;

    $('#checkIn').attr('min', checkInDate);
    document.getElementById("checkIn").value = checkInDate;
  });
  //Restricting Past values in check Out field and setting default value 
  $(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate() + 1;
    var year = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();

    var checkOutDate = year + '-' + month + '-' + day;

    $('#checkOut').attr('min', checkOutDate);
    document.getElementById("checkOut").value = checkOutDate;


  });

  $(function () {
    // Enables popover
    $("[data-toggle=popover]").popover();
  });
})

//Getting data from XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "pages/lodges.xml", true);
xhttp.send();

//get data in popover from XML
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[0].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[0].childNodes[0].nodeValue + "<br>" +
        "Availability:" + status + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge1.jpg" id="image1" alt="Sample Image">'
    }
  })
}



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[1].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[1].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[1].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge2.jpg" id="image1" alt="Sample Image">';
    }
  })
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[2].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[2].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[2].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge3.jpg" id="image1" alt="Sample Image">';
    }
  })
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[3].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[3].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[3].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge4.jpg" id="image1" alt="Sample Image">';
    }
  })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[4].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[4].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[4].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge5.jpg" id="image1" alt="Sample Image">';
    }
  })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[5].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[5].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[5].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge6.jpg" id="image1" alt="Sample Image">';
    }
  })
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction6(this);
  }
};
xhttp.open("GET", "pages/lodges.xml", true);
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[6].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[6].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[6].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge7.jpg" id="image1" alt="Sample Image">';
    }
  })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[7].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[7].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[7].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge8.jpg" id="image1" alt="Sample Image">';
    }
  })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[8].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[8].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[8].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge9.jpg" id="image1" alt="Sample Image">';
    }
  })
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
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
    content: function () {
      return "cost: $" + xmlDoc.getElementsByTagName("cost")[9].childNodes[0].nodeValue + "<br>" +
        "Capacity:" + xmlDoc.getElementsByTagName("people")[9].childNodes[0].nodeValue + "<br>" +
        "Availability:" + xmlDoc.getElementsByTagName("status")[9].childNodes[0].nodeValue + "<br>" +
        "Image" + '<div class="media"><img src="images/lodge/lodge10.jpg" id="image1" alt="Sample Image">';
    }
  })
}

// Meeting the situational Requirements
function prebooked(xml) {
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName('status');

  for (i = 0; i < x.length; i++) {
    txt = x[i].innerHTML
   var lodgeList = document.querySelector("#lodgesBtn").children

    if (lodgeList.innerHTML == "book") {

      for (var j = 0; j < lodgeList.length; j++) {
        lodgeList[j].style.backgroundColor = "red"
      }

    }
  }

}

//Checking the Availability of the Lodges
function Availability() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      bc(this);
    }
  };
  xhttp.open("GET", "pages/lodges.xml", true);
  xhttp.send();
  function bc(xml) {
    var xmlDoc = xml.responseXML;
    var peopleInput = document.getElementById("numPeople").value;
    if (peopleInput > 2 && peopleInput <= 4) {

      document.getElementById("lodge2").style.backgroundColor = "red";
      $('#lodge2').attr('disabled', true)
      document.getElementById("lodge6").style.backgroundColor = "red";
      $('#lodge6').attr('disabled', true)
      document.getElementById("lodge10").style.backgroundColor = "red";
      $('#lodge10').attr('disabled', true)
    }
    else if (peopleInput > 4 && peopleInput <= 6) {
      document.getElementById("lodge2").style.backgroundColor = "red";
      $('#lodge2').attr('disabled', true)
      document.getElementById("lodge6").style.backgroundColor = "red";
      $('#lodge6').attr('disabled', true)
      document.getElementById("lodge10").style.backgroundColor = "red";
      $('#lodge10').attr('disabled', true)
      document.getElementById("lodge3").style.backgroundColor = "red";
      $('#lodge3').attr('disabled', true)
    }
    else if (peopleInput > 6) {
      document.getElementById("lodge2").style.backgroundColor = "red";
      $('#lodge2').attr('disabled', true)
      document.getElementById("lodge6").style.backgroundColor = "red";
      $('#lodge6').attr('disabled', true)
      document.getElementById("lodge10").style.backgroundColor = "red";
      $('#lodge10').attr('disabled', true)
      document.getElementById("lodge3").style.backgroundColor = "red";
      $('#lodge3').attr('disabled', true)
      document.getElementById("lodge4").style.backgroundColor = "red";
      $('#lodge4').attr('disabled', true)
      document.getElementById("lodge8").style.backgroundColor = "red";
      $('#lodge8').attr('disabled', true)
    }
 }
}

// Getting the information in the summary
 function summary(id) {
  var date1 = new Date(document.getElementById('checkIn').value);
  var date2 = new Date(document.getElementById('checkOut').value);
  var diff = Math.abs(date2.getTime() - date1.getTime());
  var noofdays = Math.ceil(diff / (1000 * 3600 * 24));

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      ac(this);
    }
  };
  xhttp.open("GET", "pages/lodges.xml", true);
  xhttp.send();
  function ac(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("instructions").style.display = "none";
    document.getElementById("roombooking").style.display = "block";


    aNumber = document.getElementById("numPeople").value
    $('#sNumber').append(aNumber)
    aCheckIn = document.getElementById("checkIn").value
    $('#sCheckIn').append(aCheckIn)
    aCheckOut = document.getElementById("checkOut").value
    $('#sCheckOut').append(aCheckOut)
    var cost = 0;
    var lodgeNumber = 0;

    switch (id) {
      case 'lodge2':
        cost = xmlDoc.getElementsByTagName("cost")[1].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[1].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge3':
        cost = xmlDoc.getElementsByTagName("cost")[2].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[2].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge4':
        cost = xmlDoc.getElementsByTagName("cost")[3].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[3].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge6':
        cost = xmlDoc.getElementsByTagName("cost")[5].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[5].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge8':
        cost = xmlDoc.getElementsByTagName("cost")[7].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[7].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge9':
        cost = xmlDoc.getElementsByTagName("cost")[8].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[8].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;
      case 'lodge10':
        cost = xmlDoc.getElementsByTagName("cost")[9].childNodes[0].nodeValue
        $('#sCost').append(cost);
        lodgeNumber = xmlDoc.getElementsByTagName("number")[9].childNodes[0].nodeValue
        $('#sLodge').append(lodgeNumber);
        break;

    }
    $('#sNumberDays').append(noofdays);
    var totalPrice = (cost * noofdays);

    $('#sPrice').append(totalPrice);

  }

}

//Displaying the final booking details
function final() {
  var date1 = new Date(document.getElementById('checkIn').value);
  var date2 = new Date(document.getElementById('checkOut').value);
  var diff = Math.abs(date2.getTime() - date1.getTime());
  var noofdays = Math.ceil(diff / (1000 * 3600 * 24));
  var cost = ($('#sCost').html());
  var lodge =($('#sLodge').html());
  var price = ($('#sPrice').html());

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      adc(this);
    }
  };
  xhttp.open("GET", "pages/lodges.xml", true);
  xhttp.send();
  function adc(xml) {
    var xmlDoc = xml.responseXML;

    document.getElementById("roombooking").style.display = "none";
    document.getElementById("roombooking1").style.display = "block";
    aName = document.getElementById("name").value;
    $('#sName1').append(aName)
    $('#sNumber1').append(aNumber)
    $('#sCheckIn1').append(aCheckIn)
    $('#sCheckOut1').append(aCheckOut)
    $('#sNumberDays1').append(noofdays);
    $('#sCost1').append(cost);
    $('#sLodge1').append(lodge);
    $('#sPrice1').append(price);
  }
}

// Creating a function to allow user to book an another lodge
function anotherBooking() {
  document.getElementById("roombooking1").style.display = "none";
  document.getElementById("instructions").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("numPeople").value = "";
}
