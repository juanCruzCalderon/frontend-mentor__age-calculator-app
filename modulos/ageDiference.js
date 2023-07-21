export default function ageDiference(fecha) {
  const hoy = new Date();
  let born = new Date();
  born.setFullYear(fecha[2]);
  born.setMonth(fecha[1] - 1);
  born.setDate(fecha[0]);
  return hoy - born;
}
