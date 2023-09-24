let message: string = 'Hello World!';
console.log(message);

class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    private name: string;
    private lastName: string;
    private date: Date;

    // public constructor(name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }

    public constructor(name: string, lastName: string, data: Date) {
        this.name = name;
        this.lastName = lastName;
        this.date = data;
    }

    public getName(): string {
        return this.name;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setName(newName: string) {
        this.name=newName;
    }
}

const Person = new Contact("Jan", "Kowalski", new Date("2023-09-15"));
console.log(Person);
console.log(Person.getLastName());
console.log(Person.getName());
Person.setName("Mietek");
console.log(Person.getName());
