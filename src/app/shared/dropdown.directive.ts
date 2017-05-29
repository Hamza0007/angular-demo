import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {

  // Whenever isOpen == true it will attach open class to that element else it will remove open class. This will be done by angular.
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
