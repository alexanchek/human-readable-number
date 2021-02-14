module.exports = function toReadable(number) {
    digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    tens1 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    tens2 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    condition = String(number).split("").length;

    if (condition === 1) {
        return digits[number];
    } else if (condition === 2 && number < 20) {
        index = number % 10;
        return tens1[index];
    } else if (condition === 2 && number < 100) {
        digit = number % 10;
        ten = Math.floor(number / 10);

        if (number % 10 != 0) {
            return tens2[ten] + " " + digits[digit];
        } else {
            return tens2[ten];
        }
    } else if (condition === 3) {
        digit = number % 10; // rhe end
        ten = Math.floor((number / 10) % 10); // the middle
        hundred = Math.floor(number / 100); // the beginning

        // 100 200 300 400 500
        if (number % 100 === 0) {
            return digits[hundred] + " hundred";
        } else {
            numberTen = number % 100;

            if (numberTen > 19) {
                if (numberTen % 10 != 0) {
                    return (
                        digits[hundred]+" hundred " +tens2[ten] +" " +digits[digit])
                } else {
                    return digits[hundred] + " hundred " + tens2[ten];
                }
            } 
            else if (numberTen > 9) {
                ten = numberTen %10
                return digits[hundred]+ " hundred "+tens1[ten]
            }
            else {
                return digits[hundred]+ " hundred "+digits[digit] 
            }
        }
    }
};
