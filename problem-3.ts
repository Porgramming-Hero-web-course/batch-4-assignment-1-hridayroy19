{
    //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const sentence = "TypeScript is great.I love TypeScript!";
    const word = "typescript";

    function countWordOccurrences(sentence: string, word: string): number {
        const x = new RegExp(word, "gi");
        const metch = sentence.match(x);
        return metch ? metch.length : 0;
    }

    const result: number = countWordOccurrences(sentence, word)
    // console.log(`number is ${result}`);

    // done
}


