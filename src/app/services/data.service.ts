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
  public selectedId: number = 0;

  constructor() {}

  public transformData(): void {
    this.data = JSON.parse(this.value);
    this.dataKeys = Object.keys(this.data[0]);
    this.isDataLoaded = true;
  }

  public downloadData(): void {
    this.isDataLoaded = false;
    this.value = String(JSON.stringify(this.data))
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

  public replaceData(): void {
    this.data[this.selectedId] = {
      ...this.newData
    };
    this.newData = {};
  }
}
