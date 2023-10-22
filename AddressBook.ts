class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    private name: string;
    private lastName: string;
    private email: string;
    private createDate: Date;
    private modDate: Date;
    private uuid: string;

    // public constructor(name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }

    public constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
        this.createDate = new Date();
        this.setModDate(new Date());
        this.setUUID();
        this.email = '';
    }
 
    public setName(newName: string) {
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
        let calcUUID = '1234-5678-9012';
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
    groupName: string;
    groupUUID:string;

    public constructor (groupName: string, groupUUID: string) {
        this.groupName = groupName;
        this.groupUUID = groupUUID;
        this.contactList = [];
    }

    public addContactToGroup(newContact: Contact) {
        this.contactList.push(newContact);
    }

    public removeContactFromGroup(rmvContact: Contact) {
        this.contactList.filter(cList => {
            console.log(cList.getUUID()+'|'+ rmvContact.getUUID());
            //cList.getUUID() != rmvContact.getUUID();
            cList!==rmvContact;
        });
    }



    public findContactInGroupByUIID (name? : string, lastName? : string, findUUID?: string) {
        //return this.contactList.forEach( c => console.log(c.getUUID()));
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

    public addGroup(newGroup: Group){
        this.allGroups.push(newGroup);
    }
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

const Grupa = new Group('Nowa grupa', 'Nowy UUID');
const Grupa1 = new Group('Grupa1','UUID_1111');
// console.log(Grupa);
Grupa.addContactToGroup(Person);
// console.log(Grupa);
const Person1 = new Contact("Janina", "Kowalska" );
Grupa.addContactToGroup(Person1);
console.log(Grupa);
Grupa1.addContactToGroup(Person);

const AdresBuk = new AddressBook();
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

