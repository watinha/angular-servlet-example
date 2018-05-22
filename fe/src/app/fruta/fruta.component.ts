import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../service/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  fruits: any = []

  constructor(private service: FrutaService) { }

  ngOnInit() {
    this.service.get().subscribe((data) => {
      this.fruits = data;
    });
  }

}
