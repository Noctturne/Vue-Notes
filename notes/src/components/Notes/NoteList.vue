<template>
    <main class="notes">
        <div class="col-12 offset-lg-4 col-lg-4">
            <p class="text-center m-2" v-if="notes.length === 0"> <strong>No notes to show</strong></p>
            <div class="note p-3 m-2 border border-1 rounded" v-for="note in notes" :key="note.id">
                <h4> {{note.title}} </h4>
                <p class="text-secondary"> {{note.note.substring(0, 70)}}... </p>
                <small> {{formatDate(note.createdAt)}} </small>
                <button type="button" class="btn btn-outline-dark border-0 btn-sm mx-2" @click="deleteNote(note.id)"><strong> X </strong></button>
            </div>
        </div>
    </main>
</template>

<script>
import moment from 'moment';
import {deleteNoteAPI} from '../../api/note';
export default {
    props:{
        notes: Array,
        reloadNotes: Function
    },
    setup(props){
        const formatDate = (date) => {
            return moment(date).fromNow();
        }
        const deleteNote = (noteId) => {
            deleteNoteAPI(noteId);
            props.reloadNotes();
        }

        return {
            formatDate,
            deleteNote
        }
    },
}
</script>

<style>
.note button{
    float: right;
}
</style>