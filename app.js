
// 1) 
// შექმენით კლასი სახელწოდებითvehicle რომელიც შეიცავს, მოდელს და წელს. დაამატეთ function სახელად car,
//  რომელიც აღწერს შეტყობინებას, რომელიც მიუთითებს, რომ ეს მანქანა ამა და ამ წლის დაიძრა

// class model{
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
// }

//  car() {
//     return `${this.model} cared in ${this.year}`
// }

// }

// constvehicle = new vehicle( `"Porsche 911 GT3 RS"`, 2003);
// console.log(model.car())
 

//  2)შექმენით პიროვნების კლასი სახელის, ასაკისა და პროფესიის თვისებებით. ჩართეთ მეთოდი სახელწოდებით introduction(), 
//  რომელიც აღწერს პიროვნების გაცნობის შეტყობინებას.

// class User{
//     indroduction(name, age, job){
//         this.name = name
//         this.age = age
//         this.job = job}
    
//     introduce(){
//         return ` My name is ${this.name}, I am ${this.age} years old and I am a ${this.job}.`
// }}

// const user = new User();
// user.indroduction("Jean Paul Gaultier", 71, "CEO of Jean Paul Gaultier Perfume Company");
// console.log(user.introduce())

//  3)გამოიყენეთ მემკვიდრეობა სადაც დაგჭირდებათ extends და ერთი კლასის ინფორმაცია უნდა გამოყენებული იყოს
//  მეორე კლასში.

class car {
  constructor( model,year){
      this.model = model
      this.year = year
  }

  giveMeInfo(){
      return (`${this.model} was made in ${this.year}`)
  }
}

class Porsche extends car{}

const porsche = new Porsche("Porsche 911","2003")

console.log(porsche.giveMeInfo());