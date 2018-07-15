import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppCoreModule} from "@core/app-core.module";
import {AppCoreRoutingModule} from "@core/app-core-routing.module";
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppCoreModule,
    AppCoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
