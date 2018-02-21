import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket; // The client instance of socket.io

  constructor() {
    this.socket = io();
  }

  // Emit: gist saved event
  emitMachineUpdate(machines){
      this.socket.emit('machineUpdate', machines);
  }

  // Consume: on gist saved 
  consumeMachineUpdate(){
    var self = this;
    this.socket.on('machineUpdate', function(machines){
      console.log('machine update')
    });
  }

}