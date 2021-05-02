import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public value: string = '';
  public data: any[] = [];
  public dataKeys: string[] = [];
  public isDataLoaded: boolean = false;

  public newData: any = {};

  constructor() {}

  public transformData(): void {
    this.data = JSON.parse(this.value);
    this.dataKeys = Object.keys(this.data[0]);
    this.isDataLoaded = true;
  }

  public downloadData(): void {
    this.isDataLoaded = false;
    
  }

  public addData(): void {
    this.data.push({
      ...this.newData
    });
    this.newData = {};
  }

  public deleteData(event: any): void {
    const ITEM_ID = event.target.id;
    this.data.splice(ITEM_ID, 1);
  }
}
