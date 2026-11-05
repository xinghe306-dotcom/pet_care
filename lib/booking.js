export const BOOKING_KEY = "pawday-booking";
export const STORE_ADDRESS = "上海市普陀区宜川路街道陕西北路1620号";

export function localDate(value = new Date()) {
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
}

export function validateBooking(data, today = localDate()) {
  if (!data.date || data.date < today) return "请选择今天或之后的日期。";
  if (!data.petName.trim()) return "请填写毛孩子的名字。";
  return "";
}

export function saveBooking(storage, data, today = localDate()) {
  const error = validateBooking(data, today);
  if (error) return { error };
  const booking = { ...data, petName: data.petName.trim() };
  try {
    storage.setItem(BOOKING_KEY, JSON.stringify(booking));
    return { booking };
  } catch {
    return { error: "浏览器暂时无法保存，请允许本地存储后重试。" };
  }
}
