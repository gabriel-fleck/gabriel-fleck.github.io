//MADE BY GABRIEL EDUARDO FLECK - 2020 11 02

document.addEventListener('DOMContentLoaded', function() {

  let tempText = "";
  let textLegth = 45;
  let m1 = "";
  let m2 = "";
  let m3 = "";
  let m4 = "";
  let m5 = "";
  let m6 = "";
  let m7 = "";
  let m8 = "";
  let m9 = "";

  //LOAD SLOTS TO BUTTONS
  loadMessages();

  //BUTTONS
  function b1() {
    tempText = m1;
    copyText();
  }
  function b2() {
    tempText = m2;
    copyText();
  }
  function b3() {
    tempText = m3;
    copyText();
  }
  function b4() {
    tempText = m4;
    copyText();
  }
  function b5() {
    tempText = m5;
    copyText();
  }
  function b6() {
    tempText = m6;
    copyText();
  }
  function b7() {
    tempText = m7;
    copyText();
  }
  function b8() {
    tempText = m8;
    copyText();
  }
  function b9() {
    tempText = m9;
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
        loadMessages();
        changeTheme();
  }

  function optionsButton() {
    document.getElementById('main-menu').style.display = "none";
    document.getElementById('options-menu').style.display = "inline";
  }

  function loadMessages() {
    chrome.storage.sync.get({
      theme: 'icy',
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
      document.getElementById('theme').value = items.theme;
      document.getElementById('b1').innerHTML = items.slot1.slice(0, textLegth) + "...";
      document.getElementById('b2').innerHTML = items.slot2.slice(0, textLegth) + "...";
      document.getElementById('b3').innerHTML = items.slot3.slice(0, textLegth) + "...";
      document.getElementById('b4').innerHTML = items.slot4.slice(0, textLegth) + "...";
      document.getElementById('b5').innerHTML = items.slot5.slice(0, textLegth) + "...";
      document.getElementById('b6').innerHTML = items.slot6.slice(0, textLegth) + "...";
      document.getElementById('b7').innerHTML = items.slot7.slice(0, textLegth) + "...";
      document.getElementById('b8').innerHTML = items.slot8.slice(0, textLegth) + "...";
      document.getElementById('b9').innerHTML = items.slot9.slice(0, textLegth) + "...";

      m1 = items.slot1;
      m2 = items.slot2;
      m3 = items.slot3;
      m4 = items.slot4;
      m5 = items.slot5;
      m6 = items.slot6;
      m7 = items.slot7;
      m8 = items.slot8;
      m9 = items.slot9;
      changeTheme();
    });
  }

  function changeTheme() {

    if (document.getElementById('theme').value == "icy") {
      document.getElementById('body').style.backgroundColor = "rgba(51, 153, 255, 1)";
    }
    if (document.getElementById('theme').value == "sepia") {
      document.getElementById('body').style.backgroundColor = "rgba(102, 51, 0, 1)";
    }
    if (document.getElementById('theme').value == "dark") {
      document.getElementById('body').style.backgroundColor = "rgba(54, 54, 54, 1)";
    }
  }

  
  document.querySelector("#main-button").addEventListener("click", mainButton);
  document.querySelector("#options-button").addEventListener("click", optionsButton);

});