let height, width, color;
// When size is submitted by the user, call makeGrid()
// Select size input
$('#sizePicker').submit(function(event) {

event.preventDefault();
height = $('#inputHeight').val();
width = $('#inputWeight').val();
makeGrid(height, width);
});


const makeGrid = function (x, y) {

  $('tr').remove();
  // Your code goes here!
  for (let i = 1; i <= x; i++){
    $('#pixelCanvas').append('<tr id =table' + i + '></tr>');
    for (let j = 1; j <= y; j++){
      $('#table' + i).append('<td></td>');
    }
  }

  // add color
  $('td').click(function addColor(){
  // Select color input
  color = $('#colorPicker').val();

  console.log('#colorPicker',$('#colorPicker'))

  if($(this).attr('style')){
    $(this).removeAttr('style')
  } else {
    $(this).attr('style', 'background-color:' + color);
  }
  });

}