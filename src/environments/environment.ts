// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  production: false
};

export const app = initializeApp(environment.firebase);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
