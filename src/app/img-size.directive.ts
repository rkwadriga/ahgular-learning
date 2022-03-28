import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgSize]'
})
export class ImgSizeDirective {
    defaultSize = '200px';

    constructor(private el: ElementRef) {
        el.nativeElement.style.width = this.defaultSize;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.resize('400px');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.resize(this.defaultSize);
    }

    private resize(size: string) {
        this.el.nativeElement.style.width = size;
    }
}
