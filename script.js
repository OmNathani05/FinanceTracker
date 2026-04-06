// category colors + emoji mapping — add new ones here if you add categories
const CAT_COLORS = {
  'Food & Dining': '#E8803A', 'Transport': '#3A8EE8', 'Shopping': '#9B5DE5',
  'Entertainment': '#F4A261', 'Healthcare': '#2CB67D', 'Utilities': '#5EAAA8',
  'Rent': '#E06C75', 'Travel': '#7B9E87', 'Education': '#C77DFF',
  'Salary': '#2A9D8F', 'Freelance': '#457B9D', 'Investment': '#F4D03F', 'Other': '#ADB5BD'
};
const CAT_EMOJIS = {
  'Food & Dining': '🍜', 'Transport': '🚗', 'Shopping': '🛍️', 'Entertainment': '🎬',
  'Healthcare': '💊', 'Utilities': '⚡', 'Rent': '🏠', 'Travel': '✈️',
  'Education': '📚', 'Salary': '💰', 'Freelance': '💻', 'Investment': '📈', 'Other': '📦'
};
const EXP_CATS = ['Food & Dining', 'Transport', 'Shopping', 'Entertainment', 'Healthcare', 'Utilities', 'Rent', 'Travel', 'Education', 'Other'];
const INC_CATS = ['Salary', 'Freelance', 'Investment', 'Other'];

// seed data — 60 transactions across 6 months, loaded once if localStorage is empty
const SEED = [
  { id: 1, date: '2025-10-03', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 85000 },
  { id: 2, date: '2025-10-05', desc: "Grocery — Nature's Basket", cat: 'Food & Dining', type: 'expense', amount: 3200 },
  { id: 3, date: '2025-10-08', desc: 'Uber rides', cat: 'Transport', type: 'expense', amount: 850 },
  { id: 4, date: '2025-10-10', desc: 'Netflix subscription', cat: 'Entertainment', type: 'expense', amount: 649 },
  { id: 5, date: '2025-10-12', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 22000 },
  { id: 6, date: '2025-10-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 7, date: '2025-10-17', desc: 'Electricity bill', cat: 'Utilities', type: 'expense', amount: 1450 },
  { id: 8, date: '2025-10-19', desc: 'Amazon shopping', cat: 'Shopping', type: 'expense', amount: 4300 },
  { id: 9, date: '2025-10-22', desc: 'Doctor visit', cat: 'Healthcare', type: 'expense', amount: 800 },
  { id: 10, date: '2025-10-25', desc: 'Restaurant dinner', cat: 'Food & Dining', type: 'expense', amount: 1800 },
  { id: 11, date: '2025-11-01', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 85000 },
  { id: 12, date: '2025-11-03', desc: 'Grocery — BigBasket', cat: 'Food & Dining', type: 'expense', amount: 2900 },
  { id: 13, date: '2025-11-06', desc: 'Metro pass', cat: 'Transport', type: 'expense', amount: 500 },
  { id: 14, date: '2025-11-09', desc: 'Online course — Udemy', cat: 'Education', type: 'expense', amount: 1299 },
  { id: 15, date: '2025-11-12', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 15000 },
  { id: 16, date: '2025-11-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 17, date: '2025-11-18', desc: 'Water bill', cat: 'Utilities', type: 'expense', amount: 600 },
  { id: 18, date: '2025-11-20', desc: 'Myntra sale', cat: 'Shopping', type: 'expense', amount: 3800 },
  { id: 19, date: '2025-11-24', desc: 'Mutual fund dividend', cat: 'Investment', type: 'income', amount: 5200 },
  { id: 20, date: '2025-11-28', desc: 'Zomato orders', cat: 'Food & Dining', type: 'expense', amount: 2100 },
  { id: 21, date: '2025-12-01', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 85000 },
  { id: 22, date: '2025-12-04', desc: 'Petrol', cat: 'Transport', type: 'expense', amount: 2000 },
  { id: 23, date: '2025-12-08', desc: 'Holiday shopping', cat: 'Shopping', type: 'expense', amount: 9500 },
  { id: 24, date: '2025-12-11', desc: 'Restaurant — Christmas', cat: 'Food & Dining', type: 'expense', amount: 4200 },
  { id: 25, date: '2025-12-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 26, date: '2025-12-17', desc: 'Flight — Goa', cat: 'Travel', type: 'expense', amount: 7800 },
  { id: 27, date: '2025-12-20', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 28000 },
  { id: 28, date: '2025-12-23', desc: 'Hotel — Goa', cat: 'Travel', type: 'expense', amount: 12000 },
  { id: 29, date: '2025-12-26', desc: 'Year-end bonus', cat: 'Salary', type: 'income', amount: 30000 },
  { id: 30, date: '2025-12-29', desc: 'Pharmacy', cat: 'Healthcare', type: 'expense', amount: 950 },
  { id: 31, date: '2026-01-01', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 88000 },
  { id: 32, date: '2026-01-05', desc: 'Grocery — Reliance Fresh', cat: 'Food & Dining', type: 'expense', amount: 3100 },
  { id: 33, date: '2026-01-08', desc: 'Ola cab', cat: 'Transport', type: 'expense', amount: 1200 },
  { id: 34, date: '2026-01-12', desc: 'Spotify premium', cat: 'Entertainment', type: 'expense', amount: 119 },
  { id: 35, date: '2026-01-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 36, date: '2026-01-18', desc: 'Internet bill', cat: 'Utilities', type: 'expense', amount: 999 },
  { id: 37, date: '2026-01-22', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 18000 },
  { id: 38, date: '2026-01-25', desc: 'Flipkart order', cat: 'Shopping', type: 'expense', amount: 2700 },
  { id: 39, date: '2026-01-28', desc: 'Dentist', cat: 'Healthcare', type: 'expense', amount: 2500 },
  { id: 40, date: '2026-01-30', desc: 'Investment return', cat: 'Investment', type: 'income', amount: 8000 },
  { id: 41, date: '2026-02-01', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 88000 },
  { id: 42, date: '2026-02-05', desc: 'Grocery — DMart', cat: 'Food & Dining', type: 'expense', amount: 2750 },
  { id: 43, date: '2026-02-08', desc: 'Auto rickshaw', cat: 'Transport', type: 'expense', amount: 450 },
  { id: 44, date: '2026-02-12', desc: 'Valentine dinner', cat: 'Food & Dining', type: 'expense', amount: 3500 },
  { id: 45, date: '2026-02-14', desc: 'Flower bouquet', cat: 'Shopping', type: 'expense', amount: 800 },
  { id: 46, date: '2026-02-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 47, date: '2026-02-18', desc: 'Gym membership', cat: 'Healthcare', type: 'expense', amount: 2000 },
  { id: 48, date: '2026-02-22', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 12000 },
  { id: 49, date: '2026-02-25', desc: 'Electricity', cat: 'Utilities', type: 'expense', amount: 1300 },
  { id: 50, date: '2026-02-28', desc: 'Amazon Prime', cat: 'Entertainment', type: 'expense', amount: 299 },
  { id: 51, date: '2026-03-01', desc: 'Monthly Salary', cat: 'Salary', type: 'income', amount: 88000 },
  { id: 52, date: '2026-03-04', desc: 'Grocery — Zepto', cat: 'Food & Dining', type: 'expense', amount: 2600 },
  { id: 53, date: '2026-03-07', desc: 'Bus pass', cat: 'Transport', type: 'expense', amount: 350 },
  { id: 54, date: '2026-03-10', desc: 'Book purchase', cat: 'Education', type: 'expense', amount: 890 },
  { id: 55, date: '2026-03-14', desc: 'Restaurant', cat: 'Food & Dining', type: 'expense', amount: 2200 },
  { id: 56, date: '2026-03-15', desc: 'Apartment rent', cat: 'Rent', type: 'expense', amount: 18000 },
  { id: 57, date: '2026-03-18', desc: 'Flight — Mumbai', cat: 'Travel', type: 'expense', amount: 5500 },
  { id: 58, date: '2026-03-20', desc: 'Freelance project', cat: 'Freelance', type: 'income', amount: 20000 },
  { id: 59, date: '2026-03-24', desc: 'Mobile recharge', cat: 'Utilities', type: 'expense', amount: 399 },
  { id: 60, date: '2026-03-28', desc: 'Investment dividend', cat: 'Investment', type: 'income', amount: 6500 },
];

// app state
let txs = JSON.parse(localStorage.getItem('sw_txs') || 'null') || SEED.map(t => ({ ...t }));
let nextId = Math.max(...txs.map(t => t.id)) + 1;
let sortState = { col: 'date', dir: -1 };
let currentPage = 1;
const PER_PAGE = 10;
let editingId = null;
let trendInst, donutInst, monthlyInst;

// small helpers used all over
const persist = () => localStorage.setItem('sw_txs', JSON.stringify(txs));
const fmtINR = n => '₹' + Math.abs(n).toLocaleString('en-IN');
const fmtK = n => n >= 100000 ? '₹' + (n / 100000).toFixed(1) + 'L' : n >= 1000 ? '₹' + (n / 1000).toFixed(1) + 'K' : '₹' + n;
const fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
const fmtDateShort = d => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

function showToast(msg, icon = '✓') {
  const t = document.getElementById('toast');
  document.getElementById('toastInner').innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// navigation — swaps the active page and syncs both nav bars
function navigate(el) {
  const page = el.dataset.page;
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  document.querySelector(`.nav-link[data-page="${page}"]`)?.classList.add('active');
  document.querySelectorAll('.bn-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`.bn-item[data-page="${page}"]`)?.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (page === 'overview') renderOverview();
  if (page === 'transactions') { populateFilters(); renderTxTable(); }
  if (page === 'insights') renderInsights();
  closeSidebar();
}

function navigateTo(page) {
  const el = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (el) navigate(el);
}

// sidebar open/close/toggle
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const isCollapsed = sidebar.classList.toggle('collapsed');
  main.classList.toggle('sidebar-collapsed', isCollapsed);
  localStorage.setItem('sw_sidebar', isCollapsed ? 'collapsed' : 'expanded');
}

// role switcher + dark/light theme toggle
function setRole(role) {
  document.body.className = 'role-' + role;
  const badge = document.getElementById('roleBadge');
  badge.className = 'role-badge ' + role;
  badge.innerHTML = `<span class="dot"></span> ${role === 'admin' ? 'Administrator' : 'Viewer'}`;
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('themeLabel').textContent = isDark ? 'Dark mode' : 'Light mode';
  localStorage.setItem('sw_theme', isDark ? 'light' : 'dark');
  setTimeout(() => {
    renderOverview();
    if (document.getElementById('page-insights').classList.contains('active')) renderInsights();
  }, 50);
}

// data helpers — slice by month, build chart datasets, category totals
function getMonthTxs(ago) {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth() - ago, 1);
  return txs.filter(t => {
    const td = new Date(t.date);
    return td.getFullYear() === d.getFullYear() && td.getMonth() === d.getMonth();
  });
}

function getMonthlyData(months) {
  const labels = [], incomes = [], expenses = [];
  const now = new Date();
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const mo = txs.filter(t => {
      const td = new Date(t.date);
      return td.getFullYear() === d.getFullYear() && td.getMonth() === d.getMonth();
    });
    labels.push(d.toLocaleString('default', { month: 'short', year: '2-digit' }));
    incomes.push(mo.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0));
    expenses.push(mo.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0));
  }
  return { labels, incomes, expenses };
}

function getCatBreakdown() {
  const map = {};
  txs.filter(t => t.type === 'expense').forEach(t => { map[t.cat] = (map[t.cat] || 0) + t.amount; });
  return Object.entries(map).sort((a, b) => b[1] - a[1]);
}

// overview page renderers
function renderOverview() {
  renderStats();
  renderTrend(6);
  renderDonut();
  renderRecent();
}

function renderStats() {
  const tm = getMonthTxs(0), lm = getMonthTxs(1);
  const inc = tm.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const exp = tm.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const bal = txs.reduce((s, t) => t.type === 'income' ? s + t.amount : s - t.amount, 0);
  const lInc = lm.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const lExp = lm.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const sav = inc > 0 ? Math.round((inc - exp) / inc * 100) : 0;
  const pct = (a, b) => b === 0 ? 0 : Math.round((a - b) / b * 100);
  const iD = pct(inc, lInc), eD = pct(exp, lExp);

  const cards = [
    { label: 'Total Balance', val: fmtK(bal), change: 'All-time net', dir: 'neutral', accent: 'var(--green)', bg: 'var(--green-soft)', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>` },
    { label: 'Monthly Income', val: fmtK(inc), change: `${iD >= 0 ? '+' : ''}${iD}% vs last month`, dir: iD >= 0 ? 'up' : 'down', accent: 'var(--green)', bg: 'var(--green-soft)', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>` },
    { label: 'Monthly Expenses', val: fmtK(exp), change: `${eD >= 0 ? '+' : ''}${eD}% vs last month`, dir: eD <= 0 ? 'up' : 'down', accent: 'var(--red)', bg: 'var(--red-soft)', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>` },
    { label: 'Savings Rate', val: sav + '%', change: sav >= 30 ? '🎯 Excellent!' : sav >= 20 ? '👍 On track' : '⚠️ Below target', dir: sav >= 20 ? 'up' : 'down', accent: 'var(--amber)', bg: 'var(--amber-soft)', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>` },
  ];

  document.getElementById('statsGrid').innerHTML = cards.map(c => `
    <div class="stat-card" style="--card-accent:${c.accent};--card-bg:${c.bg};">
      <div class="stat-icon" style="background:${c.bg};">${c.icon}</div>
      <div class="stat-label">${c.label}</div>
      <div class="stat-value">${c.val}</div>
      <div class="stat-change ${c.dir}">${c.dir === 'up' ? '↑' : c.dir === 'down' ? '↓' : '—'} ${c.change}</div>
    </div>
  `).join('');
}

function renderTrend(months) {
  const { labels, incomes, expenses } = getMonthlyData(parseInt(months) || 6);
  const balances = []; let running = 0;
  incomes.forEach((inc, i) => { running += inc - expenses[i]; balances.push(running); });
  const isDark = document.documentElement.dataset.theme === 'dark';
  const ctx = document.getElementById('trendChart');
  if (!ctx) return;
  if (trendInst) trendInst.destroy();
  trendInst = new Chart(ctx, {
    type: 'line',
    data: {
      labels, datasets: [{
        label: 'Balance', data: balances,
        borderColor: '#2A6B4A', backgroundColor: isDark ? 'rgba(42,107,74,0.1)' : 'rgba(42,107,74,0.07)',
        tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: '#2A6B4A',
        pointBorderColor: isDark ? '#1E1E1B' : '#FFFFFF', pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false }, tooltip: {
          callbacks: { label: c => fmtINR(c.raw) },
          backgroundColor: isDark ? '#252520' : '#fff',
          titleColor: isDark ? '#F0EDE6' : '#1C1C1A',
          bodyColor: isDark ? '#9E9D99' : '#6B6A66',
          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)', borderWidth: 1
        }
      },
      scales: {
        x: { grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }, ticks: { color: isDark ? '#9E9D99' : '#AEADA8', font: { size: 11, family: "'Plus Jakarta Sans'" } } },
        y: { grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }, ticks: { color: isDark ? '#9E9D99' : '#AEADA8', font: { size: 11, family: "'Plus Jakarta Sans'" }, callback: v => fmtK(v) } },
      }
    }
  });
}

function renderDonut() {
  const data = getCatBreakdown().slice(0, 6);
  const total = data.reduce((s, d) => s + d[1], 0);
  const isDark = document.documentElement.dataset.theme === 'dark';
  const ctx = document.getElementById('donutChart');
  if (!ctx) return;
  if (donutInst) donutInst.destroy();
  donutInst = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(d => d[0]), datasets: [{
        data: data.map(d => d[1]),
        backgroundColor: data.map(d => CAT_COLORS[d[0]] || '#888'),
        borderColor: isDark ? '#1E1E1B' : '#FFFFFF', borderWidth: 3, hoverOffset: 6
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '70%',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${c.label}: ${fmtINR(c.raw)}` } } }
    }
  });

  document.getElementById('catLegend').innerHTML = data.map(d => `
    <div class="cat-row">
      <div class="cat-left"><span class="cat-dot" style="background:${CAT_COLORS[d[0]] || '#888'}"></span>${d[0]}</div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="cat-pct">${Math.round(d[1] / total * 100)}%</span>
        <span class="cat-amt">${fmtK(d[1])}</span>
      </div>
    </div>
  `).join('');
}

function renderRecent() {
  const recent = [...txs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  document.getElementById('recentList').innerHTML = recent.map(t => `
    <div class="tx-row">
      <div class="tx-icon" style="background:${CAT_COLORS[t.cat] || '#888'}22;">${CAT_EMOJIS[t.cat] || '📦'}</div>
      <div class="tx-info">
        <div class="tx-name">${t.desc}</div>
        <div class="tx-meta">${t.cat} · ${fmtDateShort(t.date)}</div>
      </div>
      <div class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmtINR(t.amount)}</div>
    </div>
  `).join('');
}

// transactions page — filters, sort, paginate, render table
function populateFilters() {
  const cats = [...new Set(txs.map(t => t.cat))].sort();
  const months = [...new Set(txs.map(t => t.date.slice(0, 7)))].sort().reverse();
  document.getElementById('filterCat').innerHTML = '<option value="">All categories</option>' + cats.map(c => `<option>${c}</option>`).join('');
  document.getElementById('filterMonth').innerHTML = '<option value="">All months</option>' + months.map(m => `<option value="${m}">${new Date(m + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })}</option>`).join('');
}

function getFiltered() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const type = document.getElementById('filterType')?.value || '';
  const cat = document.getElementById('filterCat')?.value || '';
  const month = document.getElementById('filterMonth')?.value || '';
  return txs.filter(t => {
    if (q && !t.desc.toLowerCase().includes(q) && !t.cat.toLowerCase().includes(q)) return false;
    if (type && t.type !== type) return false;
    if (cat && t.cat !== cat) return false;
    if (month && !t.date.startsWith(month)) return false;
    return true;
  });
}

function sortBy(col) {
  if (sortState.col === col) sortState.dir *= -1;
  else { sortState.col = col; sortState.dir = -1; }
  currentPage = 1;
  ['thDate', 'thCat', 'thType', 'thAmt'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('sorted');
  });
  const map = { date: 'thDate', cat: 'thCat', type: 'thType', amount: 'thAmt' };
  const th = document.getElementById(map[col]);
  if (th) {
    th.classList.add('sorted');
    th.querySelector('.sort-icon').textContent = sortState.dir === -1 ? '↓' : '↑';
  }
  renderTxTable();
}

function renderTxTable() {
  const data = getFiltered().sort((a, b) => {
    const va = sortState.col === 'amount' ? a.amount : sortState.col === 'date' ? new Date(a.date) : a[sortState.col];
    const vb = sortState.col === 'amount' ? b.amount : sortState.col === 'date' ? new Date(b.date) : b[sortState.col];
    return sortState.dir * (va < vb ? -1 : va > vb ? 1 : 0);
  });

  const total = data.length, pages = Math.max(1, Math.ceil(total / PER_PAGE));
  if (currentPage > pages) currentPage = 1;
  const slice = data.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const isAdmin = document.body.classList.contains('role-admin');
  const body = document.getElementById('txBody');

  if (!slice.length) {
    body.innerHTML = `<tr><td colspan="${isAdmin ? 6 : 5}">
      <div class="empty-state">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <h4>No transactions found</h4>
        <p>Try adjusting your filters or search terms</p>
      </div>
    </td></tr>`;
  } else {
    body.innerHTML = slice.map(t => `
      <tr>
        <td style="color:var(--text2);white-space:nowrap;">${fmtDate(t.date)}</td>
        <td>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:16px;">${CAT_EMOJIS[t.cat] || '📦'}</span>
            <span style="font-weight:500;">${t.desc}</span>
          </div>
        </td>
        <td>
          <span class="cat-chip">
            <span style="width:7px;height:7px;border-radius:50%;background:${CAT_COLORS[t.cat] || '#888'};display:inline-block;"></span>
            ${t.cat}
          </span>
        </td>
        <td><span class="type-pill ${t.type}"><span class="pip"></span>${t.type.charAt(0).toUpperCase() + t.type.slice(1)}</span></td>
        <td style="font-family:'Fraunces',serif;font-size:15px;font-weight:400;">
          <span style="color:${t.type === 'income' ? 'var(--green)' : 'var(--red)'};">${t.type === 'income' ? '+' : '-'}${fmtINR(t.amount)}</span>
        </td>
        ${isAdmin ? `<td><div class="row-actions"><button class="act-btn" onclick="editTx(${t.id})">Edit</button><button class="act-btn del" onclick="deleteTx(${t.id})">Delete</button></div></td>` : ''}
      </tr>
    `).join('');
  }

  document.getElementById('pgInfo').textContent = `Showing ${Math.min((currentPage - 1) * PER_PAGE + 1, total)}–${Math.min(currentPage * PER_PAGE, total)} of ${total}`;

  const btns = document.getElementById('pgBtns');
  btns.innerHTML = '';
  const mkBtn = (label, page, active, disabled) => {
    const b = document.createElement('button');
    b.className = 'pg-btn' + (active ? ' active' : '');
    b.textContent = label;
    b.disabled = disabled;
    if (!disabled && !active) b.onclick = () => { currentPage = page; renderTxTable(); };
    return b;
  };
  btns.appendChild(mkBtn('←', currentPage - 1, false, currentPage === 1));
  for (let i = 1; i <= pages; i++) {
    if (pages <= 7 || i === 1 || i === pages || Math.abs(i - currentPage) <= 1) {
      btns.appendChild(mkBtn(i, i, i === currentPage, false));
    } else if (Math.abs(i - currentPage) === 2) {
      const s = document.createElement('span');
      s.textContent = '…';
      s.style.cssText = 'padding:0 4px;color:var(--text3);display:flex;align-items:center;';
      btns.appendChild(s);
      i = i < currentPage ? currentPage - 2 : pages - 1;
    }
  }
  btns.appendChild(mkBtn('→', currentPage + 1, false, currentPage === pages));
}

function deleteTx(id) {
  if (!confirm('Delete this transaction?')) return;
  txs = txs.filter(t => t.id !== id);
  persist();
  renderTxTable();
  renderOverview();
  showToast('Transaction deleted', '🗑️');
}

function editTx(id) {
  editingId = id;
  const t = txs.find(t => t.id === id);
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('fType').value = t.type;
  refreshCatOptions();
  document.getElementById('fCat').value = t.cat;
  document.getElementById('fAmount').value = t.amount;
  document.getElementById('fDesc').value = t.desc;
  document.getElementById('fDate').value = t.date;
  document.getElementById('modalOverlay').classList.add('open');
}

// modal — add and edit transactions
function openModal() {
  editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  document.getElementById('fType').value = 'expense';
  refreshCatOptions();
  document.getElementById('fAmount').value = '';
  document.getElementById('fDesc').value = '';
  document.getElementById('fDate').value = new Date().toISOString().slice(0, 10);
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function refreshCatOptions() {
  const type = document.getElementById('fType').value;
  document.getElementById('fCat').innerHTML = (type === 'expense' ? EXP_CATS : INC_CATS)
    .map(c => `<option>${c}</option>`).join('');
}

function saveTransaction() {
  const desc = document.getElementById('fDesc').value.trim();
  const amount = parseFloat(document.getElementById('fAmount').value);
  const type = document.getElementById('fType').value;
  const cat = document.getElementById('fCat').value;
  const date = document.getElementById('fDate').value;
  if (!desc || !amount || !date) { showToast('Please fill all fields', '⚠️'); return; }
  if (editingId) {
    const t = txs.find(t => t.id === editingId);
    Object.assign(t, { desc, amount, type, cat, date });
    showToast('Transaction updated', '✏️');
  } else {
    txs.push({ id: nextId++, date, desc, cat, type, amount });
    showToast('Transaction added', '✅');
  }
  persist();
  closeModal();
  if (document.getElementById('page-transactions').classList.contains('active')) {
    populateFilters();
    renderTxTable();
  }
  renderOverview();
}

// insights page
function renderInsights() {
  const cats = getCatBreakdown();
  const top = cats[0] || ['—', 0];
  const { labels, incomes, expenses } = getMonthlyData(2);
  const thisM = expenses[1] || 0, lastM = expenses[0] || 0;
  const totInc = txs.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totExp = txs.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const savR = totInc > 0 ? Math.round((totInc - totExp) / totInc * 100) : 0;
  const chg = Math.round((thisM - lastM) / Math.max(lastM, 1) * 100);

  document.getElementById('insightsTop').innerHTML = `
    <div class="insight-card">
      <div class="insight-accent" style="background:linear-gradient(90deg,var(--red),#FF8A80);"></div>
      <div class="insight-icon">🏆</div>
      <div class="insight-label">Top Spending Category</div>
      <div class="insight-value">${top[0]}</div>
      <div class="insight-sub">${fmtK(top[1])} total spent all-time</div>
    </div>
    <div class="insight-card">
      <div class="insight-accent" style="background:linear-gradient(90deg,var(--amber),#FFD54F);"></div>
      <div class="insight-icon">📅</div>
      <div class="insight-label">Month-on-Month Expenses</div>
      <div class="insight-value" style="color:${chg > 0 ? 'var(--red)' : 'var(--green)'};">${chg >= 0 ? '+' : ''}${chg}%</div>
      <div class="insight-sub">${fmtK(lastM)} → ${fmtK(thisM)}</div>
      <div class="monthly-cmp">
        <div class="cmp-item"><div class="cmp-month">${labels[0]}</div><div class="cmp-val">${fmtK(lastM)}</div></div>
        <div class="cmp-item"><div class="cmp-month">${labels[1]}</div><div class="cmp-val" style="color:${thisM > lastM ? 'var(--red)' : 'var(--green)'}">${fmtK(thisM)}</div></div>
      </div>
    </div>
    <div class="insight-card">
      <div class="insight-accent" style="background:linear-gradient(90deg,var(--green),#69F0AE);"></div>
      <div class="insight-icon">💰</div>
      <div class="insight-label">Overall Savings Rate</div>
      <div class="insight-value" style="color:${savR >= 20 ? 'var(--green)' : 'var(--red)'};">${savR}%</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${Math.min(100, savR)}%;background:${savR >= 20 ? 'var(--green)' : 'var(--red)'};"></div></div>
      <div class="insight-sub" style="margin-top:8px;">${savR >= 30 ? '🎯 Excellent discipline' : savR >= 20 ? '👍 Good — aim for 30%' : '⚠️ Try to save more'}</div>
    </div>
  `;

  // Monthly bar chart
  const { labels: ml, incomes: mi, expenses: me } = getMonthlyData(6);
  const isDark = document.documentElement.dataset.theme === 'dark';
  const mCtx = document.getElementById('monthlyChart');
  if (mCtx) {
    if (monthlyInst) monthlyInst.destroy();
    monthlyInst = new Chart(mCtx, {
      type: 'bar',
      data: {
        labels: ml, datasets: [
          { label: 'Income', data: mi, backgroundColor: isDark ? 'rgba(42,107,74,0.7)' : 'rgba(42,107,74,0.75)', borderRadius: 6, borderSkipped: false },
          { label: 'Expenses', data: me, backgroundColor: isDark ? 'rgba(192,57,43,0.7)' : 'rgba(192,57,43,0.7)', borderRadius: 6, borderSkipped: false },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, tooltip: {
            callbacks: { label: c => `${c.dataset.label}: ${fmtINR(c.raw)}` },
            backgroundColor: isDark ? '#252520' : '#fff',
            titleColor: isDark ? '#F0EDE6' : '#1C1C1A',
            bodyColor: isDark ? '#9E9D99' : '#6B6A66',
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)', borderWidth: 1
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: isDark ? '#9E9D99' : '#AEADA8', font: { size: 11, family: "'Plus Jakarta Sans'" } } },
          y: { grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }, ticks: { color: isDark ? '#9E9D99' : '#AEADA8', font: { size: 11, family: "'Plus Jakarta Sans'" }, callback: v => fmtK(v) } },
        }
      }
    });
  }

  // Spend breakdown bars
  const total = cats.reduce((s, c) => s + c[1], 0);
  document.getElementById('spendList').innerHTML = cats.slice(0, 8).map(([cat, amt]) => `
    <div class="spend-row">
      <span style="font-size:18px;flex-shrink:0;">${CAT_EMOJIS[cat] || '📦'}</span>
      <div class="spend-bar-wrap">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span class="spend-name">${cat}</span>
          <span class="spend-pct">${Math.round(amt / total * 100)}%</span>
        </div>
        <div class="spend-bar-track">
          <div class="spend-bar-fill" style="width:${Math.round(amt / total * 100)}%;background:${CAT_COLORS[cat] || '#888'};"></div>
        </div>
      </div>
      <span class="spend-amt">${fmtK(amt)}</span>
    </div>
  `).join('');
}

// csv export — exports whatever is currently visible (filtered or all)
function exportCSV() {
  const data = document.getElementById('page-transactions').classList.contains('active') ? getFiltered() : txs;
  const rows = [
    ['Date', 'Description', 'Category', 'Type', 'Amount'],
    ...data.map(t => [t.date, `"${t.desc}"`, t.cat, t.type, t.amount])
  ];
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(rows.map(r => r.join(',')).join('\n'));
  a.download = 'spendwise_export.csv';
  a.click();
  showToast('CSV exported successfully', '📥');
}

// kick everything off
(function init() {
  // Restore theme
  const savedTheme = localStorage.getItem('sw_theme');
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
    if (savedTheme === 'dark') document.getElementById('themeLabel').textContent = 'Light mode';
  }
  // Restore sidebar collapsed state (desktop only)
  if (window.innerWidth > 768 && localStorage.getItem('sw_sidebar') === 'collapsed') {
    document.getElementById('sidebar').classList.add('collapsed');
    document.getElementById('main').classList.add('sidebar-collapsed');
  }
  renderOverview();
})();
