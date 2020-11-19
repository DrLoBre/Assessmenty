export class User {
    email: string;
    firstname: string;
    lastname: string;
    role: string;

    toPlainObj(): object {
        return {
            email: this.email,
            firstName: this.firstname,
            lastName: this.lastname,
            role: this.role
        };
    }
}
