var persianize = require('./persianize');
    assert = require( 'assert' );

 describe('test validator method :', function() {

    it('Persian number', function() {
      assert.equal(true, persianize.validator().number("۳"));
      assert.equal(false, persianize.validator().number("1"));
    });

    it('Persian alphabet', function() {
      assert.equal(true, persianize.validator().alpha("فارسی"));
      assert.equal(false, persianize.validator().alpha("persian"));
    });

    it('Persian alphaNum', function() {
      assert.equal(true, persianize.validator().alphaNum("۳فارسی"));
      assert.equal(false, persianize.validator().alphaNum("persian1"));
    });

    it('Persian text', function() {
      assert.equal(true, persianize.validator().text("۳ فارسی"));
      assert.equal(false, persianize.validator().text("persian 1"));
    });

    it('Iran mobile number', function() {
      assert.equal(true, persianize.validator().mobile("09355555555"));
      assert.equal(true, persianize.validator().mobile("00989355555555"));
      assert.equal(false, persianize.validator().mobile("0019354444"));
    });

    it('Iran bank card number', function() {
      assert.equal(true, persianize.validator().cradNumber("6274129005473742"));
      assert.equal(false, persianize.validator().cradNumber("6274129107473842"));
    });

    it('Iran phone number', function() {
      assert.equal(true, persianize.validator().phone("37236445"));
      assert.equal(false, persianize.validator().phone("17236445"));
    });

    it('Iran postal code', function() {
      assert.equal(true, persianize.validator().postalCode("1619735744"));
      assert.equal(true, persianize.validator().postalCode("16197-35744"));
      assert.equal(false, persianize.validator().postalCode("11619735744"));
    });

    it('Iran sheba number', function() {
      assert.equal(true, persianize.validator().sheba("IR062960000000100324200001"));
      assert.equal(false, persianize.validator().sheba("IR06296000000010032420000"));
    });

    it('Iran meli code', function() {
      assert.equal(true, persianize.validator().meliCode("0013542419"));
      assert.equal(true, persianize.validator().meliCode("3240175800"));
      assert.equal(false, persianize.validator().meliCode("324011122"));
    });

  });
