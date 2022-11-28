import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lagre} from './pensum/lagre/lagre';
import { Liste } from './pensum/liste/liste';
import { Endre } from './pensum/endre/endre';
import { HomeComponent } from './main-pages/home/home.component';
import { FeedAdminComponent } from './admin/feed-admin/feed-admin.component';
import { RegistrationLoginUserComponent } from './main-pages/registration-login-user/registration-login-user.component'

const appRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'feed', component: FeedAdminComponent },
  { path: 'login', component: RegistrationLoginUserComponent },
  { path: 'endre/:id', component: Endre },
  { path: 'liste', component: Liste },
  { path: 'lagre', component: Lagre }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoots)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
