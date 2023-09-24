var message = 'Hello World!';
console.log(message);
var Contact = /** @class */ (function () {
    // public constructor(name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }
    function Contact(name, lastName, data) {
        this.name = name;
        this.lastName = lastName;
        this.date = data;
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
    return Contact;
}());
var Person = new Contact("Jan", "Kowalski", new Date("2023-09-15"));
console.log(Person);
console.log(Person.getLastName());
console.log(Person.getName());
Person.setName("Mietek");
console.log(Person.getName());
//# sourceMappingURL=helloworld.js.map