export function moverFecha(d: Date, days: number) {
  let r = new Date(d);
  const dateUpdated = r.getDate() + days;
  r.setDate(dateUpdated);
  return r;
}

export function moverHours(d: Date, hours: number) {
  const result = d.getTime() + hours * 3600 * 1000;
  return new Date(result);
}
