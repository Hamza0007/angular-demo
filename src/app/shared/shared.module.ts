import { NgModule } from "@angular/core";
import { DropDownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  declarations: [ // List of directives components you want to share between 2 modules(feature modules)
    DropDownDirective,
    FilterPipe
  ],
  exports: [
    CommonModule,
    DropDownDirective,
    FilterPipe
  ]
})

export class SharedModule {

}
