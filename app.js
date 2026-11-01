'use strict';
/* ===== Config ===== */
const KEY = 'atlas_drive_v1', ADMIN_PIN = '1234';
const RATES = { USD: 1, EUR: 0.92, MAD: 10 }, SYM = { USD: '$', EUR: '€', MAD: 'MAD ' };
const CITIES = { Agadir: [32, 70], Marrakech: [52, 47], Casablanca: [40, 24] };
const CATS = ['SUV', 'Sedan', 'Economy'];
const IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;
const SEED = [
  { id: 1, name: 'Dacia Duster', cat: 'SUV', price: 45, seats: 5, trans: 'Manual', fuel: 'Diesel', city: 'Agadir', avail: true, img: IMG('photo-1533473359331-0135ef1b58bf') },
  { id: 2, name: 'Hyundai Tucson', cat: 'SUV', price: 70, seats: 5, trans: 'Automatic', fuel: 'Petrol', city: 'Marrakech', avail: true, img: IMG('photo-1519641471654-76ce0107ad1b') },
  { id: 3, name: 'Mercedes C-Class', cat: 'Sedan', price: 110, seats: 5, trans: 'Automatic', fuel: 'Diesel', city: 'Casablanca', avail: true, img: IMG('photo-1618843479313-40f8afb4b4d8') },
  { id: 4, name: 'Peugeot 508', cat: 'Sedan', price: 85, seats: 5, trans: 'Automatic', fuel: 'Diesel', city: 'Casablanca', avail: true, img: IMG('photo-1494976388531-d1058494cdd8') },
  { id: 5, name: 'Renault Clio', cat: 'Economy', price: 25, seats: 5, trans: 'Manual', fuel: 'Petrol', city: 'Agadir', avail: true, img: IMG('photo-1541899481282-d53bffe3c35d') },
  { id: 6, name: 'Fiat 500', cat: 'Economy', price: 30, seats: 4, trans: 'Manual', fuel: 'Petrol', city: 'Marrakech', avail: true, img: IMG('photo-1568605117036-5fe5e7bab0b7') }
];

/* ===== i18n ===== */
const I18N = {
  en: { home: 'Cars', track: 'Track booking', admin: 'Admin', hero: 'Drive Morocco your way', heroSub: 'Book a car in Agadir, Marrakech or Casablanca in under a minute.', search: 'Search car name', allCat: 'All categories', allCity: 'All cities', reset: 'Reset', locations: 'Our locations', perDay: '/ day', book: 'Book now', unavailable: 'Unavailable', seats: 'seats', pickup: 'Pick-up date', dropoff: 'Drop-off date', pLoc: 'Pick-up city', dLoc: 'Drop-off city', name: 'Full name', email: 'Email', phone: 'Phone', confirm: 'Confirm booking', total: 'Total', days: 'days', bookTitle: 'Book', done: 'Booking received!', saveId: 'Save your booking ID:', trackTitle: 'Track your booking', check: 'Check', notFound: 'No booking found with this ID.', pending: 'Waiting for confirmation', confirmed: 'Confirmed', cancelled: 'Cancelled', noCars: 'No cars match your filters.', errDates: 'Choose valid dates: drop-off must be after pick-up, and pick-up cannot be in the past.', errTaken: 'This car is already booked on those dates.', errFields: 'Please fill in all fields with valid details.', pin: 'Enter admin PIN', badPin: 'Wrong PIN', revenue: 'Revenue (confirmed)', active: 'Active rentals', pend: 'Pending', fleet: 'Manage cars', bookings: 'Manage bookings', calendar: 'Calendar', add: 'Add car', remove: 'Remove', confirmBtn: 'Confirm', cancelBtn: 'Cancel', category: 'Category', price: 'Price/day (USD)', city: 'City', imgUrl: 'Image URL (optional)', status: 'Status', noBook: 'No bookings yet.', logout: 'Log out', car: 'Car', customer: 'Customer', dates: 'Dates', toggle: 'Toggle', saved: 'Saved', Manual: 'Manual', Automatic: 'Automatic', Diesel: 'Diesel', Petrol: 'Petrol', SUV: 'SUV', Sedan: 'Sedan', Economy: 'Economy' },
  fr: { home: 'Voitures', track: 'Suivre ma réservation', admin: 'Admin', hero: 'Roulez au Maroc à votre façon', heroSub: 'Réservez une voiture à Agadir, Marrakech ou Casablanca en moins d’une minute.', search: 'Rechercher une voiture', allCat: 'Toutes catégories', allCity: 'Toutes villes', reset: 'Réinitialiser', locations: 'Nos agences', perDay: '/ jour', book: 'Réserver', unavailable: 'Indisponible', seats: 'places', pickup: 'Date de départ', dropoff: 'Date de retour', pLoc: 'Ville de départ', dLoc: 'Ville de retour', name: 'Nom complet', email: 'E-mail', phone: 'Téléphone', confirm: 'Confirmer la réservation', total: 'Total', days: 'jours', bookTitle: 'Réserver', done: 'Réservation reçue !', saveId: 'Conservez votre numéro :', trackTitle: 'Suivre votre réservation', check: 'Vérifier', notFound: 'Aucune réservation avec ce numéro.', pending: 'En attente de confirmation', confirmed: 'Confirmée', cancelled: 'Annulée', noCars: 'Aucune voiture ne correspond.', errDates: 'Dates invalides : le retour doit suivre le départ et le départ ne peut pas être passé.', errTaken: 'Cette voiture est déjà réservée à ces dates.', errFields: 'Veuillez remplir tous les champs correctement.', pin: 'Code admin', badPin: 'Code incorrect', revenue: 'Revenu (confirmé)', active: 'Locations en cours', pend: 'En attente', fleet: 'Gérer les voitures', bookings: 'Gérer les réservations', calendar: 'Calendrier', add: 'Ajouter', remove: 'Supprimer', confirmBtn: 'Confirmer', cancelBtn: 'Annuler', category: 'Catégorie', price: 'Prix/jour (USD)', city: 'Ville', imgUrl: 'URL image (facultatif)', status: 'Statut', noBook: 'Aucune réservation.', logout: 'Déconnexion', car: 'Voiture', customer: 'Client', dates: 'Dates', toggle: 'Basculer', saved: 'Enregistré', Manual: 'Manuelle', Automatic: 'Automatique', Diesel: 'Diesel', Petrol: 'Essence', SUV: 'SUV', Sedan: 'Berline', Economy: 'Économique' },
  ar: { home: 'السيارات', track: 'تتبع الحجز', admin: 'الإدارة', hero: 'تجوّل في المغرب كما تحب', heroSub: 'احجز سيارة في أكادير أو مراكش أو الدار البيضاء في أقل من دقيقة.', search: 'ابحث عن سيارة', allCat: 'كل الفئات', allCity: 'كل المدن', reset: 'إعادة ضبط', locations: 'مواقعنا', perDay: '/ يوم', book: 'احجز الآن', unavailable: 'غير متاحة', seats: 'مقاعد', pickup: 'تاريخ الاستلام', dropoff: 'تاريخ الإرجاع', pLoc: 'مدينة الاستلام', dLoc: 'مدينة الإرجاع', name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', confirm: 'تأكيد الحجز', total: 'المجموع', days: 'أيام', bookTitle: 'حجز', done: 'تم استلام حجزك!', saveId: 'احتفظ برقم الحجز:', trackTitle: 'تتبع حجزك', check: 'تحقق', notFound: 'لا يوجد حجز بهذا الرقم.', pending: 'في انتظار التأكيد', confirmed: 'مؤكد', cancelled: 'ملغى', noCars: 'لا توجد سيارات مطابقة.', errDates: 'تواريخ غير صالحة: يجب أن يكون الإرجاع بعد الاستلام ولا يمكن أن يكون الاستلام في الماضي.', errTaken: 'هذه السيارة محجوزة في هذه التواريخ.', errFields: 'يرجى ملء جميع الحقول بشكل صحيح.', pin: 'رمز الإدارة', badPin: 'رمز خاطئ', revenue: 'الإيرادات (المؤكدة)', active: 'إيجارات جارية', pend: 'قيد الانتظار', fleet: 'إدارة السيارات', bookings: 'إدارة الحجوزات', calendar: 'التقويم', add: 'إضافة سيارة', remove: 'حذف', confirmBtn: 'تأكيد', cancelBtn: 'إلغاء', category: 'الفئة', price: 'السعر/يوم (دولار)', city: 'المدينة', imgUrl: 'رابط الصورة (اختياري)', status: 'الحالة', noBook: 'لا توجد حجوزات.', logout: 'خروج', car: 'السيارة', customer: 'العميل', dates: 'التواريخ', toggle: 'تبديل', saved: 'تم الحفظ', Manual: 'يدوي', Automatic: 'أوتوماتيك', Diesel: 'ديزل', Petrol: 'بنزين', SUV: 'دفع رباعي', Sedan: 'سيدان', Economy: 'اقتصادية' }
};

/* ===== State ===== */
const $ = s => document.querySelector(s);
let S = load(), adminOK = false, calMonth = new Date();
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && Array.isArray(s.cars)) return s; } catch (e) { /* corrupted: reset */ }
  return { cars: SEED, bookings: [], lang: 'en', cur: 'USD', accent: '#0f766e', nextCar: 7 };
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Storage full or blocked'); } }
const t = k => (I18N[S.lang] && I18N[S.lang][k]) || I18N.en[k] || k;
const money = usd => SYM[S.cur] + (usd * RATES[S.cur]).toFixed(S.cur === 'MAD' ? 0 : 2);
const esc = v => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = () => new Date().toISOString().slice(0, 10);
const nights = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);
function toast(m) { const el = $('#toast'); el.textContent = m; el.classList.remove('hidden'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.add('hidden'), 2500); }
const badge = s => `<span class="chip s-${s}">${t(s)}</span>`;

/* ===== Chrome: language, currency, accent, routing ===== */
function applyChrome() {
  document.documentElement.lang = S.lang;
  document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.style.setProperty('--accent', S.accent);
  $('#lang').value = S.lang; $('#cur').value = S.cur; $('#accent').value = S.accent;
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  const fc = $('#fcat'), fl = $('#floc'), cv = fc.value, lv = fl.value;
  fc.innerHTML = `<option value="">${t('allCat')}</option>` + CATS.map(c => `<option value="${c}">${t(c)}</option>`).join('');
  fl.innerHTML = `<option value="">${t('allCity')}</option>` + Object.keys(CITIES).map(c => `<option>${c}</option>`).join('');
  fc.value = cv; fl.value = lv;
}
function route() {
  const v = (location.hash.replace('#', '') || 'home');
  const view = ['home', 'track', 'admin'].includes(v) ? v : 'home';
  document.querySelectorAll('.view').forEach(e => e.classList.add('hidden'));
  $('#view-' + view).classList.remove('hidden');
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === view));
  if (view === 'admin') renderAdmin();
}
function renderAll() { applyChrome(); renderCars(); renderMap(); renderTrack(); if (!$('#view-admin').classList.contains('hidden')) renderAdmin(); }

/* ===== Catalog ===== */
function renderCars() {
  const q = $('#q').value.trim().toLowerCase(), c = $('#fcat').value, l = $('#floc').value;
  const list = S.cars.filter(x => (!q || x.name.toLowerCase().includes(q)) && (!c || x.cat === c) && (!l || x.city === l));
  $('#cars').innerHTML = list.length ? list.map(x => `
    <article class="card">
      <img src="${esc(x.img)}" alt="${esc(x.name)}" loading="lazy" onerror="this.style.visibility='hidden'">
      <div class="p-4 flex-1 flex flex-col gap-2">
        <div class="flex justify-between items-start gap-2"><h3 class="font-display font-bold text-lg">${esc(x.name)}</h3><span class="chip">${t(x.cat)}</span></div>
        <p class="text-sm text-stone-600"><i class="fa-solid fa-user-group"></i> ${x.seats} ${t('seats')} &nbsp; <i class="fa-solid fa-gears"></i> ${t(x.trans)} &nbsp; <i class="fa-solid fa-gas-pump"></i> ${t(x.fuel)}</p>
        <p class="text-sm text-stone-600"><i class="fa-solid fa-location-dot accent-text"></i> ${esc(x.city)}</p>
        <div class="flex justify-between items-center mt-auto pt-2">
          <p><span class="text-xl font-bold">${money(x.price)}</span> <span class="text-xs text-stone-500">${t('perDay')}</span></p>
          ${x.avail ? `<button class="btn" data-book="${x.id}">${t('book')}</button>` : `<span class="chip s-cancelled">${t('unavailable')}</span>`}
        </div>
      </div>
    </article>`).join('') : `<p class="col-span-full text-center text-stone-500 py-10">${t('noCars')}</p>`;
}
function renderMap() {
  $('#map').innerHTML = Object.entries(CITIES).map(([n, [x, y]]) =>
    `<button class="pin" style="left:${x}%;top:${y}%" data-city="${n}" aria-label="${n}"><i class="fa-solid fa-location-dot"></i>${n}</button>`).join('');
  $('#citylist').innerHTML = Object.keys(CITIES).map(n => {
    const k = S.cars.filter(c => c.city === n && c.avail).length;
    return `<button class="card w-full p-3 text-start" data-city="${n}"><b>${n}</b><br><span class="text-sm text-stone-500">${k} ${t('home').toLowerCase()}</span></button>`;
  }).join('');
}

/* ===== Booking ===== */
function openModal(title, html) { $('#m-title').textContent = title; $('#m-body').innerHTML = html; $('#modal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function closeModal() { $('#modal').classList.add('hidden'); document.body.style.overflow = ''; }
function openBooking(id) {
  const car = S.cars.find(c => c.id === id); if (!car || !car.avail) return;
  const cityOpts = sel => Object.keys(CITIES).map(c => `<option ${c === sel ? 'selected' : ''}>${c}</option>`).join('');
  openModal(`${t('bookTitle')} ${car.name}`, `
    <form id="bf" data-car="${car.id}" class="grid grid-cols-2 gap-3 text-sm" novalidate>
      <label>${t('pickup')}<input name="from" type="date" min="${today()}" class="ctl mt-1" required></label>
      <label>${t('dropoff')}<input name="to" type="date" min="${today()}" class="ctl mt-1" required></label>
      <label>${t('pLoc')}<select name="pl" class="ctl mt-1">${cityOpts(car.city)}</select></label>
      <label>${t('dLoc')}<select name="dl" class="ctl mt-1">${cityOpts(car.city)}</select></label>
      <label class="col-span-2">${t('name')}<input name="name" class="ctl mt-1" maxlength="60" required></label>
      <label>${t('email')}<input name="email" type="email" class="ctl mt-1" maxlength="80" required></label>
      <label>${t('phone')}<input name="phone" type="tel" class="ctl mt-1" maxlength="20" required></label>
      <p class="col-span-2 font-semibold">${t('total')}: <span id="bf-total">—</span></p>
      <p id="bf-err" class="col-span-2 text-red-600" role="alert"></p>
      <button class="btn col-span-2">${t('confirm')}</button>
    </form>`);
}
function bfTotal() {
  const f = $('#bf'); if (!f) return;
  const car = S.cars.find(c => c.id === +f.dataset.car), n = f.from.value && f.to.value ? nights(f.from.value, f.to.value) : 0;
  $('#bf-total').textContent = n > 0 ? `${money(n * car.price)} (${n} ${t('days')})` : '—';
}
function overlaps(carId, a, b) {
  return S.bookings.some(k => k.carId === carId && k.status !== 'cancelled' && a < k.to && b > k.from);
}
function submitBooking(f) {
  const car = S.cars.find(c => c.id === +f.dataset.car), err = $('#bf-err');
  const d = { from: f.from.value, to: f.to.value, name: f.name.value.trim(), email: f.email.value.trim(), phone: f.phone.value.trim() };
  if (!d.from || !d.to || d.from < today() || nights(d.from, d.to) < 1) { err.textContent = t('errDates'); return; }
  if (d.name.length < 2 || !/^\S+@\S+\.\S+$/.test(d.email) || d.phone.replace(/\D/g, '').length < 6) { err.textContent = t('errFields'); return; }
  if (overlaps(car.id, d.from, d.to)) { err.textContent = t('errTaken'); return; }
  let id; do { id = '#CR-' + (1000 + Math.floor(Math.random() * 9000)); } while (S.bookings.some(b => b.id === id));
  S.bookings.push({ id, carId: car.id, carName: car.name, ...d, pl: f.pl.value, dl: f.dl.value, total: nights(d.from, d.to) * car.price, status: 'pending', created: Date.now() });
  save(); renderAll();
  $('#m-title').textContent = t('done');
  $('#m-body').innerHTML = `<p>${t('saveId')}</p><p class="font-display text-3xl font-extrabold accent-text my-3">${id}</p><p class="mb-4">${badge('pending')}</p><a href="#track" class="btn inline-block" onclick="closeModal();$('#tid').value='${id}';renderTrack()">${t('track')}</a>`;
}

/* ===== Tracking ===== */
function renderTrack() {
  const raw = $('#tid').value.trim().toUpperCase().replace('#', ''), box = $('#tres');
  if (!raw) { box.innerHTML = ''; return; }
  const b = S.bookings.find(x => x.id.replace('#', '') === raw);
  box.innerHTML = b ? `<div class="card p-4 space-y-1"><div class="flex justify-between"><b class="font-display text-xl">${esc(b.id)}</b>${badge(b.status)}</div>
    <p>${esc(b.carName)}</p><p class="text-sm text-stone-600">${b.from} → ${b.to} (${nights(b.from, b.to)} ${t('days')})</p>
    <p class="text-sm text-stone-600">${esc(b.pl)} → ${esc(b.dl)}</p><p class="font-semibold">${t('total')}: ${money(b.total)}</p></div>`
    : `<p class="text-red-600">${t('notFound')}</p>`;
}

/* ===== Admin ===== */
function renderAdmin() {
  const box = $('#admin-body');
  if (!adminOK) {
    box.innerHTML = `<div class="max-w-sm mx-auto"><label class="block mb-2">${t('pin')}<input id="pin" type="password" class="ctl mt-1" inputmode="numeric"></label><button id="pinbtn" class="btn">OK</button></div>`; return;
  }
  const now = today(), conf = S.bookings.filter(b => b.status === 'confirmed');
  const rev = conf.reduce((s, b) => s + b.total, 0), act = conf.filter(b => b.from <= now && b.to >= now).length, pend = S.bookings.filter(b => b.status === 'pending').length;
  const stat = (l, v) => `<div class="card p-4"><p class="text-sm text-stone-500">${l}</p><p class="text-2xl font-bold">${v}</p></div>`;
  box.innerHTML = `
    <div class="flex justify-between items-center mb-4"><h2 class="font-display text-2xl font-bold">${t('admin')}</h2><button class="btn-ghost" id="logout">${t('logout')}</button></div>
    <div class="grid grid-cols-3 gap-3 mb-8">${stat(t('revenue'), money(rev))}${stat(t('active'), act)}${stat(t('pend'), pend)}</div>
    <h3 class="font-display text-xl font-bold mb-2">${t('bookings')}</h3>
    <div class="tablewrap mb-8"><table><thead><tr><th>ID</th><th>${t('car')}</th><th>${t('customer')}</th><th>${t('dates')}</th><th>${t('total')}</th><th>${t('status')}</th><th></th></tr></thead><tbody>
    ${S.bookings.length ? [...S.bookings].reverse().map(b => `<tr><td>${esc(b.id)}</td><td>${esc(b.carName)}</td><td>${esc(b.name)}<br><span class="text-xs text-stone-500">${esc(b.phone)}</span></td><td>${b.from}<br>${b.to}</td><td>${money(b.total)}</td><td>${badge(b.status)}</td>
      <td class="whitespace-nowrap"><button class="btn-ghost" data-bs="confirmed" data-id="${esc(b.id)}">${t('confirmBtn')}</button> <button class="btn-ghost btn-danger" data-bs="cancelled" data-id="${esc(b.id)}">${t('cancelBtn')}</button></td></tr>`).join('') : `<tr><td colspan="7" class="text-center text-stone-500 py-6">${t('noBook')}</td></tr>`}
    </tbody></table></div>
    <h3 class="font-display text-xl font-bold mb-2">${t('calendar')}</h3>${calendarHTML()}
    <h3 class="font-display text-xl font-bold mt-8 mb-2">${t('fleet')}</h3>
    <div class="tablewrap mb-4"><table><thead><tr><th>${t('car')}</th><th>${t('city')}</th><th>${t('price')}</th><th>${t('status')}</th><th></th></tr></thead><tbody>
    ${S.cars.map(c => `<tr><td>${esc(c.name)}<br><span class="text-xs text-stone-500">${t(c.cat)}</span></td><td>${esc(c.city)}</td>
      <td><input type="number" min="1" step="1" value="${c.price}" class="ctl" style="width:90px" data-price="${c.id}"></td>
      <td><button class="btn-ghost" data-avail="${c.id}">${c.avail ? t('active') : t('unavailable')} ⟲</button></td>
      <td><button class="btn-ghost btn-danger" data-del="${c.id}">${t('remove')}</button></td></tr>`).join('')}</tbody></table></div>
    <form id="addcar" class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
      <input name="name" class="ctl" placeholder="${t('car')}" required maxlength="50">
      <select name="cat" class="ctl">${CATS.map(c => `<option value="${c}">${t(c)}</option>`).join('')}</select>
      <select name="city" class="ctl">${Object.keys(CITIES).map(c => `<option>${c}</option>`).join('')}</select>
      <input name="price" type="number" min="1" class="ctl" placeholder="${t('price')}" required>
      <input name="seats" type="number" min="1" max="9" value="5" class="ctl" aria-label="${t('seats')}">
      <select name="trans" class="ctl"><option value="Manual">${t('Manual')}</option><option value="Automatic">${t('Automatic')}</option></select>
      <input name="img" class="ctl" placeholder="${t('imgUrl')}">
      <button class="btn">${t('add')}</button></form>`;
}
function calendarHTML() {
  const y = calMonth.getFullYear(), m = calMonth.getMonth(), first = new Date(y, m, 1).getDay(), dim = new Date(y, m + 1, 0).getDate();
  const title = calMonth.toLocaleDateString(S.lang, { month: 'long', year: 'numeric' });
  let cells = '<div style="border:0;background:none"></div>'.repeat(first);
  for (let d = 1; d <= dim; d++) {
    const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const n = S.bookings.filter(b => b.status !== 'cancelled' && b.from <= iso && b.to >= iso).length;
    cells += `<div class="${n ? 'has' : ''}">${d}${n ? `<br><i class="fa-solid fa-car"></i> ${n}` : ''}</div>`;
  }
  return `<div class="flex items-center justify-between mb-2"><button class="btn-ghost" data-cal="-1">‹</button><b>${title}</b><button class="btn-ghost" data-cal="1">›</button></div><div class="cal" dir="ltr">${cells}</div>`;
}

/* ===== Events ===== */
document.addEventListener('click', e => {
  const g = (a) => e.target.closest(`[${a}]`);
  let el;
  if ((el = g('data-book'))) openBooking(+el.dataset.book);
  else if ((el = g('data-city'))) { $('#floc').value = el.dataset.city; renderCars(); el.classList.add('on'); $('#cars').scrollIntoView({ behavior: 'smooth' }); }
  else if (e.target.id === 'm-close' || e.target.id === 'modal') closeModal();
  else if (e.target.id === 'tbtn') renderTrack();
  else if (e.target.id === 'reset') { $('#q').value = ''; $('#fcat').value = ''; $('#floc').value = ''; renderCars(); }
  else if (e.target.id === 'pinbtn') { if ($('#pin').value === ADMIN_PIN) { adminOK = true; renderAdmin(); } else toast(t('badPin')); }
  else if (e.target.id === 'logout') { adminOK = false; renderAdmin(); }
  else if ((el = g('data-bs'))) { const b = S.bookings.find(x => x.id === el.dataset.id); if (b) { b.status = el.dataset.bs; save(); renderAll(); toast(t('saved')); } }
  else if ((el = g('data-avail'))) { const c = S.cars.find(x => x.id === +el.dataset.avail); if (c) { c.avail = !c.avail; save(); renderAll(); } }
  else if ((el = g('data-del'))) { S.cars = S.cars.filter(x => x.id !== +el.dataset.del); save(); renderAll(); }
  else if ((el = g('data-cal'))) { calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + +el.dataset.cal, 1); renderAdmin(); }
});
document.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.id === 'bf') submitBooking(e.target);
  else if (e.target.id === 'addcar') {
    const f = e.target, p = parseFloat(f.price.value);
    if (!f.name.value.trim() || !(p > 0)) return toast(t('errFields'));
    S.cars.push({ id: S.nextCar++, name: f.name.value.trim(), cat: f.cat.value, price: p, seats: +f.seats.value || 5, trans: f.trans.value, fuel: 'Petrol', city: f.city.value, avail: true, img: f.img.value.trim() || IMG('photo-1494976388531-d1058494cdd8') });
    save(); renderAll(); toast(t('saved'));
  }
});
document.addEventListener('change', e => {
  if (e.target.id === 'bf' || e.target.closest('#bf')) bfTotal();
  if (e.target.dataset && e.target.dataset.price) { const c = S.cars.find(x => x.id === +e.target.dataset.price), v = parseFloat(e.target.value); if (c && v > 0) { c.price = v; save(); renderCars(); toast(t('saved')); } }
});
['q', 'fcat', 'floc'].forEach(id => $('#' + id).addEventListener('input', renderCars));
$('#tid').addEventListener('keydown', e => { if (e.key === 'Enter') renderTrack(); });
$('#lang').addEventListener('change', e => { S.lang = e.target.value; save(); renderAll(); });
$('#cur').addEventListener('change', e => { S.cur = e.target.value; save(); renderAll(); });
$('#accent').addEventListener('input', e => { S.accent = e.target.value; save(); document.documentElement.style.setProperty('--accent', S.accent); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.addEventListener('hashchange', route);
// Sync across tabs on the same browser
window.addEventListener('storage', e => { if (e.key === KEY) { S = load(); renderAll(); } });

/* ===== Init ===== */
$('#yr').textContent = new Date().getFullYear();
applyChrome(); renderCars(); renderMap(); route();
