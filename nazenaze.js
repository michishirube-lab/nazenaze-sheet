/* なぜなぜ分析シート 表示部品 v10 — michishirube-lab */
const NAZE_CSS = ":root{--ink:#1f2328;--sub:#5b6470;--line:#3a3f45;--soft:#d9dde2;--panel:#f6f7f9;\n--c-exp:#1d5fd1;--bg-exp:#dce8fb;--c-ok:#0f7a43;--bg-ok:#c9f0d8;--c-hyp:#c62828;--bg-hyp:#ffd9d9;--c-chk:#9a5b00;--bg-chk:#ffe8bf;\n--check:#1f9d55;--tab:#ffd84d;--step:#e0533d;--brand:#1f3a5f}\n*{box-sizing:border-box}\nbody{margin:0;background:#fff;color:var(--ink);font-family:\"Hiragino Kaku Gothic ProN\",\"Yu Gothic UI\",\"Meiryo\",sans-serif;font-size:16px;line-height:1.6}\n.wrap{max-width:1100px;margin:0 auto;padding:16px}\n.brandbar{display:flex;align-items:center;gap:10px;padding-bottom:10px;margin-bottom:14px;border-bottom:3px solid var(--brand)}\n.brandbar svg{width:34px;height:34px;flex:none}\n.brand-ja{font-size:18px;font-weight:800;letter-spacing:.12em;color:var(--brand);line-height:1.2}\n.brand-en{font-size:11px;letter-spacing:.32em;color:var(--sub);text-transform:uppercase;line-height:1.2}\n.brand-tag{margin-left:auto;font-size:13px;color:var(--sub);border:1px solid var(--soft);border-radius:999px;padding:2px 12px}\n.copyright{margin-top:8px;color:var(--brand);font-weight:700}\n.savenote{margin-top:10px;border:1px solid var(--soft);background:var(--panel);border-radius:6px;padding:10px 14px;color:var(--ink);line-height:1.8}\n.brand-tag.only{color:#fff;background:var(--brand);border-color:var(--brand);font-weight:700}\n.contact{margin-top:12px;border:2px solid var(--brand);border-radius:10px;padding:14px 16px;line-height:1.7;background:#fff}\n.contact .row{display:flex;gap:16px;align-items:center;flex-wrap:wrap}\n.contact .cbtn{display:inline-block;background:var(--step);color:#fff!important;text-decoration:none;font-weight:800;font-size:16px;padding:10px 20px;border-radius:999px;box-shadow:0 2px 6px rgba(0,0,0,.15)}\n.contact .cbtn:hover{filter:brightness(1.08)}\n.contact .worries{flex:1;min-width:260px}\n.contact .worries b{color:var(--brand)}\n.contact .worries ul{margin:4px 0 0 1.2em;padding:0}\n.contact .sub{color:var(--sub);font-size:.92em;margin-top:6px}\n.contact .only{margin-top:12px;padding-top:10px;border-top:1px dashed var(--soft)}\n.contact .only b.t{color:var(--brand);font-size:15px}\n.guidebar{margin:0 0 10px;padding:6px 12px;border-radius:6px;background:#eef4ff;border:1px solid #c9d8f5;font-size:13px}\n.guidebar a{color:var(--brand);font-weight:700}\n@media print{.savenote,.contact,.guidebar{display:none}}\n.lintbar{margin-top:10px;border:2px solid var(--c-chk);background:var(--bg-chk);border-radius:6px;padding:8px 12px;font-size:14px}\n.cell.warn{border-color:var(--c-chk);border-style:dashed}\n.warnline{margin-top:6px;font-size:12px;font-weight:700;color:var(--c-chk)}\n.warnline::before{content:\"⚠ 要見直し：\";}\n.printhint{margin-top:6px;font-size:13px;color:var(--c-chk);text-align:right}\nheader{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}\nh1{font-size:22px;margin:0}\n.meta{color:var(--sub);font-size:14px}\n.sample{background:#fff4d6;border:1px solid #e6c46a;border-radius:6px;padding:6px 12px;font-size:14px;margin-top:8px}\n.btn{border:2px solid var(--line);background:#fff;border-radius:6px;padding:8px 16px;font-size:15px;font-weight:700;cursor:pointer}\n.step{color:var(--step);font-weight:700;margin:22px 0 6px}\n.tabs{display:flex;flex-wrap:wrap;gap:8px}\n.tab{border:2px solid var(--line);background:#eceef1;color:var(--ink);padding:10px 18px;font-size:16px;font-weight:700;border-radius:6px;cursor:pointer;min-height:48px;font-family:inherit}\n.tab[aria-selected=true]{background:var(--tab)}\n.box{border:2px solid var(--line);border-radius:6px;padding:12px 16px}\n.event dl{display:grid;grid-template-columns:6.5em 1fr;gap:4px 12px;margin:0}\n.event dt{font-weight:700;color:var(--sub)}\n.event dd{margin:0}\n.lb{display:inline-block;font-weight:700;font-size:14px;padding:0 8px;border-radius:4px;white-space:nowrap}\n.lb-説明あり{background:var(--bg-exp);color:var(--c-exp)}\n.lb-確認済み{background:var(--bg-ok);color:var(--c-ok)}\n.lb-仮説{background:var(--bg-hyp);color:var(--c-hyp)}\n.lb-要確認{background:var(--bg-chk);color:var(--c-chk)}\n.legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:14px;color:var(--sub);margin-top:8px}\n.carry{display:inline-block;background:var(--bg-ok);color:var(--c-ok);font-weight:700;font-size:20px;padding:6px 16px;border-radius:6px;margin:26px 0 4px}\n.hint{color:var(--sub);font-size:14px;margin-bottom:10px}\n.grid{display:grid;grid-template-columns:60px repeat(3,minmax(0,1fr));gap:10px}\n.rowlab{border:2px solid var(--line);border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;text-align:center;padding:4px}\n.target{grid-column:2/5;text-align:center}\n.cell{position:relative;border:2px solid var(--line);border-radius:6px;padding:40px 12px 10px;min-height:120px;cursor:pointer;background:#fff;text-align:left;font:inherit;color:inherit;width:100%}\n.cell:focus-visible{outline:3px solid #2f6fd6;outline-offset:2px}\n.cell.on{background:#f1fbf5;border-color:var(--check)}\n.cell .lb{position:absolute;top:8px;left:8px}\n.tick{position:absolute;top:6px;right:8px;width:30px;height:30px;border:2px solid var(--check);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;background:#fff}\n.cell.on .tick{background:var(--check)}\n.cell.on .tick::after{content:\"✓\"}\n.basis{font-size:13px;color:var(--sub);margin-top:6px}\n.stop{border:2px dashed var(--soft);border-radius:6px;color:var(--sub);display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;min-height:120px;font-size:14px}\n.how{grid-column:2/5;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}\n.how div{font-size:13px;color:var(--sub);background:var(--panel);border-radius:6px;padding:6px 10px}\n.none{grid-column:2/5}\n.go{display:block;width:100%;margin-top:22px;border:2px solid var(--line);border-radius:6px;padding:16px;background:#fff;font:inherit;font-weight:700;cursor:pointer;text-align:center}\n.go:disabled{color:var(--sub);cursor:default;background:var(--panel)}\n.go:not(:disabled){background:#fffbe6}\n.res{margin-top:12px;display:grid;gap:10px}\n.res .box h3{margin:0 0 6px;font-size:16px}\n.res ul{margin:0;padding-left:1.2em}\n.res li{margin:4px 0}\n.from{color:var(--sub);font-size:13px}\n.m-type{font-size:13px;font-weight:700;border:1px solid var(--line);border-radius:4px;padding:0 6px;margin-right:6px}\n.foot{color:var(--sub);font-size:13px;margin:28px 0 10px;border-top:1px solid var(--soft);padding-top:10px}\n@media (max-width:760px){.grid{grid-template-columns:44px repeat(3,minmax(0,1fr));gap:6px}.cell{padding:36px 6px 8px;font-size:14px}.event dl{grid-template-columns:1fr}}\n@media print{.btn,.go,.printhint{display:none}.res{display:grid!important}body{font-size:13px}}\n";
const NAZE_MARKUP = "<div class=\"wrap\">\n<div class=\"brandbar\">\n  <svg viewBox=\"0 0 34 34\" aria-hidden=\"true\">\n    <rect x=\"15.5\" y=\"4\" width=\"3\" height=\"28\" rx=\"1.5\" fill=\"#1f3a5f\"/>\n    <path d=\"M6 7h17l5 4.5-5 4.5H6z\" fill=\"#1f3a5f\"/>\n    <path d=\"M28 17H11l-5 4.5 5 4.5h17z\" fill=\"#e0533d\"/>\n  </svg>\n  <div>\n    <div class=\"brand-ja\">みちしるべラボ</div>\n    <div class=\"brand-en\">michishirube lab</div>\n  </div>\n  <div class=\"brand-tag\" id=\"brandtag\">なぜなぜ分析シート</div>\n</div>\n<header>\n  <div>\n    <h1 id=\"title\"></h1>\n    <div class=\"meta\" id=\"meta\"></div>\n  </div>\n  <div>\n    <button class=\"btn\" onclick=\"nazePrint()\">印刷する</button>\n    <div class=\"printhint\" id=\"printhint\" hidden></div>\n  </div>\n</header>\n<div id=\"sample\"></div>\n\n<div class=\"step\">① 4Mの観点を選ぶ</div>\n<div class=\"tabs\" id=\"m4tabs\" role=\"tablist\"></div>\n\n<div class=\"step\">② 不具合を選ぶ</div>\n<div class=\"tabs\" id=\"dtabs\" role=\"tablist\"></div>\n\n<div class=\"box event\" style=\"margin-top:12px\" id=\"event\"></div>\n<div class=\"legend\">\n  <span><span class=\"lb lb-説明あり\">説明あり</span> 本人・関係者が話したこと</span>\n  <span><span class=\"lb lb-確認済み\">確認済み</span> 図面・現物などで確かめたこと</span>\n  <span><span class=\"lb lb-仮説\">仮説</span> AIが考えた原因候補（未確認）</span>\n  <span><span class=\"lb lb-要確認\">要確認</span> まだ分からないこと</span>\n</div>\n\n<div class=\"carry\">次の整理に引き継ぐ内容に ✓</div>\n<div class=\"hint\">「ありそう」と思うマスを押すと ✓ が付きます。もう一度押すと外れます。</div>\n<div class=\"grid\" id=\"grid\"></div>\n\n<button class=\"go\" id=\"go\"></button>\n<div class=\"res\" id=\"res\" hidden></div>\n\n<div class=\"foot\">この画面は、録音をもとにAIが作った下書きです。<b>仮説・要確認</b>は原因が確定したものではありません。現物・図面・記録で確かめ、人が判断してください。\n  <div class=\"contact\" id=\"contact\"></div>\n  <div class=\"savenote\">\n    <b>📊 この分析は、みちしるべラボに保存されます</b><br>\n    分析した内容はみちしるべラボが保管し、次のことに使います。<br>\n    ・<b>分析の精度を上げる</b>：集まった事例から、似た不具合の起こり方や効いた対策を学び、次の分析に生かします。<br>\n    ・<b>似た不具合と対策を探せるようにする</b>：「前にも似たことがあった」が分かり、品証の巡回や作業前の説明にも使えます。<br>\n    ・<b>今後の機能</b>：毎月のまとめレポートなど、お役に立つ機能を準備しています。ほかにもご要望があれば、お気軽にお寄せください。<br>\n    保存した内容を、お客様以外に公開することはありません。社名・製品が分かる形で外に出したり、販売したりもしません。個々の会社が分からない形にまとめた傾向や事例を、みちしるべラボの情報発信に使うことがあります。<br>\n    多くの町工場の事例が集まることで、中小企業のものづくり全体の「みちしるべ」になることを目指しています。\n  </div>\n  <div class=\"copyright\">© 2026 みちしるべラボ（michishirube lab）　本シートの仕組み・デザインの無断での複製・転載・再配布を禁じます。</div></div>\n</div>\n";
let D;
const M4 =[["Man","Man（人）"],["Machine","Machine（設備・工具）"],["Material","Material（材料・部品）"],["Method","Method（方法・手順）"]];
const LABELS = ["説明あり","確認済み","仮説","要確認"];
const ROWS = ["なぜ1","なぜ2","なぜ3","原因"];
const cur = {m: "Man", d: 0};
const checks = {};
const opened = {};

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const lb = l => { const k = LABELS.includes(l) ? l : "要確認"; return `<span class="lb lb-${k}">${k}</span>`; };
const key = () => cur.d + "|" + cur.m;
const defect = () => D.defects[cur.d];
const m4Data = () => (defect().m4 || {})[cur.m] || {chains: []};
const chains = () => (m4Data().chains || []).slice(0, 3);
const cellsOf = ch => [0,1,2].map(i => (ch.why || [])[i] || null).concat([ch.cause || null]);
const sel = () => checks[key()] || (checks[key()] = new Set());
const m4Name = id => M4.find(m => m[0] === id)[1];

// Geminiがデータの形を崩したとき（m4が1観点だけ・m4_Machine など別の名前・配列）に、決まった形へ直す
function fixData(d) {
  const ids = ["Man","Machine","Material","Method"];
  const idOf = s => ids.find(id => String(s || "").toLowerCase().includes(id.toLowerCase()));
  (d.defects || []).forEach(x => {
    const m4 = {};
    const put = (id, v) => { if (id && v && typeof v === "object" && !m4[id]) m4[id] = Array.isArray(v) ? {chains: v} : v; };
    const src = x.m4;
    if (Array.isArray(src)) src.forEach(v => put(idOf(v && (v.content || v.name || v.m || v.id)), v));
    else if (src && typeof src === "object") {
      if (src.chains) put(idOf(src.content || src.name || src.m || src.id) || "Man", src);
      Object.entries(src).forEach(([k, v]) => { if (ids.includes(k)) put(k, v); });
    }
    Object.entries(x).forEach(([k, v]) => { if (k !== "m4") put(ids.includes(k) ? k : (/^m4/i.test(k) ? idOf(k) : null), v); });
    x.m4 = m4;
  });
  return d;
}

// AIの書き方の揺れを、人が見落とさないように目印を付ける（内容の正しさの判定ではない）
const BLAME = /意識|過信|慣れ|うっかり|怠|不徹底|徹底|注意喚起|未定義|欠如|気の緩み|思い込み防止/;
const INFER = /可能性|かもしれ|違和感|気づ|必要性|欠如|不足|ルール|手順|仕組み|規定|項目がなかった/;
const NEG = /なかった|しなかった|ていない|せず|ないまま|ておらず|未実施|未確認/;
const BASIS_NEG = /ない|なかっ|ません|ず|なし/;
const quoted = b => /^「.*」$/.test(String(b || "").trim());
function lint(cell) {
  if (!cell) return [];
  const t = String(cell.text || ""), b = String(cell.basis || ""), out = [];
  const bw = t.match(BLAME);
  if (bw) out.push(`「${bw[0]}」は人の心のせいにする言葉です`);
  if (/[A-Za-z]{3,}/.test(t)) out.push("英字が混ざっています");
  if (cell.label === "説明あり" || cell.label === "確認済み") {
    const m = t.match(INFER);
    if (m && !b.includes(m[0])) out.push(`「${m[0]}」は話した言葉にない推測かもしれません（仮説では？）`);
    else if (NEG.test(t) && !BASIS_NEG.test(b)) out.push("話した言葉にない「〜しなかった」が入っています（仮説では？）");
    if (!quoted(b)) out.push("根拠が録音の引用になっていません");
  }
  return out;
}
function lintMeasure(m) {
  const t = String((m && m.text) || ""), out = [];
  const bw = t.match(BLAME);
  if (bw) out.push(`「${bw[0]}」で終わる対策は具体的な変え方に直しましょう`);
  if (/[A-Za-z]{3,}/.test(t)) out.push("英字が混ざっています");
  return out;
}
function lintCount() {
  let n = 0;
  (D.defects || []).forEach(d => Object.values(d.m4 || {}).forEach(v => (v.chains || []).forEach(ch => {
    cellsOf(ch).forEach(c => { if (lint(c).length) n++; });
    (ch.measures || []).forEach(m => { if (lintMeasure(m).length) n++; });
  })));
  return n;
}
const basisText = b => String(b || "").replace(/^「(直接の裏づけなし)」$/, "$1");

function renderHeader() {
  document.getElementById('title').textContent = D.title || "なぜなぜ分析";
  document.getElementById('meta').textContent = [D.date, D.source].filter(Boolean).join("　｜　");
  let h = D.sample ? '<div class="sample">これは見た目確認用のサンプル（架空の内容）です。</div>' : '';
  const n = lintCount();
  if (n) h += `<div class="lintbar">⚠ AIの書き方に見直しが必要そうな所が <b>${n}件</b> あります。点線で囲んだマスを読み、話した内容と合っているか確かめてから ✓ を付けてください。</div>`;
  if (!D.sample) h = `<div class="guidebar">📘 はじめての方へ：使い方とデータの扱いは、<a href="${GUIDE_URL}" target="_blank" rel="noopener">ご利用案内</a>をご覧ください。</div>` + h;
  document.getElementById('sample').innerHTML = h;
  // 会社専用版なら「〇〇 専用」と出し、共通版なら専用版の作り方を案内する
  const org = String(D.org || "").trim();
  const only = org && !/^(一般|試験)$/.test(org) && !D.sample;
  const tag = document.getElementById('brandtag');
  tag.textContent = only ? org + " 専用" : "なぜなぜ分析シート";
  tag.classList.toggle('only', !!only);
  document.getElementById('contact').innerHTML =
    `<div class="row"><a class="cbtn" href="${FORM_URL}" target="_blank" rel="noopener">💬 困りごとを相談する</a>` +
    `<div class="worries"><b>こんなお困りごとに、お応えできるかもしれません</b><ul>` +
    `<li>客先に出す再発防止書が通らない・書き方が分からない</li>` +
    `<li>なぜなぜが「注意不足」「再教育」で止まってしまう</li>` +
    `<li>同じ不具合が何度も繰り返す／全数検査でも見逃しが出る</li>` +
    `<li>新人・若手への作業の教え方、5S・安全衛生の進め方</li></ul></div></div>` +
    `<div class="sub">本業と並行して個人で対応しているため、お返事まで数日いただくことがあります。　<a href="${GUIDE_URL}" target="_blank" rel="noopener">📘 ご利用案内（使い方・データの扱い）</a></div>` +
    (only ? "" : `<div class="only"><b class="t">🏭 会社専用版もご用意できます</b>（現在は試行期間のため、無料でお作りしています）<br>` +
      `画面に「〇〇社 専用」と出て、御社の分析だけがまとまります。月ごとの振り返りや、似た不具合の確認に使えます。` +
      `ご希望の方は、お使いのGmailから <b>709nakamichi@gmail.com</b> へ会社名（仮の名前でも可）をお送りください。1週間ほどでご用意し、こちらからご連絡します。</div>`);
}
const FORM_URL = "https://forms.gle/eU2egfgqNfbcTYBT9";
const GUIDE_URL = "https://michishirube-lab.github.io/nazenaze-sheet/";

function renderTabs() {
  document.getElementById('m4tabs').innerHTML = M4.map(([id, name]) =>
    `<button class="tab" role="tab" aria-selected="${cur.m === id}" onclick="cur.m='${id}';render()">${name}</button>`).join("");
  document.getElementById('dtabs').innerHTML = D.defects.map((d, i) =>
    `<button class="tab" role="tab" aria-selected="${cur.d === i}" onclick="cur.d=${i};render()">${esc(d.name)}${d.side ? `<span class="meta">（${esc(d.side)}側）</span>` : ""}</button>`).join("");
}

function renderEvent() {
  const ev = defect().event || {};
  document.getElementById('event').innerHTML =
    `<div style="font-weight:700;margin-bottom:6px">分析対象の事象</div><dl>` +
    ["要求","実際","差分","対象範囲","影響"].filter(k => ev[k]).map(k => {
      const v = typeof ev[k] === "string" ? {text: ev[k]} : ev[k];
      return `<dt>${k}</dt><dd>${esc(v.text)} ${v.label ? lb(v.label) : ""}</dd>`;
    }).join("") + `</dl>`;
}

function renderGrid() {
  const t = defect().target || {};
  const chs = chains(), s = sel();
  let h = `<div class="rowlab">対象</div><div class="box target">${lb(t.label)}<div>${esc(t.text)}</div></div>`;
  if (!chs.length) {
    h += `<div class="rowlab">—</div><div class="box none">${lb("要確認")} ${esc(m4Data().note || "この観点では録音に関係する説明がないため情報不足です。")}</div>`;
  } else {
    ROWS.forEach((row, r) => {
      h += `<div class="rowlab">${row}</div>`;
      for (let c = 0; c < 3; c++) {
        const ch = chs[c];
        const cell = ch ? cellsOf(ch)[r] : null;
        if (!ch) { h += `<div></div>`; continue; }
        if (!cell) { h += `<div class="stop">ここで停止<br>（情報が足りません）</div>`; continue; }
        const on = s.has(c + "-" + r), warns = lint(cell);
        h += `<button class="cell${on ? " on" : ""}${warns.length ? " warn" : ""}" aria-pressed="${on}" onclick="toggle(${c},${r})">${lb(cell.label)}<span class="tick"></span><div>${esc(cell.text)}</div>${cell.basis ? `<div class="basis">根拠：${esc(basisText(cell.basis))}</div>` : ""}${warns.map(w => `<div class="warnline">${esc(w)}</div>`).join("")}</button>`;
      }
    });
    h += `<div class="rowlab" style="font-size:13px">確かめ方</div><div class="how">` +
      [0,1,2].map(c => chs[c] ? `<div>${esc(chs[c].check || "—")}</div>` : `<span></span>`).join("") + `</div>`;
  }
  document.getElementById('grid').innerHTML = h;
}

function toggle(c, r) {
  const s = sel(), k = c + "-" + r;
  s.has(k) ? s.delete(k) : s.add(k);
  render();
  scheduleCheckSave();
}

// みちしるべラボの台帳へ自動で保存する（見本データは送らない）
const SAVE_URL = "https://script.google.com/macros/s/AKfycbwqwzmRBCDxIMpb6ivciyf2JXNee2yzK0qOwTv6JnBuA5L9mnPNiJDFGUTtI9x9yFIi_g/exec";
const SAVE_TOKEN = "michishirube-nz-2026";
function analysisId() {
  const s = JSON.stringify(D);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return (D.date || "") + "-" + (h >>> 0).toString(36);
}
function post(payload) {
  if (D.sample) return;
  const body = JSON.stringify(Object.assign({token: SAVE_TOKEN, id: analysisId(), org: D.org || ""}, payload));
  try {
    fetch(SAVE_URL, {method: "POST", mode: "no-cors", headers: {"Content-Type": "text/plain"}, body: body})
      .catch(() => { try { navigator.sendBeacon(SAVE_URL, body); } catch (e) {} });
  } catch (e) {
    try { navigator.sendBeacon(SAVE_URL, body); } catch (e2) {}
  }
}
function saveAnalysis() {
  post({kind: "analysis", data: D, summary: {warnings: lintCount()}});
}
let checkTimer = null;
function scheduleCheckSave() {
  clearTimeout(checkTimer);
  checkTimer = setTimeout(saveChecks, 2500);
}
function saveChecks() {
  const out = {}, causes = [], measures = [];
  let count = 0;
  Object.entries(checks).forEach(([k, s]) => {
    if (!s.size) return;
    out[k] = [...s];
    count += s.size;
    const [d, m] = k.split("|");
    const chs = (((D.defects[d] || {}).m4 || {})[m] || {}).chains || [];
    chs.forEach((ch, c) => {
      if (![0,1,2,3].some(r => s.has(c + "-" + r))) return;
      if (ch.cause && ch.cause.text) causes.push(ch.cause.text);
      (ch.measures || []).forEach(x => measures.push(x.text));
    });
  });
  post({kind: "checks", checks: out, summary: {title: D.title || "", count, causes, measures}});
}

function buildSummary() {
  const chs = chains(), s = sel();
  const used = chs.map((_, c) => [0,1,2,3].some(r => s.has(c + "-" + r)));
  const levels = [0,1,2].map(r => chs.flatMap((ch, c) => s.has(c + "-" + r) && cellsOf(ch)[r] ? [{c, cell: cellsOf(ch)[r]}] : []));
  const causes = chs.flatMap((ch, c) => used[c] && ch.cause ? [{c, cell: ch.cause, picked: s.has(c + "-3")}] : []);
  const ms = [], seen = new Set();
  const take = (c, extra) => m => { if (ms.length < 5 && !seen.has(m.text)) { seen.add(m.text); ms.push({c, m, extra}); } };
  const maxLen = Math.max(0, ...chs.map(ch => (ch.measures || []).length));
  for (let i = 0; i < maxLen; i++) chs.forEach((ch, c) => { if (used[c] && ch.measures && ch.measures[i]) take(c, false)(ch.measures[i]); });
  if (ms.length < 2) chs.forEach((ch, c) => { if (!used[c]) (ch.measures || []).forEach(m => { if (ms.length < 2) take(c, true)(m); }); });
  return {levels, causes, ms};
}

function renderResult() {
  const go = document.getElementById('go'), res = document.getElementById('res');
  const n = sel().size;
  go.disabled = n === 0;
  go.innerHTML = n === 0
    ? "上のマスに ✓ を付けると、ここで「なぜなぜの整理・原因候補・対策案」が見られます"
    : (opened[key()] ? "▲ まとめを閉じる" : `▼ ✓した ${n} 件をもとに、なぜなぜの整理・原因候補（要確認）・${esc(m4Name(cur.m))}の対策案を表示する`);
  go.onclick = () => { opened[key()] = !opened[key()]; render(); };
  res.hidden = !(n && opened[key()]);
  if (res.hidden) { res.innerHTML = ""; return; }

  const {levels, causes, ms} = buildSummary();
  const col = c => `<span class="from">（列${c + 1}）</span>`;
  const list = items => items.length ? `<ul>${items.join("")}</ul>` : `<div class="from">✓なし</div>`;
  let h = "";
  ["なぜなぜ分析 1回目","なぜなぜ分析 2回目","なぜなぜ分析 3回目"].forEach((t, i) => {
    h += `<div class="box"><h3>${t}</h3>${list(levels[i].map(x => `<li>${lb(x.cell.label)} ${esc(x.cell.text)} ${col(x.c)}</li>`))}</div>`;
  });
  h += `<div class="box"><h3>到達した原因【原因候補・要確認】</h3>${list(causes.map(x =>
    `<li>${lb(x.cell.label)} ${esc(x.cell.text)} ${col(x.c)}${x.picked ? "" : ' <span class="from">※原因のマスは未✓（参考）</span>'}</li>`))}</div>`;
  if (!ms.length) {
    h += `<div class="box"><h3>対策案（${esc(m4Name(cur.m))}）</h3><div class="from">この観点では、✓した内容から出せる対策案がありません。先に「確かめ方」で事実を確認してください。</div></div>`;
  } else {
    ms.forEach((x, i) => {
      h += `<div class="box"><h3>対策案${"①②③④⑤"[i]}</h3><span class="m-type">${esc(x.m.type || "")}</span>${esc(x.m.text)} ${col(x.c)}${x.extra ? ' <span class="from">※✓外の列から補充</span>' : ""}${x.m.why ? `<div class="basis">効く理由・負担：${esc(x.m.why)}</div>` : ""}${lintMeasure(x.m).map(w => `<div class="warnline">${esc(w)}</div>`).join("")}</div>`;
    });
  }
  const p = defect().points || {};
  h += `<div class="box"><h3>品証・検査員の観点（社内用）</h3>
    <div style="font-weight:700;margin-top:4px">現場巡回で見るポイント</div>${list((p.patrol || []).map(x => `<li>${esc(x)}</li>`))}
    <div style="font-weight:700;margin-top:8px">作業前に作業者へ伝えるポイント</div>${list((p.briefing || []).map(x => `<li>${esc(x)}</li>`))}</div>`;
  res.innerHTML = h;
}

function nazePrint() {
  if (window.self === window.top) { window.print(); return; }
  // Canvas の枠内では印刷できないので、今の画面を別タブに開いて印刷する
  const css = [...document.querySelectorAll('style')].map(s => s.textContent).join('\n');
  const html = '<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>' + esc(D.title || 'なぜなぜ分析シート') +
    '</title><style>' + css + '</style></head><body>' + document.querySelector('.wrap').outerHTML +
    '<script>setTimeout(function(){window.print()},400)<\/script></body></html>';
  let w = null;
  try { w = window.open(URL.createObjectURL(new Blob([html], {type: 'text/html'})), '_blank'); } catch (e) {}
  const hint = document.getElementById('printhint');
  if (!w) {
    hint.hidden = false;
    hint.textContent = 'この画面からは印刷用のページを開けませんでした。画面右上の「エクスポート」から保存して印刷してください。';
  }
}

function render() { renderTabs(); renderEvent(); renderGrid(); renderResult(); }

function nazeInit() {
  const style = document.createElement('style');
  style.textContent = NAZE_CSS;
  document.head.appendChild(style);
  document.body.insertAdjacentHTML('afterbegin', NAZE_MARKUP);
  try {
    D = fixData(JSON.parse(document.getElementById('data').textContent));
  } catch (e) {
    document.querySelector('.wrap').innerHTML = '<div class="box" style="margin-top:20px">データの読み込みに失敗しました。Geminiに「データ（JSON）の形を直して、もう一度画面を作ってください」と伝えてください。<div class="basis">' + esc(e.message) + '</div></div>';
    return;
  }
  renderHeader();
  render();
  saveAnalysis();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', nazeInit); else nazeInit();
