//MADE BY GABRIEL EDUARDO FLECK - 2020 11 07 - version 1.0.2
//Added more slots, from 12 to 25 slots - 2021 07 18 - version 1.0.3
//Slight change on sepia theme - 2021 07 18 - version 1.0.3


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
  let m10 = "";
  let m11 = "";
  let m12 = ""; 
  let m13 = ""; 
  let m14 = ""; 
  let m15 = ""; 
  let m16 = ""; 
  let m17 = ""; 
  let m18 = ""; 
  let m19 = ""; 
  let m20 = ""; 
  let m21 = ""; 
  let m22 = ""; 
  let m23 = ""; 
  let m24 = ""; 
  let m25 = ""; 

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
  function b10() {
    tempText = m10;
    copyText();
  }
  function b11() {
    tempText = m11;
    copyText();
  }
  function b12() {
    tempText = m12;
    copyText();
  }
  function b13() {
    tempText = m13;
    copyText();
  }
  function b14() {
    tempText = m14;
    copyText();
  }
  function b15() {
    tempText = m15;
    copyText();
  }
  function b16() {
    tempText = m16;
    copyText();
  }
  function b17() {
    tempText = m17;
    copyText();
  }
  function b18() {
    tempText = m18;
    copyText();
  }
  function b19() {
    tempText = m19;
    copyText();
  }
  function b20() {
    tempText = m20;
    copyText();
  }
  function b21() {
    tempText = m21;
    copyText();
  }
  function b22() {
    tempText = m22;
    copyText();
  }
  function b23() {
    tempText = m23;
    copyText();
  }
  function b24() {
    tempText = m24;
    copyText();
  }
  function b25() {
    tempText = m25;
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
  document.querySelector("#b10").addEventListener("click", b10);
  document.querySelector("#b11").addEventListener("click", b11);
  document.querySelector("#b12").addEventListener("click", b12);
  document.querySelector("#b13").addEventListener("click", b13);
  document.querySelector("#b14").addEventListener("click", b14);
  document.querySelector("#b15").addEventListener("click", b15);
  document.querySelector("#b16").addEventListener("click", b16);
  document.querySelector("#b17").addEventListener("click", b17);
  document.querySelector("#b18").addEventListener("click", b18);
  document.querySelector("#b19").addEventListener("click", b19);
  document.querySelector("#b20").addEventListener("click", b20);
  document.querySelector("#b21").addEventListener("click", b21);
  document.querySelector("#b22").addEventListener("click", b22);
  document.querySelector("#b23").addEventListener("click", b23);
  document.querySelector("#b24").addEventListener("click", b24);
  document.querySelector("#b25").addEventListener("click", b25);

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
    message.textContent = 'Copied to clipboard!';
    message.style.fontWeight = "bold";
    //message.style.bold
    setTimeout(function() {
      message.textContent = 'Waiting for Copy...';
      message.style.fontWeight = "normal";
    }, 1000);
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
      slot10: 'Empty',
      slot11: 'Empty',
      slot12: 'Empty',
      slot13: 'Empty',
      slot14: 'Empty',
      slot15: 'Empty',
      slot16: 'Empty',
      slot17: 'Empty',
      slot18: 'Empty',
      slot19: 'Empty',
      slot20: 'Empty',
      slot21: 'Empty',
      slot22: 'Empty',
      slot23: 'Empty',
      slot24: 'Empty',
      slot25: 'Empty',
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
      document.getElementById('b10').innerHTML = items.slot10.slice(0, textLegth) + "...";
      document.getElementById('b11').innerHTML = items.slot11.slice(0, textLegth) + "...";
      document.getElementById('b12').innerHTML = items.slot12.slice(0, textLegth) + "...";
      document.getElementById('b13').innerHTML = items.slot13.slice(0, textLegth) + "...";
      document.getElementById('b14').innerHTML = items.slot14.slice(0, textLegth) + "...";
      document.getElementById('b15').innerHTML = items.slot15.slice(0, textLegth) + "...";
      document.getElementById('b16').innerHTML = items.slot16.slice(0, textLegth) + "...";
      document.getElementById('b17').innerHTML = items.slot17.slice(0, textLegth) + "...";
      document.getElementById('b18').innerHTML = items.slot18.slice(0, textLegth) + "...";
      document.getElementById('b19').innerHTML = items.slot19.slice(0, textLegth) + "...";
      document.getElementById('b20').innerHTML = items.slot20.slice(0, textLegth) + "...";
      document.getElementById('b21').innerHTML = items.slot21.slice(0, textLegth) + "...";
      document.getElementById('b22').innerHTML = items.slot22.slice(0, textLegth) + "...";
      document.getElementById('b23').innerHTML = items.slot23.slice(0, textLegth) + "...";
      document.getElementById('b24').innerHTML = items.slot24.slice(0, textLegth) + "...";
      document.getElementById('b25').innerHTML = items.slot25.slice(0, textLegth) + "...";

      m1 = items.slot1;
      m2 = items.slot2;
      m3 = items.slot3;
      m4 = items.slot4;
      m5 = items.slot5;
      m6 = items.slot6;
      m7 = items.slot7;
      m8 = items.slot8;
      m9 = items.slot9;
      m10 = items.slot10;
      m11 = items.slot11;
      m12 = items.slot12;
      m13 = items.slot13;
      m14 = items.slot14;
      m15 = items.slot15;
      m16 = items.slot16;
      m17 = items.slot17;
      m18 = items.slot18;
      m19 = items.slot19;
      m20 = items.slot20;
      m21 = items.slot21;
      m22 = items.slot22;
      m23 = items.slot23;
      m24 = items.slot24;
      m25 = items.slot25;
      changeTheme();
    });
  }

  function changeTheme() {

    if (document.getElementById('theme').value == "icy") {
      document.getElementById('body').style.backgroundColor = "rgba(41, 122, 159, 1)";
    }
    if (document.getElementById('theme').value == "sepia") {
      document.getElementById('body').style.backgroundColor = "rgba(89, 62, 33, 1)";
    }
    if (document.getElementById('theme').value == "dark") {
      document.getElementById('body').style.backgroundColor = "rgba(54, 54, 54, 1)";
    }
  }

  
  mainButton();

  document.querySelector("#main-button").addEventListener("click", mainButton);
  document.querySelector("#options-button").addEventListener("click", optionsButton);

});