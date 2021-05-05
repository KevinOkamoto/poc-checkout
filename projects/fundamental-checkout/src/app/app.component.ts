import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fundamental-checkout';

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
  }
}