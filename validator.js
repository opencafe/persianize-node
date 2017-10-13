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
	 * @var integer
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
	 * @var integer
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
	 * @var integer
	 * @return boolean
	 */
	postalCode : function( input ) {

		this.regex = /^(\d{5}-?\d{5})$/;

		return this._run( input );

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
