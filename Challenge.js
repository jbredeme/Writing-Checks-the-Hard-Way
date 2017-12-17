// Author: Jarid Bredemeier
// Thursday, March 16, 2017
// Programming challenge


/**
 * Fraction class represents a fraction
 */
class Fraction {
    /**
     * Fraction class constructor
     *
     * @param {number} numerator is representative of a numerator in a fraction
     * @param {number} denominator is representative of a denominator in a fraction
     * @param {number} units is a quantity chosen as a standard in terms of which other quantities may be expressed
     */
    constructor(numerator, denominator, units) {
            this.numerator = numerator;
            this.denominator = denominator;
            this.units = units;

    }

    /**
     * Creates a string 
     *
     * @return {string} a string containing the numerator, denominator, and unit values
     */
    toString() {                                //=> override toString method
        return (this.numerator + '/' + this.denominator + ' ' + this.units);

    }

}


/**
 * This fuction takes an integer value that represents cents in a US dollar and converts the 
 * fractional value into a fraction with a numerator and denominator accurate to the floor 
 * of the hundreths decimal place.
 *
 * @param {number} cents a postive non-zero integer from 1 to 99 inclusive that represents cents of a US dollar
 * @return {object} fraction object containing numerator and denominator values of a fraction in the most
 * simplified equivalent to the fractional value of cents to a dollar without consideration for accuracy
 * beyond the hundreths decimal place. There is no numeric rounding operations, floor values only.
 */
function decimalToFraction(cents) {
    let decimalCents = 0.0;                     //=> decimal value of cents
    let frac = new Fraction(0, 0, "dollar");    //=> instantiate faction object, block level scope

    // Validate a couple rudimentary properties, this is by no means a fully robust validiation check
    try {
        // Validate that cents is an integer
        if(!(cents === parseInt(cents, 10))) {
            throw "Error: incorrect data type, cents must be of type integer."

        }

        // Validate that cents is within the correct range of 1 through 99 inclusive
        if((cents < 1) || (cents > 100)) {
            throw "Error; value " + cents + " is out of range."

        }

    } catch(err) {
        console.log(err);

    }

    // Ensure that cents is positive and not equal to zero
    if(cents <= 0) {
        return frac;                            //=> return fraction object

    } else {
        decimalCents = cents / 100;             //=> convert cents(integer) into decimals

        for(j = 1; j < 100; j++) {              //=> outer loop: numerator
            for(k = j + 1; k <= 100; k++) {     //=> inner loop: denominator
                // Decimal value to the hundreths place precision base 10 without rounding convert to fraction to 
                // decimal, multiply by 100, take the floor of the product, divide by 100.
                if(((Math.floor((j/k) * 100)) / 100 ) === decimalCents) {
                    frac.numerator = j;
                    frac.denominator = k;
                    break;
                }

            }

            if((frac.numerator !== 0) && (frac.denominator !== 0)) {  //=> break out of for loop if fraction was found
                break;

            }

        }
        return frac;                            //=> return fraction object

    }

}

// Run and display
Array.apply(null, Array(99)).map((i, v) => v + 1).forEach(
    cents => console.log(cents + ' cent(s) => ' + decimalToFraction(cents))

);