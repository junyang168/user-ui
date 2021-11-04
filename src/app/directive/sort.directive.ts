import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: any;


  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }


  @HostListener("click")
  sortData() {
    const elem = this.targetElem.nativeElement;
    const order = elem.getAttribute("data-order");
    const property = elem.getAttribute("data-name");

    this.appSort.sortUsers(property, order);

    elem.setAttribute("data-order", order == "desc" ? "asc":"desc");




  }

}
