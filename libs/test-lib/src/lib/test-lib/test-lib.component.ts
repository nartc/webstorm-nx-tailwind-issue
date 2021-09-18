import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-ng-test-lib',
  templateUrl: './test-lib.component.html',
  styleUrls: ['./test-lib.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
