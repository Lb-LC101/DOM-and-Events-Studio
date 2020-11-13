// Write your JavaScript code here.
//Studio Requirement #2
function confirmTakeOff(){
    let response = confirm("Confirm the shuttle is ready for takeoff.");
  if (response) {
    //change flight status to "Shuttle in flight"
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
   
    //background color of shuttle flight screen changes from green to blue
    document.getElementById("shuttleBackground").style.backgroundColor = "blue"
    //shuttle height increases by 10,000 miles
    let ssh = document.getElementById("spaceShuttleHeight").innerHTML
     ssh = Number(ssh) + Number(10000)
     document.getElementById("spaceShuttleHeight").innerHTML = ssh;
  }   
  }

//Studio Requirement #3
function alertLanding(){
    //alert that the shuttle is landing
  let response = alert("The shuttle is landing.  Landing gear engaged.");
  //change flight status to "The shuttle has landed"
  document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
  backToOriginalPosition();
  //background color of shuttle flight screen changes from blue to green
  document.getElementById("shuttleBackground").style.backgroundColor = "green"
  //shuttle height goes to 0 miles
  let ssh = document.getElementById("spaceShuttleHeight").innerHTML
     ssh = Number(0)
     document.getElementById("spaceShuttleHeight").innerHTML = ssh;
}

//Studio Requirement #4
function confirmAbort(){
    let response = confirm("Confirm that you want to abort the mission.");
  if (response) {
    //flight status should change to "Mission aborted"
    document.getElementById("flightStatus").innerHTML = "Mission aborted.";
    backToOriginalPosition();
    //background color of shuttle flight screen changes from blue to green
     document.getElementById("shuttleBackground").style.backgroundColor = "green";
    //shuttle height goes to 0 miles
    let ssh = document.getElementById("spaceShuttleHeight").innerHTML;
    ssh = Number(0);
    document.getElementById("spaceShuttleHeight").innerHTML = ssh;
   }
}

//Studio Requirement #5

   
    //Rocket moves 10px in the direction of the button that was clicked 
    //shuttle height should changes by 10,000 miles when up/down buttons are clicked
    function upButton(){
    let ssh = document.getElementById("spaceShuttleHeight").innerHTML;
    ssh = Number(ssh) + Number(10000);
    document.getElementById("spaceShuttleHeight").innerHTML = ssh;

    let loc=document.getElementById("rocket").offsetTop;
      loc -= 10;
      if (loc <=-0) {
        loc +=10;
      }
      document.getElementById("rocket").style.top = loc + "px";

    
    }
    
     function downButton(){
      let ssh = document.getElementById("spaceShuttleHeight").innerHTML;
      ssh = Number(ssh) - Number(10000);
      document.getElementById("spaceShuttleHeight").innerHTML = ssh;
    
      let loc=document.getElementById("rocket").offsetTop;
      loc += 10;
      if (loc >=256) {
        loc -=10;
      }
      document.getElementById("rocket").style.top = loc + "px";
     }
     let hloc=0
     function leftButton(){
      hloc -= 10;
      if (hloc <=-190) {
        hloc +=10;
      }
      document.getElementById("rocket").style.left = hloc + "px";
    
     }

     function rightButton(){  
      hloc += 10;
      if (hloc >=190) {
        hloc -=10;
      }
      document.getElementById("rocket").style.left = hloc + "px";

     }
    
     function backToOriginalPosition(){
       document.getElementById("rocket").style.left = 0;
       document.getElementById("rocket").style.top = 0;
     }
     
// Remember to pay attention to page loading!