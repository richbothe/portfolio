$( document ).ready( function () {

	//  Overall Program Objectives
	function overallProgramObjectives() {

		// sets the position of the objective line.
		$( '#overallProgramObjectives .objective-to-date' ).css( { 
			position: 'absolute',
			bottom: '25%' // Raplce value with variable for objective.
		} );

		// Percent flag, delay display until graphs are filled.
		var showFlag = function( position, delay ) {
			$( '#overallProgramObjectives .flag' ).css( 'margin-top', position );
			$( '#overallProgramObjectives .flag' ).delay( delay ).fadeIn( 'slow' );
		}

		// Animation container
		var bargraph = Snap( '#overallProgramObjectives svg' );

		// This is the gray background.
		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );

		// (x=4, y=0, width=112, height=0)
		// Initial state of graph has height set to 0.
		var volume = bargraph.rect( 4, 180, 112, 0 );

		// Fill graph, set graph and flag stop point to the same (32).
		function fillGraph() {
			volume.animate( { height: 180, y: 32 }, 2000, mina.linear, showFlag( 32, 2000 ) );
		}

		fillGraph();
	}

	//  Service Objective
	function serviceObjective() {

		$( '#serviceObjective .objective-to-date' ).css( { 
			position: 'absolute',
			bottom: '25%'
		} );

		var showFlag = function( position, delay ) {
			$( '#serviceObjective .flag' ).css( 'margin-top', position );
			$( '#serviceObjective .flag' ).delay( delay ).fadeIn( 'slow' );
		}

		var bargraph = Snap( '#serviceObjective svg' );

		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );


		var volume = bargraph.rect( 4, 180, 112, 0 );

		function fillGraph() {
			volume.animate( { height: 180, y: 21 }, 2000, mina.linear, showFlag( 21, 2000 ) );
		}

		fillGraph();
	}

	//  Fast Start Objective
	function fastStartObjective() {

		var objective = function() {
			$( '#fastStartObjective .objective-to-date' ).css( {
				bottom: '100%'
			} );
		}

		function checkPercent() {
			var percent = $( '#fastStartObjective .percent' ).text();

			if ( percent == '100%' ) {
				$( '#fastStartObjective' ).find( '.objective-to-date' ).css( { display: 'none' } );
			}
		}

		var showFlag = function( position, delay ) {
			$( '#fastStartObjective .flag' ).css( 'margin-top', position );
			$( '#fastStartObjective .flag' ).delay( delay ).fadeIn( 'slow' ).promise().done( function() {
				checkPercent();
			} );
		}

		var bargraph = Snap( '#fastStartObjective svg' );

		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );


		var volume = bargraph.rect( 4, 180, 112, 0 );

		function fillGraph() {
			volume.animate( { height: 180, y: 0 }, 2000, mina.linear, showFlag( 0, 2000 ) );
		}

		fillGraph();
	}

	//  Parts Objective
	function partsObjective() {

		$( '#partsObjective .objective-to-date' ).css( {
			position: 'absolute',
			bottom: '79%'
		} );

		var showFlag = function( position, delay ) {
			$( '#partsObjective .flag' ).css( 'margin-top', position );
			$( '#partsObjective .flag' ).delay( delay ).fadeIn( 'slow' );
		}

		var bargraph = Snap( '#partsObjective svg' );

		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );


		var volume = bargraph.rect( 4, 180, 112, 0 );

		function fillGraph() {
			volume.animate( { height: 180, y: 36 }, 2000, mina.linear, showFlag( 36, 2000 ) );
		}

		fillGraph();
	}

	//  Earn Back Objective
	function earnBackObjective() {

		$( '#earnBackObjective .objective-to-date' ).css( {
			position: 'absolute',
			bottom: '75%'
		} );

		var showFlag = function( position, delay ) {
			$( '#earnBackObjective .flag' ).css( 'margin-top', position );
			$( '#earnBackObjective .flag' ).delay( delay ).fadeIn( 'slow' );
		}

		var bargraph = Snap( '#earnBackObjective svg' );

		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );


		var volume = bargraph.rect( 4, 180, 112, 0 );

		function fillGraph() {
			volume.animate( { height: 180, y: 48 }, 2000, mina.linear, showFlag( 48, 2000 ) );
		}

		fillGraph();
	}

	//  Service & Parts Objective
	function servicePartsObjective() {

		$( '#servicePartsObjective .objective-to-date' ).css( {
			position: 'absolute',
			bottom: '25%'
		} );

		var showFlag = function( position, delay ) {
			$( '#servicePartsObjective .flag' ).css( 'margin-top', position );
			$( '#servicePartsObjective .flag' ).delay( delay ).fadeIn( 'slow' );
		}

		var bargraph = Snap( '#servicePartsObjective svg' );

		var emptyGraph = bargraph.rect( 4, 0, 112, 180 ).attr( {
			fill: '#7a8899'
		} );


		var volume = bargraph.rect( 4, 180, 112, 0 );

		function fillGraph() {
			volume.animate( { height: 180, y: 27 }, 2000, mina.linear, showFlag( 27, 2000 ) );
		}

		fillGraph();
	}

	overallProgramObjectives();
	serviceObjective();
	fastStartObjective();
	partsObjective();
	earnBackObjective();
	servicePartsObjective();

} );