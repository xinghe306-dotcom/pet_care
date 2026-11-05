import BookButton from "./BookButton";

export function PawSymbol() {
  return (
    <>
      <svg aria-hidden="true" style={{ display: "none" }}>
        <symbol id="paw" viewBox="0 0 40 40">
          <ellipse
            cx="11"
            cy="12"
            rx="4"
            ry="6"
            transform="rotate(-25 11 12)"
          ></ellipse>
          <ellipse cx="21" cy="8" rx="4" ry="6"></ellipse>
          <ellipse
            cx="30"
            cy="13"
            rx="4"
            ry="6"
            transform="rotate(25 30 13)"
          ></ellipse>
          <ellipse
            cx="5"
            cy="22"
            rx="3.5"
            ry="5"
            transform="rotate(-32 5 22)"
          ></ellipse>
          <path d="M12 24c4-8 10-8 15 0 9 12 0 14-6 11-6 3-17 1-9-11Z"></path>
        </symbol>
      </svg>
    </>
  );
}
export function Hero() {
  return (
    <>
      <section className="hero-shell">
        <div className="wrap hero">
          <div className="fade-in">
            <div className="eyebrow">A LITTLE CARE, A LOT OF LOVE.</div>
            <h1>
              洗去小烦恼，
              <br />
              蓬松
              <span>
                <b>好心情。</b>
              </span>
            </h1>
            <p>
              把每一只毛孩子，都当成自己的小宝贝。
              <br />
              从温柔洗护到精致修剪，让爱干净，也爱上洗澡。
            </p>
            <div className="hero-actions">
              <BookButton>
                预约洗护时光 <span className="arrow">↗</span>
              </BookButton>
              <a className="button light" href="#services">
                看看洗护菜单 <span className="arrow">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span>一宠一护，温柔对待</span>
              <span>猫犬分区，安心自在</span>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1100&q=85"
                alt="一只在阳光下露出笑容的金毛犬"
                fetchPriority="high"
              />
            </div>
            <span className="spark" aria-hidden="true">
              ✳
            </span>
            <div className="round-stamp">
              <span>HAPPY PETS</span>
              <strong>今天也要</strong>
              <span>香 香 软 软</span>
            </div>
            <div className="photo-label">
              <span className="heart">♡</span>
              <div>
                <strong>小小的爪爪，大大的偏爱</strong>
                <small>A happy pet makes a happy day.</small>
              </div>
            </div>
            <div className="hero-index">GOOD CARE. GOOD HAIR. GOOD DAY.</div>
          </div>
        </div>
      </section>
      <div className="promise-strip">
        <div className="wrap promise-row">
          <span>
            <i>♧</i> 温和配方 · 呵护皮毛
          </span>
          <b className="dot">✦</b>
          <span>
            <i>◷</i> 预约到店 · 从容洗护
          </span>
          <b className="dot">✦</b>
          <span>
            <i>♡</i> 观察情绪 · 耐心陪伴
          </span>
          <b className="dot">✦</b>
          <span>
            <i>✧</i> 清洁消毒 · 一客一用
          </span>
        </div>
      </div>
    </>
  );
}
export function About() {
  return (
    <>
      <section className="about-shell" id="about">
        <div className="wrap about">
          <div className="about-picture">
            <img
              src="/assets/reception.png"
              alt="AI 设计效果图：奶油白与鼠尾草绿的宠物洗护店接待休息区"
              loading="lazy"
            />
            <div className="mini-note">
              慢一点，爱多一点。<span>Little paws, big love.</span>
            </div>
          </div>
          <div>
            <div className="eyebrow">MORE THAN A PET SPA</div>
            <h2>
              不只是洗得干净，
              <br />
              更想让它自在一点。
            </h2>
            <p>
              对我们来说，洗护是一场需要信任的小小约会。
              <br />
              先认识，再靠近；先安心，再开始。
              <br />
              每一次停顿和等待，都是给毛孩子的温柔。
            </p>
            <div className="care-list">
              <div className="care-item">
                <span className="care-icon">♡</span>
                <div>
                  <strong>先交朋友，再做洗护</strong>
                  <p>留出适应时间，观察情绪，不催促每一个小紧张。</p>
                </div>
              </div>
              <div className="care-item">
                <span className="care-icon">♧</span>
                <div>
                  <strong>给不同的它，不同的照顾</strong>
                  <p>了解皮毛状态与洗护习惯，再一起确定护理方案。</p>
                </div>
              </div>
              <div className="care-item">
                <span className="care-icon">✧</span>
                <div>
                  <strong>小细节，也认真对待</strong>
                  <p>工具与台面及时清洁，用品分开使用，让陪伴更安心。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export function Process() {
  return (
    <>
      <section className="section wrap process" id="process">
        <div className="section-head">
          <div>
            <div className="eyebrow">A HAPPY LITTLE JOURNEY</div>
            <h2>把它交给我们，把轻松留给你</h2>
          </div>
          <p>四个小步骤，开启一段蓬松时光。</p>
        </div>
        <div className="steps">
          <article className="step">
            <div className="step-number">
              <b>01</b>
              <span>↗</span>
            </div>
            <h3>约个好时间</h3>
            <p>
              选好服务与到店时间，
              <br />
              提前告诉我们它的小习惯。
            </p>
          </article>
          <article className="step">
            <div className="step-number">
              <b>02</b>
              <span>♡</span>
            </div>
            <h3>见面，先认识一下</h3>
            <p>
              一起确认皮毛状态与需求，
              <br />
              给它一点熟悉环境的时间。
            </p>
          </article>
          <article className="step">
            <div className="step-number">
              <b>03</b>
              <span>✧</span>
            </div>
            <h3>享受专属洗护</h3>
            <p>
              温柔清洗，细致吹干，
              <br />
              认真照顾每一寸小毛毛。
            </p>
          </article>
          <article className="step">
            <div className="step-number">
              <b>04</b>
              <span>⌁</span>
            </div>
            <h3>接回香香的它</h3>
            <p>
              一起确认洗护效果，
              <br />
              带上日常护理小贴士回家。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
export function Faq() {
  return (
    <>
      <section className="faq-shell">
        <div className="section wrap faq">
          <div>
            <div className="eyebrow">A FEW THINGS TO KNOW</div>
            <h2>来之前，你可能想知道</h2>
            <p>把小疑问放下，把小可爱带来。</p>
          </div>
          <div>
            <details>
              <summary>第一次到店，需要准备什么？</summary>
              <p>
                带上牵引绳或航空箱，可以再带一件它熟悉的小物品。请提前说明年龄、疫苗情况、皮肤状态和不喜欢被触碰的位置，到店后一起确认是否适合当天洗护。
              </p>
            </details>
            <details>
              <summary>洗护大概需要多长时间？</summary>
              <p>
                基础洗护通常预留 1–2 小时，造型与深度护理预留 2–3
                小时。体型、毛量和情绪都会影响用时，接待时确认预计完成时间。
              </p>
            </details>
            <details>
              <summary>猫咪也可以来吗？</summary>
              <p>
                可以。猫咪服务采用独立预约时段，先评估状态再安排洗护。猫咪菜单中的造型修剪仅指局部卫生修剪，不默认全身剃毛。
              </p>
            </details>
            <details>
              <summary>毛孩子很怕水、容易紧张怎么办？</summary>
              <p>
                预约时说明情况，到店后先适应环境，从短时间接触开始。如果它持续明显紧张，会暂停洗护，与你沟通改期或调整服务。
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
