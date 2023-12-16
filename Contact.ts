import {v4 as uuidv4} from 'uuid';

export class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    private _name: string;
    private _lastName: string;
    private _email: string;
    private _createDate: Date;
    private _modDate: Date;
    private _uuid: string;

    constructor(cName: string, cLastName: string, cEmail: string) {
        this._name = cName;
        this._lastName = cLastName;
        this._createDate = new Date();
        this._modDate = new Date();
        this._uuid = uuidv4();
        this._email = cEmail;
    }
 
     
    set name(newName: string) {
        this._name=newName;
    }

    get name(): string {
        return this._name;
    }

    set lastName(newLastName: string) {
        this._lastName = newLastName;
    }

    get lastName(): string {
        return this._lastName;
    }
    
    set email(newEmail: string) {
        this._email = newEmail;
    }

    get email(): string {
        return this._email;
    }

    set modDate(newModDate: Date) {
        this._modDate = newModDate;
    }

    get modDAte(): Date{
        return this._modDate;
    }

    get uuid(): string {
        return this._uuid;
    }

}
