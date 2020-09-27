
import { CollaborateurActivitee } from "./collaborateur-Activitee";
import { Categorie } from "../categorie/categorie";

export interface Activitee{
    id?: number,	
    date?: Date,
    duree?: string,
    type?: string,
    categorie?: Categorie,
    collaborationActivitee?: Array<CollaborateurActivitee>,
}

