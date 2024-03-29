// Saves options to chrome.storage
function save_options() {
  let theme =  document.getElementById('theme').value;
  let slot1 =  document.getElementById('slot1').value;
  let slot2 =  document.getElementById('slot2').value;
  let slot3 =  document.getElementById('slot3').value;
  let slot4 =  document.getElementById('slot4').value;
  let slot5 =  document.getElementById('slot5').value;
  let slot6 =  document.getElementById('slot6').value;
  let slot7 =  document.getElementById('slot7').value;
  let slot8 =  document.getElementById('slot8').value;
  let slot9 =  document.getElementById('slot9').value;
  let slot10 =  document.getElementById('slot10').value;
  let slot11 =  document.getElementById('slot11').value;
  let slot12 =  document.getElementById('slot12').value;
  let slot13 =  document.getElementById('slot13').value;
  let slot14 =  document.getElementById('slot14').value;
  let slot15 =  document.getElementById('slot15').value;
  let slot16 =  document.getElementById('slot16').value;
  let slot17 =  document.getElementById('slot17').value;
  let slot18 =  document.getElementById('slot18').value;
  let slot19 =  document.getElementById('slot19').value;
  let slot20 =  document.getElementById('slot20').value;
  let slot21 =  document.getElementById('slot21').value;
  let slot22 =  document.getElementById('slot22').value;
  let slot23 =  document.getElementById('slot23').value;
  let slot24 =  document.getElementById('slot24').value;
  let slot25 =  document.getElementById('slot25').value;
  chrome.storage.sync.set({
    theme: theme,
    slot1: slot1,
    slot2: slot2,
    slot3: slot3,
    slot4: slot4,
    slot5: slot5,
    slot6: slot6,
    slot7: slot7,
    slot8: slot8,
    slot9: slot9,
    slot10: slot10,
    slot11: slot11,
    slot12: slot12,
    slot13: slot13,
    slot14: slot14,
    slot15: slot15,
    slot16: slot16,
    slot17: slot17,
    slot18: slot18,
    slot19: slot19,
    slot20: slot20,
    slot21: slot21,
    slot22: slot22,
    slot23: slot23,
    slot24: slot24,
    slot25: slot25
  }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('save');
    status.textContent = 'Saved.';
    setTimeout(function() {
      status.textContent = 'Save';
    }, 750);
  });
}

//preferences stored in chrome.storage.
function restore_options() {
  //Default value empty
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
    document.getElementById('slot1').value = items.slot1;
    document.getElementById('slot2').value = items.slot2;
    document.getElementById('slot3').value = items.slot3;
    document.getElementById('slot4').value = items.slot4;
    document.getElementById('slot5').value = items.slot5;
    document.getElementById('slot6').value = items.slot6;
    document.getElementById('slot7').value = items.slot7;
    document.getElementById('slot8').value = items.slot8;
    document.getElementById('slot9').value = items.slot9;
    document.getElementById('slot10').value = items.slot10;
    document.getElementById('slot11').value = items.slot11;
    document.getElementById('slot12').value = items.slot12;
    document.getElementById('slot13').value = items.slot13;
    document.getElementById('slot14').value = items.slot14;
    document.getElementById('slot15').value = items.slot15;
    document.getElementById('slot16').value = items.slot16;
    document.getElementById('slot17').value = items.slot17;
    document.getElementById('slot18').value = items.slot18;
    document.getElementById('slot19').value = items.slot19;
    document.getElementById('slot20').value = items.slot20;
    document.getElementById('slot21').value = items.slot21;
    document.getElementById('slot22').value = items.slot22;
    document.getElementById('slot23').value = items.slot23;
    document.getElementById('slot24').value = items.slot24;
    document.getElementById('slot25').value = items.slot25;
  });

}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
