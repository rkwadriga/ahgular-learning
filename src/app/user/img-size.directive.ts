import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgSize]'
})
export class ImgSizeDirective {
    defaultSize = '100px';

    constructor(private el: ElementRef) {
        el.nativeElement.style.height = this.defaultSize;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.resize('300px');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.resize(this.defaultSize);
    }

    private resize(size: string) {
        this.el.nativeElement.style.height = size;
    }
}
