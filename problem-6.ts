{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface profile {
        name: string;
        age: number;
        email: string
    }

    function updateProfile(profile: profile, updated: Partial<profile>): profile {
        return { ...profile, ...updated }
    }

    const userProfiles: profile = { name: "hridoy", age: 52, email: "hrhridoyroy@gmail.com" }
    // console.log(updateProfile);

    const result = updateProfile(userProfiles, { name: "roy", age:21 })
    // console.log(result);





}