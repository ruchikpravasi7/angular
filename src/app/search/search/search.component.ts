import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface User {
  doctorName: string;
  clinicName: string;
  location: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFilterForm: FormGroup = new FormGroup({
    search: new FormControl(),
    speciality: new FormControl(),
    location: new FormControl()
  })
  // searchFilterForm: FormGroup = new FormGroup(
  //   {
  //     search: new FormControl(),
  //     speciality: new FormControl(),
  //     location: new FormControl()
  //   }
  // );
  specialityfilteredOptions: [];
  locationfilteredOptions: []
  constructor() {
  }

  users: User[] = [
    {
      doctorName: 'Dr. Len',
      clinicName: 'Apollo',
      location: 'Mumbai'
    },
    {
      doctorName: 'Dr. Ben',
      clinicName: 'Bisen',
      location: 'Mumbai'
    },
    {
      doctorName: 'Dr. Cener',
      clinicName: 'Heal',
      location: 'Mumbai'
    },
  ];
  ngOnInit(): void {
  }

  specialityFilter(value: string) { }
  locationFilter(value: string) { }
  applyFilter(value: string) { }
  resetFilters() { }
}
