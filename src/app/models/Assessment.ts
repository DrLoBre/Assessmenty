import { firestore } from 'firebase';

export class Assessment {
    title: string;
    description: string;
    principal: string;
    client: string;
    applied: firestore.Timestamp;
    deadline: firestore.Timestamp;
    status: string;
    eventId: string;

    toPlainObj(): object {
        return {
            title: this.title,
            description: this.description,
            principal: this.principal,
            client: this.client,
            applied: this.applied,
            deadline: this.deadline,
            status: this.status
        };
    }
}
