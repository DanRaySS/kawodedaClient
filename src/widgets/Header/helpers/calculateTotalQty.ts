import { IGood } from "entities/Good";

export function calculateTotalQty(items: IGood[]) {
  // Проверяем, что items - массив
  if (!Array.isArray(items)) {
    console.error('Ожидается массив элементов');
    return 0;
  }
  
  // Суммируем все значения qty
  return items.reduce((total, item) => {
    // Проверяем, что qty существует и является числом
    const qty = Number(item?.qty) || 0;
    return total + qty;
  }, 0);
}