{
//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

function getProperty <T , K extends keyof T> (objcet : T , key:K) : T[K]{
    return objcet[key]
  }

  const property = {
    name: "Hriody Roy",

};
const name = getProperty(property, "name") 
// console.log(name); 











}