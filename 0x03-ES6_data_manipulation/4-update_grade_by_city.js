/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);

  const assignGrades = cityStudents.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });

  return assignGrades;
}
