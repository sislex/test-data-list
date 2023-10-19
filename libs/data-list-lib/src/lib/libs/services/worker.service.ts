// src/app/services/worker.service.ts
import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {take} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomWorkerService {
  private worker: Worker;

  constructor(private dataService: DataService) {
    this.worker = new Worker('./assets/worker.js', { type: 'module' });
  }

  getItemsFormWorker(num = 1): Promise<number> {
    return new Promise((resolve) => {
      this.worker.onmessage = (event) => {
        this.dataService.setNewItems(event.data);
        // this.dataService.lastId$.pipe(take(1)).subscribe((id) => {
        //   console.log(id);
        // });
        resolve(event.data);
      };

      this.dataService.lastId$.pipe(take(1)).subscribe((id) => {
        this.worker.postMessage(JSON.stringify({id, num}));
      });
    });
  }
}
