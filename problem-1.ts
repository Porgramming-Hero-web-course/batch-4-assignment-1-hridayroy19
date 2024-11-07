{

    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(arry: number[]): number {
        let sum = 0;
        for (let i = 0; i <arry.length; i++) {
            sum += arry[i]
        }
        return sum;

    }
    const numbers = sumArray([1, 5, 8, 4, 9, 7])
    // console.log(`total number is : ${numbers}`);

}