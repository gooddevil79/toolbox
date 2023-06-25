/**
 * Return whether an array is empty or not
 *
 * @example
 *
 * isEmpty([])            // true
 * isEmpty([1])           // false
 * isEmpty([undefined])   // false
 * isEmpty([null])        // false
 * isEmpty([,])           // false
 * isEmpty([, null])      // false
 * isEmpty([, undefined]) // false
 */
export function isEmpty(x: unknown[]): boolean {
  return x.length === 0;
}
