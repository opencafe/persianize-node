module.exports = {

	persian_number: [ "\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"],

  result: '',

	/**************************************************************************
	 * Convert english number to persian number
	 **************************************************************************
	 * @since 25 Jun 2015
	 * @var input string
	 * @return object
	 */
	number: function( input ){

  	for (var i = 0; i < input.length; i++) {

    	this.result += this.persian_number[parseInt(input.charAt(i))];

  }

  	return this;

	},

  /**************************************************************************
	 * Return result of all operations on value
	 **************************************************************************
	 * @since 25 Jun 2015
	 * @return string
	 */
	get: function(){

		return this.result;

	}

}
