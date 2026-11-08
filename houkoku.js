/* ミスの報告書 表示部品 v1 — michishirube-lab */
(function () {
const CSS = `
:root{--ink:#1f2328;--sub:#5b6470;--line:#3a3f45;--soft:#d9dde2;--panel:#f6f7f9;--brand:#1f3a5f;--red:#e0533d;--yellow:#ffd84d}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:"Hiragino Kaku Gothic ProN","Yu Gothic UI","Meiryo",sans-serif;font-size:16px;line-height:1.7}
.wrap{max-width:900px;margin:0 auto;padding:18px 18px 40px}
.brandbar{display:flex;align-items:center;gap:10px;padding-bottom:10px;margin-bottom:14px;border-bottom:3px solid var(--brand)}
.brandbar svg{width:30px;height:30px}
.brand-ja{font-size:18px;font-weight:800;letter-spacing:.12em;color:var(--brand);line-height:1.2}
.brand-en{font-size:10px;letter-spacing:.35em;color:var(--sub)}
.brand-tag{margin-left:auto;font-size:13px;border:1px solid var(--soft);border-radius:999px;padding:2px 12px;color:var(--sub)}
.guidebar{background:#eef4fb;border:1px solid #cfe0f3;border-radius:6px;padding:6px 12px;font-size:14px;margin-bottom:10px}
.guidebar a{color:var(--brand);font-weight:700}
.sample{background:#fff4d6;border:1px solid #e6c46a;border-radius:6px;padding:6px 12px;font-size:14px;margin-bottom:10px}
h1{font-size:24px;margin:4px 0 2px;color:var(--brand)}
.meta{color:var(--sub);font-size:14px}
.btns{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}
.btn{border:1.5px solid var(--brand);background:#fff;color:var(--brand);border-radius:8px;padding:7px 14px;font-weight:800;font-size:15px;cursor:pointer;font-family:inherit}
.btn.main{background:var(--brand);color:#fff}
.warn{background:#fff6e5;border:1.5px solid #e2a33b;border-radius:8px;padding:8px 12px;margin:10px 0;font-size:15px}
table.rep{width:100%;border-collapse:collapse;margin:8px 0 16px}
table.rep th{width:8.5em;text-align:left;vertical-align:top;background:var(--panel);border:1px solid var(--soft);padding:8px 10px;font-size:15px;color:var(--brand)}
table.rep td{border:1px solid var(--soft);padding:8px 10px;vertical-align:top}
h2{font-size:18px;color:#fff;background:var(--brand);border-radius:6px;padding:5px 12px;margin:22px 0 8px}
h2 .no{display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;background:#fff;color:var(--brand);font-size:14px;margin-right:6px}
ol.tl{list-style:none;padding:0;margin:0}
ol.tl li{display:grid;grid-template-columns:9em 1fr;gap:10px;border-bottom:1px dashed var(--soft);padding:6px 2px}
ol.tl .when{color:var(--sub);font-weight:700}
.why{border:1.5px solid var(--line);border-radius:8px;padding:8px 12px;margin:6px 0;position:relative}
.why .n{font-weight:800;color:var(--red);margin-right:6px}
.arrow{text-align:center;color:var(--red);font-weight:900;line-height:1}
.cause{border:2px solid var(--red);background:#fff5f2;border-radius:8px;padding:8px 12px;margin:8px 0}
.ms{border:1.5px solid var(--line);border-radius:8px;padding:8px 12px;margin:8px 0}
.ms .t{display:inline-block;border:1px solid var(--line);border-radius:4px;font-size:13px;padding:0 6px;margin-right:6px}
.ms .who{color:var(--sub);font-size:14px;margin-top:2px}
.basis{color:var(--sub);font-size:13px}
.lb{display:inline-block;font-size:12px;font-weight:700;border-radius:4px;padding:0 6px;margin-left:6px;vertical-align:1px}
.lb-説明あり{background:#e3eefc;color:#1d4f91}.lb-確認済み{background:#dff3e7;color:#1f7a44}.lb-仮説{background:#fde4e1;color:#b3392b}.lb-要確認{background:#fff0c7;color:#8a6200}
ul.chk{margin:4px 0 0 1.2em;padding:0}
.flag{color:#b3392b;font-size:13px;font-weight:700}
.contact{margin-top:26px;border:2px solid var(--brand);border-radius:10px;padding:12px 16px;line-height:1.8}
.contact a{color:var(--brand);font-weight:800}
.foot{color:var(--sub);font-size:13px;margin-top:18px;border-top:1px solid var(--soft);padding-top:10px}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--brand);color:#fff;border-radius:999px;padding:8px 18px;font-weight:800;display:none}
@media (max-width:640px){table.rep th{width:6.5em}ol.tl li{grid-template-columns:1fr}}
@media print{.btns,.contact,.guidebar,.warn,.toast{display:none}body{font-size:13px}h2{background:none;color:var(--brand);border-bottom:2px solid var(--brand);border-radius:0}}
`;
const LOGO = '<svg viewBox="0 0 34 34" aria-hidden="true"><rect x="15.5" y="4" width="3" height="28" rx="1.5" fill="#1f3a5f"/><path d="M6 7h17l5 4.5-5 4.5H6z" fill="#1f3a5f"/><path d="M28 17H11l-5 4.5 5 4.5h17z" fill="#e0533d"/></svg>';
const GUIDE_URL = "https://michishirube-lab.github.io/nazenaze-sheet/";
const FORM_URL = "https://forms.gle/eU2egfgqNfbcTYBT9";
const SAVE_URL = "https://script.google.com/macros/s/AKfycbwqwzmRBCDxIMpb6ivciyf2JXNee2yzK0qOwTv6JnBuA5L9mnPNiJDFGUTtI9x9yFIi_g/exec";
const SAVE_TOKEN = "michishirube-nz-2026";
// 人を責める言葉（見つけたら書き直しを促す）
const BLAME = ["不注意", "注意不足", "確認不足", "意識", "気の緩み", "うっかり", "怠った", "怠慢", "不徹底", "徹底", "注意喚起", "慣れ", "油断", "たるみ", "反省"];

let D;
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
const val = x => (x && typeof x === "object") ? x : {text: x};
const lb = l => l ? `<span class="lb lb-${esc(l)}">${esc(l)}</span>` : "";
const blame = t => BLAME.filter(w => String(t || "").includes(w));

function fix(d) {
  d.timeline = d.timeline || [];
  d.immediate = (d.immediate || []).map(val);
  d.why = (d.why || []).filter(Boolean).map(val);
  d.causes = (d.causes || []).filter(Boolean).map(val);
  d.measures = (d.measures || []).filter(Boolean).map(val);
  d.check = d.check || [];
  d.impact = val(d.impact || "");
  return d;
}

function allTexts() {
  return [].concat(D.why, D.causes, D.measures).map(x => x.text);
}

function render() {
  const warns = allTexts().map(blame).flat();
  let h = `<div class="brandbar">${LOGO}<div><div class="brand-ja">みちしるべラボ</div><div class="brand-en">MICHISHIRUBE LAB</div></div><div class="brand-tag">ミスの報告書（下書き）</div></div>`;
  h += D.sample ? `<div class="sample">これは見た目確認用のサンプル（架空の内容）です。</div>`
    : `<div class="guidebar">📘 はじめての方へ：使い方とデータの扱いは、<a href="${GUIDE_URL}" target="_blank" rel="noopener">ご利用案内</a>をご覧ください。</div>`;
  h += `<h1>${esc(D.title || "報告書")}</h1><div class="meta">作成日 ${esc(D.date || "")}　｜　下書き（AIが作成。必ず事実を確かめてからお使いください）</div>`;
  h += `<div class="btns"><button class="btn main" id="copyBtn">📋 文章としてコピー（Word・メール用）</button><button class="btn" id="printBtn">🖨 印刷する</button></div>`;
  if (warns.length) h += `<div class="warn">⚠ 人を責める言葉（${esc([...new Set(warns)].join("・"))}）が入っています。「何がそうさせたか」の言い方に直してから使ってください。</div>`;

  h += `<h2><span class="no">1</span>起きたこと</h2><table class="rep">
    <tr><th>件名</th><td>${esc(D.title)}</td></tr>
    <tr><th>発生日</th><td>${esc(D.occurred || "要確認")}</td></tr>
    <tr><th>発覚日</th><td>${esc(D.reported || "要確認")}</td></tr>
    <tr><th>場所・部署</th><td>${esc(D.where || "要確認")}</td></tr>
    <tr><th>内容</th><td>${esc(D.summary)}</td></tr>
    <tr><th>影響</th><td>${esc(D.impact.text || "要確認")}${lb(D.impact.label)}</td></tr></table>`;

  if (D.timeline.length) {
    h += `<h2><span class="no">2</span>経緯</h2><ol class="tl">` +
      D.timeline.map(t => `<li><span class="when">${esc(t.when)}</span><span>${esc(t.what)}${lb(t.label)}</span></li>`).join("") + `</ol>`;
  }
  if (D.immediate.length) {
    h += `<h2><span class="no">3</span>すでにしたこと（応急処置）</h2><ul class="chk">` +
      D.immediate.map(x => `<li>${esc(x.text)}${lb(x.label)}</li>`).join("") + `</ul>`;
  }
  h += `<h2><span class="no">4</span>原因（なぜ起きたか）</h2>`;
  D.why.forEach((w, i) => {
    if (i) h += `<div class="arrow">▼</div>`;
    const b = blame(w.text);
    h += `<div class="why"><span class="n">なぜ${i + 1}</span>${esc(w.text)}${lb(w.label)}${w.basis ? `<div class="basis">根拠：${esc(w.basis)}</div>` : ""}${b.length ? `<div class="flag">人を責める言葉：${esc(b.join("・"))}</div>` : ""}</div>`;
  });
  D.causes.forEach(c => {
    h += `<div class="cause"><b>仕組みの原因：</b>${esc(c.text)}${lb(c.label)}</div>`;
  });
  h += `<h2><span class="no">5</span>再発防止策</h2>`;
  D.measures.forEach(m => {
    h += `<div class="ms">${m.type ? `<span class="t">${esc(m.type)}</span>` : ""}${esc(m.text)}<div class="who">担当：${esc(m.who || "要確認")}　｜　いつまでに：${esc(m.when || "要確認")}${m.why ? `　｜　効く理由：${esc(m.why)}` : ""}</div></div>`;
  });
  if (D.check.length) {
    h += `<h2><span class="no">6</span>出す前に確かめること</h2><ul class="chk">` + D.check.map(c => `<li>${esc(c)}</li>`).join("") + `</ul>`;
  }
  h += `<div class="contact">💬 報告書づくりや、同じミスが続くことでお困りなら、<a href="${FORM_URL}" target="_blank" rel="noopener">こちらから気軽にご相談ください</a>。<br>不具合の聞き取りから、なぜなぜ分析の下書きを作る道具もあります（<a href="${GUIDE_URL}" target="_blank" rel="noopener">ご利用案内</a>）。</div>`;
  h += `<div class="foot">© みちしるべラボ（michishirube lab）　この画面の文字（録音は含みません）は、ツールの改善と傾向の分析のため、みちしるべラボのスプレッドシートに記録されます。社名や個人が分かる形で外に出すことはありません。</div>`;
  h += `<div class="toast" id="toast">コピーしました</div>`;
  document.querySelector(".wrap").innerHTML = h;
  document.getElementById("copyBtn").onclick = copyText;
  document.getElementById("printBtn").onclick = printIt;
}

function plain() {
  const L = [];
  L.push(`件名：${D.title || ""}`, `作成日：${D.date || ""}`, "");
  L.push("1. 起きたこと", `・発生日：${D.occurred || "要確認"}`, `・発覚日：${D.reported || "要確認"}`, `・場所・部署：${D.where || "要確認"}`, `・内容：${D.summary || ""}`, `・影響：${D.impact.text || "要確認"}`, "");
  if (D.timeline.length) { L.push("2. 経緯"); D.timeline.forEach(t => L.push(`・${t.when}　${t.what}`)); L.push(""); }
  if (D.immediate.length) { L.push("3. すでにしたこと（応急処置）"); D.immediate.forEach(x => L.push(`・${x.text}`)); L.push(""); }
  L.push("4. 原因"); D.why.forEach((w, i) => L.push(`・なぜ${i + 1}：${w.text}`)); D.causes.forEach(c => L.push(`・仕組みの原因：${c.text}`)); L.push("");
  L.push("5. 再発防止策"); D.measures.forEach(m => L.push(`・${m.type ? "【" + m.type + "】" : ""}${m.text}（担当：${m.who || "要確認"}／いつまでに：${m.when || "要確認"}）`));
  return L.join("\n");
}

function toast(msg) {
  const t = document.getElementById("toast"); t.textContent = msg; t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 2200);
}
function copyText() {
  const text = plain();
  const fallback = () => {
    const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
    ta.remove(); toast(ok ? "コピーしました" : "コピーできませんでした。画面の文字を選んでコピーしてください");
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => toast("コピーしました"), fallback);
  else fallback();
}
function printIt() {
  if (window.self === window.top) { window.print(); return; }
  const css = [...document.querySelectorAll("style")].map(s => s.textContent).join("\n");
  const html = '<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>' + esc(D.title || "報告書") + '</title><style>' + css +
    '</style></head><body>' + document.querySelector(".wrap").outerHTML + '<script>setTimeout(function(){window.print()},400)<\/script></body></html>';
  let w = null; try { w = window.open(URL.createObjectURL(new Blob([html], {type: "text/html"})), "_blank"); } catch (e) {}
  if (!w) toast("この画面からは印刷できませんでした。右上の「エクスポート」から保存してください");
}

function save() {
  if (D.sample) return;
  const s = JSON.stringify(D); let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  const data = Object.assign({}, D, {defects: [{name: "【報告書】" + (D.title || "")}]});
  const body = JSON.stringify({token: SAVE_TOKEN, kind: "analysis", id: "R" + (D.date || "") + "-" + (h >>> 0).toString(36),
    org: D.org || "報告書", data: data, summary: {warnings: allTexts().map(blame).flat().length}});
  try { fetch(SAVE_URL, {method: "POST", mode: "no-cors", headers: {"Content-Type": "text/plain"}, body: body}).catch(() => {}); } catch (e) {}
}

function init() {
  const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  document.body.insertAdjacentHTML("afterbegin", '<div class="wrap"></div>');
  try { D = fix(JSON.parse(document.getElementById("data").textContent)); }
  catch (e) { document.querySelector(".wrap").innerHTML = '<p>データの読み込みに失敗しました。Geminiに「データ（JSON）の形を直して、もう一度画面を作ってください」と伝えてください。</p><p class="basis">' + esc(e.message) + '</p>'; return; }
  render();
  save();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
