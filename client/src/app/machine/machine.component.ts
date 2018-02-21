import { Component, OnInit, OnDestroy } from '@angular/core';

import { MachineService } from '../machine.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html'
})
export class MachineComponent implements OnInit, OnDestroy {

  messages = [];
  machines = [];
  cycle = null;
  modals = [];
  connection;
  message;
  private socket: SocketIOClient.Socket;

  constructor(private MachineService:MachineService) {
    this.socket = io();
    this.socket.on('machineUpdate', machines => {
      this.getData();
    });
  }
  
  onSubmit(i){
    let toTime = this.cycle * 60 * 1000 + new Date().getTime();
    this.machines[i].deadline = toTime;
    this.machines[i].status = "nok";
    this.machines[i].time = Date.now();
    this.machines[i].statusText = "Utilisé";
    //update machines
    this.MachineService.updateMachines(this.machines)
    .subscribe(machines => {
      this.socket.emit('machineUpdate', this.machines);
      this.modals[this.machines[i].id] = !this.modals[this.machines[i].id];
    });
  }
  
  setMachineAvailable(i){
    this.machines[i].deadline = null;
    this.machines[i].status = "ok";
    this.machines[i].time = null;
    this.machines[i].statusText = "Disponible";
    this.MachineService.updateMachines(this.machines)
    .subscribe(machines => {
      this.socket.emit('machineUpdate', this.machines);
      this.modals[this.machines[i].id] = false;
    });
  }
  
  public getData(){
    this.MachineService.getMachines()
    .subscribe(machines => {
      this.machines = machines;
    });
  }
  
  getNowDeadline(deadline){
    return Math.abs((deadline - Date.now())/1000);
  }

  ngOnInit() {
    this.getData();
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}