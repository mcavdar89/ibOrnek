import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Personel } from 'src/app/models/personel.model';

@Component({
  selector: 'ib-personel-form',
  templateUrl: './personel-form.component.html',
  styleUrls: ['./personel-form.component.css']
})
export class PersonelFormComponent implements OnInit {
  @Input() data: Personel;
  @Output() guncelle: EventEmitter<Personel> = new EventEmitter<Personel>();

  constructor() {

  }

  ngOnInit(): void {
    this.data = {
      id: 0,
      ad: "",
      soyad: "",
      yas: 0
    }
  }

  kaydet() {
    this.guncelle.emit(this.data);
  }

}
