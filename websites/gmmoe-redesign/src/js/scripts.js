$( document ).ready( function () {

	// Set "active" class on selected menu item.
	$( '.nav a' ).on( 'click', function() {
	   $( '.nav' ).find( '.active' ).removeClass( 'active' );
	   $( this ).parent( 'li' ).addClass( 'active' );
	} );


	// Set "active" class on selected submenu item.
	$( '.multi-level a' ).on( 'click', function() {
       $( '.multi-level' ).find( '.active' ).removeClass( 'active' );
       $( this ).parents().addClass( 'active' );
    } );

	$( function() {
	    $( '.dropdown' ).hover( function() {
	        $( this ).addClass( 'open' );
	    },
	    function() {
	        $( this ).removeClass( 'open' );
	    } );
	} );

	// Initialize dropkick
	$( 'select' ).dropkick();

	// Initialize slick (slider on landing page)
	$( '.slider' ).slick( {
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="fa fa-chevron-circle-left slick-arrow slick-disabled">Prev</button>',
		nextArrow: '<button type="button" class="fa fa-chevron-circle-right slick-arrow">Next</button>'
	} );

	//program-details container content display
	$( '.tile-2, .tile-3, .tile-4' ).hide();

	$( '.tile-link-1' ).click( function() {
		$( '.tile-1' ).show();
		$( '.tile-2, .tile-3, .tile-4' ).hide();
		$( '.tile-link-2, .tile-link-3, .tile-link-4' ).removeClass( 'linkActive' );
		$( this ).addClass( 'linkActive' );
	} );
	$( '.tile-link-2' ).click( function() {
		$( '.tile-2' ).show();
		$( '.tile-1, .tile-3, .tile-4' ).hide();
		$( '.tile-link-1, .tile-link-3, .tile-link-4' ).removeClass( 'linkActive' );
		$( this ).addClass( 'linkActive' );
	} );
	$( '.tile-link-3' ).click( function() {
		$( '.tile-3' ).show();
		$( '.tile-1, .tile-2, .tile-4' ).hide();
		$( '.tile-link-1, .tile-link-2, .tile-link-4' ).removeClass( 'linkActive' );
		$( this ).addClass( 'linkActive' );
	} );
	$( '.tile-link-4' ).click( function() {
		$( '.tile-4' ).show();
		$( '.tile-1, .tile-2, .tile-3' ).hide();
		$( '.tile-link-1, .tile-link-2, .tile-link-3' ).removeClass( 'linkActive' );
		$( this ).addClass( 'linkActive' );
	} );

	// Append <th> to end of table.pax
	$( 'table.pax>thead>tr' ).append( '<th></th>' );

} );