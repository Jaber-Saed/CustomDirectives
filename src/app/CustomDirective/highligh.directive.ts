import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example div')
  }
}
