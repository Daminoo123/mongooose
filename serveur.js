const mongoose = require("mongoose");
const Person = require('./schema')
require("dotenv").config();

const db = process.env.Mongo_URI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected To DB");
    })
    .catch((err) => {
        console.log(err);
    });


const addPerson = async()=>{
    const person=  new Person ({
        name: "Rayen",
        age:19,
        favouriteFoods: ['Hamburger','Malfouf','Pasta']
    })
    await person.save((err,data)=>{
        err? (console.log(err)) : console.log('addPerson: '+data)
    })
}





const addPeople = async()=>{
    const arrayOfPeople = [
        { name: "Mary", age: 27, favouriteFoods: ["L7am mechwi","Borrito"] },
        { name: "Mary", age: 22, favouriteFoods: ["3ejja"] },
        { name: "Mary", age: 15, favouriteFoods: ["Humus"] },
        { name: "John", age: 80, favouriteFoods: ["Humus","3ejja","Mlewi"] },
        { name: "Tayla", age: 71, favouriteFoods: ["Humus",] },
        { name: "Johny", age: 20, favouriteFoods: ["Humus","Borrito"] },
        { name: "Lucy", age: 21, favouriteFoods: ["Borrito","Kabab"] },
        { name: "Nami", age: 61, favouriteFoods: ["Borrito","Chawarma","Vegetables"] },
        { name: "Robin", age: 30, favouriteFoods: ["Humus","Loubya","zrir"] },
        { name: "Hamza", age: 27, favouriteFoods: ["Loubya","zrir","kafteji"] },
        { name: "Houssem", age: 22, favouriteFoods: ["Humus","Loubya","zrir","3ejja"] },
        { name: "Baraa", age: 21, favouriteFoods: ["Humus","zrir","slata"] },
        { name: "Maher", age: 25, favouriteFoods: ["Rouz","zirir"] },
    ];
    await Person.create(arrayOfPeople,(err,data)=>{
        err? (console.log(err)) : console.log('addPeople: '+data)
    })
}

const findName = async()=>{
    await Person.find({name:"Baraa"},(err,data)=>{
            err? (console.log(err)) : console.log('foundPerson: '+data)
    })
}
findName();



const findOneName = async()=>{
    await Person.findOne({favouriteFoods:"Hamburger"},(err,data)=>{
            err? (console.log(err)) : console.log('foundOnePerson: '+data)
    })
}
findOneName();


const findId = async()=>{
    await Person.findById("61b736ec1b96f915577469ea",(err,data)=>{
            err? (console.log(err)) : console.log('foundOnePerson: '+data)
    })
}
findId();

