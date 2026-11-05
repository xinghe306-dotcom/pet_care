# 爪爪日和 PAWDAY

Next.js App Router + React 单页宠物洗护网站，使用 JavaScript 和 npm。保留奶油白、鼠尾草绿的原页面设计，支持桌面与手机。

## 本地运行

使用 Node.js 20.9 或以上版本（推荐 Node.js 24）。

```sh
npm ci
npm run dev
```

打开 http://localhost:3000。

```sh
npm test          # 预约日期、校验、存储兼容与失败场景
npm run build    # 静态导出到 out/
npm run check    # 检查导出资源、锚点、ID 和地图链接
npm run preview  # 在 3000 端口预览 out/；npm start 等价
```

静态导出使用静态文件服务预览，不使用 `next start`。开发服务和预览服务不要同时占用 3000 端口。

## 结构

- `app/`：首页编排、根布局、SEO metadata 与全局样式。
- `components/`：静态内容、导航、猫狗服务菜单、预约与隐私弹窗、环境轮播、门店位置。
- `lib/`：服务数据与预约校验、存储逻辑。
- `public/assets/`：三张原有门店空间图片。
- `legacy/`：迁移前 HTML 和旧修改脚本，仅作历史参考；新构建不读取这些文件。

## 功能与数据

菜单切换同步宠物种类、价格、说明和图片；预约按钮预选当前宠物与服务。预约只保存在浏览器，不会发送给门店或占用真实档期。保留原存储键 `pawday-booking` 和字段 `petName`、`petType`、`service`、`weight`、`date`、`time`；再次保存覆盖旧意向，隐私弹窗可清除记录。

日期使用设备本地日期。沿用同一域名与端口时旧存储仍然保留；换地址后浏览器存储不会自动迁移。

环境轮播每 6 秒自动切换，支持上一张、下一张、区域按钮、暂停、左右键和水平滑动。鼠标悬停、轮播获得焦点或页面隐藏时暂停，尊重系统减少动态效果设置。地图沿用高德链接；剪贴板失败时显示提示并选中地址供手动复制。

图片与字体继续使用原有第三方来源；本地三张空间图保留 AI 设计效果图标注。

## 静态托管

`next.config.mjs` 使用 `output: 'export'`，可将 `out/` 部署到静态文件托管。`.openai/hosting.json` 保留原 Sites 项目标识，静态目录已改为 `out`；发布前先构建。当前不使用 API、Server Actions 或服务器图片优化。
