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
    function Group(groupName, groupUUID, contactList) {
        this.groupName = groupName;
        this.groupUUID = groupUUID;
        this.contactList = contactList;
    }
    Group.prototype.setGroupName = function (newName) {
        this.groupName = newName;
    };
    Group.prototype.getGroupName = function () {
        return this.groupName;
    };
    Group.prototype.addContactToGroup = function (newContact) {
        this.contactList.push(newContact);
    };
    Group.prototype.removeContactFromGroup = function (rmvContact) {
        this.contactList = this.contactList.filter(function (cList) {
            console.log(cList.getUUID() + '|' + rmvContact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();
            return JSON.stringify(cList) !== JSON.stringify(rmvContact);
        });
    };
    Group.prototype.findContactInGroupByUIID = function (findUUID) {
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
    AddressBook.prototype.addContact2AddresBook = function (contact, group) {
        this.allContacts.push(contact);
        this.allGroups.forEach(function (groupEntries) {
            if (groupEntries.getGroupName() === group.getGroupName()) {
                groupEntries.addContactToGroup(contact);
            }
        });
    };
    AddressBook.prototype.removeContractFromAddresBook = function (contact) {
        this.allContacts = this.allContacts.filter(function (cList) {
            console.log(cList.getUUID() + '|' + contact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();
            return JSON.stringify(cList) !== JSON.stringify(contact);
        });
        this.allGroups.forEach(function (group) {
            if (group.findContactInGroupByUIID('1')) {
                group.removeContactFromGroup(contact);
            }
        });
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
var Grupa = new Group('Nowa grupa', 'Nowy UUID', []);
var Grupa1 = new Group('Grupa1', 'UUID_1111', []);
// console.log(Grupa);
Grupa.addContactToGroup(Person);
// console.log(Grupa);
var Person1 = new Contact("Jagoda", "Kowalska");
Grupa.addContactToGroup(Person1);
console.log(Grupa);
Grupa1.addContactToGroup(Person);
var AdresBuk = new AddressBook();
AdresBuk.addContact(Person);
AdresBuk.addGroup(Grupa);
AdresBuk.addGroup(Grupa1);
AdresBuk.addContact2AddresBook(Person1, Grupa1);
console.log(AdresBuk);
console.log("ostatni:");
console.log(AdresBuk.allGroups.forEach(function (a) { return a.getGroupName(); }));
// console.log(AdresBuk.allGroups.forEach(e => e.contactList.forEach(c => console.log(c.getName()))));
// console.log(Grupa.findContactInGroupByUIID('1234-5678-9012'));
// console.log("Remove:");
// Grupa.addContactToGroup(Person);
// Grupa.removeContactFromGroup(Person);
// console.log(Grupa);
// console.log(Grupa.findContactInGroupByUIID('1234-5678-9012'));
//# sourceMappingURL=AddressBook.js.map