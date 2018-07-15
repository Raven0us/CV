import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EndpointInterceptor} from "@core/../generic/http/endpoint.interceptor";
import {AppCoreComponent} from "@core/app-core.component";
import {AppMenuComponent} from "@core/menu/app-menu.component";
import {AppFooterComponent} from "@core/footer/app-footer.component";
import {AboutComponent} from "@pages/about/about.component";
import {AppCoreRoutingModule} from "@core/app-core-routing.module";
import {MaterialModule} from "@shared/material/material.module";
import {HomeComponent} from "@pages/home/home.component";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "@pages/contact/contact.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppCoreComponent,
    AppMenuComponent,
    AppFooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppCoreRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppCoreComponent,
    AppMenuComponent,
    AppFooterComponent,
    HomeComponent,
    ContactComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: EndpointInterceptor, multi: true}
  ]
})

export class AppCoreModule {}
