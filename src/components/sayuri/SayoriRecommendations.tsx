"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Song = {
  titleJP: string;
  titleCH: string;
  artist: string;
  lyricistComposer: string;
  year: string;
  reason: string;
  featured?: boolean;
};

const songs: Song[] = [
  {
    titleJP: "津軽海峡・冬景色",
    titleCH: "津輕海峽・冬景色",
    artist: "石川さゆり",
    lyricistComposer: "詞：阿久悠 / 曲：三木たかし",
    year: "1977",
    reason:
      "演歌「感性地理」的巔峰之作。從上野車站到龍飛崎，一首歌建構了整條北國旅途的聽覺記憶，讓地名成為情感錨點。石川さゆり以戲劇性的強弱對比，將海峽的凜冽與離別刻入昭和的集體意識。",
    featured: true,
  },
  {
    titleJP: "空港",
    titleCH: "空港",
    artist: "鄧麗君 Teresa Teng",
    lyricistComposer: "詞：杉紀彦 / 曲：猪俣公章",
    year: "1974",
    reason:
      "鄧麗君征服日本的破冰之作，1974年奪得日本唱片大賞新人賞。清脆嗓音與自然轉音，打破演歌「過於本土化」的標籤，開創了跨越東亞文化圈的「柔聲演歌」新美學。",
    featured: true,
  },
  {
    titleJP: "悲しい酒",
    titleCH: "悲傷的酒",
    artist: "美空雲雀",
    lyricistComposer: "詞：石本美由起 / 曲：古賀政男",
    year: "1966",
    reason:
      "美空雲雀與「古賀旋律」的黃金組合。在酒杯底部凝視戰後廢墟的記憶——哀愁不哭訴，只是靜靜地喝完這杯，讓小節裝飾音在喉嚨深處迴旋。演歌「孤獨美學」的教科書。",
  },
  {
    titleJP: "函館の女",
    titleCH: "函館的女子",
    artist: "北島三郎",
    lyricistComposer: "詞：星野哲郎 / 曲：叶弦大",
    year: "1965",
    reason:
      "北海道演歌的旗幟。北島三郎渾厚的男聲帶著港口漁民的豪邁，函館的霧氣與海鷗在弦樂中顯影。昭和初期「地域演歌」最具代表性的作品之一，確立了北方豪邁的聲響美學。",
  },
  {
    titleJP: "大阪しぐれ",
    titleCH: "大阪時雨",
    artist: "都はるみ",
    lyricistComposer: "詞：山上路夫 / 曲：市川昭介",
    year: "1980",
    reason:
      "都はるみ以細膩的顫音技法，將道頓堀夜雨下的都市孤獨表現得淋漓盡致。關西方言音韻與哀婉旋律的交融，為演歌注入了「商人文化的精密哀愁」——每一個轉音都是對失去的算計。",
  },
  {
    titleJP: "おふくろさん",
    titleCH: "媽媽",
    artist: "森進一",
    lyricistComposer: "詞：川内康範 / 曲：猪俣公章",
    year: "1971",
    reason:
      "森進一沙啞的「Ha-ski Voice」在這首歌裡達到了情感密度的頂點。九州火烈氣質與對母親的思念交織，既是個人的，也是整個高度經濟成長期「離鄉勞動者」的集體呼喚。",
  },
  {
    titleJP: "雪国",
    titleCH: "雪國",
    artist: "吉幾三",
    lyricistComposer: "詞・曲：吉幾三",
    year: "1986",
    reason:
      "東北演歌中最具文學性的一首。吉幾三以自己的詞曲，直率呈現嚴冬東北的孤寂與家鄉情懷。民謠根源的旋律骨幹配上昭和末期城市化的失落感，成為演歌「漂泊」主題的東北版本。",
  },
];

export function SayoriRecommendations() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="border-t border-[var(--sayuri-border)] pt-16">
      {/* Divider ornament */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-[var(--sayuri-border)]" />
        <span
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--sayuri-muted)] select-none"
          aria-hidden="true"
        >
          ✿
        </span>
        <div className="h-px flex-1 bg-[var(--sayuri-border)]" />
      </div>

      <div className="paper-layer">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--sayuri-muted)]">
              Easter Egg · 小百合の推薦
            </p>
            <h2 className="font-serif mt-2 text-2xl leading-tight text-[var(--sayuri-ink)] sm:text-3xl">
              小百合的推薦：九地靈魂回聲
            </h2>
            <p className="mt-1 font-mono text-[11px] text-[var(--sayuri-muted)]">
              Sayori&apos;s Recommendations: Soul Echoes of the Nine Lands
            </p>
          </div>
          {/* Sayori watermark */}
          <div
            className="shrink-0 w-14 h-14 border-2 border-[var(--sayuri-red)] rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="font-serif text-[var(--sayuri-red)] text-lg leading-none">
              小百
              <br />
              合印
            </span>
          </div>
        </div>

        {/* Intro copy */}
        <p className="mt-5 font-serif leading-8 text-[var(--sayuri-ink)] max-w-3xl">
          我是小百合（Sayori）——如百合花般純潔而堅韌，演歌大地的文化典藏人。
          這七首歌，是我從九地之旅中精選的靈魂之聲：它們不只是音樂，是昭和日本的呼吸、眼淚與記憶。
          每一首，都有一個地方在等你回去。
        </p>

        {/* Reveal toggle */}
        {!revealed && (
          <motion.button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-6 border border-[var(--sayuri-ink)] px-8 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--sayuri-ink)]"
            whileHover={{ backgroundColor: "#FED7AA", borderColor: "#FED7AA" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            開啟推薦清單 · Reveal
          </motion.button>
        )}

        {/* Song table */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
            className="mt-8 overflow-x-auto"
          >
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--sayuri-border)]">
                  <th className="pb-3 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] whitespace-nowrap">
                    #
                  </th>
                  <th className="pb-3 pr-6 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] whitespace-nowrap">
                    曲名（JP / CH）
                  </th>
                  <th className="pb-3 pr-6 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] whitespace-nowrap">
                    歌手
                  </th>
                  <th className="pb-3 pr-6 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] whitespace-nowrap hidden sm:table-cell">
                    詞曲
                  </th>
                  <th className="pb-3 pr-6 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] hidden sm:table-cell">
                    年份
                  </th>
                  <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sayuri-muted)] hidden lg:table-cell">
                    推薦理由
                  </th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, idx) => (
                  <motion.tr
                    key={song.titleJP}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.28 }}
                    className="border-b border-[var(--sayuri-border)] last:border-0"
                    style={{
                      background: song.featured
                        ? "var(--sayuri-accent)"
                        : "transparent",
                    }}
                  >
                    <td className="py-4 pr-4 font-mono text-[11px] text-[var(--sayuri-muted)] align-top">
                      {song.featured ? (
                        <span className="text-[var(--sayuri-red)]">★</span>
                      ) : (
                        String(idx + 1).padStart(2, "0")
                      )}
                    </td>
                    <td className="py-4 pr-6 align-top">
                      <p className="font-serif text-[var(--sayuri-ink)] whitespace-nowrap">
                        {song.titleJP}
                      </p>
                      <p className="font-serif text-[13px] text-[var(--sayuri-muted)] whitespace-nowrap">
                        {song.titleCH}
                      </p>
                      {song.featured && (
                        <span className="mt-1 inline-block font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--sayuri-red)] border border-[var(--sayuri-red)] px-1.5 py-0.5">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-6 font-serif text-[var(--sayuri-ink)] align-top whitespace-nowrap">
                      {song.artist}
                    </td>
                    <td className="py-4 pr-6 font-mono text-[11px] text-[var(--sayuri-muted)] align-top whitespace-nowrap hidden sm:table-cell">
                      {song.lyricistComposer}
                    </td>
                    <td className="py-4 pr-6 font-mono text-[11px] text-[var(--sayuri-muted)] align-top hidden sm:table-cell">
                      {song.year}
                    </td>
                    <td className="py-4 font-serif text-[13px] leading-6 text-[var(--sayuri-ink)] align-top max-w-xs hidden lg:table-cell">
                      {song.reason}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  );
}
