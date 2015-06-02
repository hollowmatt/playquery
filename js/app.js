// IIFE
(function() {
	var cats = getCatData();
	// js body here
	function initialize() {
		console.log('initialize');
		console.log(cats);
		alternateRows('cats');
		setUIActions();
	}

	//Function to add alternating row color to a table
	function alternateRows(tableID) {
		console.log("Table to alternate: " + tableID);
		$('#' + tableID + ' tbody tr:even').addClass('zebra');
	}

	//Use this function to setup all of the JQuery actions on click, mouseover/out, etc.
	function setUIActions() {
		$('#hideButton').click(function() {
			// $('#cats').toggle('slow');
			if ($('#cats').is(':visible')) {
				$('#cats').fadeOut(1000);
				$('#hideButton').val("Show");
				$('#catstatus').text("Where are the current cats?");
			} else {
				$('#cats').fadeIn(1000);
				$('#hideButton').val("Hide");
				$('#catstatus').text("These are the current cats.");
			}
		});
		$('#cats tbody tr').mouseover(function() {
			$(this).addClass('zebraHover');
		});
		$('#cats tbody tr').mouseout(function() {
			$(this).removeClass('zebraHover');
		});
		$('#catinfo > div').hide();
		$('#catinfo h3').click(function() {
		  $(this).next().animate(
		    {'height':'toggle'}, 'slow', 'easeOutBounce'
		  );
		});
	}

	$(document).ready(initialize());
})();