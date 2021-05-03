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
  public isTextAreaEnabled: boolean = true;
  public isNewSession: boolean = true;

  public newData: any = {};
  public selectedId: number = 0;

  constructor() {}

  public transformData(): void {
    this.data = JSON.parse(this.value);
    this.dataKeys = Object.keys(this.data[0]);
    this.isNewSession = false;
    this.isDataLoaded = true;
    this.isTextAreaEnabled = false;
  }

  public downloadData(): void {
    this.isDataLoaded = false;
    this.value = String(JSON.stringify(this.data));
    this.isTextAreaEnabled = true;
  }

  public addData(): void {
    this.data.push({
      ...this.newData
    });
    this.newData = {};
  }

  public catchId(event: any): void {
    this.selectedId = Number(event.target.id);
  }

  public deleteData(event: any): void {
    this.catchId(event);
    this.data.splice(this.selectedId, 1);
  }
 }
