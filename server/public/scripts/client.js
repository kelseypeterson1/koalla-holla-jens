console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas
    $("#viewKoalas").empty();
    // let songId = 90;
    $.ajax({
      type: 'GET',
      // url: `/songs/${songId}`
      url: `/koalas`
    }).then(function (response) {
      console.log("GET /koalas response", response);
      // append data to the DOM
      for (let i = 0; i < response.length; i++) {
        $('#viewKoalas').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].name}</td>
                    <td>${response[i].age}</td>
                    <td>${response[i].gender}</td>
                    <td>${response[i].transfer}</td>
                    <td>${response[i].notes}</td>
                    <td><button class="btn-transfer">Ready for Transfer</button></td>
                </tr>
            `);
      }
    });
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
  $.ajax({
      type: 'POST',
      url: '/koalas',
      data: newKoala
  }).then( function (response) {
      $('#nameIn').val(''),
      $('#ageIn').val(''),
      $('#genderIn').val(''),
      $('#readyForTransferIn').val('')
      $('#notesIn').val('')
      getKoalas();
  });

}
