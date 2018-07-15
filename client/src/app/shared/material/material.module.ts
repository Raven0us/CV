import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormField, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const materialModules = [
  MatButtonModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {
}
