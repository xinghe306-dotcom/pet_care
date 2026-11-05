"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { localDate, saveBooking } from "../lib/booking";

export default function BookingDialog({ request, onClose }) {
  const [form, setForm] = useState({
    petName: "",
    petType: "dog",
    service: "基础洗护",
    weight: "5kg 以下",
    date: "",
    time: "10:00–12:00",
  });
  const [today, setToday] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(null);
  const done = useRef(null);
  const petName = useRef(null);

  useEffect(() => {
    if (!request) return;
    const date = localDate();
    setToday(date);
    setForm((old) => ({ ...old, ...request, date: old.date || date }));
    setError("");
    setSaved(null);
  }, [request]);

  useEffect(() => {
    if (saved) done.current?.focus();
  }, [saved]);

  useEffect(() => {
    if (request && !saved) petName.current?.focus();
  }, [request, saved]);

  function change(event) {
    const { name, value } = event.target;
    setForm((old) => ({ ...old, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    let result;
    // Access to window.localStorage itself can throw in restricted browsers.
    try {
      result = saveBooking(window.localStorage, data);
    } catch {
      result = { error: "浏览器暂时无法保存，请允许本地存储后重试。" };
    }
    if (result.error) {
      setError(result.error);
      return;
    }
    setSaved(result.booking);
  }

  return (
    <Modal
      id="booking"
      aria-labelledby={saved ? "booking-success-title" : "booking-title"}
      open={Boolean(request)}
      onClose={onClose}
    >
      <button
        className="dialog-close"
        aria-label="关闭预约窗口"
        onClick={onClose}
      >
        ×
      </button>
      <div id="booking-content" hidden={Boolean(saved)}>
        <div className="eyebrow">LET&apos;S MAKE A PAW DATE</div>
        <h2 id="booking-title">给可爱，留个时间。</h2>
        <p className="intro">填写预约意向，为毛孩子安排一段舒服时光。</p>
        <form id="booking-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              毛孩子的名字
              <input
                name="petName"
                ref={petName}
                placeholder="它叫什么名字？"
                required
                maxLength={30}
                autoComplete="off"
                value={form.petName}
                onChange={change}
              />
            </label>
            <label>
              它是一只
              <select name="petType" value={form.petType} onChange={change}>
                <option value="dog">狗狗</option>
                <option value="cat">猫咪</option>
              </select>
            </label>
            <label>
              想要的服务
              <select name="service" value={form.service} onChange={change}>
                {["基础洗护", "造型修剪", "深度护理"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
            <label>
              体重范围
              <select name="weight" value={form.weight} onChange={change}>
                {["5kg 以下", "5–10kg", "10–20kg", "20kg 以上"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
            <label>
              意向到店日期
              <input
                name="date"
                type="date"
                required
                min={today}
                value={form.date}
                onChange={change}
              />
            </label>
            <label>
              意向时段
              <select name="time" value={form.time} onChange={change}>
                {[
                  "10:00–12:00",
                  "12:00–14:00",
                  "14:00–16:00",
                  "16:00–18:00",
                ].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
          </div>
          <p className="form-note">
            这是演示预约：信息仅保存于当前浏览器，不会发送给门店，也不占用真实档期。正式预约需与门店确认。
          </p>
          <button className="button submit" type="submit">
            保存预约意向 <span className="arrow">↗</span>
          </button>
          <p
            id="form-error"
            role="alert"
            style={{ color: "#9d503b", fontSize: 12 }}
          >
            {error}
          </p>
        </form>
      </div>
      <div id="booking-success" hidden={!saved}>
        <div className="success">
          <div className="success-icon">✓</div>
          <h2 id="booking-success-title">好时光，先记下了。</h2>
          <p>你的预约意向已保存在当前浏览器。</p>
          <div className="saved-info" id="saved-info">
            {saved &&
              `${saved.petName} · ${saved.petType === "dog" ? "狗狗" : "猫咪"} · ${saved.weight}\n${saved.service}\n${saved.date}　${saved.time}`}
          </div>
          <p>这份意向尚未提交门店，请联系门店确认档期。</p>
          <button className="button" id="done" ref={done} onClick={onClose}>
            完成 <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
