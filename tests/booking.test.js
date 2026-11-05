import test from "node:test";
import assert from "node:assert/strict";
import {
  BOOKING_KEY,
  localDate,
  validateBooking,
  saveBooking,
} from "../lib/booking.js";

const booking = {
  petName: "  小橘  ",
  petType: "cat",
  service: "造型修剪",
  weight: "5kg 以下",
  date: "2026-11-05",
  time: "10:00–12:00",
};

test("设备本地日期和跨年日期", () => {
  assert.equal(localDate(new Date(2026, 10, 5, 0, 1)), "2026-11-05");
  assert.equal(localDate(new Date(2026, 11, 31, 23, 59)), "2026-12-31");
});

test("今天可预约，过去日期和空白昵称被拒绝", () => {
  assert.equal(validateBooking(booking, "2026-11-05"), "");
  assert.match(validateBooking(booking, "2026-11-06"), /今天或之后/);
  assert.match(
    validateBooking({ ...booking, date: "" }, "2026-11-05"),
    /今天或之后/,
  );
  assert.match(
    validateBooking({ ...booking, petName: "  " }, "2026-11-05"),
    /名字/,
  );
});

test("保留原存储键和字段，修剪昵称并覆盖旧意向", () => {
  const values = new Map([[BOOKING_KEY, "old data"]]);
  const storage = { setItem: (key, value) => values.set(key, value) };
  const result = saveBooking(storage, booking, "2026-11-05");
  assert.equal(result.error, undefined);
  assert.deepEqual(JSON.parse(values.get("pawday-booking")), {
    ...booking,
    petName: "小橘",
  });
  assert.equal(booking.petName, "  小橘  ");
});

test("校验失败和存储失败不会宣告保存成功", () => {
  let writes = 0;
  const storage = {
    setItem() {
      writes++;
      throw new Error("QuotaExceededError");
    },
  };
  assert.match(
    saveBooking(storage, { ...booking, petName: " " }, "2026-11-05").error,
    /名字/,
  );
  assert.equal(writes, 0);
  const result = saveBooking(storage, booking, "2026-11-05");
  assert.match(result.error, /无法保存/);
  assert.equal(result.booking, undefined);
  assert.equal(writes, 1);
});
