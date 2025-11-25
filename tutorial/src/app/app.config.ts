import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { provideFirebaseApp } from "@angular/fire/app";
import { provideAuth } from "@angular/fire/auth";
import { provideFirestore } from "@angular/fire/firestore";
import { provideRouter } from "@angular/router";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { environment } from "../environments";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
providers: [
provideBrowserGlobalErrorListeners(),
provideZoneChangeDetection({ eventCoalescing: true }),
provideRouter(routes),
//inizializza firebase con la config in environment
provideFirebaseApp(() => initializeApp(environment.firebase)),
//ci rende disponibile l'auth di firebase
provideAuth(() => getAuth()),
//ci rende disponibile firestore il db che vedremo + avanti
provideFirestore(() => getFirestore()),
]
};