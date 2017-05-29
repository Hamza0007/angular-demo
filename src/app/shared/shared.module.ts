import {NgModule} from "@angular/core";
import {DropDownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ // List of directives components you want to share between 2 modules(feature modules)
    DropDownDirective
  ],
  exports: [
    CommonModule,
    DropDownDirective
  ]
})

export class SharedModule {

}
