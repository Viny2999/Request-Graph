import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Graph } from '../models/graph';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public async distanceRequest(graph: Graph) {
    return await this.request('distance', graph);
  }

  private async request(path, graph: Graph) {
    return await this.http.post(`${this.url}${path}/${graph.id}/from/${graph.source}/to/${graph.target}`, {}).toPromise();
  }
}
