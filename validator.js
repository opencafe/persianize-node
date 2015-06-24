module.exports = {

	version: '0.0.0',

	regex: '',

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
	alpha_num: function( input ) {

		this.regex = /^([\u0600-\u06FF]{1,})+$/;

		return this._run( input );

	},

	/*********************************************
	* Validate Persian number and alphabet
	**********************************************
	* @since 24 Jun 2015
	* @var input string
	* @return boolean
	*/
	text: function( input ) {

		this.regex = /^([\u0600-\u06FF|\s|\u200C])+$/;

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

		if( this.regex.test( input ) ) {

			return true;

		} else {

		    return false;

		}

	}

}