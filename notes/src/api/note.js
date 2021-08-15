import {v4 as uuidv4 } from 'uuid';
import {NOTES} from '../util/constants';
import {remove} from 'lodash';

export function saveNoteAPI(note, title){
    const notes = getNotesAPI();

    const _note = {
        id: uuidv4(),
        title,
        note,
        createdAt: new Date()
    };
    // Añadir la nueva nota
    notes.push(_note);

    // Guardar la nueva nota con las demás
    localStorage.setItem(NOTES, JSON.stringify(notes));
}

export function getNotesAPI(){
    const notes = localStorage.getItem(NOTES);
    if(notes){
        // Volverlos a convertir en objeto
        return JSON.parse(notes);
    }else{
        return [];
    }
}

export function deleteNoteAPI(noteId){
    const notes = getNotesAPI();
    remove(notes, function(note){
       return note.id === noteId;
    });

    localStorage.setItem(NOTES, JSON.stringify(notes));
}