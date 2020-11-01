import { Participant } from 'app/@core/models/participant';

export class Evenement {
    id?: number;
	title?: string;
	date?: string;
	description?: string;
	duration?: string;
	partipants?: Participant[];
	category?: string;
}
