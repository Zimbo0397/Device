



$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
});





$(window).on('load', function() {

	$('.ui-piker').each(function() {
		$(this).datepicker().datepicker("option", "dateFormat", "d M, y");
	});

	$('.t-btn').each(function() {
		var $self = $(this);
		$self.on('click', function(e) {
			e.preventDefault();
			$self.closest('table').toggleClass('close');

			if($self.text() == 'more...') {
				$self.text('less...')
			} else {
				$self.text('more...')
			}
			
		})
	});

	$('#sett-btn').on('click', function(e) {
		e.preventDefault();
		$('#sett-container').toggleClass('open');
	});

	$('#mobile-nav-btn').on('click', function() {
		$('#nav-list').toggleClass('open')
	});
	
});

