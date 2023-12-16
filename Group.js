"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var uuid_1 = require("uuid");
// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
var Group = /** @class */ (function () {
    function Group(cGroupName, cContactList) {
        this._groupName = cGroupName;
        this._groupUUID = (0, uuid_1.v4)();
        this._contactList = cContactList;
    }
    Object.defineProperty(Group.prototype, "groupName", {
        get: function () {
            return this._groupName;
        },
        set: function (newName) {
            this._groupName = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "contactList", {
        get: function () {
            return this._contactList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "groupUUID", {
        get: function () {
            return this._groupUUID;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addContactToGroup = function (newContact) {
        this._contactList.push(newContact);
    };
    Group.prototype.removeContactFromGroup = function (rmvContact) {
        this._contactList = this._contactList.filter(function (cList) {
            return cList.uuid !== rmvContact.uuid;
        });
    };
    Group.prototype.isContactInGroup = function (findUUID) {
        return this._contactList.some(function (cntct) { return cntct.uuid == findUUID; });
    };
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=Group.js.map