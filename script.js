let text=`Here the carName is a variable and taken from the function. we can see that it's type is ${typeof carName}`
console.log(`${text}`);

function checkvariable(){
    let carName;
    let text=`Here carName is a local variable inside the function and it's type is ${typeof carName}`;
    console.log(`type of variable text is ${typeof text}`);
    document.getElementById("kemo").innerHTML=text;
}
checkvariable();

function sum(a,b){
    return a+b;
}
let x=sum(10,20);
console.log(`Sum of two numbers is : ${x}`);
console.log(sum(-10,5));
document.getElementById("new").innerHTML=sum(100,-75);
console.log(sum(1000,-875));
document.getElementById("othorbo").innerHTML=sum(500,-54);

function farenheit(c){
    return (c*9/5)+32;
}
console.log(farenheit(38));

function celToFaren(cel){
    return (cel*9/5)+32;
}
console.log(celToFaren(45));

function Findlargest(a,b,c){
    return Math.max(a,b,c);
}
console.log(Findlargest(10,15,20));

function FindLarg(x,y,z){
    return Math.max(x,y,z);
}
console.log(FindLarg(10,5,48));

function isEven(number){
    return number%2===0;
}
console.log(isEven(49));

function is_even(number_1){
    return number_1%2===0;
}
console.log(is_even(52));

function isOdd(num_1){
    return num_1%2===1;
}
console.log(isOdd(49));

function reverse_string(str){
    return str.split('').reverse('').join('');
}
console.log(reverse_string("Bangladesh"));
console.log(reverse_string("world"));
console.log(reverse_string("khulna"));

function rev_str(str){
    return str.split('').reverse('').join('');
}
console.log(rev_str("we_are_very_happy"));
console.log(rev_str("we are very happpy"));

function factorial(N){
    if (N===0 || N===1){
        return N;
    }
    else{
        return N*factorial(N-1);
    }
}
console.log(factorial(6));
console.log(factorial(5));

function facto(digit){
    if (digit ===0 || digit ===1){
        return 1;
    }
    else{
        return digit*facto(digit-1);
    }
}
console.log(facto(7));

function factous(numb){
    if ( numb===0 || numb ===1){
        return 1;
    }
    else{
        return numb*factous(numb-1);
    }
}
console.log(factous(10));

function isPalindrom(str){
    let reversed=str.split('').reverse('').join('');
    return reversed;
}

console.log(isPalindrom("racecar"));

function is_palin(strng){
    let recipr=strng.split('').reverse('').join('');
    return recipr;
}
console.log(is_palin("kamak"));

// Problem : Count Vowels in a String

function count_vowels(stng){
    let vowels="aeiouAEIOU";
    let count=0;
    for (let char of stng){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(count_vowels("Bangladesh"));

function find_vowels(stringg){
    let vowels="aeiouAEIOU";
    let countt=0;

    for (let char of stringg){
        if (vowels.includes(char)){
            countt++;
        }

        
    }
    return countt;
}
console.log(find_vowels("we are bangladeshi and we should fight against poverty"));

class Animal{
    constructor(name,species){
        this.name=name;
        this.species=species;
    }
    // method
    speak(){
        console.log(`${this.name} says hello`);
    }
}
// creating an instance of the class
const Dog = new Animal("Tom","Dog");
Dog.speak();

// class Goat{
//     // create constructor
//     constructor(names,specie){
//         this.names=names;
//         this.specie=specie;
//     }
//     // create method
//     speak(){
//         console.log(`${this.names} is calling mayo mayo`);
        
//         // console.log(`${this.names} is calling mayo mayo');
//         // console.log(`${this.specie} is a new breed of the goat`);
//     }
//     breed(){
//         console.log(`${this.specie} is new breed of goat in Bangladesh`);
//     }
// }
//     // create instance

//     Const chagol=new Goat("Ram Chagol","Black_Bengal_Tiger");
//     chagol.speak();
//     chagol.breed();

class country{
    // create constructor
    constructor(name,people,area){
        this.name=name;
        this.people=people;
        this.area=area;
    }
    // create method
    beautiful(){
        console.log(`${this.name} is a beautiful country`);
    }
    million(){
        console.log(`${this.people} people live in Bangladesh`);
    }
    place(){
        console.log(`${this.area} is the total area of Bangladesh`);
    }
}
const Desh=new country("Bangladesh","two_hundred_million","two_lac_square_km");
Desh.beautiful();
Desh.million();
Desh.place();


// create a class
class human{
    // create constructor
    constructor(name,age,education,university){
        this.name=name;
        this.age=age;
        this.education=education;
        this.university=university;

    }
    // create method
    man_name(){
        console.log(`Name of the man is ${this.name}`);
    }
    man_age(){
        console.log(`Age of the man is ${this.age} years`);
    }
    man_education(){
        console.log(`This man have studied in ${this.education}`);
    }
    man_university(){
        console.log(`The name of the university is ${this.university}`);
    }
}
// create instance
const profile=new human("Samiul Islam",11, "Sociology", "BUET");
profile.man_name();
profile.man_age();
profile.man_education();
profile.man_university();

class Dog_1 extends Animal{
    // create constructor
    constructor(name,breed){
        super(name,'Dog_1');
        this.breed=breed;
    }
    // overriding a method
    speak(){
        console.log(`The name of the dog is ${this.name}, it's breed is ${this.breed}`);
    }
}
// create instance
const myDog=new Dog_1("Tom","German Shepherd");
myDog.speak();

// Static method: they are called on class rather than on an object method
class Mathhelper{
    static add(x,y){
        return x+y;
    }
    
}
// No method is created and the class is directly called on
console.log(`The sum of the value x and y is ${Mathhelper.add(20,20)}`);

class math_helper{
    static multi(x,y){
        return x*y;
    }
}
console.log(`Multiplication of the value of x and y is ${math_helper.multi(10,20)}`);

class mathe_helper{
    static subtraction(x,y){
        return x-y;
    }
}
console.log(`The result of subtraction between the value of x and y is ${mathe_helper.subtraction(100,-300)}`);

class new_div{
    static divided(x,y){
        return x/y;
    }
}
console.log(`The result of divided the value of x by the value of y is ${new_div.divided(20,10)}`);

class math_square{
    static square(a){
        return a*a;
    }
}
console.log(`Square of the value of a is ${math_square.square(12)}`);

class double{
    static double_digit(a,b){
        return (a+b)*(a+b);
    }
}
console.log(`square of a plus b is ${double.double_digit(5,6)}`);

class cube_three{
    static cube(a,b){
        return (a+b)*(a+b)*(a+b);
    }
}
console.log(`cube of a plus b is ${cube_three.cube(2,3)}`);

// Getters and Setters: Getters and setters allow you to define methods that get or set the value of an object’s property.

class Circle{
    // create constructor
    constructor(radius){
        this._radius=radius;
        // _radius refers to private
    }
    get Diameter(){
        return this._radius*2;
    }
    set radius(value){
        if (value>0){
            this._radius=value;
        }
    }
}
const myCircle=new Circle(5);
console.log(myCircle.Diameter);
myCircle.radius=10;
console.log(myCircle.Diameter);


class Annimal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    describe() {
      console.log(`${this.name} is a ${this.species}`);
    }
  }
  
  class Dogg extends Annimal {
    constructor(name, breed) {
      super(name, 'Dogg'); // Calling the parent class constructor
      this.breed = breed;
    }
  
    describe() {
      super.describe(); // Calling the parent class describe method
      console.log(`${this.name} is a ${this.breed}`);
    }
  }

  class vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    start(){
        console.log(`This car is manufactured in ${this.year} and it is made by ${this.make}`);
    }
    info(){
        console.log(`Details of the car is given in it's manual, moreover, it's model is ${this.model}`);
    }
    details(){
        console.log(`It's color is blue. Making year is ${this.year} and it has ${this.doors}`);
    }
  }

  class Car extends vehicle{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors=doors;
    }

    start(){
        super.start();
        console.log(`This car has auto start on-off and this made in ${this.year}`);
    }
    info(){
        super.info();
        console.log(`Making year is ${this.year}, Model is ${this.model}, Number of doors is ${this.doors}, Manufacturer is ${this.make}`);
    }
    details(){
        super.details();
        console.log(`Please refer to ${this.model} manual`);
    }
  }
  
  const myCar=new Car('Toyota','BMW',2022,5);
  myCar.start();
  myCar.info();
  myCar.details();

  class Netrokona{
    constructor(District, Thana, Union, Village){
        this.District=District;
        this.Thana=Thana;
        this.Union=Union;
        this.Village=Village;
    }
    District_name(){
        console.log(`District Name is: ${this.District}`);
    }
    Thana_name(){
        console.log(`Number of total thana in ${this.District} is ${this.Thana}`);
    }
    Union_name(){
        console.log(`Total number of union in ${this.District} is ${this.Union}`);

    }
    Village_name(){
        console.log(`Total number of village in ${this.District} is ${this.Village}`);
    }
  }
  class whole extends Netrokona{
    constructor(District,Thana,Union,Village,Population,Religeon){
        super(District,Thana,Union,Village);
        this.Population=Population;
        this.Religeon=Religeon;
    }
    District_name(){
        super.District_name();
        console.log(`Name of the district is ${this.District}`);
    }
    Thana_name(){
        super.Thana_name();
        console.log(`The number of thana is ${this.Thana}`);
    }
    Union_name(){
        super.Union_name();
        console.log(`Number of union in Netrokona is ${this.Union}`);
    }
    Village_name(){
        super.Village_name();
        console.log(`And name of our village is Rajibpur`);
    }
    Population_number(){
        // super.Population_number();
        console.log(`And the population of village is approximately 5000`);
    }
    About_religeon(){
        // super.About_religeon();
        console.log(`Moreover other religious people like christian, Buddhist live in our village peacefully`);
    }
  }

  const myWhole=new whole("Netrokona",11,110,2000,"12 Million","Islam and Hindu");
  myWhole.District_name();
  myWhole.Thana_name();
  myWhole.Union_name();
  myWhole.Village_name();
  myWhole.Population_number();
  myWhole.About_religeon();
