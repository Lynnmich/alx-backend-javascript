export default function getStudentIdsSum(getListStudents) {
  const Arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
    return students.reduce((sum, student) => sum + student.id, 0);
}
