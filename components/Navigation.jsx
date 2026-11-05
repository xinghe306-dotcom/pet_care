"use client";
import { useState } from "react";
import { useBooking } from "./BookingProvider";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#" aria-label="爪爪日和首页">
          <span className="brand-icon">
            <svg>
              <use href="#paw"></use>
            </svg>
          </span>
          <span className="brand-name">
            爪爪日和<small>PAWDAY PET SPA</small>
          </span>
        </a>
        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          id="nav"
          aria-label="主导航"
          onClick={(event) => {
            if (event.target.closest("a")) setMenuOpen(false);
          }}
        >
          <a href="#services">洗护服务</a>
          <a href="#about">关于日和</a>
          <a href="#process">到店流程</a>
          <a href="#interiors">店内环境</a>
          <a href="#location">门店位置</a>
        </nav>
        <button className="button" onClick={() => openBooking()}>
          预约一份宠爱 <span className="arrow">↗</span>
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "收起导航" : "展开导航"}
          onClick={() => setMenuOpen((value) => !value)}
          aria-controls="nav"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
