import { Contact } from "./Contact";
import { Group } from "./Group";
import { AddressBook } from "./AddressBook";


const Person = new Contact("Jan", "Kowalski", "" );
Person.name = "Mietek";
Person.lastName = "Kowalczyk"
Person.email = 'Jan.Kowalski@gmail.com';

const Person1 = new Contact("Jagoda", "Kowalska", "" );


const Grupa = new Group('Grupa pierwsza', []);
const Grupa1 = new Group('Grupa druga',[]);

Grupa.addContactToGroup(Person);
Grupa.addContactToGroup(Person1);
//Grupa.removeContactFromGroup(Person);
console.log('czy jest kontakt?');
console.log(Grupa.isContactInGroup(Person.uuid));
console.log(Grupa.isContactInGroup(Person1.uuid));

console.log('Pierwsza grupa:');
console.log(Grupa);

Grupa1.addContactToGroup(Person);

const AdresBuk = new AddressBook();
//AdresBuk.addContact(Person);
AdresBuk.addGroup(Grupa);
AdresBuk.addGroup(Grupa1);
AdresBuk.addContact2AddresBook(Person1,Grupa1);

console.log('Kontakty z Adresbuka:');
AdresBuk.allContacts.forEach(a => console.log(a.name));

const fc = AdresBuk.findContact('tek');
console.log(fc);

const fc1 = AdresBuk.findContact('wal');
console.log(fc1);

const Person2 = new Contact("Genowefa", "Pigwa", "g.pigwa@gmail.com");
Grupa.addContactToGroup(Person2);
AdresBuk.allGroups.forEach(a => a.contactList.forEach(b => console.log(b.lastName)));

//AdresBuk.removeGroup(Grupa1);
Person.name = "Mieczysław";

console.log('Cały adresbuk:');
console.log(AdresBuk);

/*
AdresBuk.allGroups.forEach(e => e.contactList.forEach(c => console.log(c.name)));
AdresBuk.allGroups.forEach(e => console.log(e.groupName));
*/
