import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  randomVar: any;

  constructor() {
    this.randomVar = 5+"s"
  }

  ngOnInit(): void {
    console.log(this.randomVar)
  }


}
