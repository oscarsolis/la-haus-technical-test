import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { RealEstate } from '@models/real-estate.model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private readonly http: HttpClient) { }

  public getRealEstates(): Observable<Array<RealEstate>> {
    return this.http.get<{
      data: Array<any>
    }>('../../data/real_estates.json').pipe(
      map(({ data }) => data ? data.map(({ id, attributes: { name, real_estate_ids } } = {}) => ({
        id,
        name,
        realEstatesIds: real_estate_ids
      })) : [])
    );
  }
}
