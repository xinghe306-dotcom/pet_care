"use client";
import { useBooking } from "./BookingProvider";
export default function Visit() {
  const { openBooking } = useBooking();
  return (
    <section className="visit-shell" id="visit">
      <div className="wrap visit">
        <div>
          <div className="eyebrow">SEE YOU & YOUR LITTLE ONE</div>
          <h2>下一次见面，带上你的毛孩子。</h2>
          <p>给忙碌的日常留一点空白，给它一份刚刚好的宠爱。</p>
        </div>
        <div className="visit-actions">
          <button className="button" onClick={() => openBooking()}>
            预约一段好时光 <span className="arrow">↗</span>
          </button>
          <small>预约制服务 · 每一份可爱都值得等待</small>
        </div>
      </div>
    </section>
  );
}
