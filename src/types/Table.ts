export interface Table {
  confidence: {
    [name: string]: [number, number, number, number, number];
  };
  table: [number, number, number, number, number][];
}
