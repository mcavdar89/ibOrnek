import { Component, OnInit } from '@angular/core';
import { Personel } from '../../models/personel.model';

@Component({
  selector: 'ib-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {
  yas: number;
  isim: string;
  personelListe: Personel[];


  personel: Personel;

  constructor() {
    this.personelListe = [
      { id: 1, ad: "Ali", soyad: "Veli", yas: 25 },
      { id: 2, ad: "Ayşe", soyad: "Fatma", yas: 30 },
      { id: 3, ad: "Mehmet", soyad: "Şevket", yas: 35 },
      { id: 4, ad: "Hüseyin", soyad: "Kemal", yas: 40 },
      { id: 5, ad: "Zeynep", soyad: "Sibel", yas: 45 },
      { id: 6, ad: "Merve", soyad: "Sude", yas: 50},
      { id: 7, ad: "Selin", soyad: "Sude", yas: 55 },
      { id: 8, ad: "Selin", soyad: "Sude", yas: 55 },
    ]

  }
  ngOnInit(): void {
    //this.personelListe = this.personelListe.filter(d => d.yas < 45)
  }


  bul() {
    console.log(this.isim);
    //yaşa göre filtreleme
    //this.personelListe = this.personelListe.filter(d => d.yas == this.yas)
    //isime göre filtreleme
    this.personelListe = this.personelListe.filter(d => d.ad.includes(this.isim))

  }

  duzenle(data: Personel) {
    this.personel = { ...data };
    //this.personel = data;
  }

  guncelle(data: Personel) {
    if (data.id == 0) {
      this.personelListe.push(data);
    }
    else {
      let index = this.personelListe.findIndex(d => d.id == data.id);
      this.personelListe[index] = { ...data };
    }


  }

}
