<template>
    <div class="container-fluid notes">
      <NoteList :notes="notes" :reloadNotes="reloadNotes"/>
        <button type="button" class="btn btn-warning btn-floating link-light" @click="showForm"><strong> + </strong></button>
    </div>
</template>

<script>
import { useRouter} from "vue-router";
import NoteList from '../components/Notes/NoteList.vue';
import { getNotesAPI } from '../api/note';
import {ref} from 'vue';

export default {
  name: 'Home',
  components: {
    NoteList
  },
  setup(){

    const router = useRouter();

    const showForm = () => {
      router.push("/create");
    }

    let notes = ref(getNotesAPI().reverse());

    const reloadNotes = () => {
      notes.value = getNotesAPI();
    }

    return{
      showForm,
      notes,
      reloadNotes
    }
  },
}
</script>

<style>
.btn-floating{ border-radius: 40px; padding: 15px 20px;  
    position: fixed; bottom: 80px; right: 60px; transition: all 300ms ease 0ms; z-index: 99;
    -webkit-box-shadow: 5px 2px 15px 3px rgba(0,0,0,0.2); 
    box-shadow: 5px 2px 15px 3px rgba(0,0,0,0.2);
}

.btn-floating:hover{ transform: translateY(-5px); }
</style>
