# 《九地之歌：大和靈魂的演歌版圖》

**戰後至昭和末期日本演歌互動研究（1945–1980）**

---

## 關於小百合（Sayori）

我是小百合（Sayori）——百合花的名字，象徵純潔而堅韌的美麗。

演歌，是日本戰後靈魂的聲音地圖。它誕生於廢墟中的哀愁，在霓虹燈下的孤獨裡生長，隨著鐵路延伸到每一個被都市化浪潮沖走的故鄉。作為一位文化典藏人，我在九個地理區域的演歌版圖上，為你留下指引。

每一處地名，都是一個情感座標。每一首歌，都是一封寫給記憶的信。

讓我帶你走過這段旅途。

---

## 專案簡介

**《九地之歌》**（Songs of the Nine Lands）是一個互動式文學研究網站，以九個日本地理區域為經緯，探索演歌（Enka）作為聲音文化現象的歷史演變（1945–1980）。

### 核心功能

- **九地聲景地圖** — 可互動的日本地圖，包含各地區的浮世繪風格標記
- **主題章節** — 四個深度研究章節，從戰後奠基到天鵝絨融合
- **地區深潛** — 九個地理區域的文化底色與代表歌手分析
- **藝術家表格** — 殿堂歌手的地域脈絡與風格注記
- **四七拔音階實驗室** — 視覺化呈現演歌核心音階的結構原理
- **鄧麗君對照** — 傳統小節技法 vs. 柔聲演歌的美學比較
- **🌸 小百合的推薦** — 隱藏彩蛋：九地靈魂回聲精選七首，含★石川さゆり與★鄧麗君精選曲目

### 研究涵蓋範圍

| 地區 | 代表歌手 | 文化特色 |
|------|---------|--------|
| 北海道 | 北島三郎 | 開拓前線、漁民靈魂 |
| 東北 | 吉幾三 | 祭典與冬眠、四七拔詩學 |
| 青森 | 石川さゆり | 津輕海峽、感性地理 |
| 東京 | 美空雲雀 | 霓虹孤獨、西方現代性融合 |
| 山陽 | 五木ひろし | 瀨戶內海、廣島再生意志 |
| 大阪 | 都はるみ | 道頓堀泣聲、商人哀愁 |
| 四國 | 島倉千代子 | 遍路孤寂、阿波踊狂熱 |
| 九州 | 森進一 | 火之國聲腔、港口美學 |
| 沖繩 | — | 琉球音階、1972年復歸 |

---

## 技術架構

```
sayuri-app/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/
│   │   └── sayuri/    # 所有核心組件
│   │       ├── SayuriApp.tsx          # 主應用
│   │       ├── JapanMap.tsx           # SVG互動地圖
│   │       ├── RegionPanel.tsx        # 地區底部面板
│   │       ├── SplashScreen.tsx       # 進入頁面
│   │       ├── YonanukiLab.tsx        # 四七拔音階實驗室
│   │       ├── TeresaTengToggle.tsx   # 鄧麗君對照切換
│   │       ├── SayoriRecommendations.tsx # 彩蛋推薦清單
│   │       ├── ArtistTable.tsx        # 藝術家表格
│   │       ├── SalesTable.tsx         # 銷量指標
│   │       ├── HankoStamp.tsx         # 漢字印章組件
│   │       ├── MarkdownWithCitations.tsx # Markdown渲染
│   │       └── ReferencesFooter.tsx   # 參考來源
│   ├── data/
│   │   └── sayuri-content.ts  # 所有內容、引用、三語文案
│   └── lib/
│       └── audio.ts   # Web Audio API合成器（保留架構備用）
```

### 技術堆疊

- **框架**: Next.js 16 App Router + TypeScript
- **樣式**: Tailwind CSS v4 + 自定義 CSS 變數
- **動畫**: Framer Motion 12
- **字體**: JetBrains Mono + Newsreader（next/font/google）
- **地圖**: 純 SVG + 浮世繪風格 inline 圖示
- **部署**: GitHub Pages（靜態匯出）

### 色彩系統

| 變數 | 十六進位 | 用途 |
|------|---------|------|
| `--sayuri-paper` | `#E6E1DA` | 頁面背景 |
| `--sayuri-surface` | `#DFDCD6` | 卡片表面 |
| `--sayuri-ink` | `#111827` | 主文字 |
| `--sayuri-primary` | `#FED7AA` | 主要強調色（橙桃） |
| `--sayuri-red` | `#A61022` | 漢字印章紅 |

---

## 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 靜態匯出（部署用）
npm run build
# 輸出至 out/ 資料夾
```

---

## 部署

此專案配置為 GitHub Pages 靜態匯出。推送至 `main` 分支後，GitHub Actions 將自動建置並部署。

Live URL: **https://eli20261124.github.io/sayuri-enka/**

---

## 學術引用

本研究引用來源請見網站頁尾的 References 區塊（含13項引用）。主要參考：

1. 演歌 - 維基百科（zh.wikipedia.org）
2. 演歌的誕生 - COMMAGAZINE
3. 石川さゆり《津軽海峡・冬景色》相關研究
4. 鄧麗君文化傳奇 - 台灣光華雜誌
5–13. 各地區歌手與文化機構之日文維基百科條目

---

## 授權

MIT License

Copyright (c) 2026 Sayori Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

*小百合，守護演歌版圖的文化典藏人。*  
*Sayori — Cultural archivist of the Enka landscape, pure and resilient as the lily.*
