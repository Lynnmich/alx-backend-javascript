export default function(getStudentsByLocation, city) {
  const Arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return Arr.filter((Arr) => Arr.location === city);
}
