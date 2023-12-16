import { Contact } from "./Contact";
import {v4 as uuidv4} from 'uuid';

    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

export class Group {
    private _contactList: Contact[];
    private _groupUUID: string;
    private _groupName: string;

    constructor (cGroupName: string, cContactList: Contact[]) {
        this._groupName = cGroupName;
        this._groupUUID = uuidv4();
        this._contactList = cContactList;
    }

    set groupName(newName: string) {
        this._groupName = newName;
    }

    get groupName(): string {
        return this._groupName;
    }

    get contactList() {
        return this._contactList;
    }

    addContactToGroup(newContact: Contact) {
        this._contactList.push(newContact);
    }

    removeContactFromGroup(rmvContact: Contact) {
        this._contactList = this._contactList.filter(cList => {
            return cList.uuid !== rmvContact.uuid;
        });
        
    }

    isContactInGroup (findUUID?: string): boolean { // TODO: rename: isContactInGroup
        return this._contactList.some(cntct => cntct.uuid==findUUID);
    }
}
