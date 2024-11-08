{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Circle = {
        shape: "circle";
        radius: number;
    }

    type shape = Circle | Rectangle;

    function calculateShapeArea(shape: shape): number | undefined {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius ** 2;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        console.error("shape type error");
        return undefined

    }

    const cireleCalculate = calculateShapeArea({ shape: "circle", radius: 5 })
    console.log(cireleCalculate);
    const radiusCalculate = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, })
    console.log(radiusCalculate);


}