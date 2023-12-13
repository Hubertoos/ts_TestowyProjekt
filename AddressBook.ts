class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    private name: string;
    private lastName: string;
    private email: string;
    private createDate: Date;
    private modDate: Date;
    private uuid: string;

    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
        this.createDate = new Date();
        this.setModDate(new Date());
        this.setUUID();
        this.email = '';
    }
 
    // set name(newName: string) {
    //     // dodatkowa logika
    //     this._name=newName;
    // }
 
    setName(newName: string) {
        this.name=newName;
    }

    public getName(): string {
        return this.name;
    }

    public setLastName(newLastName: string) {
        this.lastName = newLastName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setModDate(newModDate: Date) {
        this.modDate = newModDate;
    }

    public getModDAte(): Date{
        return this.modDate;
    }

    public setUUID() {
        let calcUUID = '1234-5678-9012'; // <=== npm uuid
        this.uuid = calcUUID;
    }

    public setExternalUUID(newExtUIID: string) {
        this.uuid = newExtUIID;
    }

    public getUUID(): string {
        return this.uuid;
    }

    public setEmail(newEmail: string) {
        this.email = newEmail;
    }

    public getEmail(): string {
        return this.email;
    }
}



class Group {
    contactList: Contact[];
    groupUUID:string;

    public constructor (private groupName: string, groupUUID: string, contactList: Contact[]) {
        this.groupUUID = groupUUID;
        this.contactList = contactList;
    }

    public setGroupName(newName: string) {
        this.groupName = newName;
    }

    public getGroupName(): string {
        return this.groupName;
    }

    public addContactToGroup(newContact: Contact) {
        this.contactList.push(newContact);
    }

    public removeContactFromGroup(rmvContact: Contact) {
        this.contactList = this.contactList.filter(cList => {
            // console.log(cList.getUUID()+'|'+ rmvContact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();

            // TODO: porównać po uuid
            return JSON.stringify(cList) !== JSON.stringify(rmvContact);
        });
        
    }

    public findContactInGroupByUIID (findUUID?: string): boolean { // TODO: rename: isContactInGroup
        return this.contactList.some(cntct => cntct.getUUID()==findUUID);
    }
}

class AddressBook {
    allContacts: Contact[];
    allGroups: Group[];

    public constructor () {
        this.allContacts = [];
        this.allGroups = [];
    }

    public addContact(newContact: Contact) {
        this.allContacts.push(newContact);
    }

    // TODO: naprawa potencjalnego buga
    // stworzyć const c = Contact()
    // stworzyć const g = Group()
    // AddressBook.addContact(c);
    // AddressBook.addContact2AddresBook(c, g);

    public addContact2AddresBook(contact: Contact, group: Group) {
        this.allContacts.push(contact);
        this.allGroups.forEach(groupEntries => {
            if (groupEntries.getGroupName()===group.getGroupName()) {
                groupEntries.addContactToGroup(contact);
            }
        });
    }

    // TODO: literówka: Contract
    public removeContractFromAddresBook(contact: Contact) {
        this.allContacts = this.allContacts.filter(cList => {
            console.log(cList.getUUID()+'|'+ contact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();
            return JSON.stringify(cList) !== JSON.stringify(contact);
        });
        this.allGroups.forEach(group => {
            if (group.findContactInGroupByUIID(contact.getUUID())) {
                group.removeContactFromGroup(contact);
            }
        });
    }

    public addGroup(newGroup: Group){
        this.allGroups.push(newGroup);
        //czy wszystkie kontakty z grupy dodać do listy kontaktów, o ile jeszcze ich tam nie ma?
        //czy sprawdzać istnienie grupy przed jej dodaniem?
    }

    public removeGroup(rmvGroup: Group) {
        console.log('Group removed:' + rmvGroup);
    }

    public findContact(phrase: string) {
        console.log('Looking for contact:' + phrase);
        //przeszukanie wszystkich kontaktów/kontaktów w grupach? czy imie/nazwisko/uiid/email zawierają dany ciąg?
        //zwraca obiekt z kontaktami Contacts[Contact{name:"Mietek"},Contact{name:'Janek}]?
    }


    // 
}


//const Person = new Contact("Jan", "Kowalski", new Date("2023-09-15"));
const Person = new Contact("Jan", "Kowalski" );
// console.log(Person);
// console.log(Person.getLastName());
// console.log(Person.getName());
Person.setName("Mietek");
// console.log(Person.getName());
Person.setEmail('Jan.Kowalski@gmail.com');
// console.log(Person);
Person.setExternalUUID('9876-5432-1098');
// console.log(Person.getUUID());

const Grupa = new Group('Nowa grupa', 'Nowy UUID', []);
const Grupa1 = new Group('Grupa1','UUID_1111',[]);
// console.log(Grupa);
Grupa.addContactToGroup(Person);
// console.log(Grupa);
const Person1 = new Contact("Jagoda", "Kowalska" );
Grupa.addContactToGroup(Person1);
console.log(Grupa);
Grupa1.addContactToGroup(Person);

const AdresBuk = new AddressBook();
AdresBuk.addContact(Person);
AdresBuk.addGroup(Grupa);
AdresBuk.addGroup(Grupa1);
AdresBuk.addContact2AddresBook(Person1,Grupa1);

// console.log("ostatni:");
// console.log(AdresBuk.allGroups.forEach(a => a.getGroupName()));
console.log(AdresBuk.findContact('szukam!'));
AdresBuk.allContacts.forEach(a => console.log(a.getName()));
//Person.setName('Mieczysław');
console.log(AdresBuk);
AdresBuk.allGroups.forEach(e => e.contactList.forEach(c => console.log(c.getName())));
AdresBuk.allGroups.forEach(e => console.log(e.getGroupName()));
// console.log(Grupa.findContactInGroupByUIID('1234-5678-9012'));

// console.log("Remove:");
// Grupa.addContactToGroup(Person);
// Grupa.removeContactFromGroup(Person);
// console.log(Grupa);
// console.log(Grupa.findContactInGroupByUIID('1234-5678-9012'));
