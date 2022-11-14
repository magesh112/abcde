import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  value: any = [];
  newForm = new FormGroup({
    empname: new FormControl(''),
    empid: new FormControl(''),
    abp: new FormControl(''),
  });
  constructor(private service: PracticeService) {}
  search:any;

  ngOnInit() {
    this.value = this.service.arr;
  }
  addFunction() {
    this.value.push(this.newForm.value);
  }
}
