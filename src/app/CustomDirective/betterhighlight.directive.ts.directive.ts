import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterhighlightDirectiveTs]'
})
export class BetterhighlightDirectiveTsDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background: string = 'transparent'


  @HostListener('mouseenter') mouseenter() {
    this.background = 'yellow'
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'pink'
  }

}