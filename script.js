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