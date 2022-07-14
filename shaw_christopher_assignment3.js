/*
Chris Shaw
Javascript Assignment3
12/3/19
*/

function sumDigits(n) {
    //sets temp to the number passed and total to 0
    var temp= n;
    var total = 0;
    //loops while there is still digits remaining
    while(temp>0){
        //slices off the last digit and adds it to the counter
        total += (temp % 10);
        //sets the temp variable without the last digit
        temp /= 10;

    }
    //returns total
    return Math.floor(total);

}

//Test cases
console.log(sumDigits(234));
console.log(sumDigits(222));
//could not figure out the +1 bug on this example
console.log(sumDigits(1234));



