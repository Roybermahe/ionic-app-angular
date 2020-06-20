import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const getTracks = '/playlist/93489551/tracks';

@Injectable({providedIn: 'root'})

export class deezerService {
  constructor(private httpClient: HttpClient) { }
  
  async getMusica() {
    return this.httpClient.get<any>(getTracks);
  }
}
