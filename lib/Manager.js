const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if(!name){
            throw new Error("Please provide a valid name");
        }
        super(name, id, email,);

        this.officeNumber = officeNumber;
    }

    getOffice(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
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

module.exports = Manager;