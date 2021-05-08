$(document).ready(function(){
		$("#dropdDownMenu").hover(function(){
			$("#navbarDropdown").addClass("x-active");
		}, function(){
			$("#navbarDropdown").removeClass("x-active");
		});
		$("#navbarDropdown").hover(function(){
			$("#dropdDownMenu").show();
		}, function(){
			$("#dropdDownMenu").hide();
		});
		$("#dropdDownMenu").hover(function(){
			$("#dropdDownMenu").show();
		}, function(){
			$("#dropdDownMenu").hide();
		});
		var text_max = 200;
		$('#count_message').html("Maximum 200 karakter - 200 maradt");

		$('#textarea1').keyup(function() {
		  var text_length = $('#textarea1').val().length;
		  var text_remaining = text_max - text_length;
		  
		  $('#count_message').html(text_length + ' / ' + text_max);
		  $('#count_message').html("Maximum "+text_max + " karakter - " + text_remaining + " maradt");
		});
	});