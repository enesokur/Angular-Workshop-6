import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true
})
export class WelcomeDirective{
  delay: number = 2000;
  @Input("appWelcome") set outputDelay(value: TemplateRef<HTMLElement>) {
    this.viewContainer.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(value);
    },this.delay)
  }
  constructor(private elementRef: ElementRef<HTMLElement>,
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<HTMLElement>,
    private renderer: Renderer2
  ) { }
}
