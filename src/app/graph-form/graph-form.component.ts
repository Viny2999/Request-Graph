import { Component } from '@angular/core';
import { RequestService } from "../services/request.service";
import { Graph } from "../models/graph";

@Component({
  selector: 'app-graph-form',
  templateUrl: './graph-form.component.html',
  styleUrls: ['./graph-form.component.css']
})
export class GraphFormComponent {
  public choice: string;
  public id: number;
  public source: string;
  public target: string;
  public maxStops: string = '';

  public showDistanceResponse = false;
  public showRouteResponse = false;
  public distance: number;
  public paths: string[];
  public routes: any[];

  constructor(private requestService: RequestService) {}

  async onSubmit() { 
    const graph = new Graph(this.id, this.source.toUpperCase(), this.target.toUpperCase(), this.maxStops);
    let res;
    if (this.choice == 'distance') {
      res = await this.requestService.distanceRequest(graph);
      this.distance = res.distance;
      this.paths = res.path;
      this.showRouteResponse =  false;
      this.showDistanceResponse = true;
    } else if (this.choice == 'route') {
      res = await this.requestService.routeRequest(graph);
      this.routes = res.routes;
      this.showDistanceResponse = false;
      this.showRouteResponse =  true;
    }
    
    

  }

}
