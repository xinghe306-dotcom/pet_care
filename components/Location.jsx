"use client";
import { useRef, useState } from "react";
import { STORE_ADDRESS } from "../lib/booking";
export default function Location() {
  const addressRef = useRef(null);
  const [status, setStatus] = useState(""),
    [copied, setCopied] = useState(false);
  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(STORE_ADDRESS);
      setCopied(true);
      setStatus("地址已复制，带上小可爱出发吧。");
    } catch {
      setStatus("请长按或选中上方地址复制。");
      const selection = window.getSelection();
      if (selection && addressRef.current) {
        const range = document.createRange();
        range.selectNodeContents(addressRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
  return (
    <section
      className="section wrap location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="section-head">
        <div>
          <div className="eyebrow">FOLLOW THE PAWS, FIND US</div>
          <h2 id="location-title">循着小爪印，来日和坐坐</h2>
        </div>
        <p>在熟悉的街角，等一个毛茸茸的你。</p>
      </div>
      <div className="location-layout">
        <figure className="neighborhood">
          <svg
            viewBox="0 0 760 550"
            role="img"
            aria-labelledby="map-title map-desc"
          >
            <title id="map-title">爪爪日和门店街区示意地图</title>
            <desc id="map-desc">
              门店位于上海市普陀区陕西北路1620号，按照提供的地图红色定位点标注在1号楼西北侧，附近道路有澳门路、陕西北路和普陀路。示意图非等比例，实际路线请查看高德地图。
            </desc>
            <defs>
              <pattern
                id="map-dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#dce6d0"></circle>
              </pattern>
              <filter
                id="pin-shadow"
                x="-40%"
                y="-40%"
                width="180%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="5"
                  floodColor="#3f6347"
                  floodOpacity=".18"
                ></feDropShadow>
              </filter>
            </defs>
            <rect width="760" height="550" fill="#edf3e6"></rect>
            <rect width="760" height="550" fill="url(#map-dots)"></rect>
            <path d="M0 420 Q85 385 160 460L290 550H0Z" fill="#d5e4bf"></path>
            <path d="M80 0H245L78 130H0V60Z" fill="#d5e4bf"></path>
            <g fill="#e0e7d7" stroke="#d2dcc9" strokeWidth="2">
              <rect
                x="365"
                y="4"
                width="170"
                height="90"
                rx="15"
                transform="rotate(-36 450 50)"
              ></rect>
              <rect
                x="555"
                y="65"
                width="165"
                height="105"
                rx="15"
                transform="rotate(-36 637 115)"
              ></rect>
              <path d="M230 160L360 68 436 162 310 253Z"></path>
              <path d="M85 290L175 224 270 293 221 378 156 377Z"></path>
              <path d="M480 450L654 335 738 432 560 548Z"></path>
              <path d="M10 475L76 432 169 506 140 550H10Z"></path>
            </g>
            <path
              d="M-70 330L470 -75M-60 285L445 680M235 660L855 220"
              fill="none"
              stroke="#d8e2cd"
              strokeWidth="54"
              strokeLinejoin="round"
            ></path>
            <path
              d="M-70 330L470 -75M-60 285L445 680M235 660L855 220"
              fill="none"
              stroke="#fffef7"
              strokeWidth="40"
              strokeLinejoin="round"
            ></path>
            <path
              d="M-70 330L470 -75M-60 285L445 680M235 660L855 220"
              fill="none"
              stroke="#dbe4d0"
              strokeWidth="2"
              strokeDasharray="7 10"
            ></path>
            <path
              d="M320 256L505 130 619 291 469 399 356 363Z"
              fill="#f7f0da"
              stroke="#e6dbc0"
              strokeWidth="2"
            ></path>
            <path
              d="M340 320L419 273 500 348 515 422 431 475 320 388Z"
              fill="#dbe6cd"
              stroke="#bdcea9"
              strokeWidth="2"
            ></path>
            <g className="map-label">
              <text x="410" y="402">
                1号楼
              </text>
              <text x="292" y="173" textAnchor="middle" fontSize="13">
                汉庭酒店
              </text>
              <text x="153" y="310" textAnchor="middle" fontSize="13">
                澳门轻奢酒店
              </text>
              <text
                x="580"
                y="430"
                fontSize="13"
                transform="rotate(-35 580 430)"
              >
                全季酒店
              </text>
            </g>
            <g className="map-label road-label">
              <text x="95" y="222" transform="rotate(-37 95 222)">
                澳门路
              </text>
              <text x="154" y="470" transform="rotate(38 154 470)">
                陕西北路
              </text>
              <text x="540" y="470" transform="rotate(-35 540 470)">
                普陀路
              </text>
            </g>
            <g fill="#a4bb8b">
              <circle cx="54" cy="397" r="19"></circle>
              <circle cx="81" cy="413" r="13"></circle>
              <circle cx="699" cy="214" r="18"></circle>
              <circle cx="722" cy="229" r="12"></circle>
            </g>
            <g stroke="#7e9d6a" strokeWidth="3" strokeLinecap="round">
              <path d="M54 409v14M699 226v14"></path>
            </g>
            <g fill="#97ac81" opacity=".7">
              <use
                href="#paw"
                x="263"
                y="374"
                width="20"
                height="20"
                transform="rotate(-18 273 384)"
              ></use>
              <use
                href="#paw"
                x="284"
                y="348"
                width="19"
                height="19"
                transform="rotate(8 293 357)"
              ></use>
              <use
                href="#paw"
                x="306"
                y="325"
                width="18"
                height="18"
                transform="rotate(-15 315 334)"
              ></use>
            </g>
            <ellipse
              cx="354"
              cy="316"
              rx="33"
              ry="10"
              fill="#476343"
              opacity=".13"
            ></ellipse>
            <g filter="url(#pin-shadow)">
              <path
                d="M354 319C344 305 319 286 319 263a35 35 0 0 1 70 0c0 23-25 42-35 56Z"
                fill="#426b50"
                stroke="#fffef7"
                strokeWidth="5"
              ></path>
              <use
                href="#paw"
                x="337"
                y="243"
                width="34"
                height="34"
                fill="#fff5cf"
              ></use>
              <rect
                x="398"
                y="208"
                width="222"
                height="79"
                rx="17"
                fill="#fffef7"
              ></rect>
              <path d="M400 251L385 264 400 269" fill="#fffef7"></path>
              <text
                x="419"
                y="240"
                fill="#2d4a37"
                fontSize="21"
                fontWeight="700"
              >
                爪爪日和 · 在这里
              </text>
              <text x="419" y="266" fill="#829074" fontSize="13">
                陕西北路 1620 号
              </text>
            </g>
            <g transform="translate(691 44)" fill="#64805c">
              <text textAnchor="middle" y="-5" fontSize="12" fontFamily="Arial">
                N
              </text>
              <path d="M0 3L-7 25 0 21 7 25Z"></path>
            </g>
            <g transform="translate(25 42)">
              <rect width="160" height="33" rx="16" fill="#fffef7"></rect>
              <text
                x="80"
                y="22"
                textAnchor="middle"
                fill="#708363"
                fontSize="11"
                letterSpacing="2"
                fontFamily="Arial"
              >
                OUR LITTLE NEIGHBORHOOD
              </text>
            </g>
          </svg>
          <figcaption className="map-caption">
            街区示意图 · 依据门店提供的位置绘制，非等比例；出行请查看实时地图。
          </figcaption>
        </figure>
        <div className="location-card">
          <span className="location-chip">
            <svg aria-hidden="true">
              <use href="#paw"></use>
            </svg>{" "}
            毛孩子的快乐目的地
          </span>
          <h3>
            我们在这里，
            <br />
            等你和小可爱。
          </h3>
          <address
            className="store-address"
            id="store-address"
            ref={addressRef}
          >
            上海市普陀区宜川路街道
            <br />
            <strong>陕西北路1620号</strong>
          </address>
          <p className="location-hint">
            记住这个小街角：
            <br />
            陕西北路，靠近普陀路、澳门路。
            <br />
            带上牵引绳或航空箱，一起慢慢来。
          </p>
          <div className="location-buttons">
            <a
              className="button"
              href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%99%AE%E9%99%80%E5%8C%BA%E9%99%95%E8%A5%BF%E5%8C%97%E8%B7%AF1620%E5%8F%B7&city=上海&callnative=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              高德地图查看 <span className="arrow">↗</span>
            </a>
            <button
              className="button light"
              id="copy-address"
              type="button"
              onClick={copyAddress}
            >
              {copied ? "已复制 ✓" : "复制地址"}
            </button>
          </div>
          <p
            className="copy-status"
            id="copy-address-status"
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}
