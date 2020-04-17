import { Component } from '@angular/core';
import { RequestService } from "../services/request.service";
import { Graph } from "../models/graph";

@Component({
  selector: 'app-graph-form',
  templateUrl: './graph-form.component.html',
  styleUrls: ['./graph-form.component.css']
})
export class GraphFormComponent {
  public id: number;
  public source: string;
  public target: string;

  constructor(private requestService: RequestService) {}

  async onSubmit() { 
    let graph = new Graph(this.id, this.source.toUpperCase(), this.target.toUpperCase());
    let res = await this.requestService.distanceRequest(graph);
    console.log(res);
  }

}
