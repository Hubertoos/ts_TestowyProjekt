var Contact = /** @class */ (function () {
    // public constructor(name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }
    function Contact(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.setThisDate();
    }
    Contact.prototype.getName = function () {
        return this.name;
    };
    Contact.prototype.getLastName = function () {
        return this.lastName;
    };
    Contact.prototype.setName = function (newName) {
        this.name = newName;
    };
    Contact.prototype.setThisDate = function () {
        this.date = new Date();
    };
    return Contact;
}());
//const Person = new Contact("Jan", "Kowalski", new Date("2023-09-15"));
var Person = new Contact("Jan", "Kowalski");
console.log(Person);
console.log(Person.getLastName());
console.log(Person.getName());
Person.setName("Mietek");
console.log(Person.getName());
//# sourceMappingURL=AddressBook.js.map