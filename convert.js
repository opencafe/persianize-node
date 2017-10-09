module.exports = {

	persian_number: [ "\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"],

	result: '',

	temp: '',

	/*********************************************************************
	* Convert english number to persian number
	**********************************************************************
	* @since 25 Jun 2015
	* @var input string
	* @return object
	*/
	number: function( input ) {

		if ( input == null ) {

			input = this.result;

		}

		for (var i = 0; i < input.length; i++) {

			this.result += this.persian_number[ parseInt( input.charAt( i ) ) ];

    }

		return this;

	},

	/*********************************************************************
	* Convert english number to persian number in persin text
	**********************************************************************
	* @since 08 July 2015
	* @var input string
	* @return object
	*/
	alphaNum: function( input ) {

		if ( input == null ) {

			input = this.result;

		}
		this.result = input;

		for (var i = 0; i < input.length; i++) {

			if ( isNaN( parseInt( input.charAt( i ) ) ) ) continue;

			else {

			this.temp = this.persian_number[ parseInt( input.charAt( i ) ) ];

			this.result = this.result.replace( input.charAt( i ), this.temp );

			}

		}

		return this;

	},

	 /**********************************************************************
	 * Detect persian verbs and replace space with half-space
	 ***********************************************************************
	 * @since 30 Jun 2015
	 * @var input string
	 * @return Object
	 */
	halfSpace: function( input ) {

		if ( input == null ) {

			input = this.result;

		}

			this.result = input.replace(/(\s[\u0645]+[\u06CC])+\s/g, "$1\u200C");

			this.result = this.result.replace(/([\u0647])+\s+([\u0627]+[\u0645]||[\u0627]+[\u0649]||[\u0627]+[\u0649]+[\u0649]||[\u0627]+[\u0649]+[\u0645]||[\u0649]+[\u0646]+[\u062f]||[\u0627]+[\u0649]+[\u062f])/g, "$1\u200C$2");

			return this;

	},

	/**********************************************************************
	* Convert arabic charachters to persian
	***********************************************************************
	* @since 30 Jun 2015
	* @var input string
	* @return Object
	*/
	removeArabicChar: function( input ) {

		  if ( input == null ) {

				input = this.result;

			}

			this.result = input.replace(/[\u064A]/g,"\u06CC");

			this.result = this.result.replace(/[\u0643]/g, "\u06A9");

			return this;

		},


	/**********************************************************************
	* Convert inputs to valid persian format with all options
	***********************************************************************
	* @since 08 July 2015
	* @var input string
	* @return string
	*/
	all: function( input ) {

		if ( input == null ) {

			input = this.result;

		}
		 	this.result = input;

		  this.alphaNum(this.result);

			this.halfSpace( this.result );

			this.removeArabicChar( this.result );

			return this;

		},

   /**********************************************************************
	 * Return result of all operations on value
	 ***********************************************************************
	 * @since 25 Jun 2015
	 * @return string
	 */
	get: function() {

		return this.result;

	}

}
