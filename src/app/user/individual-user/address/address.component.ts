import { Address } from './../../../interfaces/user/address';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;

  constructor() { }

  ngOnInit(): void {
  }

}
