{
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const array = [1,5,1,4,5,4,8,8,3,7];

    function removeDuplicates(array:number[]):number[] {
        return array.filter((item, index)=> array.indexOf(item) === index)        
    } 
    const remove = removeDuplicates(array)
    // console.log(`single data ${remove}`);

    



}