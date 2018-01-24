export function isNullOrUndefined(itm: any): boolean {
  return (itm === null || itm === undefined || itm === 'na' || itm === 'NaN');
}
export function isNullOrEmpty(itm: any): boolean {
  return (itm === null || itm === undefined || itm === '');
}
