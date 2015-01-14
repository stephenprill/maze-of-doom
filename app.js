$('div').on('mouseenter', function(){
  document.getElementById('breathing').play();
})
$('div').on('mouseleave', function(){
  document.getElementById('honk').play();
})


$('.section4').on('mouseenter', function() {
  $( "div:hidden:first" ).fadeIn( "slow" );
});


setTimeout(
  function()
{
  $('body').addClass('scare')
  document.getElementById('scream').play();
}, 15000);
