//MADE BY GABRIEL EDUARDO FLECK - 2020 11 01

document.addEventListener('DOMContentLoaded', function() {

  let tempText = "";

  //LOAD SLOTS TO BUTTONS
  chrome.storage.sync.get({
    slot1: 'Empty',
    slot2: 'Empty',
    slot3: 'Empty',
    slot4: 'Empty',
    slot5: 'Empty',
    slot6: 'Empty',
    slot7: 'Empty',
    slot8: 'Empty',
    slot9: 'Empty',
  }, function(items) {
    document.getElementById('b1').innerHTML = items.slot1;
    document.getElementById('b2').innerHTML = items.slot2;
    document.getElementById('b3').innerHTML = items.slot3;
    document.getElementById('b4').innerHTML = items.slot4;
    document.getElementById('b5').innerHTML = items.slot5;
    document.getElementById('b6').innerHTML = items.slot6;
    document.getElementById('b7').innerHTML = items.slot7;
    document.getElementById('b8').innerHTML = items.slot8;
    document.getElementById('b9').innerHTML = items.slot9;
  });
  

  //BUTTONS
  function b1() {
    tempText = document.getElementById('b1').innerHTML;
    copyText();
  }
  function b2() {
    tempText = document.getElementById('b2').innerHTML;
    copyText();
  }
  function b3() {
    tempText = document.getElementById('b3').innerHTML;
    copyText();
  }
  function b4() {
    tempText = document.getElementById('b4').innerHTML;
    copyText();
  }
  function b5() {
    tempText = document.getElementById('b5').innerHTML;
    copyText();
  }
  function b6() {
    tempText = document.getElementById('b6').innerHTML;
    copyText();
  }
  function b7() {
    tempText = document.getElementById('b7').innerHTML;
    copyText();
  }
  function b8() {
    tempText = document.getElementById('b8').innerHTML;
    copyText();
  }
  function b9() {
    tempText = document.getElementById('b9').innerHTML;
    copyText();
  }
  
  document.querySelector("#b1").addEventListener("click", b1);
  document.querySelector("#b2").addEventListener("click", b2);
  document.querySelector("#b3").addEventListener("click", b3);
  document.querySelector("#b4").addEventListener("click", b4);
  document.querySelector("#b5").addEventListener("click", b5);
  document.querySelector("#b6").addEventListener("click", b6);
  document.querySelector("#b7").addEventListener("click", b7);
  document.querySelector("#b8").addEventListener("click", b8);
  document.querySelector("#b9").addEventListener("click", b9);

  //LOGIC FUNCTIONS
  function copyText() {
    toggleDiv();
    document.getElementById("temp").value = tempText;
    let copyText = document.querySelector('#temp');
    copyText.select();
    document.execCommand("copy");
    toggleDiv();
    message();
  }

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
    let message = document.getElementById('copy-status');
    message.textContent = 'Copied!';
    setTimeout(function() {
      message.textContent = 'Waiting for Copy...';
    }, 750);
  }

  function mainButton() {
        document.getElementById('main-menu').style.display = "inline";
        document.getElementById('options-menu').style.display = "none";
  }

  function optionsButton() {
    document.getElementById('main-menu').style.display = "none";
    document.getElementById('options-menu').style.display = "inline";
  }

  document.querySelector("#main-button").addEventListener("click", mainButton);
  document.querySelector("#options-button").addEventListener("click", optionsButton);

});