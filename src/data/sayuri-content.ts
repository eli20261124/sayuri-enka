export type Language = "zh" | "en" | "jp";

export type RegionKey =
  | "hokkaido"
  | "tohoku"
  | "aomori"
  | "tokyo"
  | "osaka"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa";

export type RegionContent = {
  id: RegionKey;
  title: string;
  subtitle: string;
  category: "postwar" | "neon-city" | "sea-obsession" | "velvet-fusion";
  markdown: string;
  references: number[];
};

export type ReferenceItem = {
  id: number;
  title: string;
  source: string;
  retrievedDate: string;
  url: string;
};

export type ArtistRow = {
  name: string;
  origin: string;
  geoContext: string;
  styleNote: string;
  refs: number[];
};

export type SalesRow = {
  year: string;
  title: string;
  artist: string;
  rank: string;
  refs: number[];
};

// ─── UI Copy ───────────────────────────────────────────────────────────────
export const uiCopy = {
  zh: {
    appTitle: "《九地之歌：大和靈魂的演歌版圖》",
    appSubtitle: "戰後至昭和末期日本演歌互動研究（1945–1980）",
    sectionLabel: "主題索引",
    mapTitle: "日本演歌地理聲景圖",
    mapHint: "點擊地圖標記，開啟區域內容與引用來源。",
    panelTitle: "區域內容",
    panelEmpty: "點擊地圖標記，載入對應區域的研究內容。",
    closeLabel: "關閉",
    yonanukiTitle: "Hardcore Lab：四七拔音階",
    yonanukiBody:
      "演歌核心常用「四七拔五聲音階」（Yonanuki Scale）：在西洋七聲音階中去掉第4音（FA）與第7音（SI），保留更接近日本民謠與雅樂聽感的骨架。 [1] 明治維新後，政府為推動國際化同時保留民族特性，大力提倡此音階系統，最終在戰後演歌中定型。 [1] 美空雲雀地位確立後，「小節」（Kobushi）裝飾音技法廣泛普及——在主旋律外加入微小音高起伏，產生哽咽、迴腸盪氣的情感效果；配合技巧性顫音，成為演歌與 J-Pop 的最顯著聽覺邊界。 [1]",
    westernMajor: "西洋大調（7音）",
    yonanukiScale: "四七拔五聲音階（5音）",
    referencesTitle: "References",
    terms: "術語：ヨナ抜き音階 / Yonanuki Scale / 四七拔五聲音階",
    teresaTitle: "鄧麗君與跨國演歌交織",
    kobushiLabel: "傳統小節唱法",
    teresaTengLabel: "鄧麗君柔聲唱法",
    artistsTitle: "殿堂歌手地域脈絡",
    salesTitle: "1970年代銷量指標",
    categories: {
      postwar: "第一章 戰後奠基",
      "neon-city": "第二章 霓虹都市",
      "sea-obsession": "第三章 海峽執念",
      "velvet-fusion": "第四章 天鵝絨融合",
    },
  },
  en: {
    appTitle: "Songs of the Nine Lands: The Enka Landscape of Yamato",
    appSubtitle: "Interactive Enka Study — Post-war to Late Shōwa (1945–1980)",
    sectionLabel: "Theme Index",
    mapTitle: "Geo-Sonic Map of Enka Japan",
    mapHint: "Tap a map marker to open region notes and citations.",
    panelTitle: "Region Notes",
    panelEmpty: "Select a map marker to load region research notes.",
    closeLabel: "Close",
    yonanukiTitle: "Hardcore Lab: Yonanuki Scale",
    yonanukiBody:
      "Enka's tonal core is the Yonanuki pentatonic: remove the 4th (Fa) and 7th (Si) from a Western major scale to preserve a Japanese melodic contour while keeping modern arrangement compatibility. [1] Promoted during the Meiji era to reconcile nationalism with modernisation, the scale became Enka's defining signature by the 1950s. [1] After Hibari Misora solidified her status, the Kobushi ornamental technique — micro-pitch inflections layered above the melody — created a choking, gut-wrenching emotional effect. Combined with expressive vibrato, it marks the clearest sonic boundary between Enka and J-Pop. [1]",
    westernMajor: "Western Major (7 tones)",
    yonanukiScale: "Yonanuki (5 tones)",
    referencesTitle: "References",
    terms: "Terms: ヨナ抜き音階 / Yonanuki Scale / 四七拔五聲音階",
    teresaTitle: "Teresa Teng & Trans-cultural Enka",
    kobushiLabel: "Traditional Kobushi",
    teresaTengLabel: "Teresa Teng — Airy Voice",
    artistsTitle: "Artists & Regional Context",
    salesTitle: "1970s Sales Index",
    categories: {
      postwar: "Ch.1 Post-war Foundations",
      "neon-city": "Ch.2 Neon City",
      "sea-obsession": "Ch.3 Sea Obsession",
      "velvet-fusion": "Ch.4 Velvet Fusion",
    },
  },
  jp: {
    appTitle: "《九地の歌：大和の魂の演歌版図》",
    appSubtitle: "戦後昭和演歌インタラクティブ研究（1945–1980）",
    sectionLabel: "テーマ索引",
    mapTitle: "日本演歌ジオサウンドマップ",
    mapHint: "地図マーカーをタップして地域内容と引用を表示。",
    panelTitle: "地域ノート",
    panelEmpty: "地図マーカーをタップして地域研究ノートを表示。",
    closeLabel: "閉じる",
    yonanukiTitle: "Hardcore Lab：ヨナ抜き音階",
    yonanukiBody:
      "演歌ではヨナ抜き音階が中核です。西洋七音階から第4音（Fa）と第7音（Si）を除き、日本民謡・雅楽に近い旋律感を保ちながら近代編曲へ接続します。 [1] 明治維新後、政府は国際化と民族性の橋渡しとしてこの音階を推奨し、戦後の演歌に定着しました。 [1] 美空雲雀の台頭後、歌手は「小節」装飾音技法を多用するようになりました。主旋律の上に微小な音高変化を重ねるこの技法は、嗚咽するような情感を生み出し、ビブラートと組み合わせることで演歌と J-Pop を分かつ最も明確な聴覚的境界となっています。 [1]",
    westernMajor: "西洋長音階（7音）",
    yonanukiScale: "ヨナ抜き（5音）",
    referencesTitle: "References",
    terms: "用語：ヨナ抜き音階 / Yonanuki Scale / 四七拔五聲音階",
    teresaTitle: "テレサ・テンと越境する演歌",
    kobushiLabel: "伝統的小節",
    teresaTengLabel: "テレサ・テン 柔声唱法",
    artistsTitle: "殿堂歌手地域脈絡",
    salesTitle: "1970年代売上指標",
    categories: {
      postwar: "第一章 戦後の礎",
      "neon-city": "第二章 ネオン都市",
      "sea-obsession": "第三章 海峡への執念",
      "velvet-fusion": "第四章 ヴェルヴェット融合",
    },
  },
} as const;

// ─── Thematic Blocks (full research content from datause_1.md) ───────────────
export const themeBlocks: Array<{
  id: "postwar" | "neon-city" | "sea-obsession" | "velvet-fusion";
  markdown: string;
}> = [
  {
    id: "postwar",
    markdown: `1945–1955 年是演歌尚未從「流行歌」（Ryūkōka）中分離的混沌期。作曲家古賀政男利用西方古典吉他的撥奏與小提琴的悠揚，結合日本傳統音階，創造出能撫慰戰後受創心靈的哀愁感，史稱「古賀旋律」（Koga Melody）。 [1]

美軍駐紮文化的衝擊深刻影響日本音樂界：爵士樂、藍調、布基烏基透過廣播與電視傳播至全國，早期演歌常見狐步（Foxtrot）節奏或三連音（Shuffle），這是美式流行樂留下的痕跡。 [1] 美空雲雀（Hibari Misora）早期作品帶有強烈的節奏感，展示了當時日本音樂在「復興民族性」與「追隨西方現代性」之間的搖擺。 [2]

在此期間，傳統街頭「演歌師」（Nagashi）被早期昭和唱片工業擠壓至酒吧、夜總會等非正式空間。漢字「豔」（En）開始取代「演」來指稱演歌，象徵著其主題從政治諷刺轉向感官、深夜的孤寂與底層生活的苦悶，使演歌獲得了「邊緣人」的獨特性格。 [2]`,
  },
  {
    id: "neon-city",
    markdown: `1960 年「日美安保條約」鬥爭失敗後，日本社會陷入巨大的挫折感。左派推廣「健全、進步」音樂的嘗試落敗，庶民與知識份子反而在「幽暗、多愁善感」的歌謠中找到了共鳴。 [2] 西田佐知子《洋槐花雨停止時》（1960年）中「我要死在靜默裡」的頹廢氛圍，成為政治運動失敗後年輕人的「安魂曲」。 [2]

劇作家寺山修司精準診斷了這一現象：歌謠曲應由「孤獨的不法之徒」獨唱，而非集體合唱。 [2] 演歌歌詞中的孤獨、漂泊、酒、故鄉渴望，實際上反映了高速城市化過程中，大量農村青年湧入都市後的失落感與對原鄉的思念。唱片工業精準捕捉並將其轉化為商品，使演歌被賦予了「民族認同」的神聖色彩。 [2]

美空雲雀地位確立後，「小節」（Kobushi）裝飾音技巧與技巧性顫音成為演歌的標準美學；都春美（京都府出身）以細膩的顫音將京都式哀婉推向舞台中心，在《大阪時雨》等作品中將都市愁緒表現得淋漓盡致。 [1]`,
  },
  {
    id: "sea-obsession",
    markdown: `石川小百合《津輕海峽・冬景色》（1977年）是演歌與旅遊文化結合的最成功案例。歌詞構建了一條「感性地理」路徑：東京上野車站→北上列車→青函連絡船→青森龍飛崎。 [5] 三木剛作曲、阿久悠填詞的組合，配上石川小百合的大規模弦樂編制，以如海浪般的遼闊音牆再現了北國的寒風。 [3]

在青森縣外濱町龍飛崎燈塔附近，設有《津輕海峽・冬景色》歌謠碑，遊客按鈕即可現場播放歌曲。 [6] 這種互動式紀念碑將聽覺記憶固定在壯麗的海峽景色之上，使「景點」成為可聽見的記憶媒介，推動了當地旅遊業發展。 [7]

青函隧道通車前，連絡船是連通本州與北海道的命脈。歌曲捕捉了即將消失的「慢速旅行」與「離別感」，成為日本交通史的聽覺文獻。 [5] 類似的「歌謠碑」文化遍及全國，如北海道的《襟裳岬》、千葉縣的《矢切的渡口》，均成為中老年群體的「青春記憶祭典」。`,
  },
  {
    id: "velvet-fusion",
    markdown: `1974年，鄧麗君（Teresa Teng）以《空港》獲日本唱片大賞新人賞，1984年起更連續三年獲「日本有線大賞」，紀錄至今無人打破。 [4] 她的嗓音清脆，轉音自然，減少了傳統演歌的生硬「小節」感，形成「外皮演歌、內核現代都會」的聲響——既能滿足傳統聽眾的情感需求，又具備國際感染力。 [4]

這種跨國美學帶動了演歌在台灣、香港及東南亞的改編熱潮。《空港》被改編為台語歌《情人的關懷》，在東亞文化圈形成互通的哀愁語法。 [1] 日本寶麗多（Polydor）作為鄧麗君赴日發展的重要推手，也展示了演歌現代化背後強大的唱片工業支撐。 [4]

從編曲深層看，演歌吸收了美式大樂團（Big Band）與爵士樂低音部結構，建構了「外皮西式、內核和式」的混血體。這種結構使戰後日本同時滿足現代化聽覺享受與傳統心理安定需求，也解釋了演歌為何能跨越東亞文化圈，成為一種共享的「集體哀愁」語法。 [1]`,
  },
];

// ─── Region Content ─────────────────────────────────────────────────────────
export const regions: RegionContent[] = [
  {
    id: "aomori",
    title: "青森 / 津輕海峽",
    subtitle: "北國堅韌與旅途離別",
    category: "sea-obsession",
    markdown: `青森在演歌中常被書寫為寒冷、遙遠、必須跨越的邊界——進入北國前最後的人情溫度。石川小百合（熊本縣出身）憑藉《津輕海峽・冬景色》以九州式的戲劇張力詮釋東北風景，創造了演歌史上最成功的「地理陌生感」。 [3]

作曲家三木剛與詞人阿久悠的合作為此曲注入文學性：龍飛崎的凜冽海風、北上列車的鐵道節奏、青函連絡船甲板上的離別凝視。 [3] 如今龍飛崎歌謠碑讓遊客按鈕聆聽，將歌聲永久刻入海峽地景。 [6][7]

**吉幾三**（青森縣出身）的《雪國》則從另一角度呈現東北，以直率的東北民謠風保留了嚴冬的孤寂與家鄉情懷。`,
    references: [3, 5, 6, 7],
  },
  {
    id: "tokyo",
    title: "東京 / 橫濱都會圈",
    subtitle: "霓虹中的孤獨與重生",
    category: "neon-city",
    markdown: `橫濱出身的**美空雲雀**（Hibari Misora）是整個戰後日本精神的聲音象徵。她將傳統「小節」技巧與美聲唱法融合，確立了演歌歌手的藝術標準。 [1] 她的早期作品吸收了美軍俱樂部文化的爵士節奏，完美體現「復興民族性」與「追隨西方現代性」兩種張力的並存。 [2]

1960 年安保鬥爭後，東京成為演歌歌詞中「孤獨的城市」的首要背景。大量農村青年湧入都市，演歌為這個世代提供了處理失落感的聽覺容器——孤獨、深夜、酒、與故鄉的距離。 [2]

**日本哥倫比亞**（Nippon Columbia）作為演歌正統殿堂，旗下擁有美空雲雀等巨星，其製作體系鞏固了東京作為演歌工業中心的地位。`,
    references: [1, 2],
  },
  {
    id: "kyushu",
    title: "九州 / 火之國聲腔",
    subtitle: "高張力情感與戲劇性",
    category: "postwar",
    markdown: `九州歌手常展現出極高的高音爆發力與情感張力，被稱為「火之國」性格的延伸。**石川小百合**（熊本縣出身）雖以東北題材《津輕海峽・冬景色》成名，其舞台上的戲劇性強弱對比與大規模弦樂編制，仍透露九州式的熱情。 [3]

**森進一**（鹿兒島縣出身）以沙啞的「Ha-ski Voice」演繹港口、都市的孤獨，成為九州系演歌中另一種深沉的聲響美學。

在產業端，**日本寶麗多**（Polydor）在九州及全國範圍推動演歌的現代化與國際化，成為鄧麗君赴日發展的關鍵推手，也放大了演歌跨越東亞的傳播能力。 [4]`,
    references: [3, 4],
  },
  // ── 6 new regions added for v2 ───────────────────────────────────────────
  {
    id: "hokkaido",
    title: "北海道 / 開拓前線",
    subtitle: "漁民靈魂與營火祭典精神",
    category: "postwar",
    markdown: `北海道在演歌中是日本最遙遠的邊疆，象徵漂泊、開拓者精神與壯闊的自然。**北島三郎**（北海道虻田郡出身）是北海道演歌的最高代表，渾厚的男聲與《函館の女》（1965年）將港口漁民的豪邁就刻畫得入木三分。 [8]

北海道的民謠（Min'yo）根源以漁業與農墾為主題，其四七拔音階旋律與大陸性氣候的壯闊感融合成演歌特有的「北方豪邁」。漁船上的三味線拍打著白浪，《北海のはぐれ鳥》（1980年）以「迷途之鳥」意象直接指涉昭和末期城市化浪潮中失根的勞動者。 [8]

**《祭り》**（1984年）更將北海道誕生的祭典文化提升為全國性的演歌遭遇，證明演歌的「地域—情感—音樂」三位一體模式具備跨越地理的魔力。 [8]`,
    references: [8],
  },
  {
    id: "tohoku",
    title: "東北 / 祭典與冬眠",
    subtitle: "岩手・秋田・山形の四七拔音階詩學",
    category: "postwar",
    markdown: `東北內陸的演歌基因深埋於民謠（Min'yo）傳統：秋田音頭、山形花笠音頭、以及以濃烈三味線撥弄著名的「じょんがら節」（Jongara Bushi）。這些民謠傳統在戰後被唱片工業重新包裝，注入演歌的商業體系。 [9]

**吉幾三**（青森縣出身）以《雪国》（1986年）將東北人的直率與嚴冬的孤寂融為一體，旋律骨幹仍透著東北民謠的淡雅哀愁。 [9] 岩手縣的「さんさ踊り」和秋田的「なまはげ」民俗節慶，構成演歌中東北意象的深層文化底色。

嚴冬大地、稻米豐收後的慶典火光、年輕人離開村落奔赴都市——這條「離鄉」路徑，是演歌最核心的情感原型，東北提供了它最具說服力的地景。 [9]`,
    references: [9],
  },
  {
    id: "osaka",
    title: "大阪・關西 / 道頓堀的泣聲",
    subtitle: "商人文化・關西方言・深夜酒場",
    category: "neon-city",
    markdown: `大阪與關西地區的演歌以「都市性哀愁」為核心——不是北國的孤寒，而是燈紅酒綠背後的落寞。**都春美**（京都府出身）以《大阪しぐれ》（1980年）將關西方言的音韻美學推向演歌的頂峰；細膩的顫音技法與哀婉的旋律線條，完美再現了道頓堀夜雨下的都市孤獨。 [1][10]

大阪的傳統音樂土壤深厚：文樂（人形淨瑠璃）與義太夫節中拉鋸式的情感張力，在演歌的「哭腔」傳統中隱約可辨。商人文化形塑了關西演歌的某種「計較」感——每一個轉音都是對失去的精密核算。 [10]

**JVC（Victor）**在大阪地區的製作活動，將關西本土的聲音美學整合進全國性的演歌工業，確立了大阪作為「演歌第二都」的地位。`,
    references: [1, 10],
  },
  {
    id: "chugoku",
    title: "山陽地區 / 瀨戶內海與港町",
    subtitle: "尾道・廣島・島根的再生意志",
    category: "sea-obsession",
    markdown: `山陽地區濱臨瀨戶內海，尾道（廣島縣）是演歌地理想象中最具文學性的港口——舟船穿梭、山坡階梯、蒼茫暮靄，為無數演歌提供視覺原型。**五木ひろし**（福井縣出身）的《夜空》（1971年）以其瀨戶內式的哀愁質感在廣域西日本引起強烈共鳴。 [11]

廣島在演歌中承載特殊的歷史重量：戰後重建的意志力滲透在昭和中期的歌曲敘事中，不以直敘、而以「廢墟中開花」的比喻語法出現。島根縣的「石見神楽」（Iwami Kagura）神樂傳統，以及山口縣萩的城下町文化，構成中國地方民謠的多元底層，滋養了演歌中的山陰憂鬱美學。 [11]`,
    references: [11],
  },
  {
    id: "shikoku",
    title: "四國 / 遍路と阿波踊り",
    subtitle: "巡禮者的孤獨と盂蘭盆の熱狂",
    category: "postwar",
    markdown: `四國在演歌中是兩種極端的並置：88所「お遍路」（Ohenro）巡禮帶來的靈性孤寂，以及德島「阿波踊り」（Awa Odori）夏日盂蘭盆的集體熱狂。這種孤獨與喧囂的張力，直接滲透進四國地區演歌的情感語法。 [12]

**島倉千代子**的音樂雖非以四國為中心，但她細膩、易碎的演唱風格深受四國歌迷喜愛——孤島感與靈性思念的交融是四國聽眾特有的情感頻率。 [12]

高知縣的「よさこい節」以及愛媛縣的「伊予節」，提供了四國版的演歌前身。瀨戶內海對岸的光影、88所石佛、白衣遍路者——這些意象在演歌歌詞中以「旅」的隱喻反覆出現，成為演歌「漂泊」主題的視覺索引。 [12]`,
    references: [12],
  },
  {
    id: "okinawa",
    title: "沖繩 / 琉球音階と復歸",
    subtitle: "三線・エイサー・1972年復歸後の歌聲",
    category: "velvet-fusion",
    markdown: `沖繩的音樂傳統以「琉球音階」（Ryukyu Scale）為核心：保留第3音與第7音的獨特五聲音階，形成截然不同於本土演歌的明亮、開闊音色。**三線**（Sanshin——沖繩三味線的前身）的撥弦質感，是本土日本三味線音色的遠親，兩者共享「撥弦觸覺」卻分屬不同音系。 [13]

1972年「沖繩復歸本土」是演歌史上的關鍵時刻：回歸後的沖繩流行音樂開始與演歌產業接觸，帶來了一種帶有熱帶溫潤感的「南方演歌」支流。**エイサー**（Eisa）盂蘭盆舞蹈傳統起源於17世紀淨土宗傳入，其太鼓節奏與三線歌謠的組合，是「音樂作為集體記憶儀式」的最完整範例。 [13]

沖繩演歌中的「離別」不只是個人情感，更是政治性的——被日本遺忘27年的記憶，在1972年之後以歌的形式重新縫合。`,
    references: [13],
  },
];

// ─── Teresa Teng Cross-culture Content ──────────────────────────────────────
export const teresaTeng: Record<Language, string> = {
  zh: `鄧麗君的出現打破了演歌過於本土化、過於沉重的標籤。她的唱法融合了西方流行樂的柔和與演歌的韻味，嗓音清脆，轉音自然，減少了傳統演歌中「小節」的生硬感，形成更具都市感與國際感染力的「柔聲演歌」。 [4]

對照之下，傳統「小節」技法通過哽咽式的微音高起伏，喚起一種切膚的鄉愁與失落感。兩種唱法並存於 1970 年代末的日本音樂市場，反映了演歌在全球化浪潮中的自我重組——在「根」與「翼」之間尋找新的平衡點。 [1]`,
  en: `Teresa Teng broke Enka's reputation for being too provincial and too heavy. Her voice blended Western pop softness with Enka's melodic contour — clear tone, natural pitch transitions, and reduced Kobushi roughness — producing an "airy Enka" with urban and international appeal. [4]

By contrast, the traditional Kobushi technique evokes a visceral nostalgia through choking micro-pitch inflections. Both styles coexisted in the late 1970s Japanese market, reflecting Enka's self-reinvention under globalisation: searching for a new equilibrium between roots and wings. [1]`,
  jp: `テレサ・テンの登場は、演歌が持つ「土着的で重い」というイメージを打ち破りました。彼女の歌声は西洋ポップの柔らかさと演歌の旋律を融合させ、澄んだ音色と自然な音程変化、そして伝統的な小節の粗さを抑えた「エアリー演歌」を生み出し、都市的かつ国際的な魅力を放ちました。 [4]

一方、伝統的な小節技法は嗚咽するような微小な音高変化を通じて、切実な郷愁と喪失感を呼び起こします。この二つの歌唱スタイルは1970年代末の日本市場に共存し、グローバル化の波の中で演歌が「ルーツ」と「翼」の新たな均衡を探っていたことを示しています。 [1]`,
};

// ─── Artist Table (ch.2) ────────────────────────────────────────────────────
export const artistTable: ArtistRow[] = [
  {
    name: "北島三郎",
    origin: "北海道",
    geoContext: "北海道、祭典",
    styleNote: "渾厚男聲、民謠風（Minyo）、豪氣",
    refs: [],
  },
  {
    name: "美空雲雀",
    origin: "神奈川縣",
    geoContext: "橫濱、東京、全國",
    styleNote: "技巧卓越（小節）、爵士-民謠跨界融合",
    refs: [1],
  },
  {
    name: "石川小百合",
    origin: "熊本縣",
    geoContext: "津輕海峽（青森）",
    styleNote: "戲劇化強弱對比、大規模弦樂編制",
    refs: [3],
  },
  {
    name: "都春美",
    origin: "京都府",
    geoContext: "大阪、京都",
    styleNote: "細膩顫音、傳統京都哀婉感",
    refs: [1],
  },
  {
    name: "森進一",
    origin: "鹿兒島縣",
    geoContext: "港口、都市",
    styleNote: "沙啞嗓音（Ha-ski Voice）、港口孤獨美學",
    refs: [],
  },
];

// ─── Sales Table (ch.5) ─────────────────────────────────────────────────────
export const salesTable: SalesRow[] = [
  {
    year: "1975",
    title: "《昭和枯萎》",
    artist: "櫻花和一郎",
    rank: "1975年度冠軍",
    refs: [1],
  },
  {
    year: "1979",
    title: "《回憶之酒》",
    artist: "小林幸子",
    rank: "1979年度第1位（蟬聯多週）",
    refs: [1],
  },
  {
    year: "1979",
    title: "《追夢的酒》",
    artist: "渥美二郎",
    rank: "1979年度第2名",
    refs: [1],
  },
  {
    year: "1983",
    title: "《茶梅の宿》",
    artist: "大川榮策",
    rank: "1983年度第2名",
    refs: [1],
  },
];

// ─── References ─────────────────────────────────────────────────────────────
export const references: ReferenceItem[] = [
  {
    id: 1,
    title: "演歌 - 維基百科，自由的百科全書",
    source: "Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://zh.wikipedia.org/zh-tw/%E6%BC%94%E6%AD%8C",
  },
  {
    id: 2,
    title: "演歌的誕生",
    source: "COMMAGAZINE",
    retrievedDate: "2026-05-15",
    url: "http://commagazine.twmedia.org/?p=1456",
  },
  {
    id: 3,
    title: "津軽海峡・冬景色／三木たかし作曲石川さゆり唄for Violin",
    source: "大陸書店 Talubook",
    retrievedDate: "2026-05-15",
    url: "https://www.talubook.com/index.php?route=product/product&product_id=17091",
  },
  {
    id: 4,
    title: "十億個掌聲 鄧麗君文化傳奇",
    source: "台灣光華雜誌",
    retrievedDate: "2026-05-15",
    url: "https://www.taiwan-panorama.com/Articles/Details?Guid=53d934ed-f6c8-4417-ae71-b70c3613bfea&CatId=10&postname=%E5%8D%81%E5%84%84%E5%80%8B%E6%8E%8C%E8%81%B2-%E9%84%A7%E9%BA%97%E5%90%9B%E6%96%87%E5%8C%96%E5%82%B3%E5%A5%87",
  },
  {
    id: 5,
    title: "津軽海峡冬景色歌謡碑 アクセス・営業時間・料金情報",
    source: "じゃらんnet",
    retrievedDate: "2026-05-15",
    url: "https://www.jalan.net/kankou/spt_02306aj2200126380/",
  },
  {
    id: 6,
    title: "津軽海峡冬景色歌謡碑",
    source: "Amazing AOMORI",
    retrievedDate: "2026-05-15",
    url: "https://aomori-tourism.com/spot/detail_3481.html",
  },
  {
    id: 7,
    title: "青森県 2泊3日の旅：津軽海峡冬景色 歌謡碑",
    source: "Ameblo",
    retrievedDate: "2026-05-15",
    url: "https://ameblo.jp/original-travel-map/entry-12680625232.html",
  },
  {
    id: 8,
    title: "北島三郎 — Wikipedia",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E5%8C%97%E5%B3%B6%E4%B8%89%E9%83%8E",
  },
  {
    id: 9,
    title: "吉幾三 — Wikipedia",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E5%90%89%E5%B9%BE%E4%B8%89",
  },
  {
    id: 10,
    title: "都はるみ — Wikipedia",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E9%83%BD%E3%81%AF%E3%82%8B%E3%81%BF",
  },
  {
    id: 11,
    title: "五木ひろし — Wikipedia",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%94%E6%9C%A8%E3%81%B2%E3%82%8D%E3%81%97",
  },
  {
    id: 12,
    title: "阿波踊り — Wikipedia",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E9%98%BF%E6%B3%A2%E8%B8%8A%E3%82%8A",
  },
  {
    id: 13,
    title: "エイサー — Wikipedia (Okinawa Eisa festival dance)",
    source: "日本語 Wikipedia",
    retrievedDate: "2026-05-15",
    url: "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%A4%E3%82%B5%E3%83%BC",
  },
];

export const majorScale = ["Do", "Re", "Mi", "Fa", "So", "La", "Si"];
export const yonanukiScale = ["Do", "Re", "Mi", "So", "La"];
