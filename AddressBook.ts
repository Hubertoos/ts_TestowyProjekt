import { Contact } from "./Contact";
import { Group } from "./Group";

// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup

export class AddressBook {
    allContacts: Contact[];
    allGroups: Group[];

    constructor () {
        this.allContacts = [];
        this.allGroups = [];
    }

    addContact(newContact: Contact) {
        this.allContacts.push(newContact);
    }

    // TODO: naprawa potencjalnego buga
    // stworzyć const c = Contact()
    // stworzyć const g = Group()
    // AddressBook.addContact(c);
    // AddressBook.addContact2AddresBook(c, g);

    addContact2AddresBook(contact: Contact, group: Group) {
        if (!this.isContactInAddressBook(contact)) {
            this.allContacts.push(contact);
        }
        
        this.allGroups.forEach(groupEntries => {
            if (groupEntries.groupName===group.groupName) {
                groupEntries.addContactToGroup(contact);
            }
        });
    }

    // TODO: literówka: Contract > OK
    removeContactFromAddresBook(contact: Contact) {
        this.allContacts = this.allContacts.filter(cList => {
            console.log(cList.uuid+'|'+ contact.uuid);
            return cList.uuid !== contact.uuid;
        });
        this.allGroups.forEach(group => {
            if (group.isContactInGroup(contact.uuid)) {
                group.removeContactFromGroup(contact);
            }
        });
    }

    addGroup(newGroup: Group){
        if (!this.isGroupInAddressBook(newGroup)) {
            this.allGroups.push(newGroup);
        }
        newGroup.contactList.forEach(groupContact => {
            if (!this.isContactInAddressBook(groupContact)) {
                this.allContacts.push(groupContact);
            } else {
                console.log('ten kontakt już istnieje w tabeli kontaktów: ' + groupContact.uuid);
            }
        });
        //czy wszystkie kontakty z grupy dodać do listy kontaktów, o ile jeszcze ich tam nie ma?
        //czy sprawdzać istnienie grupy przed jej dodaniem?
    }

    removeGroup(rmvGroup: Group) {
        console.log('Group removed:' + rmvGroup);
        this.allGroups = this.allGroups.filter(grp => {
            return grp.groupUUID!==rmvGroup.groupUUID;
        });
    }

    findContact(phrase: string): Contact[] {
        console.log('Looking for contact:' + phrase);
        const foundContacts = [];
        this.allContacts.forEach(cntct => {
            const fullString = cntct.name +'|'+ cntct.lastName + '|'+ cntct.email
            if(fullString.indexOf(phrase)>-1) {
                foundContacts.push(cntct);
            }        });
            return foundContacts;
        //przeszukanie wszystkich kontaktów/kontaktów w grupach? czy imie/nazwisko/uiid/email zawierają dany ciąg?
        //zwraca obiekt z kontaktami Contacts[Contact{name:"Mietek"},Contact{name:'Janek}]?
    }

    isContactInAddressBook (checkContact: Contact) {
        return this.allContacts.some(cntct => checkContact.uuid === cntct.uuid);
    }

    isGroupInAddressBook (checkGroup: Group) {
        return this.allGroups.some(grp => checkGroup.groupUUID === grp.groupUUID);
    }
}