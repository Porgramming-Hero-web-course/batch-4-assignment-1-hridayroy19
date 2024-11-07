{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class car {
        make: string;
        model: string
        year: number

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year
        }
        getCarAge(): number {
            return new Date().getFullYear() - this.year;
        }
    }

    const cars = new car("Honda", "Civic", 2018)
    // console.log(` the car ago ${cars.getCarAge()} years`);




}