/* Router, navigation, filters, safety-tips checklist, quiz and simulation behaviour. */
(function () {
  var view = document.getElementById("view");
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("nav-toggle");
  var SCAMS = window.SCAMS;
  var current = null;
  var firstRender = true;

  var ROUTES = {
    "home": { nav: "home", html: Pages.home },
    "scam-categories": { nav: "scam-categories", html: Pages.categories, after: initFilters },
    "warning-signs": { nav: "warning-signs", html: Pages.warning },
    "safety-tips": { nav: "safety-tips", html: Pages.tips, after: initTips },
    "quiz": { nav: "quiz", html: Pages.quiz, after: initQuiz },
    "simulation": { nav: "simulation", html: Pages.simulation, after: initSim },
    "if-scammed": { nav: "if-scammed", html: Pages.ifScammed }
  };

  function resolve(hash) {
    var key = (hash || "").replace(/^#/, "") || "home";
    if (ROUTES[key]) return { key: key, route: ROUTES[key] };
    if (key.indexOf("scam-") === 0) {
      var id = key.slice(5);
      var html = Pages.detail(id);
      if (html) return { key: key, route: { nav: "scam-categories", html: function () { return html; } } };
    }
    return { key: "home", route: ROUTES.home, redirect: true };
  }

  function setNav(active) {
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
      if (a.getAttribute("data-route") === active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function paint(r) {
    view.innerHTML = r.route.html();
    window.scrollTo(0, 0);
    setNav(r.route.nav);
    if (r.route.after) r.route.after();
    initReveal();
    view.classList.remove("leaving");
    view.classList.remove("entering");
    void view.offsetWidth;
    view.classList.add("entering");
    current = r.key;
  }

  function render() {
    var r = resolve(location.hash);
    if (r.redirect && location.hash) { try { history.replaceState(null, "", "#home"); } catch (e) {} }
    if (r.key === current) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (firstRender || reduce) { firstRender = false; paint(r); return; }
    view.classList.add("leaving");
    setTimeout(function () { paint(resolve(location.hash)); }, 160);
  }

  window.addEventListener("hashchange", render);

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* In-page jump links on detail pages (they keep the route hash unchanged) */
  document.addEventListener("click", function (e) {
    var j = e.target.closest && e.target.closest("[data-jump]");
    if (!j) return;
    e.preventDefault();
    var el = document.getElementById(j.getAttribute("data-jump"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- Scroll reveal (progressive: content stays visible without it) ---------- */
  function initReveal() {
    var els = view.querySelectorAll("[data-rv]");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!els.length || reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(els, function (el, i) {
      el.style.setProperty("--d", (i % 3) * 70 + "ms");
      el.classList.add("rv");
      io.observe(el);
    });
  }

  /* ---------- Frequency filters ---------- */
  function initFilters() {
    var chips = view.querySelectorAll(".chip");
    var cards = view.querySelectorAll(".card");
    var tiers = view.querySelectorAll(".tier");
    var label = document.getElementById("threat-count");
    var active = null;
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        active = active === f ? null : f;
        var shown = 0;
        Array.prototype.forEach.call(chips, function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-filter") === active ? "true" : "false"); });
        Array.prototype.forEach.call(cards, function (card) {
          var show = !active || card.getAttribute("data-freq") === active;
          card.hidden = !show;
          if (show) { shown++; card.classList.add("in"); }
        });
        Array.prototype.forEach.call(tiers, function (t) { t.hidden = !!active && t.getAttribute("data-tier") !== active; });
        label.textContent = shown + " of " + SCAMS.length + " threat profiles" + (active ? " / " + active.toLowerCase() : "");
      });
    });
  }

  /* ---------- Safety tips checklist ---------- */
  function initTips() {
    var items = view.querySelectorAll("[data-tip]");
    var num = document.getElementById("score-num");
    var ring = document.getElementById("score-ring");
    var lab = document.getElementById("score-label");
    var total = Pages.TIP_TOTAL;
    function update() {
      var n = view.querySelectorAll("[data-tip].is-done").length;
      num.textContent = n;
      ring.setAttribute("stroke-dasharray", (n / total) * 100 + " 100");
      lab.textContent = n === 0 ? "Tap \"I do this\" on the habits you already follow." : n < 4 ? "Getting started. Each habit you add closes another gap." : n < total ? "Well protected. A few more habits to go." : "Fortress mode. Keep these habits and review them regularly.";
    }
    Array.prototype.forEach.call(items, function (it) {
      var b = it.querySelector(".done");
      b.addEventListener("click", function () {
        var on = !it.classList.contains("is-done");
        it.classList.toggle("is-done", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
        b.querySelector("span").textContent = on ? "Done" : "I do this";
        update();
      });
    });
    update();
  }

  /* ---------- Quiz ---------- */
  function rankFor(score, total) {
    var p = score / total;
    return p === 1 ? ["Guardian", "Sharp instincts. You paused, verified, and kept control every time."] : p >= 0.6 ? ["Defender", "Solid judgement. Review the ones you missed and you are well prepared."] : ["Rookie", "Good start. Read the warning signs and try again, because the pattern gets easier to see."];
  }
  function ringSVG(pct) {
    return '<svg viewBox="0 0 120 120" class="big-ring" aria-hidden="true"><circle cx="60" cy="60" r="52" class="bg"/><circle cx="60" cy="60" r="52" class="fg" pathLength="100" stroke-dasharray="' + pct + ' 100"/></svg>';
  }
  function initQuiz() {
    var stage = document.getElementById("quiz-stage");
    var i = 0, score = 0;
    var letters = ["A", "B", "C"];
    var N = 0, deck = [], level = null;
    var results = [];
    function lvlName() {
      for (var k = 0; k < Pages.LEVELS.length; k++) if (Pages.LEVELS[k].id === level) return Pages.LEVELS[k].name;
      return "";
    }
    function shuffle(a) {
      for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = a[k]; a[k] = a[j]; a[j] = t; }
      return a;
    }
    function start(id) {
      level = id;
      deck = id === "mix" ? shuffle(Pages.QUIZ.slice()).slice(0, 15) : Pages.QUIZ.filter(function (q) { return q.l === id; });
      i = 0; score = 0; results = []; N = deck.length;
      show();
    }
    function picker() {
      stage.innerHTML =
        '<div class="console-top"><span>' + icon("target") + ' Choose your level</span><span class="score-chip">4 modes</span></div>' +
        '<div class="levels">' + Pages.LEVELS.map(function (L) {
          var n = L.id === "mix" ? Math.min(15, Pages.QUIZ.length) : Pages.QUIZ.filter(function (q) { return q.l === L.id; }).length;
          return '<button type="button" class="level" data-level="' + L.id + '" style="--t:' + L.c + '"><span class="lv-ic">' + icon(L.ic) + '</span><span class="lv-body"><strong>' + L.name + '</strong><small>' + L.desc + '</small></span><span class="lv-n">' + n + ' Qs</span></button>';
        }).join("") + "</div>";
      Array.prototype.forEach.call(stage.querySelectorAll("[data-level]"), function (b) {
        b.addEventListener("click", function () { start(b.getAttribute("data-level")); });
      });
    }
    function pips(cur) {
      var s = "";
      for (var k = 0; k < N; k++) s += '<i class="' + (k < results.length ? (results[k] ? "ok" : "no") : k === cur ? "cur" : "") + '">' + (k + 1) + "</i>";
      return '<div class="pips" aria-hidden="true">' + s + "</div>";
    }
    function show() {
      var Q = deck[i];
      stage.innerHTML =
        '<div class="console-top"><span>' + icon("brain") + ' Knowledge challenge / ' + lvlName() + '</span><span class="score-chip">Score ' + score + "</span></div>" +
        '<div class="stage-top"><span>Question ' + (i + 1) + " / " + N + "</span>" + pips(i) + "</div>" +
        '<div class="progress"><i style="width:' + ((i + 1) / N) * 100 + '%"></i></div>' +
        '<h2 class="q-text">' + Q.q + '</h2><div class="options">' +
        Q.o.map(function (o, k) { return '<button type="button" class="option" data-k="' + k + '"><span class="k">' + letters[k] + '</span><span class="o-t">' + o + '</span><span class="o-s"></span></button>'; }).join("") +
        '</div><div id="quiz-fb" aria-live="polite"></div>';
      Array.prototype.forEach.call(stage.querySelectorAll(".option"), function (b) {
        b.addEventListener("click", function () { answer(parseInt(b.getAttribute("data-k"), 10)); });
      });
    }
    function answer(k) {
      var Q = deck[i];
      var ok = k === Q.a;
      if (ok) score++;
      results.push(ok);
      Array.prototype.forEach.call(stage.querySelectorAll(".option"), function (b) {
        var n = parseInt(b.getAttribute("data-k"), 10);
        b.disabled = true;
        if (n === Q.a) { b.classList.add("right"); b.querySelector(".o-s").innerHTML = icon("check"); }
        else if (n === k) { b.classList.add("wrong"); b.querySelector(".o-s").innerHTML = icon("x"); }
        else b.classList.add("dim");
      });
      stage.querySelector(".score-chip").textContent = "Score " + score;
      stage.querySelector(".pips").outerHTML = pips(-1);
      var last = i === N - 1;
      document.getElementById("quiz-fb").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "no") + '"><strong>' + icon(ok ? "shieldcheck" : "shieldalert") + (ok ? "Correct" : "Not quite") + "</strong><p>" + Q.why + '</p></div>' +
        '<div class="btn-row" style="margin-top:18px"><button type="button" class="btn solid" id="quiz-next">' + (last ? "See results" : "Next question") + " " + icon("arrow") + "</button></div>";
      document.getElementById("quiz-next").addEventListener("click", function () { if (last) finish(); else { i++; show(); } });
      document.getElementById("quiz-next").focus();
    }
    function finish() {
      var r = rankFor(score, N);
      stage.innerHTML = '<div class="result"><div class="eyebrow" style="justify-content:center">Challenge complete / ' + lvlName() + '</div><div class="ring-wrap">' + ringSVG(score / N * 100) + '<div class="ring-in"><div class="big">' + score + " / " + N + '</div></div></div><div class="rank">' + icon("trophy") + "Rank: " + r[0] + '</div><p class="lede" style="margin:12px auto 24px">' + r[1] + '</p><div class="btn-row" style="justify-content:center"><button type="button" class="btn solid" id="quiz-again">Try again</button><button type="button" class="btn" id="quiz-levels">Change level</button><a class="btn" href="#simulation">Try the simulation</a><a class="btn ghost" href="#warning-signs">Review warning signs</a></div></div>';
      document.getElementById("quiz-again").addEventListener("click", function () { start(level); });
      document.getElementById("quiz-levels").addEventListener("click", picker);
    }
    picker();
  }

  /* ---------- Simulation ---------- */
  function initSim() {
    var stage = document.getElementById("sim-stage");
    var i = 0, score = 0;
    var N = 0, deck = [], level = null;
    function lvlName() {
      for (var k = 0; k < Pages.SIM_LEVELS.length; k++) if (Pages.SIM_LEVELS[k].id === level) return Pages.SIM_LEVELS[k].name;
      return "";
    }
    function start(id) {
      level = id;
      deck = Pages.SIM.filter(function (s) { return s.l === id; });
      for (var k = deck.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = deck[k]; deck[k] = deck[j]; deck[j] = t; }
      i = 0; score = 0; N = deck.length;
      show();
    }
    function picker() {
      stage.innerHTML =
        '<div class="eyebrow" style="margin-bottom:18px">Choose a difficulty</div>' +
        '<div class="levels">' + Pages.SIM_LEVELS.map(function (L) {
          var n = Pages.SIM.filter(function (s) { return s.l === L.id; }).length;
          return '<button type="button" class="level" data-level="' + L.id + '" style="--t:' + L.c + '"><span class="lv-ic">' + icon(L.ic) + '</span><span class="lv-body"><strong>' + L.name + '</strong><small>' + L.desc + '</small></span><span class="lv-n">' + n + ' scenarios</span></button>';
        }).join("") + "</div>";
      Array.prototype.forEach.call(stage.querySelectorAll("[data-level]"), function (b) {
        b.addEventListener("click", function () { start(b.getAttribute("data-level")); });
      });
    }
    function show() {
      var S = deck[i];
      stage.innerHTML =
        '<div class="sim-grid"><div class="sim-brief"><div class="eyebrow">Scenario ' + (i + 1) + " of " + N + " / " + lvlName() + '</div><div class="progress"><i style="width:' + ((i + 1) / N) * 100 + '%"></i></div><h2>Is this message safe?</h2>' +
        '<p class="sim-help">Read every detail: the sender, the wording, and any link. In a real situation, you can always pause before taking action.</p>' +
        '<div class="sim-actions"><button type="button" class="btn pick-safe" data-pick="safe">' + icon("check") + 'Looks genuine</button><button type="button" class="btn solid pick-scam" data-pick="scam">' + icon("flag") + 'Report as scam</button></div><div id="sim-fb" aria-live="polite"></div></div>' +
        '<div class="device"><div class="device-bar"><span class="ch">' + icon(S.ch === "SMS" ? "smartphone" : "mail") + S.ch + '</span><time>' + S.time + '</time></div><div class="msg" id="sim-msg"><div class="msg-head"><span class="av">' + icon(S.ic) + "</span><div><b>" + S.from + "</b><small>" + S.meta + "</small></div></div><h3>" + S.title + "</h3><p>" + S.body + "</p>" + (S.link ? '<code>' + icon("link") + S.link + "</code>" : "") + "</div></div></div>";
      Array.prototype.forEach.call(stage.querySelectorAll("[data-pick]"), function (b) {
        b.addEventListener("click", function () { pick(b.getAttribute("data-pick") === "scam"); });
      });
    }
    function typeLine(S) {
      if (!S.t) return "";
      for (var k = 0; k < SCAMS.length; k++) {
        if (SCAMS[k].id === S.t) return '<p class="sim-type">Scam type: <a href="#scam-' + S.t + '">' + SCAMS[k].name + "</a></p>";
      }
      return "";
    }
    function pick(saidScam) {
      var S = deck[i];
      var ok = saidScam === S.scam;
      if (ok) score++;
      var last = i === N - 1;
      Array.prototype.forEach.call(stage.querySelectorAll("[data-pick]"), function (b) { b.disabled = true; });
      var m = document.getElementById("sim-msg");
      m.classList.add(S.scam ? "is-scam" : "is-safe");
      m.insertAdjacentHTML("beforeend", '<div class="verdict ' + (S.scam ? "bad" : "good") + '">' + icon(S.scam ? "alert" : "shieldcheck") + (S.scam ? "Likely scam" : "Most likely genuine") + "</div>");
      document.getElementById("sim-fb").innerHTML =
        '<div class="feedback reveal ' + (ok ? "ok" : "no") + '" style="margin-top:22px"><strong>' + icon(ok ? "shieldcheck" : "shieldalert") + (ok ? "Correct" : "Not this time") + ": this message is " + (S.scam ? "a likely scam" : "most likely genuine") + "</strong><ul>" + S.signals.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" + typeLine(S) + "</div>" +
        '<div class="btn-row" style="margin-top:18px"><button type="button" class="btn solid" id="sim-next">' + (last ? "See results" : "Next scenario") + " " + icon("arrow") + "</button></div>";
      var n = document.getElementById("sim-next");
      n.addEventListener("click", function () { if (last) finish(); else { i++; show(); } });
      n.focus();
    }
    function finish() {
      stage.innerHTML = '<div class="result"><div class="eyebrow" style="justify-content:center">Simulation complete</div><div class="ring-wrap">' + ringSVG(score / N * 100) + '<div class="ring-in"><div class="big">' + score + " / " + N + '</div></div></div><p class="lede" style="margin:12px auto 24px">You judged ' + score + " of " + N + ' messages correctly. Real messages rarely announce themselves, so keep using the 10-second check.</p><div class="btn-row" style="justify-content:center"><button type="button" class="btn solid" id="sim-again">Run again</button><button type="button" class="btn" id="sim-levels">Change level</button><a class="btn" href="#quiz">Take the quiz</a><a class="btn ghost" href="#scam-categories">Browse scam profiles</a></div></div>';
      document.getElementById("sim-again").addEventListener("click", function () { start(level); });
      document.getElementById("sim-levels").addEventListener("click", picker);
    }
    picker();
  }

  render();
})();
