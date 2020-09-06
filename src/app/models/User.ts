export class User {
    email: string;
    firstName: string;
    lastName: string;
    role: string;

    toPlainObj(): object {
        return {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role
        }
    }
}
