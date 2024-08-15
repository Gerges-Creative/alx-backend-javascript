/**
 * Retrieves a map of grocery names and their quantity.
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const items = new Map([
    ["Apples", 10],
    ["Tomatoes", 10],
    ["Pasta", 1],
    ["Rice", 1],
    ["Banana", 5]
  ]);

  return items;
}
