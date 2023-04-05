import { initializeApp } from "firebase/app";
export const environment = {
  firebase : {
    apiKey: "AIzaSyAvNkQCs36HlL8HYm7NMhC3i2jVKjPEjYE",
    authDomain: "exposethefuture.firebaseapp.com",
    projectId: "exposethefuture",
    storageBucket: "exposethefuture.appspot.com",
    messagingSenderId: "505762754309",
    appId: "1:505762754309:web:c49c92e878c632b675916c"
  },
  production: true
};

export const app = initializeApp(environment.firebase);
