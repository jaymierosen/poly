// vars
var $card = $('section.card');
var $btnBars = $('button.bars');
var $btnSliders = $('button.sliders');
var $bars = '<i class="fas fa-bars"></i>';
var $x = '<i class="fas fa-times"></i>';
var $mainNav = $('nav.main-nav');
var $filterNav = $('nav.filter-nav');
// functions
// var cardSelection = function(){
// 	console.log('hey');
// }
// on page load
// button.bars has the bars icon
$btnBars.html($bars);
// when the button.bars is clicked ons
// the icon changes to an 'x'
$btnBars.click(function(){
	$(this).html($x);
	// main nav appears
	$mainNav.css('display', 'block');
});
// if button.bars with the icon of an x is clicked on
// change back to the bars icon
// main nav disappears
if($btnBars.html($x)){
	$(this).html($bars);
	$mainNav.css('display', 'none');
};
$btnSliders.click(function(){
	$filterNav.css('display', 'block');
});
// init function
var init = function(){
	console.log('working');
}
// document ready
$(function(){
	init();
});