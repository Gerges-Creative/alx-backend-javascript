/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 */
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  } else {
    weakMap.set(endpoint, 1);
  }

  const count = weakMap.get(endpoint);
  if (count > 5) {
    throw new Error('Endpoint load is high');
  }
}
