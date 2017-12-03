import { Injectable } from '@angular/core';

// mock data

const home1Tab1Data = [
  {
    id: 'r1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    selected: false,
  },
  {
    id: 'r2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    selected: false,
  },
  {
    id: 'r3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    selected: false,
  },
];

@Injectable()
export class AppDataService {
  getHome1Tab1Data(): Promise<any[]> {
    return Promise.resolve(home1Tab1Data.slice());
  }

  getHome1Tab1DataDetailById(id): Promise<any> {
    const entry = home1Tab1Data.find(e => e.id === id) || null;
    return Promise.resolve(entry);
  }
}
