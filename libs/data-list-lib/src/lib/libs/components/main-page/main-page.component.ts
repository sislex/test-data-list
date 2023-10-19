import {Component, OnInit} from '@angular/core';
import {RandomWorkerService} from '../../services/worker.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'data-list-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  interval = '1000';
  num = '1';

  constructor(private randomWorkerService: RandomWorkerService, public dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
    this.timeout();
  }

  timeout(interval =  parseInt(this.interval)) {
    setTimeout(() => {
      this.getData();
      this.timeout();
    }, interval);
  }

  getData() {
    this.randomWorkerService.getItemsFormWorker(parseInt(this.num)).then();
  }

  events($event: any, name: string) {
    if ($event.event === 'FieldComponent:VALUE_CHANGED' && name === 'interval') {
      this.interval = $event.data;
    } else if ($event.event === 'FieldComponent:VALUE_CHANGED' && name === 'size') {
      this.num = $event.data;
    }
  }

  protected readonly length = length;
}
