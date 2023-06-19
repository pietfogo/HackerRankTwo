'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    
        arr.sort(function(a, b) {
    return a - b;
    })
    
    function min() {
        var arrayOrg = 0
    for (let i = 0; i < arr.length - 1; i++) {
        arrayOrg = arrayOrg + arr[i]
    }
    return arrayOrg
        }
        
    function max() {
        var arrayOrg2 = 0
        for (let i = 1; i != arr.length; i++) {     
            arrayOrg2 = arrayOrg2 + arr[i]
        }
        return arrayOrg2
    }
        console.log(min(), max())
}
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
