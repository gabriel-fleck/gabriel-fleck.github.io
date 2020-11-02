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
    slot9: slot9
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
  });

}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
