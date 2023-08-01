export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((element) => element.location === city).map((element) => {
    element.grade = 'N/A';
    for (const grade of newGrades) {
      if (grad.studentId === element.id) {
        element.grade = grad.grade
      }
    }
    return element;
  });
}
