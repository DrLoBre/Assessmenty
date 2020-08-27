export class Assessment {
    title: string;
    description: string;
    principal: string;
    client: string;
    applied: Date;
    deadline: Date;
    status: string;

    toPlainObj(): object {
        return {
            title: this.title,
            description: this.description,
            principal: this.principal,
            client: this.client,
            applied: this.applied,
            deadline: this.deadline,
            status: this.status
        }
    }
}
