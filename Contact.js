"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var uuid_1 = require("uuid");
var Contact = /** @class */ (function () {
    function Contact(cName, cLastName, cEmail) {
        this._name = cName;
        this._lastName = cLastName;
        this._createDate = new Date();
        this._modDate = new Date();
        this._uuid = (0, uuid_1.v4)();
        this._email = cEmail;
    }
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (newLastName) {
            this._lastName = newLastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (newEmail) {
            this._email = newEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "modDate", {
        set: function (newModDate) {
            this._modDate = newModDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "modDAte", {
        get: function () {
            return this._modDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map