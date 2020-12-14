// inferred type: number
function add(n1: number, n2: number): number {
  return n1 + n2;
}
// void return type
function printResult(num: number): void {
  console.log('result: ' + num);
}
// undefined  type
function printResults(num: number): undefined {
  console.log('result: ' + num);
  return;
}
printResult(add(5, 12));