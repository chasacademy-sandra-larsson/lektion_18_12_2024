// Exempel på arv i JavaScript

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email); //super används för att anropa konstruktorn för User
        this.role = role; //this.role sätts till det värde vi skickar med när vi skapar Admin
    }
}

class SuperAdmin extends Admin {
    constructor(name, email, role, accessLevel) {
        super(name, email, role);
        this.accessLevel = accessLevel;
    }
}


const admin = new Admin("John", "john@example.com", "admin");
console.log(admin);
const user = new User("Jane", "jane@example.com");

const superAdmin = new SuperAdmin("Jane", "jane@example.com", "admin", "superadmin");
console.log(superAdmin);