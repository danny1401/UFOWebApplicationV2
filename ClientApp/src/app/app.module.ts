import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main-pages/home/home.component';
import { AboutusComponent } from './main-pages/aboutus/aboutus.component';
import { FeedComponent } from './main-pages/feed/feed.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateSightingComponent } from './user/update-sighting/update-sighting.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateSightingComponent } from './user/create-sighting/create-sighting.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { SightingsUserComponent } from './user/list-sightings/sightings-user.component';
import { FeedAdminComponent } from './admin/feed-admin/feed-admin.component';
import { ModalComponent } from './components/modal/modal.component';

import { Lagre } from './pensum/lagre/lagre';
import { Liste } from './pensum/liste/liste';
import { Endre } from './pensum/endre/endre';
import { Meny } from './pensum/meny/meny';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from './pensum/liste/sletteModal';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    UpdateSightingComponent,
    UpdateUserComponent,
    CreateUserComponent,
    CreateSightingComponent,
    UsersAdminComponent,
    FeedComponent,
    SightingsUserComponent,
    FeedAdminComponent,
    ModalComponent,
    Lagre,
    Liste,
    Endre,
    Meny,
    Modal
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Modal,
    ModalComponent
  ]
})
export class AppModule { }
