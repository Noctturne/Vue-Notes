import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NoteForm from '../components/Notes/NoteForm.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'NoteForm',
    component: NoteForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
