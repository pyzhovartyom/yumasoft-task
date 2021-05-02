import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public value: string = '';
  public data: any = [];
  public dataKeys: string[] = [];

  constructor() { }

  transformData(): void {
    this.data = JSON.parse(this.value);
    this.dataKeys = Object.keys(this.data[0])
    this.value = '';
  }
}
