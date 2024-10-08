/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number} the sum of all the student ids.
 */

export default function getStudentIdsSum(students) {
  const sumIds = students.reduce((total, student) => student.id + total, 0);

  return sumIds;
}
