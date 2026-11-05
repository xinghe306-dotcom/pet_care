"use client";

import { useState } from "react";
import Modal from "./Modal";
import { BOOKING_KEY } from "../lib/booking";

export default function PrivacyDialog({ open, onClose }) {
  const [status, setStatus] = useState("");
  function clearData() {
    try {
      localStorage.removeItem(BOOKING_KEY);
      setStatus("本机预约意向已清除。");
    } catch {
      setStatus("浏览器限制了本地存储访问。");
    }
  }
  return (
    <Modal
      id="privacy"
      aria-labelledby="privacy-title"
      open={open}
      onClose={onClose}
    >
      <button
        className="dialog-close"
        aria-label="关闭隐私说明"
        onClick={onClose}
      >
        ×
      </button>
      <h2 id="privacy-title">隐私说明</h2>
      <p className="privacy-text">
        演示预约只将宠物昵称、服务、体型与意向时间保存在本机浏览器，不向服务器提交。再次保存会覆盖上一次意向，可随时清除。页面图片与字体从第三方资源加载。
      </p>
      <button className="button light" id="clear-data" onClick={clearData}>
        清除本机预约意向
      </button>
      <p id="clear-status" role="status">
        {status}
      </p>
    </Modal>
  );
}
