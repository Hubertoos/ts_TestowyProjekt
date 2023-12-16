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
        if (!this.isContactInAddressBook(contact)) {
            this.allContacts.push(contact);
        }
        this.allGroups.forEach(function (groupEntries) {
            if (groupEntries.groupName === group.groupName) {
                groupEntries.addContactToGroup(contact);
            }
        });
    };
    // TODO: literówka: Contract > OK
    AddressBook.prototype.removeContactFromAddresBook = function (contact) {
        this.allContacts = this.allContacts.filter(function (cList) {
            console.log(cList.uuid + '|' + contact.uuid);
            return cList.uuid !== contact.uuid;
        });
        this.allGroups.forEach(function (group) {
            if (group.isContactInGroup(contact.uuid)) {
                group.removeContactFromGroup(contact);
            }
        });
    };
    AddressBook.prototype.addGroup = function (newGroup) {
        var _this = this;
        if (!this.isGroupInAddressBook(newGroup)) {
            this.allGroups.push(newGroup);
        }
        newGroup.contactList.forEach(function (groupContact) {
            if (!_this.isContactInAddressBook(groupContact)) {
                _this.allContacts.push(groupContact);
            }
            else {
                console.log('ten kontakt już istnieje w tabeli kontaktów: ' + groupContact.uuid);
            }
        });
        //czy wszystkie kontakty z grupy dodać do listy kontaktów, o ile jeszcze ich tam nie ma?
        //czy sprawdzać istnienie grupy przed jej dodaniem?
    };
    AddressBook.prototype.removeGroup = function (rmvGroup) {
        console.log('Group removed:' + rmvGroup);
        this.allGroups = this.allGroups.filter(function (grp) {
            return grp.groupUUID !== rmvGroup.groupUUID;
        });
    };
    AddressBook.prototype.findContact = function (phrase) {
        console.log('Looking for contact:' + phrase);
        var foundContacts = [];
        this.allContacts.forEach(function (cntct) {
            var fullString = cntct.name + '|' + cntct.lastName + '|' + cntct.email;
            if (fullString.indexOf(phrase) > -1) {
                foundContacts.push(cntct);
            }
        });
        return foundContacts;
        //przeszukanie wszystkich kontaktów/kontaktów w grupach? czy imie/nazwisko/uiid/email zawierają dany ciąg?
        //zwraca obiekt z kontaktami Contacts[Contact{name:"Mietek"},Contact{name:'Janek}]?
    };
    AddressBook.prototype.isContactInAddressBook = function (checkContact) {
        return this.allContacts.some(function (cntct) { return checkContact.uuid === cntct.uuid; });
    };
    AddressBook.prototype.isGroupInAddressBook = function (checkGroup) {
        return this.allGroups.some(function (grp) { return checkGroup.groupUUID === grp.groupUUID; });
    };
    return AddressBook;
}());
exports.AddressBook = AddressBook;
//# sourceMappingURL=AddressBook.js.map