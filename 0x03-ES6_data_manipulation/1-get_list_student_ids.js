export default function getListStudentIds(arr) {
  return typeof arr === 'object' ? arr.map((item) => item.id) : [];
}
