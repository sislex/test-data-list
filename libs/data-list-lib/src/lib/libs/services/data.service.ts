import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';

interface IListItem {
  id: number;
  int: number;
  float: number;
  color: string;
  child: {
    id: number;
    color: string;
  };
}

class ListItem implements IListItem {
  id: number;
  int: number;
  float: number;
  color: string;
  child: {
    id: number;
    color: string;
  };

  constructor({id, int, float, color, child}: IListItem) {
    this.id = id;
    this.int = int;
    this.float = float;
    this.color = color;
    this.child = child;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  list$: BehaviorSubject<IListItem[]> = new BehaviorSubject<IListItem[]>([]);
  lastId$: Observable<number> = this.list$.pipe(
    map((list) => list.length ? list[list.length - 1].id : 0),
  );
  last10Items$ = this.list$.pipe(
    map(items => {
      const start = Math.max(items.length - 10, 0);
      return items.slice(start);
    })
  );

  setNewItems(items: IListItem[]) {
    const itemsList = items.map(item => new ListItem(item));
    this.list$.next([...this.list$.value, ...itemsList]);
  }



}
