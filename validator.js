var
range = function( start, end ) {
	var result = [];
	if ( /[A-Z a-z]/.test( start ) && /[A-Z a-z]/.test( end ) ) {
		for ( var i = start.charCodeAt(0), j = end.charCodeAt(0); i <= j; ++i ) {
	    	result.push(String.fromCharCode(i));
	  	}
	} else {
		for ( var i = start, j = end; i <= j; ++i ) {
				result.push( parseInt( i ) );
		}

	}

  	return result;
};

module.exports = {

	version: '0.0.0',

	regex: '',

	result: null,

	/**********************************************
	 * Validate persian numbers
	 **********************************************
	 * @since 21 Jun 2015
	 * @var integer string
	 * @return boolean
	 */
	number: function( input ) {

		/**
		 * Persian number range between 0 and 9
		 */
		this.regex = /^([\u06F0-\u06F9]{1,})+$/;

		return this._run( input );

	},

	/**********************************************
	 * Validate persian alphabet
	 **********************************************
	 * @since 21 Jun 2015
	 * @var input string
	 * @return boolean
	 */
	alpha: function( input ) {

		/**
		 * Persian alphabet range
		 */
		this.regex = /^([\u0600-\u06EF]{1,})+$/;

		return this._run( input );

	},

	/*********************************************
	* Validate Persian number and alphabet
	**********************************************
	* @since 24 Jun 2015
	* @var input string
	* @return boolean
	*/
	alphaNum: function( input ) {

		this.regex = /^([\u0600-\u06FF]{1,})+$/;

		return this._run( input );

	},

	/********************************************************
	* Validate Persian number, alphabet, space and half-space
	*********************************************************
	* @since 24 Jun 2015
	* @var input string
	* @return boolean
	*/
	text: function( input ) {

		this.regex = /^([\u0600-\u06FF|\s|\u200C])+$/;

		return this._run( input );

	},


	/*********************************************************
	 * Validate Iran mobile numbers
	 *********************************************************
	 * @since 24 Jun 2015
	 * @var input string
	 * @return boolean
	 */
	mobile: function( input ) {

		this.regex = /^(((98)|(\+98)|(0098)|0)(90|91|92|93){1}[0-9]{8})+$/;

		return this._run( input );

	},

	/*********************************************************
	 * Validate Iran bank card number
	 *********************************************************
	 * @since 13 Oct 2017
	 * @var input string
	 * @return boolean
	 */
	cradNumber: function( input ) {

		this.regex = /^\d{16}$/;

		if ( this._run( input ) ) {

			var sum = 0,
				temp;

			input = input.toString();

			for ( var i = 1; i <= 16; i++ ) {
				temp = input.charAt(i - 1);
				temp = i % 2 === 0 ? parseInt(temp) : parseInt(temp) * 2;
				temp = temp > 9 ? temp - 9 : temp;
				sum += temp;
			}

			this.result = sum % 10 === 0;

		} else {
			this.result = false;
		}

		return this.result;

	},

	/*********************************************************
	 * Validate Iran phone number
	 *********************************************************
	 * @since 13 Oct 2017
	 * @var input string
	 * @return boolean
	 */
	phone : function( input ) {

		this.regex = /^[2-9][0-9]{7}$/;

		return this._run( input );

	},

	/*********************************************************
	 * Validate Iran postal code
	 *********************************************************
	 * @since 13 Oct 2017
	 * @var input string
	 * @return boolean
	 */
	postalCode : function( input ) {

		this.regex = /^(\d{5}-?\d{5})$/;

		return this._run( input );

	},

	/*********************************************************
	 * Validate sheba number
	 *********************************************************
	 * @since 18 Nov 2017
	 * @var input string
	 * @return boolean
	 */
	sheba : function( input ) {

		var ibanReplaceValues = [],
			ibanReplaceChars = [],
			tmpIBAN;

		if ( input ) {

			input = input.replace(/[\W_]+/, '');

			if ( ( input.length < 4 || input.length > 34 ) || ( ! isNaN( input[0] ) ||
			 ! isNaN( input[1] ) ) || ( isNaN( input[2] ) || isNaN( input[3] ) ) ) {

				this.result = false;
			}

			ibanReplaceChars = range('A', 'Z');

			range(10, 35).forEach( function( tempvalue ) {
				ibanReplaceValues.push( tempvalue.toString() );
			});

			tmpIBAN = input.substr( 4, input.length - 4 ) + input.substr( 0, 4 );

			ibanReplaceChars.forEach( function( value, index ) {
				for (var i = 0; i < tmpIBAN.length; i++) {
					if ( tmpIBAN[i] == value ) {
						tmpIBAN = tmpIBAN.replace( tmpIBAN[i], ibanReplaceValues[index] );
					}
				}
			});

			tmpValue = parseInt( tmpIBAN.substr( 0, 1 ) );

			for ( var i = 1; i < tmpIBAN.length; i++ ) {
				tmpValue *= 10;

				tmpValue += parseInt( tmpIBAN.substr(i, 1) );

				tmpValue %= 97;
			}

			if (tmpValue != 1) {
				return false;
			}

			return true;

		}

		return false;

	},

	/*********************************************************
	 * Validate meli code number
	 *********************************************************
	 * @since 18 Nov 2017
	 * @var input string
	 * @return boolean
	 */
	meliCode : function( input ) {

		if (! /^\d{8,10}$/.test(input) || /^[0]{10}|[1]{10}|[2]{10}|[3]{10}|[4]{10}|[5]{10}|[6]{10}|[7]{10}|[8]{10}|[9]{10}$/.test(input) ) {
			return false;
		}

		var sub = 0,
			control;

		if (input.length == 8) {
			input = '00' + input;
		} else if (  input.length == 9) {
			input = '0' + input;
		}

		for ( var i = 0; i <= 8; i++) {
			sub = parseInt( sub ) + ( parseInt( input[i] ) * ( 10 - i ) );
		}

		if (( parseInt( sub ) % 11 ) < 2) {
			control = ( parseInt( sub ) % 11 );
		} else {
			control = 11 - ( parseInt( sub ) % 11 );
		}
		
		if (input[9] == control) {
			return true;
		} else {
			return false;
		}

	},

	/**********************************************
	 * Run validate reqular expresion
	 **********************************************
	 * @since 21 Jun 2015
	 * @var integer string
	 * @return boolean
	 */
	_run: function( input ) {

		if ( this.regex.test( input ) ) {
			return true;
		} else {
		    return false;
		}

	}

}
