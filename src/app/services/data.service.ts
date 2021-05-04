import {
  Injectable
} from '@angular/core';
import { Router } from '@angular/router';
import { ChangePosition } from '../models/change-position';

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

  public changePosition: ChangePosition = {
    old: 1,
    new: 2
  }

  constructor(
    private _router: Router
  ) {}

  public transformData(): void {
    try {
      this.data = JSON.parse(this.value);
      this.dataKeys = Object.keys(this.data[0]);
      this.isNewSession = false;
      this.isDataLoaded = true;
      this.isTextAreaEnabled = false;
    } catch (err) {
        alert('Пожалуйста, введите корректные данные');
        console.error('Please, insert correct data', err);
        this.isNewSession = true;
    }
  }

  public downloadData(): void {
    this.isDataLoaded = false;
    this.value = String(JSON.stringify(this.data));
    this.isTextAreaEnabled = true;
  }

  public addData(): void {
    const length: number = Number(Object.keys(this.newData).length);

    if (length === 0 || length !== this.dataKeys.length) {
      alert('Нельзя добавить пустой объект');
      return
    } else {
      for (let key in this.newData) {
        if (this.newData[key].length === 0) {
          alert('Введите данные в строку ' + key);
          return
        }
      }
      this.data.push({
        ...this.newData
      });
      this.newData = {};
    }
  }

  public catchId(event: any): void {
    this.selectedId = Number(event.target.id);
  }
  
  public openEditor(event: any): void {
    this.catchId(event);
    this._router.navigate(['editor', String(this.selectedId + 1)]);
  }

  public deleteData(event: any): void {
    this.catchId(event);
    this.data.splice(this.selectedId, 1);
  }

  public downloadJSONinFile(): void {
    const LINK: any = document.querySelector('.textarea__link');
    const FILE: Blob = new Blob([this.value], {type: 'json'});

    LINK.href = URL.createObjectURL(FILE);
    LINK.download = 'json-sample.json'
  }

  public loadJSONfromFile(): void {
    const RANDOM_NUMBER: number = Math.round(Math.random() * 3.4);

    fetch(`../../assets/json-samples/sample${RANDOM_NUMBER}.json`)
      .then((data: any) => data.json())
      .then((data: any) => this.value = JSON.stringify(data))
  }

  public changePositions():void {
    const BELOW_ZERO: boolean = Boolean(this.changePosition.old > 0 && this.changePosition.new > 0);
    const BELOW_LAST_INDEX: boolean = Boolean(this.changePosition.old <= this.data.length && this.changePosition.new <= this.data.length);

    if (BELOW_ZERO && BELOW_LAST_INDEX) {

      const TEMP_OBJECT_1 = {
        ...this.data[Number(this.changePosition.old - 1)]
      };
  
      const TEMP_OBJECT_2 = {
        ...this.data[Number(this.changePosition.new - 1)]
      };
  
      this.data[this.changePosition.old - 1] = {
        ...TEMP_OBJECT_2
      }

      this.data[this.changePosition.new - 1] = {
        ...TEMP_OBJECT_1
      }
    }
  }

  public importJSON(): void {
    const input: any = document.querySelector('.textarea__file');
    const files = input.files;

    if (files.length <= 0) {
      return
    }
    
    const fr = new FileReader();
    
    fr.onload = (elem: any) => { 
      const result = elem.target.result;
      const formatted = JSON.stringify(result, null, 2);
      this.value = result;
    }
    
    fr.readAsText(files.item(0));
  }
}
