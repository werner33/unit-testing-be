

// find the count of integers, between a and b divided by k

// a =  2, b = 10, k = 3

// 2,3,4,5,6,7,8,9,10
//                 | 
//   3     6     9

// return the count = 3;


function divCount (a, b, k) {
    return (Math.floor(b / k) - Math.floor((a-1) / k));
}

module.exports = divCount;