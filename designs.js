function clearGrid() {
  $('.grid').children().remove();
}

function makeGrid() {
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  
  for (let row = 1; row <= height; row++) {
    $('.grid').append('<tr class="row-' + row + '"></tr>');

    let currentRow = $('.row-' + row);
    for (let col = 1; col <= width; col++) {
      currentRow.append('<td></td>');
    }
  }
}

$('#sizePicker').submit(function(e) {
  e.preventDefault();
  clearGrid();
  makeGrid();
});

$('.grid').on('click', 'td', function() {
  const color = $('#colorPicker').val();

  $(this).css('background-color', color);
})