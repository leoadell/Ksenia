
import { state, style, transition, trigger, animate } from '@angular/core';

export const fundido =
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-35%)'
            }),
            animate('300ms linear'),
            style({
                opacity: 0,
                transform: 'translateY(0%)'
            })
        ])
    ])