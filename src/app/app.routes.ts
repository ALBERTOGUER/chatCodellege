import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ChatGuard } from './guards/chat.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: PrincipalComponent, canActivate:[ChatGuard] },
    { path: 'callback', component: CallbackComponent },
    { path: '**', pathMatch:'full', redirectTo: 'chat' }
];

export const appRouting = RouterModule.forRoot(routes);