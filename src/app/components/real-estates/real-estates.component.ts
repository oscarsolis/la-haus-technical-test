import { Component, OnInit } from '@angular/core';

import { RealEstate } from '@models/real-estate.model';
import {┬áRealEstateService } from '@services/real-estate.service';

@Component({
  selector: 'app-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.scss'],
})
export class RealEstatesComponent implements OnInit {

  public realEstates: Array<RealEstate> = [];

  constructor(private readonly ┬árealEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.realEstateService.getRealEstates().subscribe(
      (realEstates: Array<RealEstate>) => (this.realEstates = realEstates)
    );
  }

}
