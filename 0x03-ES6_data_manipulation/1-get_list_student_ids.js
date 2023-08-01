export default function getListStudentIds(obj) {
  const Arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const mappedArr = Arr.map((element) => element.id);
  if (Array.isArray(obj)) {
    return mappedArr;
  }
  return [];
}
