// Builds the pages from data.js. You normally never need to edit this file.
(function () {
  var S = window.SITE;
  var CATS = window.CATEGORIES;
  var PRODUCTS = window.PRODUCTS;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function qs(name) {
    try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; }
  }
  function wa(msg) {
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  function base() {
    if (/^https?:$/.test(location.protocol)) return location.origin;
    return String(S.url).replace(/\/$/, "");
  }
  function productHref(p) { return "product.html?slug=" + encodeURIComponent(p.slug); }
  function categoryHref(c) { return "products.html?cat=" + encodeURIComponent(c.slug); }
  function generalLink() {
    return wa("Hi " + S.name + ", I'd like to enquire about your furniture.");
  }
  function enquiryLink(p) {
    return wa('Hi ' + S.name + ', I\'m interested in "' + p.name + '".\n' + base() + "/" + productHref(p) + "\nCould you share the price and details?");
  }
  function price(p) {
    return p.price ? "₹" + p.price.toLocaleString("en-IN") : "Price on enquiry";
  }
  function getCategory(slug) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].slug === slug) return CATS[i];
    return null;
  }
  function getProduct(slug) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].slug === slug) return PRODUCTS[i];
    return null;
  }

  // ── Shared pieces ──────────────────────────────────────────
  var NAV = [
    { href: "products.html", label: "Collection" },
    { href: "about.html", label: "About" },
    { href: "contact.html", label: "Visit Us" }
  ];

  function header() {
    var desktop = NAV.map(function (l) {
      return '<a href="' + l.href + '" class="text-wood-dark/80 hover:text-wood">' + l.label + "</a>";
    }).join("");
    var mobile = NAV.map(function (l) {
      return '<a href="' + l.href + '" class="block rounded-md px-3 py-2 text-sm text-wood-dark hover:bg-sand">' + l.label + "</a>";
    }).join("");
    return (
      '<header class="sticky top-0 z-40 border-b border-wood/10 bg-background/90 backdrop-blur">' +
      '<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">' +
      '<a href="index.html" class="font-serif text-2xl font-bold tracking-wide text-wood-dark">' + esc(S.name) + "</a>" +
      '<nav class="hidden items-center gap-8 text-sm font-medium md:flex">' + desktop +
      '<a href="' + esc(generalLink()) + '" target="_blank" rel="noopener noreferrer" class="rounded-full bg-[#25D366] px-4 py-2 font-semibold text-white hover:brightness-95">WhatsApp Us</a></nav>' +
      '<details class="relative md:hidden">' +
      '<summary class="cursor-pointer list-none rounded-md border border-wood/20 px-3 py-1.5 text-sm font-medium text-wood-dark">Menu</summary>' +
      '<div class="absolute right-0 mt-2 w-48 rounded-lg border border-wood/10 bg-background p-2 shadow-lg">' + mobile + "</div>" +
      "</details></div></header>"
    );
  }

  function footer() {
    var cats = CATS.map(function (c) {
      return '<li><a href="' + categoryHref(c) + '" class="text-sand/80 hover:text-white">' + esc(c.name) + "</a></li>";
    }).join("");
    return (
      '<footer class="mt-20 bg-wood-dark text-sand">' +
      '<div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">' +
      "<div>" +
      '<p class="font-serif text-2xl font-bold">' + esc(S.name) + "</p>" +
      '<p class="mt-2 text-sm text-sand/80">' + esc(S.tagline) + ". " + esc(S.experienceYears) + " years of crafting furniture for Kerala homes.</p>" +
      "</div>" +
      "<div>" +
      '<p class="text-sm font-semibold uppercase tracking-wider text-gold">Collection</p>' +
      '<ul class="mt-3 space-y-2 text-sm">' + cats + "</ul>" +
      "</div>" +
      "<div>" +
      '<p class="text-sm font-semibold uppercase tracking-wider text-gold">Visit the showroom</p>' +
      '<p class="mt-3 text-sm text-sand/80">' + esc(S.address) + "</p>" +
      '<p class="mt-2 text-sm text-sand/80">' + esc(S.hours) + "</p>" +
      '<p class="mt-2 text-sm text-sand/80">' + esc(S.phoneDisplay) + "</p>" +
      "</div></div>" +
      '<div class="border-t border-white/10 py-4 text-center text-xs text-sand/60">© ' + esc(S.name) + ". All rights reserved.</div>" +
      "</footer>"
    );
  }

  function floatButton() {
    return (
      '<a href="' + esc(generalLink()) + '" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" ' +
      'class="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105">' +
      '<svg viewBox="0 0 32 32" class="h-8 w-8 fill-current" aria-hidden="true"><path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.18 1.6 6L4 29l8.17-1.57a12 12 0 0 0 3.87.63h.01C22.7 28.06 28 22.66 28 16.03 28 9.4 22.68 3 16.04 3Zm0 22.03c-1.2 0-2.37-.32-3.4-.93l-.24-.15-4.85.93.96-4.73-.16-.25a9.97 9.97 0 0 1-1.52-5.3c0-5.5 4.49-9.98 10-9.98 5.52 0 9.95 4.48 9.95 10 0 5.5-4.45 10.41-9.74 10.41Zm5.47-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>' +
      "</a>"
    );
  }

  function photo(src, alt) {
    if (!src) {
      return (
        '<div role="img" aria-label="' + esc(alt) + '" class="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#c89b6d] via-[#a87647] to-[#6b3f21]">' +
        '<span class="px-4 text-center font-serif text-sm text-white/80">Photo coming soon</span></div>'
      );
    }
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" class="h-full w-full object-cover">';
  }

  function card(p) {
    return (
      '<div class="group overflow-hidden rounded-xl border border-wood/10 bg-white shadow-sm transition hover:shadow-md">' +
      '<a href="' + productHref(p) + '" class="block">' +
      '<div class="photo-box relative overflow-hidden">' + photo(p.images && p.images[0], p.name) + "</div>" +
      '<div class="p-4">' +
      '<h3 class="font-serif text-lg font-semibold text-wood-dark">' + esc(p.name) + "</h3>" +
      '<p class="mt-1 text-sm text-foreground/60">' + esc(p.material) + "</p>" +
      '<p class="mt-2 text-sm font-semibold text-wood">' + esc(price(p)) + "</p>" +
      "</div></a>" +
      '<div class="px-4 pb-4">' +
      '<a href="' + esc(enquiryLink(p)) + '" target="_blank" rel="noopener noreferrer" class="block rounded-full border border-[#25D366] py-2 text-center text-sm font-semibold text-[#128C4A] hover:bg-[#25D366] hover:text-white">Enquire on WhatsApp</a>' +
      "</div></div>"
    );
  }

  function grid(list, cols) {
    return '<div class="' + cols + '">' + list.map(card).join("") + "</div>";
  }

  // ── Pages ──────────────────────────────────────────────────
  function home() {
    var catBox = document.getElementById("categories");
    if (catBox) {
      catBox.innerHTML = CATS.map(function (c) {
        return (
          '<a href="' + categoryHref(c) + '" class="rounded-xl border border-wood/10 bg-white p-6 transition hover:border-wood/30 hover:shadow-md">' +
          '<h3 class="font-serif text-xl font-semibold text-wood-dark">' + esc(c.name) + "</h3>" +
          '<p class="mt-1 text-sm text-foreground/60">' + esc(c.blurb) + "</p>" +
          '<span class="mt-4 inline-block text-sm font-semibold text-wood">Browse →</span></a>'
        );
      }).join("");
    }
    var featBox = document.getElementById("featured");
    if (featBox) {
      var feat = PRODUCTS.filter(function (p) { return p.featured; });
      featBox.innerHTML = feat.map(card).join("");
    }
  }

  function products() {
    var slug = qs("cat");
    var cat = slug ? getCategory(slug) : null;
    var list = cat ? PRODUCTS.filter(function (p) { return p.category === cat.slug; }) : PRODUCTS;

    var chips = ['<a href="products.html" class="rounded-full border border-wood/20 px-4 py-1.5 text-sm font-medium text-wood-dark hover:bg-sand' + (cat ? "" : " bg-sand") + '">All</a>']
      .concat(CATS.map(function (c) {
        var active = cat && cat.slug === c.slug ? " bg-sand" : "";
        return '<a href="' + categoryHref(c) + '" class="rounded-full border border-wood/20 px-4 py-1.5 text-sm font-medium text-wood-dark hover:bg-sand' + active + '">' + esc(c.name) + "</a>";
      })).join("");

    var title = cat ? cat.name : "Our collection";
    var blurb = cat ? '<p class="mt-2 text-foreground/70">' + esc(cat.blurb) + "</p>" : "";
    var body = list.length
      ? '<div class="mt-8">' + grid(list, "grid gap-6 sm:grid-cols-2 lg:grid-cols-3") + "</div>"
      : '<p class="mt-10 text-foreground/60">New pieces coming soon. Message us on WhatsApp.</p>';

    document.title = (cat ? cat.name : "Collection") + " | " + S.name;
    document.getElementById("app").innerHTML =
      '<div class="mx-auto max-w-6xl px-4 py-12">' +
      '<h1 class="font-serif text-4xl font-bold text-wood-dark">' + esc(title) + "</h1>" + blurb +
      '<div class="mt-6 flex flex-wrap gap-2">' + chips + "</div>" + body + "</div>";
  }

  function product() {
    var p = getProduct(qs("slug") || "");
    var app = document.getElementById("app");
    if (!p) {
      document.title = "Product not found | " + S.name;
      app.innerHTML =
        '<div class="mx-auto max-w-6xl px-4 py-12 text-center">' +
        '<h1 class="font-serif text-3xl font-bold text-wood-dark">Product not found</h1>' +
        '<p class="mt-3 text-foreground/70">It may have been removed.</p>' +
        '<a href="products.html" class="mt-6 inline-block rounded-full bg-wood px-6 py-3 font-semibold text-white hover:bg-wood-dark">See the collection</a></div>';
      return;
    }
    var cat = getCategory(p.category);
    document.title = p.name + " | " + S.name;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.description);

    var imgs = p.images && p.images.length ? p.images : [null];
    var gallery = imgs.map(function (src, i) {
      return '<div class="photo-box relative overflow-hidden rounded-xl">' + photo(src, p.name + " photo " + (i + 1)) + "</div>";
    }).join("");

    var related = PRODUCTS.filter(function (x) { return x.category === p.category && x.slug !== p.slug; }).slice(0, 3);

    var rows =
      '<div class="flex justify-between gap-4 p-3"><dt class="text-foreground/60">Material</dt><dd class="text-right font-medium">' + esc(p.material) + "</dd></div>" +
      (p.dimensions ? '<div class="flex justify-between gap-4 p-3"><dt class="text-foreground/60">Size</dt><dd class="text-right font-medium">' + esc(p.dimensions) + "</dd></div>" : "") +
      '<div class="flex justify-between gap-4 p-3"><dt class="text-foreground/60">Custom size</dt><dd class="text-right font-medium">Available on order</dd></div>';

    app.innerHTML =
      '<div class="mx-auto max-w-6xl px-4 py-12">' +
      '<nav class="text-sm text-foreground/60"><a href="products.html" class="hover:underline">Collection</a>' +
      (cat ? " / " + '<a href="' + categoryHref(cat) + '" class="hover:underline">' + esc(cat.name) + "</a>" : "") + "</nav>" +
      '<div class="mt-6 grid gap-10 md:grid-cols-2">' +
      '<div class="space-y-4">' + gallery + "</div>" +
      "<div>" +
      '<h1 class="font-serif text-3xl font-bold text-wood-dark md:text-4xl">' + esc(p.name) + "</h1>" +
      '<p class="mt-3 text-2xl font-semibold text-wood">' + esc(price(p)) + "</p>" +
      '<p class="mt-5 leading-relaxed text-foreground/80">' + esc(p.description) + "</p>" +
      '<dl class="mt-6 divide-y divide-wood/10 rounded-xl border border-wood/10 bg-white text-sm">' + rows + "</dl>" +
      '<a href="' + esc(enquiryLink(p)) + '" target="_blank" rel="noopener noreferrer" class="mt-8 block rounded-full bg-[#25D366] py-4 text-center text-lg font-semibold text-white hover:brightness-95">Enquire on WhatsApp</a>' +
      '<p class="mt-3 text-center text-xs text-foreground/50">Opens WhatsApp with this product already in the message.</p>' +
      "</div></div>" +
      (related.length
        ? '<section class="mt-16"><h2 class="font-serif text-2xl font-bold text-wood-dark">More like this</h2><div class="mt-6">' +
          grid(related, "grid gap-6 sm:grid-cols-2 lg:grid-cols-3") + "</div></section>"
        : "") +
      "</div>";
  }

  function contact() {
    var map = document.getElementById("map");
    if (map && S.mapEmbedUrl) {
      map.innerHTML = '<iframe src="' + esc(S.mapEmbedUrl) + '" title="' + esc(S.name) + ' location" class="h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
  }

  // ── Boot ───────────────────────────────────────────────────
  // Square photo frames so tall pieces (wardrobes, swings) are not cropped.
  var st = document.createElement("style");
  st.textContent = ".photo-box{aspect-ratio:1/1}";
  document.head.appendChild(st);

  document.getElementById("site-header").innerHTML = header();
  document.getElementById("site-footer").innerHTML = footer();
  var fl = document.createElement("div");
  fl.innerHTML = floatButton();
  document.body.appendChild(fl.firstChild);

  var page = document.body.getAttribute("data-page");
  if (page === "home") home();
  else if (page === "products") products();
  else if (page === "product") product();
  else if (page === "contact") contact();

  // Fill any text/link marked in the HTML with a data-site / data-wa / data-tel / data-maplink attribute
  Array.prototype.forEach.call(document.querySelectorAll("[data-site]"), function (el) {
    var v = S[el.getAttribute("data-site")];
    if (v != null) el.textContent = v;
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-wa]"), function (el) {
    el.setAttribute("href", generalLink());
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-tel]"), function (el) {
    el.setAttribute("href", "tel:+" + S.whatsapp);
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-maplink]"), function (el) {
    el.setAttribute("href", S.mapLinkUrl);
  });
})();
