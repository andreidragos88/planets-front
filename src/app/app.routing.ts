import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {PlanetListComponent} from "./planet-list/planet-list.component";
import {PlanetFormComponent} from "./planet-form/planet-form.component";
import { AuthGuard } from "./auth.guard";
import { AuthCaptainGuard } from "./authCaptain.guard";

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path : '', component : UserLoginComponent },
  { path: 'planets', component: PlanetListComponent, canActivate: [AuthGuard] },
  { path: 'planets/:id', component: PlanetFormComponent, canActivate: [AuthGuard,AuthCaptainGuard] },
];

export const routing = RouterModule.forRoot(routes);