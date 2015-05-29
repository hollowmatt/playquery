// IIFE
(function() {
	// js body here
	function initialize() {
		console.log('initialize');
		alternateRows('cats');
		$('#hideButton').click(function() {
			if ($('#cats').is(':visible')) {
				$('#cats').hide();
				$('#hideButton').val("Show");	
				$('#catstatus').text("These are the current cats.")
			} else {
				$('#cats').show();
				$('#hideButton').val("Hide");	
				$('#catstatus').text("Wher are the current cats?")
			}
		});
	}

	//Function to add alternating row color to a table
	function alternateRows(tableID) {
		console.log("Table to alternate: " + tableID);
		$('#' + tableID + ' tbody tr:even').addClass('zebra');	
	}


	$(document).ready(initialize());
})();