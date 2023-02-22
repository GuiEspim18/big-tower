import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class Alerts {

    constructor () { }

    /** 
     * Error alert returns an error alert in case something goes wrong
     * @param message
     * @returns Swal.fire
     */

    public error(message: any): any {
        return Swal.fire({
            text: message,
            icon: 'error',
            iconColor: '#daa520',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            confirmButtonColor: '#daa520',
            timer: 3000,
            background: '#eeeeee',
            color: "#181818",
            customClass: { popup: "swal2-border" }
        })
    }


    /** 
     * Success alert retunrs an success alert in case something goes in a success way
     * @param message
     * @returns Swal.fire
     */

    public success(message: any): any {
        return Swal.fire({
            text: message,
            icon: 'success',
            iconColor: '#daa520',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            confirmButtonColor: '#daa520',
            timer: 3000,
            background: '#eeeeee',
            color: "#181818"
        })
    }


    /** 
     * Question alert returns an question alert with 2 options, the action will depends 
     * if on of this 2 options options was choosed
     * @param message
     * @returns Swal.fire
     */

    public question(message: any): any {
        return Swal.fire({
            title: message.title,
            text: message.message ? message.message : '',
            icon: 'warning',
            showCancelButton: true,
            iconColor: '#daa520',
            confirmButtonColor: '#4d8643',
            cancelButtonColor: '#e81010',
            confirmButtonText: message.confirm,
            cancelButtonText: message.cancel,
            background: '#eeeeee',
            color: "#181818"
        })
    }
}