let collage = {
    nam : 'Nazipur Gvot. Model High School',
    calss : [ '9' , '10'],
    events : [ 'Natkok' , 'Movie' , 'Song'],
    Uniform : {
        color : 'block',
        dress : {
            Male : 'full pant and full shart',
            Female : 'borkha',
        }

    } 
}
let cityDetails = { 
    cityName: "Dhaka gulshan 1", 
    population: 20000000,
};

collage.Uniform.dress["cityDetails"] = cityDetails;
console.log( collage.Uniform.dress)