"use client";
import { useState, useEffect } from "react";
import { useBooking } from "./BookingProvider";
export default function Footer() {
  const { openPrivacy } = useBooking();
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="wrap">
      <div className="footer-main">
        <a className="brand" href="#">
          <span className="brand-icon">
            <svg>
              <use href="#paw"></use>
            </svg>
          </span>
          <span className="brand-name">
            爪爪日和<small>PAWDAY PET SPA</small>
          </span>
        </a>
        <div className="footer-detail">
          <a className="footer-address" href="#location">
            门店地址 · 上海市普陀区宜川路街道陕西北路1620号
          </a>
          <span>营业时间 · 10:00–19:00（示例）</span>
          <a href="#visit">来日和，过个好日子 ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © <span id="year">{year}</span> PAWDAY · 爪爪日和　
          用心洗护，温柔相伴。
        </span>
        <span>
          品牌与菜单为演示内容　 ·　{" "}
          <a
            href="#"
            id="privacy-link"
            onClick={(event) => {
              event.preventDefault();
              openPrivacy();
            }}
          >
            隐私说明
          </a>
        </span>
      </div>
    </footer>
  );
}
