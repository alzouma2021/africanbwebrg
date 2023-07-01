import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import creerCompagnieTransport from '../components/administrateur_societe/CreerCompagnieTransport'
import modifierCompagnieTransport from '../components/administrateur_societe/ModifierCompagnieTransport'
import selectionnerCompagnieTransport from '../components/administrateur_societe/SelectionnerCompagnieTransport'
import selectionnerDemandeAdhesionCompagnie from '../components/administrateur_societe/SelectionnerDemandeAdhesionCompagnie'

import creerPays from '../components/administrateur_societe/CreerPays'
import selectionnerPays from '../components/administrateur_societe/SelectionnerPays'
import creerVille from '../components/administrateur_societe/CreerVille'
import selectionnerVille from '../components/administrateur_societe/SelectionnerVille'

//import connexion from '../components/authentification/ConnexionUtilisateur.vue'
import inscription from '../components/authentification/InscriptionUtilisateur.vue'
import connexionUtilisateurCompagnieTransport from '../components/administration_compagnie_transport/authentification/connexionUtilisateurCompagnieTransport'

import creerOffreVoyage from '../components/administration_compagnie_transport/CreerOffreVoyage'
import creerVilleEscale from '../components/administration_compagnie_transport/CreerVilleEscale'
import programmerOffreVoyage from '../components/administration_compagnie_transport/ProgrammerOffreVoyage'
import creerModeTarif from '../components/administration_compagnie_transport/CreerModeTarif'
import creerDemandeAdhesion from '../components/administration_compagnie_transport/CreerDemandeAdhesion'
import selectionnerOffreVoyage from '../components/administration_compagnie_transport/SelectionnerOffreVoyage'
import modifierOffreVoyage from '../components/administration_compagnie_transport/ModifierOffreVoyage'
import rattacherJourSemaineOffreVoyage from '../components/administration_compagnie_transport/RattacherJourSemaineOffreVoyage'
import creerProprieteCaracteristiqueOffreVoyage from '../components/administration_compagnie_transport/CreerProprieteCaracteristiqueOffreVoyage'
import modifierModeTarif from '../components/administration_compagnie_transport/ModifierModeTarif'
import modifierVilleEscaleOffreVoyage from '../components/administration_compagnie_transport/ModifierVilleEscaleOffreVoyage'
import modifierJourOffreVoyage from '../components/administration_compagnie_transport/ModifierJourOffreVoyage'
import gestionBagageCompagnieTransport from '../components/administration_compagnie_transport/GestionBagageCompagnieTransport'
import creerGareCompagnieTransport from '../components/administration_compagnie_transport/CreerGareCompagnieTransport'
import selectionnerGareCompagnieTransport from '../components/administration_compagnie_transport/SelectionnerGareCompagnieTransport'
import tableauBord from '../components/administration_compagnie_transport/TableauBord';
import creerModeAbonnement from '../components/administration_compagnie_transport/CreerModeAbonnement'
import creerModePaiement from '../components/administration_compagnie_transport/CreerModePaiement'
import selectionnerModeAbonnementEtPaiement from '../components/administration_compagnie_transport/SelectionnerModeAbonnementEtPaiement'
import modifierModePaiement from '../components/administration_compagnie_transport/ModifierModePaiement'
import documentAttestationTransport from '../components/administration_compagnie_transport/DocumentAttestationTransport'
import associerBusCompagnieTransport from '../components/administration_compagnie_transport/creerBusCompagnieTransport'
import creerFonctionnalite from '../components/administration_compagnie_transport/creerFonctionnalite'
import creerRoleUtilisateur from '../components/administration_compagnie_transport/creerRoleUtilisateur'
import creerUtilisateur from '../components/administration_compagnie_transport/creerUtilisateur'
import gestionFunctionnalitesEtRoles from '../components/administration_compagnie_transport/gestionFonctionnalitesEtRoles'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/connexionUtilisateurCompagnieTransport',
    name: 'connexionUtilisateurCompagnieTransport',
    component: connexionUtilisateurCompagnieTransport
  },
  {
    path: '/EspaceCompagnieTransport',
    name: 'EspaceCompagnieTransport',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EspaceCompagnieTransport.vue'),
    meta: { requiresAuth: true, role: 'adminCompagnieTransport' },
    children:[
      {
        path: '/creerOffreVoyage',
        name: 'creerOffreVoyage',
        component: creerOffreVoyage
      },
      {
        path: '/creerVilleEscale',
        name: 'creerVilleEscale',
        component: creerVilleEscale
      },
      {
        path: '/creerDemandeAdhesion',
        name: 'creerDemandeAdhesion',
        component: creerDemandeAdhesion
      },
      {
        path: '/creerModeTarif',
        name: 'creerModeTarif',
        component: creerModeTarif
      },
      {
        path: '/programmeOffreVoyage',
        name: 'programmeOffreVoyage',
        component: programmerOffreVoyage
      },
      {
        path: '/selectionnerOffreVoyage',
        name: 'selectionnerOffreVoyage',
        component: selectionnerOffreVoyage
      },
      {
        path: '/rattacherJourSemaineOffreVoyage',
        name: 'rattacherJourSemaineOffreVoyage',
        component: rattacherJourSemaineOffreVoyage
      },
      {
        path: '/modifierOffreVoyage',
        name: 'modifierOffreVoyage',
        component: modifierOffreVoyage
      },
      {
        path: '/creerProprieteCaracteristiqueOffreVoyage',
        name: 'creerProprieteCaracteristiqueOffreVoyage',
        component: creerProprieteCaracteristiqueOffreVoyage
      },
      {
        path: '/modifierModeTarif',
        name: 'modifierModeTarif',
        component: modifierModeTarif
      },
      {
        path: '/modifierVilleEscaleOffreVoyage',
        name: 'modifierVilleEscaleOffreVoyage',
        component: modifierVilleEscaleOffreVoyage
      },
      {
        path: '/modifierJourOffreVoyage',
        name: 'modifierJourOffreVoyage',
        component: modifierJourOffreVoyage
      },
      {
        path: '/gestionBagageCompagnieTransport',
        name: 'gestionBagageCompagnieTransport',
        component: gestionBagageCompagnieTransport
      },
      {
        path: '/creerGareCompagnieTransport',
        name: 'creerGareCompagnieTransport',
        component: creerGareCompagnieTransport
      },
      {
        path: '/selectionnerGareCompagnieTransport',
        name: 'selectionnerGareCompagnieTransport',
        component: selectionnerGareCompagnieTransport
      },
      {
        path: '/creerModeAbonnement',
        name: 'creerModeAbonnement',
        component: creerModeAbonnement
      },
      {
        path: '/creerModePaiement',
        name: 'creerModePaiement',
        component: creerModePaiement
      },
      {
        path: '/selectionnerModeAbonnementEtPaiement',
        name: 'selectionnerModeAbonnementEtPaiement',
        component: selectionnerModeAbonnementEtPaiement
      },
      {
        path: '/modifierModePaiement',
        name: 'modifierModePaiement',
        component: modifierModePaiement
      },
      {
        path: '/documentAttestationTransport',
        name: 'documentAttestationTransport',
        component: documentAttestationTransport
      },
      {
        path: '/associerBusCompagnieTransport',
        name: 'associerBusCompagnieTransport',
        component: associerBusCompagnieTransport
      },
      {
        path: '/creerFonctionnalite',
        name: 'creerFonctionnalite',
        component: creerFonctionnalite
      },
      {
        path: '/creerRoleUtilisateur',
        name: 'creerRoleUtilisateur',
        component: creerRoleUtilisateur
      },
      {
        path: '/creerUtilisateur',
        name: 'creerUtilisateur',
        component: creerUtilisateur
      },
      {
        path: '/gestionFonctionnalitesEtRoles',
        name: 'gestionFonctionnalitesEtRoles',
        component: gestionFunctionnalitesEtRoles
      },
      {
        path: '/tableauBord',
        name: 'tableauBord',
        component: tableauBord
      },
    ]
  },

  {
    path: '/EspaceAdminSociete',
    name: 'EspaceAdminSociete',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EspaceAdminSociete'),
    children:[
      {
        path: '/creerPays',
        name: 'creerPays',
        component: creerPays
      },
      {
        path: '/selectionnerPays',
        name: 'selectionnerPays',
        component: selectionnerPays
      },
      {
        path: '/creerCompagnieTransport',
        name: 'creerCompagnieTransport',
        component: creerCompagnieTransport
      },
      { 
        path:'/modifierCompagnieTransport',
        name:'modifierCompagnieTransport',
        component:modifierCompagnieTransport
      },
      {
        path: '/selectionnerCompagnieTransport',
        name: 'selectionnerCompagnieTransport',
        component: selectionnerCompagnieTransport
      },
      {
        path: '/creerVille',
        name: 'creerVille',
        component: creerVille
      },
      {
        path: '/selectionnerVille',
        name: 'selectionnerVille',
        component: selectionnerVille
      },
      {
        path: '/selectionnerDemandeAdhesionCompagnie',
        name: 'selectionnerDemandeAdhesionCompagnie',
        component: selectionnerDemandeAdhesionCompagnie
      },
    ]
  },
  
  {
    path: '/connexion',
    name: 'connexion',
    component: connexionUtilisateurCompagnieTransport
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: inscription
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// Ajoutez une garde de navigation globale pour vérifier les autorisations
/*router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userIsAuthenticated');
  const userRole = localStorage.getItem('userRole');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ path: '/connexion' });
    } else if (to.meta.role && to.meta.role !== userRole) {
      next({ path: '/unauthorized' });
    } else {
      next();
    }
  } else {
    next();
  }
});*/



export default router



