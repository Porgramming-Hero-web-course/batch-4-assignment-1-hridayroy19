{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        for (const keyName of keys) {
            // console.log(keyName, "name");
            if (!(keyName in obj)) {
                return false
            }
        }
        return true
    }

    const user = { name: "Alice", age: 25, email: "alice@example.com" }
    // console.log(validateKeys(user,["name" , "age","email"]));
    // console.log(validateKeys(user,["name" , "location","phone",]));


//db



}