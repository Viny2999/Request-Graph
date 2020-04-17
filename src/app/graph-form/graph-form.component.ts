import { Component } from '@angular/core';

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

  submitted = false;

  onSubmit() { 
    let graph = new Graph(this.id, this.source.toUpperCase(), this.target.toUpperCase());
    console.log(graph);
  }

}
