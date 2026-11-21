/* Page renderers. Each function returns an HTML string for the #view container. */
(function () {
  var SCAMS = window.SCAMS;
  var slug = function (f) { return f.toLowerCase().replace(/\s+/g, "-"); };
  var ORDER = ["VERY COMMON", "COMMON", "LESS COMMON"];
  var TIER = {
    "VERY COMMON": { lvl: 3, ic: "alert", line: "Seen every day. Most people will meet one of these." },
    "COMMON": { lvl: 2, ic: "radar", line: "Regularly reported and easy to run into online." },
    "LESS COMMON": { lvl: 1, ic: "eye", line: "Less frequent, but serious and often more targeted." }
  };

  /* ---------- small helpers ---------- */
  /* Nested icon for use inside an SVG illustration. */
  function ni(name, x, y, s, color) {
    return '<svg class="ni" x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24"' + (color ? ' style="color:' + color + '"' : "") + '><path d="' + iconPath(name) + '"/></svg>';
  }
  function meter(n) {
    var s = '<span class="lvl" aria-hidden="true">';
    for (var i = 1; i <= 3; i++) s += "<i" + (i <= n ? ' class="on"' : "") + "></i>";
    return s + "</span>";
  }
  function emblem(name, cls) {
    return '<span class="emblem ' + (cls || "") + '" aria-hidden="true"><svg class="hex" viewBox="0 0 100 100"><path d="M50 4L90 27v46L50 96 10 73V27z"/></svg>' + icon(name) + "</span>";
  }

  /* ---------- Page hero illustrations (one per section, all original) ---------- */
  var ILL = {
    categories: function () {
      var blips = [["mail", 84, 58], ["smartphone", 262, 52], ["cart", 300, 148], ["heart", 246, 236], ["coins", 90, 232], ["qr", 52, 148]];
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Radar mapping different types of scams">' +
        '<defs><linearGradient id="sw1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#38e1f8" stop-opacity="0"/><stop offset="1" stop-color="#38e1f8" stop-opacity=".5"/></linearGradient></defs>' +
        '<g fill="none" stroke="#38e1f8" stroke-opacity=".3"><circle cx="180" cy="150" r="48"/><circle cx="180" cy="150" r="96"/><circle cx="180" cy="150" r="140" stroke-dasharray="3 7"/><path d="M180 6v288 M36 150h288" stroke-opacity=".15"/></g>' +
        '<g class="sweep"><path d="M180 150L180 10A140 140 0 0 1 300 80Z" fill="url(#sw1)"/></g>' +
        '<circle cx="180" cy="150" r="30" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("shield", 162, 132, 36, "#38e1f8") +
        blips.map(function (b, i) {
          return '<g class="blip" style="animation-delay:' + (i * 0.5) + 's"><circle cx="' + b[1] + '" cy="' + b[2] + '" r="19" fill="#0a2a66" stroke="#38e1f8" stroke-opacity=".7"/>' + ni(b[0], b[1] - 10, b[2] - 10, 20, "#7aeeff") + "</g>";
        }).join("") +
        "</svg>";
    },
    warning: function () {
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Suspicious email flagged by a scanner">' +
        '<defs><linearGradient id="wg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f3470"/><stop offset="1" stop-color="#081d46"/></linearGradient><linearGradient id="wg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347" stop-opacity=".0"/><stop offset="1" stop-color="#ffb347" stop-opacity=".45"/></linearGradient></defs>' +
        '<g class="pulse-ring"><circle cx="180" cy="150" r="128" fill="none" stroke="#ffb347" stroke-opacity=".35" stroke-dasharray="4 8"/></g>' +
        '<rect x="56" y="78" width="248" height="156" rx="10" fill="url(#wg1)" stroke="#38e1f8" stroke-opacity=".7" stroke-width="1.5"/>' +
        '<path d="M60 86l120 82 120-82" fill="none" stroke="#38e1f8" stroke-opacity=".6" stroke-width="1.5"/>' +
        '<g fill="#38e1f8" fill-opacity=".25"><rect x="80" y="190" width="120" height="6" rx="3"/><rect x="80" y="206" width="84" height="6" rx="3"/></g>' +
        '<rect x="70" y="140" width="130" height="10" rx="2" fill="#ff6b7d" fill-opacity=".25" stroke="#ff6b7d" stroke-dasharray="3 3"/>' +
        '<g class="scanline"><rect x="56" y="78" width="248" height="14" fill="url(#wg2)"/><rect x="56" y="90" width="248" height="2" fill="#ffb347"/></g>' +
        '<g class="pop"><path d="M268 36l38 66h-76z" fill="#2a1a08" stroke="#ffb347" stroke-width="2.5" stroke-linejoin="round"/><path d="M268 58v22" stroke="#ffb347" stroke-width="4" stroke-linecap="round"/><circle cx="268" cy="91" r="3" fill="#ffb347"/></g>' +
        '<circle cx="86" cy="236" r="26" fill="#082356" stroke="#38e1f8" stroke-width="2"/>' + ni("search", 72, 222, 28, "#38e1f8") +
        '<g fill="none" stroke="#ff6b7d" stroke-width="2" stroke-linecap="round"><path d="M240 238l22 0"/><circle cx="278" cy="238" r="3" fill="#ff6b7d"/></g>' +
        "</svg>";
    },
    tips: function () {
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Shield protecting a device with lock and key">' +
        '<defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c6fe0"/><stop offset="1" stop-color="#0a2f78"/></linearGradient></defs>' +
        '<g class="pulse-ring"><circle cx="180" cy="150" r="130" fill="none" stroke="#5ef0b0" stroke-opacity=".35" stroke-dasharray="4 8"/></g>' +
        '<circle cx="180" cy="150" r="100" fill="none" stroke="#38e1f8" stroke-opacity=".3"/>' +
        '<path d="M180 42l86 30v70c0 52-36 86-86 108-50-22-86-56-86-108V72z" fill="url(#tg1)" fill-opacity=".7" stroke="#38e1f8" stroke-width="2"/>' +
        '<path d="M180 62l68 24v56c0 42-28 70-68 88-40-18-68-46-68-88V86z" fill="#06214f" stroke="#38e1f8" stroke-opacity=".45"/>' +
        '<path d="M140 148l30 30 52-58" fill="none" stroke="#5ef0b0" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<g><circle cx="60" cy="96" r="26" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("lock", 46, 82, 28, "#38e1f8") + "</g>" +
        '<g><circle cx="304" cy="110" r="26" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("key", 290, 96, 28, "#38e1f8") + "</g>" +
        '<g><circle cx="76" cy="228" r="26" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("smartphone", 62, 214, 28, "#38e1f8") + "</g>" +
        '<g><circle cx="292" cy="236" r="26" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("eyeoff", 278, 222, 28, "#38e1f8") + "</g>" +
        "</svg>";
    },
    quiz: function () {
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Quiz card with answer options and a trophy">' +
        '<defs><linearGradient id="qg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f3470"/><stop offset="1" stop-color="#081d46"/></linearGradient></defs>' +
        '<g class="pulse-ring"><circle cx="180" cy="150" r="130" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="4 8"/></g>' +
        '<rect x="62" y="48" width="236" height="204" rx="12" fill="url(#qg1)" stroke="#38e1f8" stroke-opacity=".7" stroke-width="1.5"/>' +
        '<text x="86" y="100" font-family="Chakra Petch,sans-serif" font-size="46" font-weight="700" fill="#38e1f8">?</text>' +
        '<g fill="#38e1f8" fill-opacity=".3"><rect x="140" y="72" width="130" height="8" rx="4"/><rect x="140" y="90" width="90" height="8" rx="4"/></g>' +
        '<g fill="none" stroke="#38e1f8" stroke-opacity=".55"><rect x="86" y="120" width="188" height="30" rx="6"/><rect x="86" y="160" width="188" height="30" rx="6" stroke="#5ef0b0" stroke-opacity="1" fill="#5ef0b0" fill-opacity=".12"/><rect x="86" y="200" width="188" height="30" rx="6"/></g>' +
        '<g fill="#38e1f8" fill-opacity=".35"><rect x="124" y="132" width="100" height="6" rx="3"/><rect x="124" y="172" width="120" height="6" rx="3"/><rect x="124" y="212" width="80" height="6" rx="3"/></g>' +
        '<path d="M100 175l6 6 12-14" fill="none" stroke="#5ef0b0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<g class="pop"><circle cx="286" cy="62" r="34" fill="#082356" stroke="#38e1f8" stroke-width="2"/>' + ni("trophy", 268, 44, 36, "#ffd76a") + "</g>" +
        "</svg>";
    },
    simulation: function () {
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Phone showing a suspicious message with a flagged link">' +
        '<defs><linearGradient id="sg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f3470"/><stop offset="1" stop-color="#081d46"/></linearGradient></defs>' +
        '<g class="pulse-ring"><circle cx="180" cy="150" r="130" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="4 8"/></g>' +
        '<rect x="106" y="20" width="148" height="262" rx="22" fill="url(#sg1)" stroke="#38e1f8" stroke-width="2"/>' +
        '<rect x="152" y="30" width="56" height="6" rx="3" fill="#38e1f8" fill-opacity=".4"/>' +
        '<rect x="122" y="56" width="104" height="52" rx="10" fill="#38e1f8" fill-opacity=".16" stroke="#38e1f8" stroke-opacity=".5"/>' +
        '<g fill="#38e1f8" fill-opacity=".45"><rect x="134" y="68" width="70" height="6" rx="3"/><rect x="134" y="82" width="52" height="6" rx="3"/></g>' +
        '<rect x="134" y="124" width="104" height="70" rx="10" fill="#ff6b7d" fill-opacity=".14" stroke="#ff6b7d" stroke-opacity=".8"/>' +
        '<g fill="#eaf4ff" fill-opacity=".5"><rect x="146" y="136" width="76" height="6" rx="3"/><rect x="146" y="150" width="60" height="6" rx="3"/></g>' +
        '<rect x="146" y="166" width="80" height="16" rx="3" fill="#020a1c" stroke="#ffb347" stroke-dasharray="3 3"/><text x="152" y="178" font-family="Share Tech Mono,monospace" font-size="9" fill="#ffb347">bit.ly/pay-now</text>' +
        '<g fill="#38e1f8" fill-opacity=".16" stroke="#38e1f8" stroke-opacity=".5"><rect x="122" y="208" width="104" height="30" rx="10"/></g>' +
        '<g class="pop"><circle cx="270" cy="168" r="30" fill="#2a1a08" stroke="#ffb347" stroke-width="2.5"/>' + ni("alert", 255, 153, 30, "#ffb347") + "</g>" +
        '<g class="cursor"><path d="M196 196l0 44 12-11 8 18 8-4-8-18 16 0z" fill="#eaf4ff" stroke="#061631" stroke-width="2" stroke-linejoin="round"/></g>' +
        "</svg>";
    },
    scammed: function () {
      return '<svg viewBox="0 0 360 300" role="img" aria-label="Lifebuoy and emergency light">' +
        '<defs><radialGradient id="eg1"><stop offset="0" stop-color="#ff6b7d" stop-opacity=".55"/><stop offset="1" stop-color="#ff6b7d" stop-opacity="0"/></radialGradient></defs>' +
        '<g class="pulse-ring"><circle cx="180" cy="160" r="130" fill="none" stroke="#ff6b7d" stroke-opacity=".4" stroke-dasharray="4 8"/></g>' +
        '<circle cx="180" cy="78" r="70" fill="url(#eg1)" class="glow"/>' +
        '<g transform="translate(150 34)"><path d="M10 52V34a20 20 0 0140 0v18z" fill="#ff6b7d" stroke="#ffd0d6" stroke-width="2" class="glow"/><rect x="2" y="52" width="56" height="10" rx="3" fill="#0a2250" stroke="#38e1f8"/></g>' +
        '<g transform="translate(180 190)"><circle r="74" fill="none" stroke="#0a2250" stroke-width="30"/><circle r="74" fill="none" stroke="#38e1f8" stroke-width="30" stroke-dasharray="58 58" stroke-opacity=".9"/><circle r="74" fill="none" stroke="#ff6b7d" stroke-width="30" stroke-dasharray="58 58" stroke-dashoffset="-58" stroke-opacity=".9"/><circle r="89" fill="none" stroke="#38e1f8" stroke-opacity=".6"/><circle r="59" fill="none" stroke="#38e1f8" stroke-opacity=".6"/></g>' +
        ni("shieldcheck", 156, 166, 48, "#5ef0b0") +
        '<g><circle cx="72" cy="214" r="24" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("headset", 60, 202, 24, "#38e1f8") + "</g>" +
        '<g><circle cx="290" cy="214" r="24" fill="#082356" stroke="#38e1f8" stroke-width="1.5"/>' + ni("clipboard", 278, 202, 24, "#38e1f8") + "</g>" +
        "</svg>";
    }
  };

  function pageHero(eyebrow, title, text, art, cls, extra) {
    return '<section class="page-hero ' + (cls || "") + '"><div class="wrap hero-grid"><div class="hero-copy"><div class="eyebrow">' + eyebrow + '</div><h1 class="display">' + title + '</h1><p class="lede">' + text + "</p>" + (extra || "") + '</div><div class="hero-illus" aria-hidden="false">' + ILL[art]() + "</div></div></section>";
  }

  /* ---------------- HOME ---------------- */
  function home() {
    var fp = [13, 25, 37, 49, 61].map(function (r, i) {
      var b = [268, 280, 288, 284, 270][i];
      return '<path d="M' + (240 - r) + " " + b + "V238A" + r + " " + r + " 0 0 1 " + (240 + r) + " 238V" + (b - 22 - i * 3) + '" stroke-dasharray="' + (i % 2 ? "70 10 40 12" : "200") + '"/>';
    }).join("");
    var shield = "M240 84L356 126V232C356 312 308 362 240 392C172 362 124 312 124 232V126Z";
    var art =
      '<svg viewBox="0 0 480 480" role="img" aria-label="Shield with a fingerprint, surrounded by security icons">' +
      '<defs><linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b86ff"/><stop offset="1" stop-color="#0a2f78"/></linearGradient>' +
      '<radialGradient id="hg2"><stop offset="0" stop-color="#38e1f8" stop-opacity=".45"/><stop offset="1" stop-color="#38e1f8" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="hg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#38e1f8" stop-opacity="0"/><stop offset=".5" stop-color="#38e1f8" stop-opacity=".55"/><stop offset="1" stop-color="#38e1f8" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="hclip"><path d="' + shield + '"/></clipPath></defs>' +
      '<circle cx="240" cy="240" r="220" fill="url(#hg2)"/>' +
      '<circle cx="240" cy="240" r="205" fill="none" stroke="#38e1f8" stroke-opacity=".22"/>' +
      '<circle cx="240" cy="240" r="170" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="2 9"/>' +
      '<g class="orbit"><circle cx="240" cy="35" r="5" fill="#38e1f8"/><circle cx="445" cy="240" r="4" fill="#38e1f8" opacity=".6"/><circle cx="95" cy="385" r="3.5" fill="#7aeeff" opacity=".7"/></g>' +
      '<g stroke="#38e1f8" stroke-opacity=".35" stroke-dasharray="3 6" fill="none"><path d="M158 140L96 108"/><path d="M322 140L384 100"/><path d="M158 330L92 372"/><path d="M322 330L388 376"/></g>' +
      '<ellipse cx="240" cy="418" rx="120" ry="16" fill="#38e1f8" fill-opacity=".14" stroke="#38e1f8" stroke-opacity=".5"/><ellipse cx="240" cy="418" rx="76" ry="9" fill="none" stroke="#38e1f8" stroke-opacity=".5"/>' +
      '<path d="' + shield + '" fill="url(#hg1)" fill-opacity=".78" stroke="#38e1f8" stroke-width="3"/>' +
      '<path d="M240 106L338 141V232C338 300 298 342 240 368C182 342 142 300 142 232V141Z" fill="#06214f" stroke="#38e1f8" stroke-opacity=".5"/>' +
      '<g fill="none" stroke="#38e1f8" stroke-width="3.4" stroke-linecap="round" class="fp">' + fp + '<path d="M240 238v54"/></g>' +
      '<g clip-path="url(#hclip)"><rect class="scan" x="110" y="84" width="260" height="46" fill="url(#hg3)"/></g>' +
      '<g class="pop"><circle cx="340" cy="136" r="22" fill="#06214f" stroke="#5ef0b0" stroke-width="2.5"/><path d="M329 136l8 8 14-16" fill="none" stroke="#5ef0b0" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g>' +
      "</svg>";
    var chips =
      '<span class="fchip" style="left:12%;top:18%;animation-delay:0s" title="Passwords and locks">' + icon("lock") + "</span>" +
      '<span class="fchip" style="left:88%;top:14%;animation-delay:-1.4s" title="Phishing emails">' + icon("mail") + "</span>" +
      '<span class="fchip" style="left:10%;top:74%;animation-delay:-2.6s" title="Checking the details">' + icon("search") + "</span>" +
      '<span class="fchip" style="left:90%;top:78%;animation-delay:-3.8s" title="Mobile scams">' + icon("smartphone") + "</span>";
    var stats = [[SCAMS.length, "scam types explained"], [3, "risk levels"], ["2", "practice modes"]].map(function (x) { return '<div><b>' + x[0] + "</b><span>" + x[1] + "</span></div>"; }).join("");

    var journey = [
      ["book", "Learn", "See how the most common scams are built and why they work."],
      ["eye", "Spot", "Recognise the warning signs hiding in everyday messages."],
      ["play", "Practise", "Test yourself with a quiz and a realistic message simulation."],
      ["lifebuoy", "Respond", "Know exactly what to do first if something goes wrong."]
    ].map(function (j, i) {
      return '<li data-rv><span class="j-ic">' + icon(j[0]) + '</span><span class="j-n">0' + (i + 1) + "</span><h3>" + j[1] + "</h3><p>" + j[2] + "</p></li>";
    }).join("");

    var tiles =
      '<a class="tile t-cat" href="#scam-categories" data-rv><span class="count">01 / 06</span><div class="t-body">' + icon("shield", "t-ic") + "<h3>Scam Categories</h3><p>" + SCAMS.length + " scam types sorted into three risk levels, each with a complete guide: how it works, red flags, prevention and recovery.</p></div>" +
      '<div class="t-art"><span class="tag very-common">VERY COMMON</span><span class="tag common">COMMON</span><span class="tag less-common">LESS COMMON</span></div>' + icon("arrow", "go") + "</a>" +
      '<a class="tile t-warn" href="#warning-signs" data-rv><span class="count">02 / 06</span>' + icon("alert", "t-ic") + "<h3>Warning Signs</h3><p>Spot pressure, impersonation and false urgency.</p><div class=\"t-art\"><span class=\"bars\"><i></i><i></i><i></i><i></i><i></i></span></div>" + icon("arrow", "go") + "</a>" +
      '<a class="tile t-tips" href="#safety-tips" data-rv><span class="count">03 / 06</span>' + icon("shieldcheck", "t-ic") + "<h3>Safety Tips</h3><p>Build simple habits that protect every click.</p>" + icon("arrow", "go") + "</a>" +
      '<a class="tile t-quiz" href="#quiz" data-rv><span class="count">04 / 06</span>' + icon("brain", "t-ic") + "<h3>Quiz</h3><p>Test your digital instincts with " + QUIZ.length + " realistic decisions.</p>" + icon("arrow", "go") + "</a>" +
      '<a class="tile t-sim" href="#simulation" data-rv><span class="count">05 / 06</span>' + icon("message", "t-ic") + "<h3>Simulation</h3><p>Examine " + SIM.length + " fictional messages and decide how to respond.</p>" + icon("arrow", "go") + "</a>" +
      '<a class="tile t-sos" href="#if-scammed" data-rv><span class="count">06 / 06</span><div class="t-body">' + icon("siren", "t-ic") + "<h3>If You Were Scammed</h3><p>A clear, calm step-by-step plan for what to do first, next and afterwards.</p></div><span class=\"btn solid\">Get help now " + icon("arrow") + "</span></a>";

    return (
      '<div class="wrap"><section class="home-hero"><div class="hero-copy">' +
      '<div class="eyebrow dot">Scam awareness and prevention guide</div>' +
      '<h1 class="display" style="margin-top:18px"><span>Digital</span><span class="outline">Warenition</span></h1>' +
      '<p class="tagline">Think Before You Click. <em>Stay Safe Online.</em></p>' +
      '<p class="lede">A free guide that teaches you how online scams work, how to spot them early, and how to respond with confidence, one informed decision at a time.</p>' +
      '<div class="btn-row"><a class="btn solid" href="#scam-categories">Explore scams ' + icon("arrow") + '</a><a class="btn ghost" href="#simulation">' + icon("play") + " Try a live scenario</a></div>" +
      '<div class="hero-stats">' + stats + "</div>" +
      '</div><div class="hero-art">' + art + chips + "</div></section></div>" +
      '<section class="journey"><div class="wrap"><div class="modules-head"><span class="eyebrow">How Digital Warenition helps</span></div><ol class="journey-list">' + journey + "</ol></div></section>" +
      '<section class="section home-modules"><div class="wrap"><div class="modules-head"><span class="eyebrow">Choose a module</span></div><div class="bento">' + tiles + "</div></div></section>"
    );
  }

  /* ---------------- SCAM LIST ---------------- */
  function cardHTML(s) {
    var n = SCAMS.indexOf(s) + 1;
    return (
      '<a class="card t-' + slug(s.freq) + '" href="#scam-' + s.id + '" data-freq="' + s.freq + '" data-rv aria-label="' + s.name + ", " + s.freq.toLowerCase() + '. Open full profile">' +
      '<div class="card-art"><span class="num">' + String(n).padStart(2, "0") + " / " + SCAMS.length + "</span>" + emblem(s.icon) + '<span class="tag ' + slug(s.freq) + '">' + s.freq + "</span></div>" +
      '<div class="card-body"><h3>' + s.name + "</h3><p>" + s.short + "</p>" +
      '<ul class="signs">' + s.signs.map(function (x) { return "<li>" + icon("alert") + "<span>" + x + "</span></li>"; }).join("") + "</ul>" +
      '<span class="more">View full profile ' + icon("arrow") + "</span></div></a>"
    );
  }
  function counts() {
    var c = {};
    ORDER.forEach(function (o) { c[o] = SCAMS.filter(function (s) { return s.freq === o; }).length; });
    return c;
  }
  function categories() {
    var c = counts();
    var chips = ORDER.map(function (o) {
      return '<button class="chip t-' + slug(o) + '" type="button" data-filter="' + o + '" aria-pressed="false"><span class="chip-top">' + icon(TIER[o].ic) + "<span>" + o + "</span><small>" + c[o] + "</small></span>" + meter(TIER[o].lvl) + '<span class="chip-line">' + TIER[o].line + "</span></button>";
    }).join("");
    var groups = ORDER.map(function (o) {
      var list = SCAMS.filter(function (s) { return s.freq === o; });
      return '<section class="tier t-' + slug(o) + '" data-tier="' + o + '"><header class="tier-head">' + meter(TIER[o].lvl) + "<h2>" + o + '</h2><span class="tier-n">' + list.length + " profiles</span><p>" + TIER[o].line + '</p></header><div class="grid" >' + list.map(cardHTML).join("") + "</div></section>";
    }).join("");
    return (
      pageHero("Module 01 / Know the threat", "Scam Categories", "Scams change their appearance, but their methods repeat. Explore every threat by how often it appears, then open any category for a complete response guide.", "categories", "") +
      '<section class="section"><div class="wrap"><div class="list-head"><span class="eyebrow" id="threat-count">' + SCAMS.length + ' threat profiles</span><span class="hint">Select a level to filter</span></div><div class="filters" role="group" aria-label="Filter by frequency">' + chips + '</div><div id="scam-grid">' + groups + "</div></div></section>"
    );
  }

  /* ---------------- SCAM DETAIL ---------------- */
  function li(list, ic) { return '<ul class="bullets">' + list.map(function (x) { return "<li>" + icon(ic) + "<span>" + x + "</span></li>"; }).join("") + "</ul>"; }
  function detail(id) {
    var idx = -1;
    SCAMS.forEach(function (s, i) { if (s.id === id) idx = i; });
    if (idx < 0) return null;
    var s = SCAMS[idx], prev = SCAMS[idx - 1], next = SCAMS[idx + 1];
    var parts = [["how", "How it works", "target"], ["methods", "Methods", "list"], ["flags", "Red flags", "alert"], ["examples", "Examples", "users"], ["recognize", "Recognize it", "eye"], ["prevent", "Prevent it", "shieldcheck"], ["encounter", "If you encounter it", "flag"], ["victim", "If you are a victim", "lifebuoy"]];
    var toc = parts.map(function (t, i) { return '<a href="#scam-' + id + '" data-jump="s-' + t[0] + '"><b>' + (i + 1) + "</b>" + t[1] + "</a>"; }).join("");
    function panel(key, title, ic, body, cls) { return '<section class="panel ' + (cls || "") + '" id="s-' + key + '"><h2><span class="p-ic">' + icon(ic) + "</span>" + title + "</h2>" + body + "</section>"; }
    var back = '<a class="btn back-btn" href="#scam-categories">' + icon("arrowleft") + " Back to Scam Categories</a>";
    var methods = '<ul class="chips-list">' + s.methods.map(function (x) { return "<li>" + icon("bolt") + "<span>" + x + "</span></li>"; }).join("") + "</ul>";
    return (
      '<section class="detail-hero t-' + slug(s.freq) + '"><div class="wrap">' + back +
      '<div class="d-grid"><div><div class="head"><span class="tag ' + slug(s.freq) + '">' + s.freq + "</span>" + meter(TIER[s.freq].lvl) + '</div>' +
      '<div class="eyebrow">Threat profile ' + String(idx + 1).padStart(2, "0") + " / " + SCAMS.length + '</div><h1 class="display" style="margin:12px 0 18px">' + s.name + "</h1>" +
      '<p class="def"><strong>Definition.</strong> ' + s.def + '</p></div><div class="d-art">' + emblem(s.icon, "big") + '<span class="ring r1"></span><span class="ring r2"></span></div></div></div></section>' +
      '<div class="wrap"><div class="detail-layout"><nav class="toc" aria-label="On this page">' + toc + '</nav><div class="sections">' +
      panel("how", "How the scam works", "target", '<ol class="steps">' + s.how.map(function (x) { return "<li><span>" + x + "</span></li>"; }).join("") + "</ol>") +
      panel("methods", "Common methods used by scammers", "list", methods) +
      panel("flags", "Warning signs and red flags", "alert", li(s.flags, "alert"), "alert") +
      panel("examples", "Realistic examples", "users", '<div class="examples">' + s.examples.map(function (e) { return '<article class="example"><h3>' + icon("message") + e.title + "</h3><p>" + e.text + "</p></article>"; }).join("") + "</div>") +
      '<div class="pair">' + panel("recognize", "How to recognize this scam", "eye", li(s.recognize, "search")) + panel("prevent", "How to prevent or avoid it", "shieldcheck", li(s.prevent, "check"), "safe") + "</div>" +
      '<div class="pair">' + panel("encounter", "What to do if you encounter it", "flag", li(s.encounter, "arrow")) + panel("victim", "What to do if you become a victim", "lifebuoy", li(s.victim, "arrow"), "crisis") + "</div>" +
      '</div></div><div class="btn-row" style="padding-block:8px 24px">' + back + "</div>" +
      '<nav class="pager" aria-label="More profiles">' +
      (prev ? '<a href="#scam-' + prev.id + '"><small>Previous profile</small><strong>' + prev.name + "</strong></a>" : '<a class="spacer" aria-hidden="true" tabindex="-1"><small>.</small><strong>.</strong></a>') +
      (next ? '<a class="next" href="#scam-' + next.id + '"><small>Next profile</small><strong>' + next.name + "</strong></a>" : "") +
      "</nav></div>"
    );
  }

  /* ---------------- WARNING SIGNS ---------------- */
  function warning() {
    var signs = [
      ["clock", "Unexpected urgency", "A deadline, threat, or emergency is used to prevent careful thinking.", "HIGH", 3],
      ["card", "Unusual payment", "They demand gift cards, crypto, wire transfers, or remote access.", "CRITICAL", 4],
      ["spark", "Too good to be true", "A prize, return, refund, or job offer appears without a credible reason.", "MEDIUM", 2],
      ["search", "Information mismatch", "The sender name, email domain, URL, and story do not line up.", "HIGH", 3],
      ["fingerprint", "Requests for secrecy", "You are told not to speak with your bank, family, or colleagues.", "CRITICAL", 4],
      ["alert", "Emotional pressure", "Fear, excitement, affection, or authority is used to rush a response.", "MEDIUM", 2]
    ];
    var sevCls = { CRITICAL: "crit", HIGH: "high", MEDIUM: "med" };
    var rows = signs.map(function (s, i) {
      var seg = "";
      for (var k = 1; k <= 4; k++) seg += "<i" + (k <= s[4] ? ' class="on"' : "") + "></i>";
      return '<article class="alert-row ' + sevCls[s[3]] + '" data-rv><span class="a-ic">' + icon(s[0]) + '</span><div class="a-main"><div class="a-top"><h3>' + s[1] + '</h3><span class="sev">' + s[3] + "</span></div><p>" + s[2] + '</p></div><span class="a-meter" aria-hidden="true">' + seg + '</span><span class="a-n">0' + (i + 1) + "</span></article>";
    }).join("");
    var mark = function (n, t) { return '<mark data-n="' + n + '">' + t + '<sup>' + n + "</sup></mark>"; };
    var email =
      '<div class="mail-card"><div class="mail-bar"><span></span><span></span><span></span><em>Inbox / Suspicious</em><b class="flagged">' + icon("alert") + " FLAGGED</b></div>" +
      '<div class="mail-meta"><div><small>From</small><span>Northline Security &lt;' + mark(1, "alert@northline-secure-login.co") + "&gt;</span></div><div><small>Subject</small><strong>" + mark(2, "URGENT: account suspended in 2 hours") + "</strong></div></div>" +
      '<div class="mail-body"><p>' + mark(3, "Dear customer,") + " we detected unusual activity on your account. " + mark(2, "Verify now or your account will be permanently closed.") + "</p><p>Please confirm your " + mark(4, "online banking PIN") + " using the secure link below:</p><code>" + mark(5, "northline-secure-login.co/verify") + "</code></div></div>";
    var legend = [
      ["Sender domain does not match the real bank", "mismatch"],
      ["Urgency and threat of closure", "urgency"],
      ["Generic greeting from a company that knows your name", "generic"],
      ["Request for a PIN, which no genuine bank asks for", "secret"],
      ["Link leads to a look-alike address", "link"]
    ].map(function (l, i) { return "<li><b>" + (i + 1) + "</b><span>" + l[0] + "</span></li>"; }).join("");
    var steps = [["hand", "Stop", "Do not click, reply, or pay. Pressure is the scammer's main tool."], ["search", "Check", "Do not use the contact details in the message. Open the official app, type the website yourself, or call a number you already trust."], ["shieldcheck", "Protect", "Report it, delete it, and warn anyone else who may have received it."]]
      .map(function (s, i) { return '<li data-rv><span class="s-ic">' + icon(s[0]) + '</span><span class="s-n">0' + (i + 1) + "</span><h3>" + s[1] + "</h3><p>" + s[2] + "</p></li>"; }).join("");
    return (
      pageHero("Module 02 / Read the signals", "Warning Signs", "Your strongest defense is a pause. When two or more of these signals appear together, stop the conversation and verify independently.", "warning", "theme-alert",
        '<div class="statusbar"><span class="dotlive"></span>Threat detection center<em>Scan: active</em><em>Signals: ' + signs.length + "</em></div>") +
      '<section class="section"><div class="wrap"><div class="detect"><div class="detect-col"><div class="col-title">' + icon("scan") + '<span>Message analysis</span><small>Fictional example</small></div>' + email +
      '<ol class="legend">' + legend + '</ol></div><div class="detect-col"><div class="col-title">' + icon("radar") + "<span>Detected warning signs</span><small>Sorted by severity</small></div>" + '<div class="alert-list">' + rows + "</div></div></div>" +
      '<div class="check-strip"><div class="eyebrow">The 10-second check</div><ol class="check-steps">' + steps + "</ol></div></div></section>"
    );
  }

  /* ---------------- SAFETY TIPS ---------------- */
  var TIP_GROUPS = [
    { id: "accounts", title: "Secure your accounts", sub: "Make a stolen password useless.", ic: "lock", tips: [
      ["key", "Use unique passphrases", "Choose a different long passphrase for every important account. A password manager can create and store them."],
      ["shieldcheck", "Switch on MFA", "Use an authenticator app or security key. It adds a second checkpoint even if a password is stolen."],
      ["eye", "Review your accounts", "Turn on transaction alerts and check financial activity regularly for anything unfamiliar."]
    ] },
    { id: "devices", title: "Protect your devices", sub: "Close the gaps scammers rely on.", ic: "smartphone", tips: [
      ["smartphone", "Update automatically", "Keep devices, browsers, and apps current so known security gaps are closed quickly."],
      ["fingerprint", "Lock every device", "Use a screen lock, fingerprint or PIN, and turn on find-my-device so a lost phone can be locked or wiped."],
      ["bug", "Install apps from official stores", "Download apps only from your device's official store, check the publisher, and avoid files sent by strangers."]
    ] },
    { id: "habits", title: "Guard your privacy and habits", sub: "Slow down the moments scammers exploit.", ic: "eyeoff", tips: [
      ["usercheck", "Verify another way", "Contact the person or organization through an official channel, not by replying to the message."],
      ["eyeoff", "Limit what you share", "Review privacy settings and avoid posting details that can be used to answer security questions."],
      ["coins", "Pause before you pay", "Treat any request for gift cards, crypto, or a transfer to a new account as a reason to wait and check with someone you trust."]
    ] }
  ];
  var TIP_TOTAL = 9;
  function groupArt(id) {
    var g = {
      accounts: '<svg viewBox="0 0 160 160"><defs><linearGradient id="ga1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c6fe0"/><stop offset="1" stop-color="#0a2f78"/></linearGradient></defs><circle cx="80" cy="80" r="70" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="3 7"/><path d="M52 72V54a28 28 0 0156 0v18" fill="none" stroke="#38e1f8" stroke-width="5" stroke-linecap="round"/><rect x="38" y="70" width="84" height="64" rx="10" fill="url(#ga1)" stroke="#38e1f8" stroke-width="2"/><circle cx="80" cy="98" r="8" fill="#06214f" stroke="#38e1f8" stroke-width="2"/><path d="M80 106v14" stroke="#38e1f8" stroke-width="4" stroke-linecap="round"/><g fill="#38e1f8"><circle cx="46" cy="146" r="3"/><circle cx="60" cy="146" r="3"/><circle cx="74" cy="146" r="3"/><circle cx="88" cy="146" r="3"/><circle cx="102" cy="146" r="3"/><circle cx="116" cy="146" r="3"/></g></svg>',
      devices: '<svg viewBox="0 0 160 160"><defs><linearGradient id="ga2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c6fe0"/><stop offset="1" stop-color="#0a2f78"/></linearGradient></defs><circle cx="80" cy="80" r="70" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="3 7"/><rect x="26" y="42" width="84" height="58" rx="6" fill="url(#ga2)" stroke="#38e1f8" stroke-width="2"/><path d="M16 112h104" stroke="#38e1f8" stroke-width="4" stroke-linecap="round"/><rect x="104" y="64" width="32" height="64" rx="7" fill="#06214f" stroke="#38e1f8" stroke-width="2"/><path d="M68 56l16 6v14c0 12-8 18-16 22-8-4-16-10-16-22V62z" fill="#06214f" stroke="#5ef0b0" stroke-width="2"/><path d="M61 74l5 5 9-10" fill="none" stroke="#5ef0b0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      habits: '<svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="70" fill="none" stroke="#38e1f8" stroke-opacity=".3" stroke-dasharray="3 7"/><path d="M22 80C38 54 58 42 80 42s42 12 58 38c-16 26-36 38-58 38S38 106 22 80z" fill="#0a2a66" stroke="#38e1f8" stroke-width="2.5"/><circle cx="80" cy="80" r="20" fill="#06214f" stroke="#38e1f8" stroke-width="2.5"/><circle cx="80" cy="80" r="7" fill="#38e1f8"/><path d="M30 130L130 30" stroke="#5ef0b0" stroke-width="5" stroke-linecap="round"/></svg>'
    };
    return g[id];
  }
  function tips() {
    var groups = TIP_GROUPS.map(function (g, gi) {
      var n = 0;
      for (var k = 0; k < gi; k++) n += TIP_GROUPS[k].tips.length;
      return '<section class="tg" data-rv><div class="tg-side"><div class="tg-art">' + groupArt(g.id) + "</div><h2>" + g.title + "</h2><p>" + g.sub + '</p></div><ol class="tg-list">' +
        g.tips.map(function (x, i) {
          return '<li class="tip" data-tip><span class="t-ic">' + icon(x[0]) + '</span><div><h3>' + x[1] + "</h3><p>" + x[2] + '</p></div><button type="button" class="done" aria-pressed="false" aria-label="I already do this: ' + x[1] + '">' + icon("check") + "<span>I do this</span></button></li>";
        }).join("") + "</ol></section>";
    }).join("");
    var score =
      '<div class="score" id="tip-score"><svg viewBox="0 0 64 64" class="ring" aria-hidden="true"><circle cx="32" cy="32" r="27" class="bg"/><circle cx="32" cy="32" r="27" class="fg" id="score-ring" pathLength="100" stroke-dasharray="0 100"/></svg><div class="score-n"><b id="score-num">0</b><small>/ ' + TIP_TOTAL + '</small></div><div class="score-txt"><strong>Your protection level</strong><span id="score-label" aria-live="polite">Tap "I do this" on the habits you already follow.</span></div></div>';
    return (
      pageHero("Module 03 / Strengthen your habits", "Safety Tips", "Security does not require technical expertise. A few repeatable habits dramatically reduce your exposure to digital scams.", "tips", "theme-safe", score) +
      '<section class="section"><div class="wrap"><div class="tips-wrap">' + groups + "</div></div></section>"
    );
  }

  /* ---------------- QUIZ ---------------- */
  var QUIZ = [
    { q: "You receive a text saying your bank account is locked, with a link to restore access. What is safest?", o: ["Open your bank app independently and check there", "Tap the link and inspect the page", "Reply asking if the message is genuine"], a: 0, why: "Texts can be spoofed and links can lead to clones. Checking in the official app confirms whether anything is really wrong without trusting the message." },
    { q: "A caller says they are from your bank's fraud team and asks you to read out the code that was just texted to you. What do you do?", o: ["Read the code so they can stop the fraud", "Hang up and call the number on the back of your card", "Ask them to read your account balance first"], a: 1, why: "A real bank never needs a one-time code from you. Hanging up and calling a number you trust breaks the scammer's control of the conversation." },
    { q: "A buyer on a marketplace wants to pay by sending a screenshot of a transfer and asks you to ship today. What is safest?", o: ["Ship it, the screenshot looks real", "Wait until the money shows in your own account", "Ask the buyer to send a photo ID"], a: 1, why: "Screenshots are easy to fake. Only the balance in your own account or the platform's protected payment status confirms that you have been paid." },
    { q: "An email from \"IT Support\" says your work password expires today and asks you to sign in through a link. Your company has never mentioned this. What is safest?", o: ["Click the link, because IT knows best", "Forward it to colleagues so they can sign in too", "Contact IT through the company's known helpdesk channel"], a: 2, why: "Urgent password notices are a classic phishing lure. Using a helpdesk number or portal you already know confirms the request without trusting the link." },
    { q: "An online friend you have never met in person asks you to send money for a flight so you can finally meet. What is the best response?", o: ["Send a small amount to show you care", "Decline, stop sending money, and talk to someone you trust", "Ask for their bank details so you can send it safely"], a: 1, why: "Requests for money from someone you have not met are a hallmark of romance scams. Stopping and talking to a trusted person breaks the emotional pressure." }
  ];
  QUIZ.forEach(function (q) { q.l = "easy"; });
  QUIZ.push(
    { l: "medium", q: "Your landlord emails, in the same thread you always use, saying the rent account has changed and asking you to pay the new one this month. What is safest?", o: ["Pay it, because the thread looks familiar", "Phone your landlord on the number you already have and confirm", "Reply to the email asking if the change is real"], a: 1, why: "Scammers hijack or imitate email threads. Replying to the same email reaches the scammer, so confirm through a separate channel you already trust." },
    { l: "medium", q: "You search for your airline's support number and call the top ad. The agent asks you to install a tool so they can \"see your booking\". What do you do?", o: ["Install it, since you called them", "Hang up and find the number on the airline's official website or app", "Install it but watch what they do"], a: 1, why: "Search ads can carry fake support numbers, and no genuine agent needs remote access to a booking. Use contact details from the official site or app." },
    { l: "medium", q: "A \"remote assistant\" employer sends you a check and tells you to buy equipment from their preferred vendor, keeping the extra as your pay. What is the right move?", o: ["Deposit the check and pay the vendor quickly", "Deposit it, but wait a day before paying", "Do not deposit it, and verify the employer through official channels"], a: 2, why: "Fake checks can appear to clear before they bounce, leaving you to cover the money you sent. Real employers do not ask you to buy equipment from a vendor they name." },
    { l: "medium", q: "A QR code on a parking meter sends you to a payment page asking for full card details. How do you stay safe?", o: ["Pay on the page, since it is on the meter", "Use the official parking app or type the service's address yourself", "Pay with a smaller amount first to test it"], a: 1, why: "QR stickers can be placed over real ones. Using the official app or typing the address yourself avoids a page the scammer controls." },
    { l: "medium", q: "Your phone suddenly shows no service, and then your email sends password reset codes you did not request. What should you do first?", o: ["Restart the phone and wait for the codes to stop", "Contact your carrier from another phone and secure your email and bank", "Ignore the codes because you did not request them"], a: 1, why: "This pattern suggests a SIM swap, where a criminal takes over your number to receive your codes. Act fast with your carrier, then secure key accounts." },
    { l: "hard", q: "On a video call, someone who looks and sounds like your manager asks you to approve an urgent, confidential transfer. Nothing seems off. What is the best response?", o: ["Approve it, because you can see and hear them", "Pause and confirm through a separate channel, such as a number you already have", "Approve a small portion first"], a: 1, why: "Voice and video can now be faked convincingly. Urgency and secrecy are the real warning signs, so verify through an independent channel before moving money." },
    { l: "hard", q: "A regular supplier emails inside a real, ongoing thread, and the signature matches, saying their bank details changed before this month's invoice. What do you do?", o: ["Update the details, because it is the same thread", "Ask them by reply email to confirm", "Call the supplier on a number you already hold before changing anything"], a: 2, why: "If a mailbox is compromised, the scammer can reply inside genuine threads. Only an independent check on a known number tells you who you are really talking to." },
    { l: "hard", q: "You invested through an app and a small withdrawal worked. Now a larger withdrawal is blocked until you pay a 20% tax fee. What is the right move?", o: ["Pay the fee to release your larger balance", "Stop paying, keep the evidence, and report it", "Pay half the fee and see if the rest is released"], a: 1, why: "A small payout that builds trust, followed by a fee to release more, is a classic investment scam pattern. Each payment only leads to new demands." },
    { l: "hard", q: "At midnight your phone floods with login approval prompts for your account, though you are not signing in. What should you do?", o: ["Approve one so the prompts stop", "Deny every prompt, change your password, and review your account's security", "Ignore them until morning"], a: 1, why: "Attackers who already have your password spam approvals hoping you give in. Deny them, change the password, and check for unfamiliar devices." },
    { l: "hard", q: "After losing money to a scam, a stranger messages saying they traced your funds and can recover them for a processing fee. What is the best response?", o: ["Pay the fee, since they know about your loss", "Share your account details so they can start", "Decline, and report through your bank and official agencies only"], a: 2, why: "Recovery scams target people who have already been defrauded, and genuine authorities never charge upfront fees. Stick to official channels." }
  );
  QUIZ.push(
    { l: "easy", q: "An email says you won a prize in a contest you never entered, and you only need to pay a small fee to claim it. What do you do?", o: ["Pay the small fee, since it is cheap", "Reply asking for more details about the prize", "Delete it, and never pay to receive a prize"], a: 2, why: "You cannot win a contest you did not enter, and real prizes never require an upfront fee. Paying only leads to more demands." },
    { l: "easy", q: "A browser pop-up says your computer is infected and tells you to call a number right now. What is the safest move?", o: ["Close the browser, and do not call the number", "Call quickly before the virus spreads", "Click the pop-up to run the scan it offers"], a: 0, why: "Real system warnings never include a phone number. Closing the browser removes the pop-up, and nothing is actually wrong." },
    { l: "easy", q: "A marketplace seller offers a game console at half price but insists you pay by bank transfer outside the platform. What is best?", o: ["Pay half now and half on delivery", "Walk away, or only pay through the platform's protected checkout", "Pay by transfer, because the price is too good to miss"], a: 1, why: "Very low prices plus a request to pay outside the platform are classic marketplace scam signs. Protected checkout gives you a way to dispute the payment." },
    { l: "easy", q: "A friend's social media account messages you asking to borrow money urgently and to reply fast. What should you do?", o: ["Send the money, since it is a friend", "Reply to the message and ask if it is really them", "Contact your friend through another channel, such as a phone call, before doing anything"], a: 2, why: "Hijacked accounts are used to ask the owner's friends for money. Checking through a separate channel tells you who is really behind the messages." },
    { l: "easy", q: "Someone you do not know asks you to read out the six-digit code that was just texted to you, saying it is only to verify you. What do you do?", o: ["Never share it, and end the conversation", "Share it, but only after asking who they are", "Share only the first three digits"], a: 0, why: "One-time codes are the keys to your account. Anyone asking for one is trying to get in, whatever reason they give." }
  );
  QUIZ.push(
    { l: "medium", q: "You are expecting a parcel, and a text says it is held and asks for a $1.50 customs fee through a link. What is the safest way to check?", o: ["Pay the fee, because it is so small", "Reply to the text to ask for more details", "Open the courier's official site or app and enter your tracking number yourself"], a: 2, why: "Tiny fees are a common way to collect card details. Using the courier's own site or app confirms the real status without trusting the link." },
    { l: "medium", q: "An email from your streaming service says your payment failed and gives a link to update your card. The sender address looks slightly different from usual. What is best?", o: ["Open the service's app or type its address yourself to check your account", "Click the link but only enter part of your card number", "Reply to the email to confirm the problem"], a: 0, why: "Look-alike sender addresses and urgent payment problems are phishing signs. Checking inside the real app shows whether anything is actually wrong." },
    { l: "medium", q: "After two weeks of daily chats, an online match says they love you, moves the chat to a private app, and then asks for money for a hospital bill. What is the best response?", o: ["Send a small amount to help them", "Stop sending money, and talk to someone you trust about it", "Ask them to pay you back within a week"], a: 1, why: "Fast affection followed by a crisis that needs money is the pattern of a romance scam. Talking to a trusted person helps break the emotional pressure." },
    { l: "medium", q: "A recruiter interviews you only by chat, offers the job at once, and asks for your passport copy and bank details for \"payroll setup\". What should you do?", o: ["Send them, because the pay is good", "Send the passport but keep your bank details", "Hold back your documents, and verify the employer through its official website first"], a: 2, why: "Job scams collect identity documents and bank details early. A real employer is verifiable and does not need your documents before a contract." },
    { l: "medium", q: "A landlord who says he is abroad offers a flat far below market price and wants a deposit before you can view it. What is the best move?", o: ["Pay the deposit now so you do not lose the flat", "Insist on a viewing or live video tour, and do not pay before verifying", "Pay half the deposit to show you are serious"], a: 1, why: "Copied listings with low prices and landlords who cannot meet are common rental scams. Never pay before you can verify the property and the owner." }
  );
  QUIZ.push(
    { l: "hard", q: "A caller's number matches your bank's real number, and they know your latest transaction. They say your account is under attack and you must move your money to a \"safe account\". What do you do?", o: ["Move the money, because they clearly know your details", "Hang up and call the number on the back of your card yourself", "Ask them to send an email to confirm"], a: 1, why: "Caller ID can be spoofed and details can come from data leaks. A bank never asks you to move money to a safe account, so call back on a number you trust." },
    { l: "hard", q: "An email that looks like it comes from an employee asks HR to change their direct deposit to a new account before payday. The address looks right. What should HR do?", o: ["Make the change, because it is urgent", "Reply to the email and ask for a signed form", "Confirm the request in person or by phone using a known number before changing anything"], a: 2, why: "Payroll diversion relies on convincing addresses and urgency. An independent check on a known contact is the only reliable way to confirm it." },
    { l: "hard", q: "You get a call from a voice that sounds exactly like your grandson, saying he is in trouble and needs bail money, and that you should not tell his parents. What is the best response?", o: ["Send the money, because it sounds just like him", "Hang up, and call him or his parents on the numbers you already have", "Ask him to prove it by sending a photo"], a: 1, why: "AI can clone a voice from a short recording. Urgency and secrecy are the real warning signs, so verify through a number you already trust." },
    { l: "hard", q: "You clicked a link in an email and entered your password on the page it opened. It now asks for the code from your authenticator app. What should you do?", o: ["Enter the code, because the password was accepted", "Stop, close the page, go to the official site directly, and change your password", "Enter a wrong code first to see what happens"], a: 1, why: "Relay pages pass your password and code to the real site at once. Do not enter the code, and change the password from the official site." },
    { l: "hard", q: "After installing cracked software, you notice your browser accounts being accessed from other places. What should you do first?", o: ["Change passwords from the same computer right away", "Disconnect the device, then change passwords from a clean device, starting with your email, and enable multi-factor authentication", "Uninstall the software and carry on"], a: 1, why: "Cracked software often carries password-stealing malware. Changing passwords on the infected computer lets the malware see the new ones, so use a clean device." }
  );
  var LEVELS = [
    { id: "easy", name: "Easy", ic: "shieldcheck", c: "var(--green)", desc: "Everyday scams and clear-cut decisions." },
    { id: "medium", name: "Medium", ic: "radar", c: "var(--amber)", desc: "Trickier situations with believable details." },
    { id: "hard", name: "Hard", ic: "bolt", c: "var(--red)", desc: "Convincing, high-pressure, advanced tactics." },
    { id: "mix", name: "Mix", ic: "refresh", c: "var(--cyan)", desc: "15 random questions from every level." }
  ];
  function practiceTabs(active) {
    return '<div class="practice-tabs" role="tablist" aria-label="Practice mode"><a href="#quiz" role="tab" aria-selected="' + (active === "quiz") + '">' + icon("brain") + 'Knowledge quiz</a><a href="#simulation" role="tab" aria-selected="' + (active === "sim") + '">' + icon("message") + "Message simulation</a></div>";
  }
  function quiz() {
    return pageHero("Module 04 / Test your instincts", "Scam Sense Quiz", QUIZ.length + " realistic decisions. No tricks, just the practical judgement you need to stay safer online.", "quiz", "theme-quiz", practiceTabs("quiz")) +
      '<section class="section"><div class="wrap"><div class="practice-layout"><aside class="brief"><div class="eyebrow">Mission brief</div><h2>Knowledge challenge</h2><ul><li>' + icon("target") + "<span>Easy, medium, hard, or a mixed round of real scam tactics</span></li><li>" + icon("bolt") + "<span>Instant feedback after every answer</span></li><li>" + icon("trophy") + "<span>Earn a defender rank at the end</span></li></ul></aside>" +
      '<div class="stage console" id="quiz-stage"></div></div></div></section>';
  }

  /* ---------------- SIMULATION ---------------- */
  var SIM = [
    { ch: "SMS", from: "ParcelTrack", meta: "Unknown sender", time: "18:42", ic: "briefcase", title: "Delivery fee required", body: "Your package could not be delivered. Pay the outstanding $2.49 fee now to avoid return.", link: "bit.ly/secure-delivery-24", scam: true, signals: ["Sender is unknown and there is no tracking number.", "The link is shortened, so you cannot see where it goes.", "A tiny fee is a common way to collect card details."] },
    { ch: "SMS", from: "Northline Bank", meta: "Verified sender thread", time: "09:15", ic: "building", title: "Card purchase alert", body: "A purchase of $64.20 was made with your card ending 4417. If this was you, no action is needed. If not, call the number on the back of your card.", link: "", scam: false, signals: ["It asks for no payment, password, or code.", "It contains no link, and it points you to the number printed on your card.", "It arrives in your bank's existing message thread."] },
    { ch: "Email", from: "Mark (CEO)", meta: "mark.cfo@gmail-mail.co", time: "16:58", ic: "usercheck", title: "Quick favor, keep this private", body: "I'm in a meeting and cannot talk. Buy five $100 gift cards for client gifts and send me the codes. I'll reimburse you today.", link: "", scam: true, signals: ["The address is a free mail domain, not the company's.", "Gift cards are a classic payment request in impersonation scams.", "Secrecy and urgency are used to skip normal checks."] },
    { ch: "Email", from: "Streamly Billing", meta: "billing@streamly-account.help", time: "07:21", ic: "card", title: "Payment failed: update now", body: "We could not process your latest payment. Your account will be paused in 24 hours unless you update your card details.", link: "streamly-account.help/update-card", scam: true, signals: ["The sender domain is not the service's real website.", "A 24-hour deadline is used to create pressure.", "It asks you to enter card details through a link instead of the official app."] },
    { ch: "SMS", from: "Maple Street Library", meta: "Existing message thread", time: "10:05", ic: "book", title: "Book due tomorrow", body: "Reminder: \"The Long Tide\" is due back tomorrow. You can renew it in the library app or at the desk. No action is needed if you plan to return it.", link: "", scam: false, signals: ["It asks for no payment, password, or code.", "It has no link and points you to the official app or the desk.", "It matches a book you actually borrowed and arrives in a thread you already have."] }
  ];
  var SIM_TYPE = { "Delivery fee required": "text-message", "Quick favor, keep this private": "business-email-compromise", "Payment failed: update now": "phishing" };
  SIM.forEach(function (s) { s.l = "easy"; if (SIM_TYPE[s.title]) s.t = SIM_TYPE[s.title]; });
  SIM.push(
    { l: "easy", t: "prize-lottery", ch: "SMS", from: "Prize Center", meta: "Unknown sender", time: "12:10", ic: "gift", title: "You won a $500 gift card", body: "Congratulations! You have been picked to win a $500 gift card. Claim it within 1 hour or it will be given to someone else.", link: "tinyurl.com/claim-gift-500", scam: true, signals: ["You never entered a contest, so you cannot have won one.", "A one-hour deadline is used to rush you.", "The shortened link hides where it really leads."] },
    { l: "easy", ch: "Email", from: "Orbit Airlines", meta: "no-reply@orbitairlines.com", time: "08:30", ic: "briefcase", title: "Your booking is confirmed", body: "Your flight OA214 on 3 December is confirmed. You can manage your booking in the Orbit Airlines app. No payment is needed.", link: "", scam: false, signals: ["It asks for no payment, password, or code.", "It points you to the official app instead of a link.", "It matches a booking you actually made."] },
    { l: "easy", t: "impersonation", ch: "SMS", from: "Unknown number", meta: "Number not in your contacts", time: "21:47", ic: "user", title: "Hi, it's me, new number", body: "Hi, it's Anna, I got a new phone and number. Can you send me $200 today? I'll explain later, it's urgent.", link: "", scam: true, signals: ["It comes from an unknown number claiming to be someone you know.", "It asks for money urgently and promises to explain later.", "The safe step is to call Anna on her old, known number first."] },
    { l: "easy", ch: "Email", from: "City Water", meta: "notifications@citywater.example", time: "09:00", ic: "building", title: "Your monthly statement is ready", body: "Your statement for this month is available in your online account. If you pay by direct debit, no action is needed.", link: "", scam: false, signals: ["It asks for no payment details or password.", "It has no link and says no action is needed for direct debit.", "It matches a utility account you really have."] },
    { l: "easy", t: "tech-support", ch: "Email", from: "Tech Support", meta: "help-desk@pc-fix-now.co", time: "15:36", ic: "monitor", title: "Your computer has a virus", body: "We detected a serious virus on your computer. Call 1-800-555-0199 immediately and do not turn off your computer.", link: "", scam: true, signals: ["Real companies do not email you about viruses on your computer.", "A phone number and urgent orders are used to rush you.", "The sender domain does not belong to any real software company."] },
    { l: "easy", t: "marketplace-shopping", ch: "SMS", from: "Buyer: Mike", meta: "Marketplace chat", time: "17:20", ic: "cart", title: "I paid too much, please refund", body: "I sent $600 for your bike instead of $400. Please send back the extra $200 today or I will report you. Screenshot attached.", link: "", scam: true, signals: ["An overpayment followed by a request to send money back is a classic trick.", "A screenshot is not proof, so check your own account for the payment.", "Threats and a same-day deadline are used to rush you."] },
    { l: "easy", t: "job-employment", ch: "Email", from: "Talent Team", meta: "hr.talent@gmail-careers.com", time: "10:05", ic: "briefcase", title: "Work from home, $50 an hour", body: "You are hired! No experience needed. We are sending you a check to buy equipment from our preferred vendor. Reply to confirm.", link: "", scam: true, signals: ["The job offer comes with no interview and unusually high pay.", "A check to buy equipment from a named vendor is a fake-check scam.", "The recruiter uses a free email address, not a company domain."] },
    { l: "easy", t: "subscription-renewal", ch: "Email", from: "Antivirus Plus", meta: "billing@antivirus-plus-help.co", time: "06:48", ic: "card", title: "Your $399 renewal was charged", body: "Thank you for renewing your annual plan for $399. If you did not authorize this charge, call 1-800-555-0123 right away.", link: "", scam: true, signals: ["It is an invoice for a service you do not remember buying.", "The only way to dispute it is a phone number in the message.", "Your own bank statement will show there is no such charge."] },
    { l: "easy", t: "charity-donation", ch: "SMS", from: "Typhoon Relief Fund", meta: "Unknown sender", time: "19:02", ic: "lifebuoy", title: "Families need your help now", body: "Urgent: thousands of families lost their homes. Donate now by gift card or transfer to help. Every minute counts.", link: "typhoon-help-now.org/give", scam: true, signals: ["It is an unsolicited appeal using urgency and emotion.", "Gift cards and transfers are payment methods charities do not ask for.", "Donate through a charity's official site that you find yourself."] },
    { l: "easy", t: "rental-accommodation", ch: "Email", from: "Owner Ray", meta: "ray.rentals@gmail-homes.com", time: "13:44", ic: "home", title: "Bright apartment, great price", body: "The apartment is 40% below the usual rent. I am abroad, so send the deposit by transfer and I will mail you the keys.", link: "", scam: true, signals: ["The price is far below similar properties.", "The landlord cannot show the flat and wants a deposit first.", "Paying by transfer for keys sent by post leaves you no protection."] }
  );
  SIM.push(
    { l: "hard", t: "advance-fee", ch: "Email", from: "Hartwell Credit", meta: "approvals@hartwell-credit.co", time: "10:12", ic: "coins", title: "Your $15,000 loan is approved", body: "Your loan was approved with no credit check. A refundable $300 insurance fee is required to release the funds today.", link: "hartwell-credit.co/release", scam: true, signals: ["A loan approved with no checks is a warning sign.", "A fee must be paid before you receive anything.", "Legitimate lenders take any fees out of the loan, not upfront."] },
    { l: "hard", ch: "SMS", from: "Northline Bank", meta: "Verified sender thread", time: "11:03", ic: "building", title: "Your sign-in code", body: "You asked to sign in to Northline Online. Your code is 482913. Never share this code. If this was not you, call the number on your card.", link: "", scam: false, signals: ["It arrives right after you asked to sign in.", "It has no link and warns you not to share the code.", "It points you to the number on your card, not one in the message."] },
    { l: "hard", t: "account-takeover", ch: "SMS", from: "Streamly Support", meta: "Unknown sender", time: "14:25", ic: "key", title: "Suspicious login blocked?", body: "We sent a code, 530917, to your phone to cancel a suspicious login. Reply with that code to block the attacker.", link: "", scam: true, signals: ["No real support team asks you to reply with a verification code.", "That code is the one that lets someone reset your password.", "You can check your account's security page in the official app instead."] },
    { l: "hard", ch: "Email", from: "IT Helpdesk", meta: "helpdesk@yourcompany.example", time: "16:40", ic: "laptop", title: "Planned maintenance on Saturday", body: "Email will be unavailable on Saturday from 02:00 to 04:00. No action is needed, and we will never ask for your password.", link: "", scam: false, signals: ["It asks for nothing and has no link.", "It arrives from your company's real domain.", "It states clearly that no password is ever requested."] },
    { l: "hard", t: "romance", ch: "SMS", from: "Daniel (Harbor Match)", meta: "Dating app contact, moved to text", time: "19:18", ic: "heart", title: "I love you, Maya", body: "After all these weeks, you are the only one I trust. My equipment is stuck at customs and I need $1,800 to release it. I will pay you back when I land.", link: "", scam: true, signals: ["Declarations of love and an emergency are used together.", "The person has never met you in person or on live video.", "A request for money from someone you have not met is a stop sign."] },
    { l: "hard", t: "investment-crypto", ch: "Email", from: "NovaTrade Pro", meta: "support@novatrade-pro.co", time: "07:45", ic: "trending", title: "Your balance is up 180%", body: "Your account balance is $5,000. A 20% release fee is required before you can withdraw. Pay within 48 hours.", link: "novatrade-pro.co/withdraw", scam: true, signals: ["Large steady profits and a platform you cannot verify are warnings.", "A fee or tax to release your own money is a scam signal.", "Check any firm in your financial regulator's public register first."] },
    { l: "hard", ch: "SMS", from: "Maple Pharmacy", meta: "Existing message thread", time: "13:20", ic: "heart", title: "Your prescription is ready", body: "Your prescription is ready to collect at Maple Pharmacy, open until 8pm. Please bring photo ID. No payment is needed by text.", link: "", scam: false, signals: ["It asks for no payment, code or personal details.", "It has no link and arrives in a thread you already have.", "It matches a prescription you actually ordered."] },
    { l: "hard", t: "qr-code", ch: "Email", from: "IT Security", meta: "security@company-it-verify.co", time: "09:50", ic: "qr", title: "Re-verify your work login", body: "Our security system needs you to scan the QR code below with your phone by Friday to re-verify your login.", link: "[QR code image] leads to mfa-verify-login.co/scan", scam: true, signals: ["A QR code in an unexpected email can hide a fake sign-in page.", "The email address is not your company's real domain.", "Images in emails are used so filters cannot read the link."] },
    { l: "hard", ch: "Email", from: "Streamly", meta: "no-reply@streamly.com", time: "22:05", ic: "lock", title: "Reset your password", body: "You asked to reset your password a minute ago. Use the link below to choose a new one. If this was not you, ignore this email.", link: "streamly.com/reset", scam: false, signals: ["It follows a reset you just asked for.", "The link is on the service's own domain and asks for no card details.", "It tells you to ignore it if you did not make the request."] },
    { l: "hard", t: "fake-apps-malware", ch: "SMS", from: "Northline Update", meta: "Unknown sender", time: "08:15", ic: "bug", title: "Your banking app is out of date", body: "Install the new version of the Northline app now to keep your account active. Download it here.", link: "northline-app-update.co/download.apk", scam: true, signals: ["Apps should only be installed from your device's official store.", "A file download from a text message can carry malware.", "Pressure to keep your account active is a way to rush you."] },
    { l: "hard", t: "ai-voice-deepfake", ch: "SMS", from: "Mum (new number)", meta: "Voice message, 0:14, transcript", time: "23:40", ic: "waveform", title: "Voice message from Mum", body: "Transcript: \"It's me. I've had an accident and I need money right now. Please send it and don't tell Dad.\"", link: "", scam: true, signals: ["Voices can be cloned from a few seconds of audio.", "An emergency plus a demand for secrecy is the key warning sign.", "Hang up and call your mother on the number you already have."] },
    { l: "hard", ch: "SMS", from: "Northline Bank", meta: "Verified sender thread", time: "03:12", ic: "building", title: "Card payment from abroad", body: "We noticed a $1,250 card payment from abroad. If this was not you, use the app to freeze your card or call the number on the back of your card.", link: "", scam: false, signals: ["It asks for no code, password or payment.", "It has no link and points you to the app or the number on your card.", "It arrives in your bank's existing message thread."] },
    { l: "hard", t: "sextortion", ch: "Email", from: "Unknown sender", meta: "anon-2291@mail-secure.co", time: "05:30", ic: "eyeoff", title: "I recorded you", body: "I have a recording of you from your webcam. Your password is Summer2019!. Send $500 in crypto within 24 hours or I will send it to your contacts.", link: "", scam: true, signals: ["The password comes from an old data breach, not from hacking you.", "There is no real proof, only a threat and a countdown.", "Do not pay. Keep the email, block the sender and report it."] },
    { l: "hard", t: "sim-swap", ch: "SMS", from: "MobileOne Care", meta: "Unknown sender", time: "12:33", ic: "sim", title: "Verify your account to keep your number", body: "To avoid your number being deactivated, reply with your date of birth, home address and the last 4 digits of your ID.", link: "", scam: true, signals: ["Your carrier already holds these details and would not text for them.", "Those details are what criminals need to pass identity checks and move your number.", "Contact your carrier through its official app or store instead."] },
    { l: "hard", t: "recovery-scam", ch: "Email", from: "Digital Asset Recovery", meta: "cases@asset-recovery-desk.co", time: "15:55", ic: "undo", title: "We traced your lost funds", body: "We located the money you lost to fraud and can return it. A $1,500 processing fee is needed first. Recovery is guaranteed.", link: "", scam: true, signals: ["Someone contacting you out of the blue to recover lost money is a red flag.", "A fee paid first and a guaranteed result are scam signs.", "Real recovery goes through your bank and the police, never an upfront fee."] }
  );
  var SIM_LEVELS = [
    { id: "easy", name: "Easy", ic: "shieldcheck", c: "var(--green)", desc: "Clear signs, everyday messages." },
    { id: "hard", name: "Hard", ic: "bolt", c: "var(--red)", desc: "Convincing look-alikes and real messages that look suspicious." }
  ];
  function simulation() {
    return pageHero("Practice lab / Scenario simulation", "Choose Your Response", "Enter a safe training environment. Examine realistic but fictional messages, make a decision, and reveal the signals you may have missed.", "simulation", "theme-sim", practiceTabs("sim")) +
      '<section class="section"><div class="wrap"><div class="sim-shell"><div class="sim-chrome"><span></span><span></span><span></span><em>' + icon("lock") + ' Training mode: nothing here is real</em><b>' + icon("play") + ' SIM</b></div><div class="sim-body" id="sim-stage"></div></div></div></section>';
  }

  /* ---------------- IF SCAMMED ---------------- */
  function ifScammed() {
    var steps = [
      ["Stop all contact and payments", "Do not reply, pay another fee, or follow new instructions, even if you are promised a refund.", "hand", 0],
      ["Call your bank or card provider", "Ask them to freeze or recall payments and replace any card. Speed makes a real difference with transfers.", "phone", 0],
      ["Secure your accounts", "Change passwords from a clean device, start with email, turn on multi-factor authentication, and sign out other devices.", "key", 1],
      ["Keep the evidence", "Save messages, phone numbers, account details, receipts, and screenshots before they disappear.", "clipboard", 1],
      ["Report it", "Tell the platform involved, the police if money was lost, and your national fraud or cybercrime agency.", "flag", 2],
      ["Watch for follow-ups and get support", "Victims are often targeted again, especially by fake recovery offers. Talk to someone you trust. It is not your fault.", "heart", 2]
    ];
    var phases = [["Right now", "First hour", "siren", "p-red"], ["Today", "Next 24 hours", "shield", "p-amber"], ["Next few days", "Recovery", "lifebuoy", "p-cyan"]];
    var n = 0;
    var timeline = phases.map(function (p, pi) {
      var items = steps.filter(function (s) { return s[3] === pi; }).map(function (s) {
        n++;
        return '<li class="step" data-rv><span class="st-n">' + n + '</span><span class="st-ic">' + icon(s[2]) + '</span><div><h3>' + s[0] + "</h3><p>" + s[1] + "</p></div></li>";
      }).join("");
      return '<section class="phase ' + p[3] + '"><header><span class="ph-ic">' + icon(p[2]) + "</span><div><small>" + p[1] + "</small><h2>" + p[0] + "</h2></div></header><ol>" + items + "</ol></section>";
    }).join("");
    var remember = [["heart", "It is not your fault", "Scammers are professionals who deceive careful people every day. Reaching out for help is the right move."], ["ban", "Never pay to get money back", "Anyone who asks for an upfront fee to recover lost money is almost certainly running a second scam."], ["phone", "Use numbers you trust", "Call the number on your card, your bill, or an official website, never one given in a suspicious message."]]
      .map(function (r) { return "<li>" + icon(r[0]) + "<div><strong>" + r[1] + "</strong><span>" + r[2] + "</span></div></li>"; }).join("");
    var evidence = ["Messages, emails and screenshots", "Phone numbers, usernames and links", "Payment receipts and account details", "Dates, times and amounts"].map(function (e) { return "<li>" + icon("check") + "<span>" + e + "</span></li>"; }).join("");
    return (
      pageHero("Response protocol", "If You Were Scammed", "Acting quickly limits the damage. Work through these steps in order, then open the specific scam profile for tailored advice.", "scammed", "theme-sos",
        '<div class="sos"><span class="siren">' + icon("siren") + "</span><div><strong>Act fast, stay calm.</strong><span>The first hour matters most, but it is never too late to take these steps.</span></div></div>") +
      '<section class="section"><div class="wrap"><div class="sos-layout"><div class="timeline">' + timeline + '</div><aside class="sos-side"><div class="remember"><h2>' + icon("shieldalert") + "Remember</h2><ul>" + remember + '</ul></div><div class="gather"><h2>' + icon("clipboard") + "Gather before you report</h2><ul>" + evidence + '</ul></div></aside></div>' +
      '<div class="btn-row" style="margin-top:32px"><a class="btn solid" href="#scam-categories">Browse scam profiles ' + icon("arrow") + '</a><a class="btn" href="#warning-signs">Review warning signs</a></div></div></section>'
    );
  }

  window.Pages = { home: home, categories: categories, detail: detail, warning: warning, tips: tips, quiz: quiz, simulation: simulation, ifScammed: ifScammed, QUIZ: QUIZ, LEVELS: LEVELS, SIM_LEVELS: SIM_LEVELS, SIM: SIM, TIP_TOTAL: TIP_TOTAL, cardHTML: cardHTML };
})();
