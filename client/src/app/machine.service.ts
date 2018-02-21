import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MachineService {
  private url = 'http://localhost:3000';  

  constructor(private http: Http) {
  	
  }

  // Get all machines
  getMachines(){
    return this.http.get(this.url+'/api/machines')
      .map(res => res.json());
  }

  //update all machines
  updateMachines(machines){
    return this.http.put(this.url+'/api/machines', machines)
      .map(res => res.json());
  }

}