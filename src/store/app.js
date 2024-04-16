// --- PINIA permet de gérer un state global à toute l'application
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
 // ------  le state global
 const listePages = ref([])
 const pageDeRetour = ref("")
 const message = ref("") // message pour la page urgence si besoin
 const drapeauxRouge = ref(null)
 const vertigesMaintenant = ref(null)
 const nystagmusSpontane = ref(null)
 const nystagmusDeclanche = ref(null)
 const hints = ref({
  Hi : null, N : null, TS : null
 })
 const examenNeurologique = ref({
  "Normal" : false,
  "Syndrome Vestibulaire Périphérique" : false,
  "Autre cause neurologique" : false
 })
 const examenORL = ref({
  "Normal" : false,
  "Surdité +++" : false,
  "Surdité en amélioration, acouphenes" : false
 })
 const cervicalgies = ref(null)
 const traumatismes = ref(null)

// --- fonction réninit state global
function reset() {
  listePages.value =[]
  pageDeRetour.value =""
  message.value = ""
  drapeauxRouge.value = null 
  vertigesMaintenant.value = null
  nystagmusSpontane.value = null 
  nystagmusDeclanche.value = null 
  hints.value = {
    Hi : null, N : null, TS : null
   }
  examenNeurologique.value = {
    "Normal" : false,
    "Syndrome Vestibulaire Périphérique" : false,
    "Autre cause neurologique" : false
   } 
  examenORL.value = {
    "Normal" : false,
    "Surdité +++" : false,
    "Surdité en amélioration, acouphenes" : false
   } 
  cervicalgies.value = null
  traumatismes.value = null
  
}
 return { listePages,
          pageDeRetour,
          message,
          drapeauxRouge, 
          vertigesMaintenant, 
          nystagmusSpontane, 
          nystagmusDeclanche, 
          hints, 
          examenNeurologique, 
          examenORL, 
          cervicalgies,
          traumatismes,
          reset }
})