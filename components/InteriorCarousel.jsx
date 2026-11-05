"use client";
import { useEffect, useRef, useState } from "react";

export default function InteriorCarousel() {
  const [index, setIndex] = useState(0),
    [paused, setPaused] = useState(true),
    [hovering, setHovering] = useState(false),
    [focused, setFocused] = useState(false),
    [visible, setVisible] = useState(true),
    [revision, setRevision] = useState(0),
    [announcement, setAnnouncement] = useState("");
  const touch = useRef(null);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(motion.matches);
    const updateMotion = () => setPaused(motion.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  useEffect(() => {
    if (paused || hovering || focused || !visible) return;
    const timer = setInterval(() => setIndex((old) => (old + 1) % 3), 6000);
    return () => clearInterval(timer);
  }, [paused, hovering, focused, visible, revision]);
  function manualSlide(value) {
    const next = (value + 3) % 3;
    setIndex(next);
    setRevision((old) => old + 1);
    setAnnouncement(
      `${next + 1} / 3，${["接待休息区", "专业洗护区", "美容修剪区"][next]}`,
    );
  }
  function onKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      manualSlide(index + (event.key === "ArrowLeft" ? -1 : 1));
    }
  }
  function onTouchStart(event) {
    const point = event.changedTouches[0];
    touch.current = { x: point.clientX, y: point.clientY };
  }
  function onTouchEnd(event) {
    if (!touch.current) return;
    const point = event.changedTouches[0],
      dx = point.clientX - touch.current.x,
      dy = point.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
      manualSlide(index + (dx < 0 ? 1 : -1));
  }
  return (
    <section className="section wrap interiors" id="interiors">
      <div className="section-head">
        <div>
          <div className="eyebrow">A SPACE MADE FOR LITTLE PAWS</div>
          <h2>走进日和，让每一份可爱安心停留</h2>
        </div>
        <p>
          从见面的第一刻，到焕然一新的小模样，
          <br />
          每个区域，都为舒服与从容留出空间。
        </p>
      </div>
      <div
        className="interior-carousel"
        role="region"
        aria-roledescription="轮播图"
        aria-label="店内三个区域的 AI 设计效果图"
        tabIndex={0}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setFocused(false);
        }}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <span className="interior-disclosure">
          PAWDAY 空间提案 · AI 设计效果图
        </span>
        <div className="interior-slides">
          <figure
            className={`interior-slide ${index === 0 ? "active" : ""}`}
            role="group"
            aria-roledescription="幻灯片"
            aria-label="第 1 张，共 3 张：接待休息区"
            aria-hidden={index !== 0}
            inert={index !== 0}
          >
            <img
              src="/assets/reception.png"
              alt="接待休息区：弧形石材前台、奶油色沙发、浅木茶几与通透落地窗，后方可见玻璃隔断洗护间"
              loading="lazy"
              width="1672"
              height="941"
            />
            <figcaption>
              <small>01 / RECEPTION & LOUNGE</small>
              <h3>接待休息区</h3>
              <p>
                一杯茶的从容，一次温柔的初见。
                <br />
                让主人放松，也让毛孩子慢慢熟悉。
              </p>
            </figcaption>
          </figure>
          <figure
            className={`interior-slide ${index === 1 ? "active" : ""}`}
            role="group"
            aria-roledescription="幻灯片"
            aria-label="第 2 张，共 3 张：专业洗护区"
            aria-hidden={index !== 1}
            inert={index !== 1}
          >
            <img
              src="/assets/wash.png"
              alt="专业洗护区：独立高位宠物洗护池、手持花洒、鼠尾草绿收纳柜、整齐毛巾与吹水设备"
              loading="lazy"
              width="1672"
              height="941"
            />
            <figcaption>
              <small>02 / BATH & CARE</small>
              <h3>专业洗护区</h3>
              <p>
                清爽有序的专属洗护空间。
                <br />
                从温水沐浴到细致吹干，认真照顾每一寸小毛毛。
              </p>
            </figcaption>
          </figure>
          <figure
            className={`interior-slide ${index === 2 ? "active" : ""}`}
            role="group"
            aria-roledescription="幻灯片"
            aria-label="第 3 张，共 3 张：美容修剪区"
            aria-hidden={index !== 2}
            inert={index !== 2}
          >
            <img
              src="/assets/grooming.png"
              alt="美容修剪区：可升降宠物美容台、专业修剪工具与玻璃分区，奶油白、浅木色与鼠尾草绿的统一设计"
              loading="lazy"
              width="1672"
              height="941"
            />
            <figcaption>
              <small>03 / GROOMING STUDIO</small>
              <h3>美容修剪区</h3>
              <p>
                明亮柔和的光线，井然有序的工具。
                <br />
                细细梳理，慢慢修剪，发现属于它的可爱。
              </p>
            </figcaption>
          </figure>
        </div>
        <span className="carousel-count" aria-hidden="true">
          <strong id="slide-number">
            {String(index + 1).padStart(2, "0")}
          </strong>{" "}
          / 03
        </span>
      </div>
      <div className="carousel-controls">
        <div className="carousel-tabs" role="group" aria-label="选择环境区域">
          <button
            data-slide="0"
            onClick={() => manualSlide(0)}
            aria-pressed={index === 0}
          >
            <span>01</span> 接待休息区
          </button>
          <button
            data-slide="1"
            onClick={() => manualSlide(1)}
            aria-pressed={index === 1}
          >
            <span>02</span> 专业洗护区
          </button>
          <button
            data-slide="2"
            onClick={() => manualSlide(2)}
            aria-pressed={index === 2}
          >
            <span>03</span> 美容修剪区
          </button>
        </div>
        <div className="carousel-arrows">
          <button
            id="slide-prev"
            onClick={() => manualSlide(index - 1)}
            aria-label="上一张环境图"
          >
            ←
          </button>
          <button
            id="slide-pause"
            className="carousel-pause"
            aria-label={paused ? "开始自动轮播" : "暂停自动轮播"}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "▶" : "Ⅱ"}
          </button>
          <button
            id="slide-next"
            onClick={() => manualSlide(index + 1)}
            aria-label="下一张环境图"
          >
            →
          </button>
        </div>
      </div>
      <p className="interior-note">
        以上为 AI 生成的门店空间设计效果图，用于展示装修风格，并非门店实拍。
      </p>
      <span
        id="slide-status"
        role="status"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clipPath: "inset(50%)",
        }}
      >
        {announcement}
      </span>
    </section>
  );
}
