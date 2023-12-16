"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.allContacts = [];
        this.allGroups = [];
    }
    AddressBook.prototype.addContact = function (newContact) {
        this.allContacts.push(newContact);
    };
    // TODO: naprawa potencjalnego buga
    // stworzyć const c = Contact()
    // stworzyć const g = Group()
    // AddressBook.addContact(c);
    // AddressBook.addContact2AddresBook(c, g);
    AddressBook.prototype.addContact2AddresBook = function (contact, group) {
        this.allContacts.push(contact);
        this.allGroups.forEach(function (groupEntries) {
            if (groupEntries.groupName === group.groupName) {
                groupEntries.addContactToGroup(contact);
            }
        });
    };
    // TODO: literówka: Contract
    AddressBook.prototype.removeContractFromAddresBook = function (contact) {
        this.allContacts = this.allContacts.filter(function (cList) {
            console.log(cList.uuid + '|' + contact.uuid);
            //cList.getUUID() != rmvContact.getUUID();
            return JSON.stringify(cList) !== JSON.stringify(contact);
        });
        this.allGroups.forEach(function (group) {
            if (group.isContactInGroup(contact.uuid)) {
                group.removeContactFromGroup(contact);
            }
        });
    };
    AddressBook.prototype.addGroup = function (newGroup) {
        this.allGroups.push(newGroup);
        //czy wszystkie kontakty z grupy dodać do listy kontaktów, o ile jeszcze ich tam nie ma?
        //czy sprawdzać istnienie grupy przed jej dodaniem?
    };
    AddressBook.prototype.removeGroup = function (rmvGroup) {
        console.log('Group removed:' + rmvGroup);
    };
    AddressBook.prototype.findContact = function (phrase) {
        console.log('Looking for contact:' + phrase);
        //przeszukanie wszystkich kontaktów/kontaktów w grupach? czy imie/nazwisko/uiid/email zawierają dany ciąg?
        //zwraca obiekt z kontaktami Contacts[Contact{name:"Mietek"},Contact{name:'Janek}]?
    };
    return AddressBook;
}());
exports.AddressBook = AddressBook;
//# sourceMappingURL=AddressBook.js.map