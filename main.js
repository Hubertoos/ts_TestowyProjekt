"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("./Contact");
var Group_1 = require("./Group");
var AddressBook_1 = require("./AddressBook");
var Person = new Contact_1.Contact("Jan", "Kowalski", "");
Person.name = "Mietek";
Person.lastName = "Kowalczyk";
Person.email = 'Jan.Kowalski@gmail.com';
var Person1 = new Contact_1.Contact("Jagoda", "Kowalska", "");
var Grupa = new Group_1.Group('Grupa pierwsza', []);
var Grupa1 = new Group_1.Group('Grupa druga', []);
Grupa.addContactToGroup(Person);
Grupa.addContactToGroup(Person1);
Grupa.removeContactFromGroup(Person);
console.log('czy jest kontakt?');
console.log(Grupa.isContactInGroup(Person.uuid));
console.log(Grupa.isContactInGroup(Person1.uuid));
console.log('Pierwsza grupa:');
console.log(Grupa);
Grupa1.addContactToGroup(Person);
var AdresBuk = new AddressBook_1.AddressBook();
AdresBuk.addContact(Person);
AdresBuk.addGroup(Grupa);
AdresBuk.addGroup(Grupa1);
AdresBuk.addContact2AddresBook(Person1, Grupa1);
console.log('Kontakty z Adresbuka:');
AdresBuk.allContacts.forEach(function (a) { return console.log(a.name); });
console.log('Cały adresbuk:');
console.log(AdresBuk);
/*
AdresBuk.allGroups.forEach(e => e.contactList.forEach(c => console.log(c.name)));
AdresBuk.allGroups.forEach(e => console.log(e.groupName));
*/
//# sourceMappingURL=main.js.map