var Contact = /** @class */ (function () {
    // public constructor(name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }
    function Contact(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.createDate = new Date();
        this.setModDate(new Date());
        this.setUUID();
        this.email = '';
    }
    Contact.prototype.setName = function (newName) {
        this.name = newName;
    };
    Contact.prototype.getName = function () {
        return this.name;
    };
    Contact.prototype.setLastName = function (newLastName) {
        this.lastName = newLastName;
    };
    Contact.prototype.getLastName = function () {
        return this.lastName;
    };
    Contact.prototype.setModDate = function (newModDate) {
        this.modDate = newModDate;
    };
    Contact.prototype.getModDAte = function () {
        return this.modDate;
    };
    Contact.prototype.setUUID = function () {
        var calcUUID = '1234-5678-9012';
        this.uuid = calcUUID;
    };
    Contact.prototype.setExternalUUID = function (newExtUIID) {
        this.uuid = newExtUIID;
    };
    Contact.prototype.getUUID = function () {
        return this.uuid;
    };
    Contact.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    Contact.prototype.getEmail = function () {
        return this.email;
    };
    return Contact;
}());
var Group = /** @class */ (function () {
    function Group(groupName, groupUUID) {
        this.groupName = groupName;
        this.groupUUID = groupUUID;
        this.contactList = [];
    }
    Group.prototype.addContactToGroup = function (newContact) {
        this.contactList.push(newContact);
    };
    Group.prototype.removeContactFromGroup = function (rmvContact) {
        var test = this.contactList.map(function (cList) {
            console.log(cList.getUUID() + '|' + rmvContact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();
            cList.setEmail(rmvContact.getName());
        });
        console.log(test);
    };
    Group.prototype.findContactInGroupByUIID = function (name, lastName, findUUID) {
        //return this.contactList.forEach( c => console.log(c.getUUID()));
        return this.contactList.some(function (cntct) { return cntct.getUUID() == findUUID; });
    };
    return Group;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.allContacts = [];
        this.allGroups = [];
    }
    AddressBook.prototype.addContact = function (newContact) {
        this.allContacts.push(newContact);
    };
    AddressBook.prototype.addGroup = function (newGroup) {
        this.allGroups.push(newGroup);
    };
    return AddressBook;
}());
//const Person = new Contact("Jan", "Kowalski", new Date("2023-09-15"));
var Person = new Contact("Jan", "Kowalski");
// console.log(Person);
// console.log(Person.getLastName());
// console.log(Person.getName());
Person.setName("Mietek");
// console.log(Person.getName());
Person.setEmail('Jan.Kowalski@gmail.com');
// console.log(Person);
Person.setExternalUUID('9876-5432-1098');
// console.log(Person.getUUID());
var Grupa = new Group('Nowa grupa', 'Nowy UUID');
var Grupa1 = new Group('Grupa1', 'UUID_1111');
// console.log(Grupa);
Grupa.addContactToGroup(Person);
// console.log(Grupa);
var Person1 = new Contact("Janina", "Kowalska");
Grupa.addContactToGroup(Person1);
console.log(Grupa);
Grupa1.addContactToGroup(Person);
var AdresBuk = new AddressBook();
AdresBuk.addContact(Person);
AdresBuk.addGroup(Grupa);
AdresBuk.addGroup(Grupa1);
// console.log(AdresBuk);
// console.log(AdresBuk.allGroups.forEach(e => e.contactList.forEach(c => console.log(c.getName()))));
// console.log(Grupa.findContactInGroupByUIID('1234-5678-9012'));
console.log("Remove:");
Grupa.addContactToGroup(Person);
Grupa.removeContactFromGroup(Person1);
console.log(Grupa);
//# sourceMappingURL=AddressBook.js.map