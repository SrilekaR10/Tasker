function log() {
    var btn1 = document.getElementById("btn1").value
    var btn2 = document.getElementById("btn2").value
    var names = "sivaperumal@gmail.com"
    var pass = "4136"
  
  
    if (names == btn1 && pass == btn2)
   {
      window.location.href = "tasker2.html"
    }
    else {
      window.alert("invalid")
  
    }
  
  
  
  }
  
  
  