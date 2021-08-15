<template>
    <div class="row m-2">
        <div class="col-12 offset-lg-3 col-lg-6">
            <form class="text-center" @submit.prevent="sendNote">
                <button type="submit" class="btn btn-warning text-light m-2 w-25" ><strong> &#8592; </strong></button>
                <input type="text" class="form-control m-2" name="title" placeholder="Title" v-model="title"/>
                <textarea type="text" class="form-control m-2" name="description" rows="5" 
                    placeholder="Just start typing" v-model="description">
                </textarea>
            </form>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
import {saveNoteAPI} from '../../api/note';
import {useRouter} from "vue-router";
export default {
  name: 'NoteForm',
  setup(){
      let title = ref("");
      let description = ref("");
      const router = useRouter();

      const sendNote = () => {
          if(!title.value){
              router.go(-1);
          }else{
            saveNoteAPI(description.value, title.value);
            router.go(-1);
          }
      }

      return{
          title, description,
          sendNote
      }
  }
}
</script>

<style lang="scss">
    textarea{ height: 70vh; }

    .btn-warning{
        -webkit-box-shadow: 5px 2px 15px 3px rgba(0,0,0,0.2); 
        box-shadow: 5px 2px 15px 3px rgba(0,0,0,0.2)
    }
</style>