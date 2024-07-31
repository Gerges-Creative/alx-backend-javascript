/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number[]} The list of student ids.
 */

export default function getListStudentsIds(list) {
  if (!(list instanceof Array)) {
    return [];
  }

  const ids = list.map((student) => student.id);

  return ids;
}
