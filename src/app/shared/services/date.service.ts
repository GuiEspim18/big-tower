import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }


  /** 
   * Method to the next day
   * @param date
   * @returns nextDay
   */

  public getNextDay(date: Date): Date {
    const currentDate: Date = date
    currentDate.setDate(currentDate.getDate() + 1)
    return currentDate
  }
}
