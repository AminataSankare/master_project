

import { AdminComponent } from './admin/admin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { PhotoSnapListComponent } from './photo-snap-list/photo-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceComponent } from './single-face/single-face.component';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    { path: 'photosnaps', component: PhotoSnapListComponent },
    { path: '', component: LandingPageComponent },
    {path : "photosnaps/:id",component: SingleFaceComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}