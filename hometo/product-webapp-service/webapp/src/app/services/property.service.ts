import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  [x: string]: any;
  
  constructor(private http:HttpClient) { }

    private sharedPropertyData: any;

    getProperties() : Observable<any>
    {
      return this.http.get("http://localhost:1008/api/v1/getProperties");
    }

    getPropertyById(propertyID:string):Observable<any> {
      return this.http.get(`http://localhost:1008/api/v1/getPropertyById/${propertyID}`);
    }

    getPropertiesByType(propertyType:string): Observable<any> {
      return this.http.get(`http://localhost:1008/api/v1/getPropertiesByType/${propertyType}`);
    }

    addProperty(newProperty:any):any{
      return this.http.post("http://localhost:1008/api/v1/addProperty",newProperty);
    } 

    deleteProperty(propertyID:string):any{
      return this.http.delete(`http://localhost:1008/api/v1/deleteProperty/${propertyID}`,{responseType:'text'});
    }

    updateProperty(propertyID:string, updatedProperty:Property):any{
      return this.http.put(`http://localhost:1008/api/v1/updateProperty/${propertyID}`,updatedProperty);
    }

    setPropertyData(property: Property):void{
      this.sharedPropertyData = property;
    }

    getPropertyData():any{
      return this.sharedPropertyData;
    }
}
