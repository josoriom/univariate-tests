export interface Table {
  confidence: Record<string, [number, number, number, number, number]>;
  table: Array<[number, number, number, number, number]>;
}
