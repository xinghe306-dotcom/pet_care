"use client";
import { useBooking } from "./BookingProvider";
import { menus, photoUrl } from "../lib/menu";
export default function ServiceMenu() {
  const { currentPet, setCurrentPet, openBooking } = useBooking();
  const menu = menus[currentPet];
  return (
    <section className="section wrap" id="services">
      <div className="section-head">
        <div>
          <div className="eyebrow">OUR LITTLE MENU</div>
          <h2>每一种可爱，都值得被好好照顾</h2>
        </div>
        <div className="pet-tabs" role="group" aria-label="选择宠物种类">
          <button
            className={currentPet === "dog" ? "active" : ""}
            onClick={() => setCurrentPet("dog")}
            aria-pressed={currentPet === "dog"}
          >
            狗狗洗护
          </button>
          <button
            className={currentPet === "cat" ? "active" : ""}
            onClick={() => setCurrentPet("cat")}
            aria-pressed={currentPet === "cat"}
          >
            猫咪洗护
          </button>
        </div>
      </div>
      <div className="service-grid">
        <article className="service-card">
          <div className="service-photo">
            <img
              src={photoUrl(menu.photos[0])}
              alt={
                currentPet === "cat"
                  ? "猫咪洗护与毛发护理示意"
                  : "狗狗洗护与毛发护理示意"
              }
              loading="lazy"
            />
            <span className="service-tag">CLEAN & FLUFFY</span>
          </div>
          <div className="service-content">
            <div className="service-title">
              <h3>香香基础洗护</h3>
              <small>01 / BATH</small>
            </div>
            <p data-desc="0">{menu.descriptions[0]}</p>
            <div className="service-foot">
              <div className="price">
                ¥<span data-price="0">{menu.prices[0]}</span>
                <small>起 / 次</small>
              </div>
              <button
                className="service-book"
                onClick={() => openBooking("基础洗护")}
                aria-label="预约基础洗护"
              >
                ↗
              </button>
            </div>
          </div>
        </article>
        <article className="service-card">
          <div className="service-photo">
            <img
              src={photoUrl(menu.photos[1])}
              alt={
                currentPet === "cat"
                  ? "猫咪洗护与毛发护理示意"
                  : "狗狗洗护与毛发护理示意"
              }
              loading="lazy"
            />
            <span className="service-tag">A FRESH NEW LOOK</span>
          </div>
          <div className="service-content">
            <div className="service-title">
              <h3>元气造型修剪</h3>
              <small>02 / GROOM</small>
            </div>
            <p data-desc="1">{menu.descriptions[1]}</p>
            <div className="service-foot">
              <div className="price">
                ¥<span data-price="1">{menu.prices[1]}</span>
                <small>起 / 次</small>
              </div>
              <button
                className="service-book"
                onClick={() => openBooking("造型修剪")}
                aria-label="预约造型修剪"
              >
                ↗
              </button>
            </div>
          </div>
        </article>
        <article className="service-card">
          <div className="service-photo">
            <img
              src={photoUrl(menu.photos[2])}
              alt={
                currentPet === "cat"
                  ? "猫咪洗护与毛发护理示意"
                  : "狗狗洗护与毛发护理示意"
              }
              loading="lazy"
            />
            <span className="service-tag">EXTRA LOVE & CARE</span>
          </div>
          <div className="service-content">
            <div className="service-title">
              <h3>柔柔深度护理</h3>
              <small>03 / SPA</small>
            </div>
            <p data-desc="2">{menu.descriptions[2]}</p>
            <div className="service-foot">
              <div className="price">
                ¥<span data-price="2">{menu.prices[2]}</span>
                <small>起 / 次</small>
              </div>
              <button
                className="service-book"
                onClick={() => openBooking("深度护理")}
                aria-label="预约深度护理"
              >
                ↗
              </button>
            </div>
          </div>
        </article>
      </div>
      <p className="pricing-note" id="pricing-note" aria-live="polite">
        示例菜单价格适用于 5kg 以下{currentPet === "dog" ? "狗狗" : "猫咪"}
        ，实际费用根据体型、毛量与毛发状态确认；护理不含医疗服务。
      </p>
    </section>
  );
}
