import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component'; // Certifique-se de importar aqui
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Use 'compat' se você estiver usando a versão 9 do Angular/Firebase
import { firebaseConfig } from './firebase-config'; // Importe sua configuração do Firebase
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'; // Use 'compat' se você estiver usando a versão 9 do Angular/Firebase



@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AboutComponent,
    EducationComponent, // Certifique-se de adicioná-lo aqui
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(firebaseConfig),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }