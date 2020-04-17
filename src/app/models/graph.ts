export class Graph {

	constructor(
		public id: number,
		public source: string,
		public target: string,
		public maxStops?: string
	) { }
}
