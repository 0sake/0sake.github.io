  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("page").style.opacity = "0.4";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("page").style.opacity = "1";
  }

  function expandSubMenu(mainMenuItem){
    if(document.getElementById(mainMenuItem).style.display == "none"){
      document.getElementById(mainMenuItem).style.display = "flex";
      document.getElementById(mainMenuItem + "-arrow").style.transform = "rotate(90deg)";

    }
    else{
      document.getElementById(mainMenuItem).style.display = "none";
      document.getElementById(mainMenuItem + "-arrow").style.transform = "rotate(0deg)";
    }
  }
  