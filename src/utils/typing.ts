/**
 * 取得 eum 鍵值
 * @param {object} enumObj - enum 物件
 * @param {number} value - enum 對應值
 * @returns {string} - enum 對應鍵值
 */
export function getEnumKeyByValue(enumObj: object, value: number): string {
  return Object.keys(enumObj)[Object.values(enumObj).indexOf(value)];
}

/**
 * 取得 enum 數量
 * @param {object} enumObj - enum 物件
 * @returns {number} - enum 數量
 */
export function getEnumCount(enumObj: object): number {
  return Object.keys(enumObj).length / 2;
}

/**
 *
 * @param enumObj
 */
export function getEnumEntries(enumObj: object): Array<[string, number]> {
  const length = getEnumCount(enumObj);
  return Object.entries(enumObj).slice(length, length * 2);
}
