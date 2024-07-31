/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @returns an array of objects who are located in a specific city.
 */

export default function getStudentsByLocation(students, loc) {
  const locations = students.filter((student) => student.location === loc);

  return locations;
}
