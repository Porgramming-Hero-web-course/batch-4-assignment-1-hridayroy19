{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        console.error("shape type error");
        return undefined;
    }
    var cireleCalculate = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(cireleCalculate);
    var radiusCalculate = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
    console.log(radiusCalculate);
}
