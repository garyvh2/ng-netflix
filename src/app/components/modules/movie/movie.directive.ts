import { Directive, ElementRef, OnInit, Input } from '@angular/core';


@Directive ({
    selector: '[appNewArrival]'
})
export class ArrivalDirective implements OnInit {
    @Input()
    appNewArrival: Boolean;

    constructor (private el: ElementRef) {

    }
    ngOnInit () {
        if (this.appNewArrival) {
            document['elemento'] = this.el.nativeElement;
            this.el.nativeElement.style.border = '2px solid red';
            this.el.nativeElement.after.style = {
                content:         '',
                position:        'absolute',
                top:             0,
                right:           0,
                'border-right':  '30px solid red',
                'border-top':    '30px solid red',
                'border-bottom': '30px solid transparent',
                'border-left':   '30px solid transparent'
            };
        }
    }
}

