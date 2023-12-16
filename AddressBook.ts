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
        this.allContacts.push(contact);
        this.allGroups.forEach(groupEntries => {
            if (groupEntries.groupName===group.groupName) {
                groupEntries.addContactToGroup(contact);
            }
        });
    }

    // TODO: literówka: Contract
    removeContractFromAddresBook(contact: Contact) {
        this.allContacts = this.allContacts.filter(cList => {
            console.log(cList.uuid+'|'+ contact.uuid);
            //cList.getUUID() != rmvContact.getUUID();
            return JSON.stringify(cList) !== JSON.stringify(contact);
        });
        this.allGroups.forEach(group => {
            if (group.isContactInGroup(contact.uuid)) {
                group.removeContactFromGroup(contact);
            }
        });
    }

    addGroup(newGroup: Group){
        this.allGroups.push(newGroup);
        //czy wszystkie kontakty z grupy dodać do listy kontaktów, o ile jeszcze ich tam nie ma?
        //czy sprawdzać istnienie grupy przed jej dodaniem?
    }

    removeGroup(rmvGroup: Group) {
        console.log('Group removed:' + rmvGroup);
    }

    findContact(phrase: string) {
        console.log('Looking for contact:' + phrase);
        //przeszukanie wszystkich kontaktów/kontaktów w grupach? czy imie/nazwisko/uiid/email zawierają dany ciąg?
        //zwraca obiekt z kontaktami Contacts[Contact{name:"Mietek"},Contact{name:'Janek}]?
    }


    // 
}