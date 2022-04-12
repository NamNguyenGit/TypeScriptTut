const carMakers: string[] = ['ford', 'mercedes', 'audi'];
const dates = [new Date(), new Date()];

const carByMake = [
    ['f150'],
    ['corolla'],
    ['canvas']
]

//* help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop();

//* Prevent incompatible values
carMakers.push("100")

//* Help with 'map'
carMakers.map((car: string) => {
    return car.toUpperCase();
})

//* Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10')
importantDates.push(new Date());
