import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AzureAllService {

  http: any;
 
  constructor(private HttpClient :HttpClient) { }

  //---Get All Data--//
  getAllData() {
    //return this.http.get(`${environment.apiUrl}/api/Home/GetUserLoggeddata`, )
    return this.HttpClient.get('https://ariqt-azuretablestorage-webapi.azurewebsites.net/api/Home/GetUserLoggeddata');
  }
//---Get All data behalf of Dept---//
  getAllDataOfDept(){
    return this.HttpClient.get('https://ariqt-azuretablestorage-webapi.azurewebsites.net/api/Home/GetUserLoginData');
  }
  
}
