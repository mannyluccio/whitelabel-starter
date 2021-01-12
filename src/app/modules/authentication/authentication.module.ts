import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication.routing';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';
import {SharedModule} from '../../shared.module';


@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [AuthenticationGuard],
  declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {
}
