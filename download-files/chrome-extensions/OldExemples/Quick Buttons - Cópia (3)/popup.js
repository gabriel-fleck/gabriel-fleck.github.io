
document.addEventListener('DOMContentLoaded', function() {

  let tempText = "";

  //LOAD SLOTS TO BUTTONS
  chrome.storage.sync.get({
    slot1: 'Empty Slot',
  }, function(items) {
    document.getElementById('b1').innerHTML = items.slot1;
  });
  


  function b1() {
    tempText = document.getElementById('b1').innerHTML;
    
    copyText();
  }
  


  function copyText() {
    toggleDiv();
    document.getElementById("temp").value = tempText;
    let copyText = document.querySelector('#temp');
    copyText.select();
    document.execCommand("copy");
    toggleDiv();
    message();
  }
  
  document.querySelector("#b1").addEventListener("click", b1);


  function toggleDiv() {
    let display = document.getElementById('hideDiv').style.display;
      if(display == "inline")
      {
        document.getElementById('hideDiv').style.display = "none";
      }
      else {
        document.getElementById('hideDiv').style.display = "inline";
      }
  }

  function message() {
    let message = document.getElementById('message');
    message.textContent = 'Copied!';
    setTimeout(function() {
      message.textContent = '';
    }, 750);
  }

});