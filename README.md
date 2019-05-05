# Writing Checks the Hard Way
A simple programming challenge used to demonstrate my programming skills and problem-solving abilities using an Object Oriented approach with JavaScript (ECMAScript 6).

## Challenge Problem
In an effort to be as difficult of a customer as possible, you decide that from now on you will write all of your checks using a fraction for the cents portion of the amount. For example, to pay for a bill that is $23.87 you want to fill out your check like the one below.
<img src="images/image13.png">

Note that any fraction of a dollar that you write into a check will be rounded down to the nearest cent, meaning that multiple fractions exist that will round down to the same number of cents (e.g. both <img src="images/image1.png"> and <img src="images/image2.png"> round down to $0.01). Given that your goal is to be a difficult customer, you should always use the fraction with the smallest possible positive denominator. The check in Figure 1 could have been written as <img src="images/image3.png"> but it is slightly more difficult to convert <img src="images/image4.png"> into cents than it is to convert <img src="images/image5.png">.


* To convert 1 cent ($0.01), any fraction between <img src="images/image6.png"> and <img src="images/image7.png"> might be used (or an infinite number of other fractions) since, when rounded down to the nearest hundredth, each converts to .01. However, the one with the smallest denominator is <img src="images/image6.png">
* To convert 3 cents ($0.03), any fraction between <img src="images/image8.png"> and <img src="images/image9.png"> might be used (or an infinite number of other fractions) since, when rounding down to the nearest hundredth, each converts to .03. However, the one with the smallest denominator is <img src="images/image8.png">
* The solution fractions for 7 cents, 8 cents, and 9 cents are <img src="images/image10.png">, <img src="images/image11.png">, and <img src="images/image12.png"> respectively

## Code
Create a function (and supporting fraction class/object) that takes in some fraction of a dollar in units of cents (1¢  to 99¢) and returns a Fraction object in units of dollars.

## Screenshot
<img src="screenshots/sample_output_03.png" > 

## Built with
* JavaScript ES6
* ESLint
* Notepad++

## Author
* **Jarid Bredemeier**

## License
Apache license 2.0
