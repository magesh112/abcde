import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {
  arr = [
    { empname: 'priya', empid: 1001, abp: 'present' },
    { empname: 'kavi', empid: 1002, abp: 'absent' },
    { empname: 'deepi', empid: 1003, abp: 'absent' },
  ];
  constructor() {}
}
