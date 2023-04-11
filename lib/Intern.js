const { Model } = require('sequelize');
const Employee  = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email,);

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }
}

module.exports = Intern;