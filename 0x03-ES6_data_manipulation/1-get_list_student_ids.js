/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns
 */

export default function getListStudentsIds(list) {
  if (list instanceof Array) {
    return [];
  }

  const ids = list.map((list) => list.id);

  return ids;
}
