export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return students.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchedGrade ? matchedGrade.grade : "N/A",
    };
  }).filter((student) => student.location === city);
}
