import { trigger, state, style, AUTO_STYLE, transition, animate, query } from "@angular/animations";

export class Animations {

    constructor() { }

    /** 
     * Animation collapse
     */

    public readonly collapse: any = trigger('collapse', [
        state('false', style({ left: "-400px" })),
        state('true', style({ left: '0px' })),
        transition('false => true', animate("300ms ease-in")),
        transition('true => false', animate("300ms ease-out"))
    ]);

}