
if (!sessionStorage.getItem('v3_reset_trigger')) {
  sessionStorage.setItem('v3_reset_trigger', 'true');
  localStorage.clear();
  location.reload();
}
// --- State Management ---
let state = {
  members: JSON.parse(localStorage.getItem('trcc_members')) || [
    'Dexter', 'Godfather', 'SPARROW', 'CALIAN', 'Prospect 4', 'Bandit', 
    'Metei', 'Bazar', 'Pocar', 'Edison', 'Zoltar', 'Amerikalı'
  ],
  trips: JSON.parse(localStorage.getItem('trcc_trips')) || [
  { "member": "Dexter", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Bandit", "from": "Alanya", "km": 781, "date": "2026-03-22" },
  { "member": "Pocar", "from": "Alanya", "km": 781, "date": "2026-03-22" },
  { "member": "Edison", "from": "Alanya", "km": 781, "date": "2026-03-22" },
  { "member": "Zoltar", "from": "Alanya", "km": 781, "date": "2026-03-22" },
  { "member": "Dexter", "from": "Çerkezköy 26.01.26", "km": 253, "date": "2026-01-26" },
  { "member": "Bandit", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Metei", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Bazar", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Pocar", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Edison", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Zoltar", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Amerikalı", "from": "Toplantı 14.01.26", "km": 50, "date": "2026-01-14" },
  { "member": "Dexter", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Bazar", "from": "Çanakkale 16.01.26", "km": 370, "date": "2026-01-16" },
  { "member": "Zoltar", "from": "Çanakkale 16.01.26", "km": 370, "date": "2026-01-16" },
  { "member": "Amerikalı", "from": "Çanakkale 16.01.26", "km": 370, "date": "2026-01-16" },
  { "member": "Dexter", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Amerikalı", "from": "Ayvalık 20.01.26", "km": 440, "date": "2026-01-20" },
  { "member": "Dexter", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Bandit", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Metei", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Bazar", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Pocar", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Edison", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Zoltar", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Amerikalı", "from": "Toplantı 21.01.26", "km": 50, "date": "2026-01-21" },
  { "member": "Dexter", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Bandit", "from": "Bayrak 25.01.26", "km": 100, "date": "2026-01-25" },
  { "member": "Bazar", "from": "Bayrak 25.01.26", "km": 100, "date": "2026-01-25" },
  { "member": "Pocar", "from": "Bayrak 25.01.26", "km": 100, "date": "2026-01-25" },
  { "member": "Zoltar", "from": "Bayrak 25.01.26", "km": 100, "date": "2026-01-25" },
  { "member": "Amerikalı", "from": "Bayrak 25.01.26", "km": 100, "date": "2026-01-25" },
  { "member": "Dexter", "from": "Toplantı 20.02.26", "km": 50, "date": "2026-02-20" },
  { "member": "Bandit", "from": "Çerkezköy 26.01.26", "km": 267, "date": "2026-01-26" },
  { "member": "Zoltar", "from": "Çerkezköy 26.01.26", "km": 267, "date": "2026-01-26" },
  { "member": "Edison", "from": "Ocaklar 27.01.26", "km": 55, "date": "2026-01-27" },
  { "member": "Dexter", "from": "Toplantı 25.02.26", "km": 50, "date": "2026-02-25" },
  { "member": "Bandit", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Metei", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Bazar", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Pocar", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Edison", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Zoltar", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Amerikalı", "from": "Toplantı 28.01.26", "km": 50, "date": "2026-01-28" },
  { "member": "Dexter", "from": "Toplantı 04.03.26", "km": 50, "date": "2026-03-04" },
  { "member": "Amerikalı", "from": "İzmir 31.01 / 04.02.26", "km": 707, "date": "2026-02-04" },
  { "member": "Dexter", "from": "Şehir iç. tu. 04.03", "km": 100, "date": "2026-03-22" },
  { "member": "Amerikalı", "from": "Ocaklar 05.02.26", "km": 60, "date": "2026-02-05" },
  { "member": "Dexter", "from": "Karşıyaka 08.03.26", "km": 80, "date": "2026-03-08" },
  { "member": "Bandit", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Metei", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Bazar", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Pocar", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Edison", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Zoltar", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Amerikalı", "from": "Toplantı 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Godfather", "from": "Gönen 12.03.26", "km": 90, "date": "2026-03-12" },
  { "member": "Bazar", "from": "Tatlısu 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Pocar", "from": "Tatlısu 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Edison", "from": "Tatlısu 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Amerikalı", "from": "Tatlısu 06.02.26", "km": 50, "date": "2026-02-06" },
  { "member": "Dexter", "from": "Karşıyaka 14.03.26", "km": 55, "date": "2026-03-14" },
  { "member": "Bazar", "from": "Tatlısu 07.02.26", "km": 50, "date": "2026-02-07" },
  { "member": "Pocar", "from": "Tatlısu 07.02.26", "km": 50, "date": "2026-02-07" },
  { "member": "Edison", "from": "Tatlısu 07.02.26", "km": 50, "date": "2026-02-07" },
  { "member": "Amerikalı", "from": "Tatlısu 07.02.26", "km": 50, "date": "2026-02-07" },
  { "member": "Dexter", "from": "Toplantı 14.03.26", "km": 50, "date": "2026-03-14" },
  { "member": "Bandit", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Metei", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Bazar", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Pocar", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Edison", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Zoltar", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Amerikalı", "from": "Toplantı 13.02.26", "km": 50, "date": "2026-02-13" },
  { "member": "Godfather", "from": "Manyas 14.03.26", "km": 98, "date": "2026-03-14" },
  { "member": "Bandit", "from": "Balıkesir 15.02.26", "km": 240, "date": "2026-02-15" },
  { "member": "Metei", "from": "Balıkesir 15.02.26", "km": 120, "date": "2026-02-15" },
  { "member": "Bazar", "from": "Balıkesir 15.02.26", "km": 240, "date": "2026-02-15" },
  { "member": "Pocar", "from": "Balıkesir 15.02.26", "km": 240, "date": "2026-02-15" },
  { "member": "Zoltar", "from": "Balıkesir 15.02.26", "km": 240, "date": "2026-02-15" },
  { "member": "Amerikalı", "from": "Balıkesir 15.02.26", "km": 240, "date": "2026-02-15" },
  { "member": "SPARROW", "from": "Bursa 17.03.26", "km": 282, "date": "2026-03-17" },
  { "member": "Bandit", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Bazar", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Pocar", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Edison", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Zoltar", "from": "Gönen 18.02.26", "km": 90, "date": "2026-02-18" },
  { "member": "Amerikalı", "from": "Gönen 18.02.26", "km": 68, "date": "2026-02-18" },
  { "member": "Amerikalı", "from": "Çanakkale 19.02.26", "km": 160, "date": "2026-02-19" }
],
  currentView: 'dashboard',
  bikes: JSON.parse(localStorage.getItem('trcc_bikes')) || {},
  isAdmin: localStorage.getItem('trcc_admin') === 'true'
};

const saveState = () => {
  localStorage.setItem('trcc_members', JSON.stringify(state.members));
  localStorage.setItem('trcc_trips', JSON.stringify(state.trips));
  localStorage.setItem('trcc_bikes', JSON.stringify(state.bikes));
};

// --- View Rendering ---

let chartInstances = [];

const getRank = (km) => {
  if (km >= 2000) return '<span class="rank-badge usta"><i class="ph-fill ph-crown"></i> Usta Pilot</span>';
  if (km >= 500) return '<span class="rank-badge gezgin"><i class="ph-fill ph-motorcycle"></i> Gezgin</span>';
  if (km > 0) return '<span class="rank-badge caylak"><i class="ph-fill ph-user"></i> Çaylak</span>';
  return '<span class="rank-badge" style="color:var(--text-muted)"><i class="ph ph-moon-stars"></i> Uyuyan</span>';
};

const renderDashboard = () => {
  const totalKm = state.trips.reduce((acc, t) => acc + Number(t.km), 0);
  
  const memberStats = state.members.map(m => ({
    name: m,
    km: state.trips.filter(t => t.member === m).reduce((acc, t) => acc + Number(t.km), 0)
  })).sort((a, b) => b.km - a.km);

  const topMember = memberStats[0]?.km > 0 ? `${memberStats[0].name} <br><span style="font-size:1.1rem; color:var(--text-muted)"><i class="ph-fill ph-gauge" style="color:var(--color-primary)"></i> ${memberStats[0].km} km</span>` : "Veri Yok";

  const twentyEightDaysAgo = new Date(Date.now() - (28 * 24 * 60 * 60 * 1000));
  
  const recentTrips = state.trips.filter(t => new Date(t.date) >= twentyEightDaysAgo && new Date(t.date) <= new Date());
  const recentStats = {};
  recentTrips.forEach(t => {
    recentStats[t.member] = (recentStats[t.member] || 0) + Number(t.km);
  });
  const topRecent = Object.entries(recentStats).sort((a,b) => b[1] - a[1])[0];
  const last28Str = topRecent ? `${topRecent[0]} <br><span style="font-size:1.1rem; color:var(--text-muted)">${topRecent[1]} km</span>` : "Veri Yok";

  return `
    <div class="page-header" style="margin-bottom: 1.5rem;">
      <div>
        <h1 class="page-title" style="font-size:1.6rem;"><i class="ph-fill ph-squares-four" style="color:var(--color-primary); margin-right:0.5rem;"></i>Komuta Merkezi</h1>
      </div>
      ${state.isAdmin ? `
      <button class="btn btn-primary" onclick="openModal('trip-modal')" style="padding: 0.5rem 1rem; font-size: 0.9rem;"><i class="ph ph-plus-circle"></i> Sürüş Kaydı Ekle</button>
      <button class="btn btn-primary fab-mobile" onclick="openModal('trip-modal')"><i class="ph ph-plus-circle"></i></button>
      ` : ''}
    </div>

    <!-- Minimal Stats Card Bar -->
    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
      <div class="cyber-card glass-panel" style="padding: 1rem 1.5rem;">
        <div class="stat-label" style="font-size:0.8rem; color:var(--text-muted);"><i class="ph-fill ph-medal"></i> Tüm Zamanların Lideri</div>
        <div class="stat-val" style="font-size: 1.2rem; margin-top: 0.5rem;">${topMember.replace('<br><span', ' &nbsp;<span').replace('1.1rem', '0.9rem')}</div>
      </div>
      <div class="cyber-card glass-panel" style="padding: 1rem 1.5rem;">
        <div class="stat-label" style="font-size:0.8rem; color:var(--text-muted);"><i class="ph-fill ph-fire"></i> Ayın Pilotu (Son 28 Gün)</div>
        <div class="stat-val" style="font-size: 1.2rem; margin-top: 0.5rem;">${last28Str.replace('<br><span', ' &nbsp;<span').replace('1.1rem', '0.9rem')}</div>
      </div>
      <div class="cyber-card glass-panel" style="padding: 1rem 1.5rem;">
        <div class="stat-label" style="font-size:0.8rem; color:var(--text-muted);"><i class="ph-fill ph-globe-hemisphere-west"></i> Kulüp Toplam Mesafe</div>
        <div class="stat-val" style="color: var(--color-primary); font-size: 1.4rem; margin-top: 0.5rem;">${totalKm.toLocaleString()} <span style="font-size:0.8rem;">KM</span></div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="stats-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div class="glass-panel inner-panel" style="animation: fadeInUp 0.5s ease-out backwards; animation-delay: 0.1s; padding: 1rem;">
        <div class="panel-heading" style="margin-bottom: 0.5rem;">
          <h3 style="font-size:0.95rem; display:flex; align-items:center; gap:0.4rem; margin:0;"><i class="ph ph-chart-line-up" style="color:var(--color-primary)"></i> Aylık Sürüş Trendi</h3>
        </div>
        <canvas id="trendChart" height="150" style="max-height: 150px;"></canvas>
      </div>
      <div class="glass-panel inner-panel" style="animation: fadeInUp 0.5s ease-out backwards; animation-delay: 0.2s; padding: 1rem;">
        <div class="panel-heading" style="margin-bottom: 0.5rem;">
          <h3 style="font-size:0.95rem; display:flex; align-items:center; gap:0.4rem; margin:0;"><i class="ph ph-chart-bar" style="color:var(--color-primary)"></i> En İyi 5 Sürücü</h3>
        </div>
        <canvas id="top5Chart" height="150" style="max-height: 150px;"></canvas>
      </div>
    </div>

    <!-- Maps Row -->
    <div class="stats-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
      <div class="glass-panel inner-panel" style="animation: fadeInUp 0.5s ease-out backwards; animation-delay: 0.3s; padding: 0; overflow: hidden; border: 1px solid var(--border-subtle);">
        <div class="panel-heading" style="padding: 0.8rem 1rem 0 1rem; margin-bottom: 0;">
          <h3 style="font-size:0.9rem; display:flex; align-items:center; gap:0.4rem; margin:0;"><i class="ph ph-cloud-lightning" style="color:var(--color-cyan)"></i> Canlı Atmosfer Radarı</h3>
        </div>
        <iframe width="100%" height="250" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=km%2Fh&zoom=6&overlay=rain&product=ecmwf&level=surface&lat=40.352&lon=27.974" frameborder="0" style="margin-top: 0.5rem; filter: brightness(0.9) contrast(1.1);"></iframe>
      </div>
      <div class="glass-panel inner-panel" style="animation: fadeInUp 0.5s ease-out backwards; animation-delay: 0.35s; padding: 0; overflow: hidden; border: 1px solid var(--border-subtle);">
        <div class="panel-heading" style="padding: 0.8rem 1rem 0 1rem; margin-bottom: 0;">
          <h3 style="font-size:0.9rem; display:flex; align-items:center; gap:0.4rem; margin:0;"><i class="ph ph-map-trifold" style="color:var(--color-primary)"></i> Radar Bölge Haritası</h3>
        </div>
        <div id="tripMap" style="height: 250px; z-index: 1; border-top: 1px solid var(--border-subtle); margin-top: 0.5rem;"></div>
      </div>
    </div>

    <div style="animation: fadeInUp 0.5s ease-out backwards; animation-delay: 0.4s;">
      <div class="page-header" style="margin-bottom: 1rem;">
        <h2 style="font-size: 1.5rem; color: #fff;">Aktif Pilot Listesi</h2>
        <div style="display: flex; gap: 0.5rem;">
          ${state.isAdmin ? `<button class="btn btn-outline" onclick="resetData()"><i class="ph ph-warning-circle"></i> Sıfırla</button>` : ''}
          <button class="btn btn-outline" onclick="exportData()"><i class="ph ph-download"></i> CSV İndir</button>
        </div>
      </div>
      <div class="data-table-container">
        <table>
          <thead>
            <tr>
              <th>Pilot Kodu / Adı</th>
              <th>Ömür Boyu KM</th>
              <th>Başarı Oranı (Sürüş)</th>
              <th>Sistem Rütbesi</th>
            </tr>
          </thead>
          <tbody>
            ${memberStats.map(m => `
              <tr>
                <td><span class="pilot-name-cell" onclick="openMemberStats('${m.name}')"><i class="ph-fill ph-user-circle"></i>${m.name}</span></td>
                <td><span class="km-text">${m.km.toLocaleString()} KM</span></td>
                <td>${state.trips.filter(t => t.member === m.name).length} Operasyon</td>
                <td>${getRank(m.km)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

const renderMembers = () => {
  return `
    <div style="animation: fadeInUp 0.4s ease-out backwards;">
      <div class="page-header">
        <div>
          <div class="page-subtitle">Veritabanı</div>
          <h1 class="page-title">Pilot Kadrosu</h1>
        </div>
        ${state.isAdmin ? `
        <button class="btn btn-primary" onclick="openModal('member-modal')"><i class="ph ph-user-plus"></i> Yeni Pilot</button>
        <button class="btn btn-primary fab-mobile" onclick="openModal('member-modal')"><i class="ph ph-user-plus"></i></button>
        ` : ''}
      </div>
      <div class="data-table-container">
        <table>
          <thead>
            <tr>
              <th>Pilot Kimliği</th>
              <th>Görev Geçmişi (KM)</th>
              ${state.isAdmin ? `<th>Terminal İşlemleri</th>` : ''}
            </tr>
          </thead>
          <tbody>
            ${state.members.map(name => {
              const km = state.trips.filter(t => t.member === name).reduce((acc, t) => acc + Number(t.km), 0);
              return `
                <tr>
                  <td>
                    <span class="pilot-name-cell" onclick="openMemberStats('${name}')">
                      <i class="ph-fill ph-user"></i>
                      <div style="display:flex; flex-direction:column; gap:0.2rem;">
                        <div>${name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;"><i class="ph ph-motorcycle"></i> ${state.bikes[name] || 'Motosiklet Tanımsız'}</div>
                      </div>
                    </span>
                  </td>
                  <td style="vertical-align: middle;"><span class="km-text">${km.toLocaleString()} KM</span></td>
                  ${state.isAdmin ? `
                  <td style="vertical-align: middle;">
                    <div style="display: flex; gap: 0.5rem;">
                      <button class="btn btn-outline" style="padding: 0.4rem 0.6rem; font-size: 0.8rem;" onclick="openEditMember('${name}')"><i class="ph ph-pencil-simple"></i> Düzenle</button>
                      <button class="btn btn-outline" style="padding: 0.4rem 0.6rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.3);" onclick="removeMember('${name}')"><i class="ph ph-trash" style="color: #ef4444;"></i></button>
                    </div>
                  </td>
                  ` : ''}
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

const renderTrips = () => {
  return `
    <div style="animation: fadeInUp 0.4s ease-out backwards;">
      <div class="page-header">
        <div>
          <div class="page-subtitle">Operasyon Kayıtları</div>
          <h1 class="page-title">Sürüş Görevleri</h1>
        </div>
        ${state.isAdmin ? `
        <button class="btn btn-primary" onclick="openModal('trip-modal')"><i class="ph ph-plus"></i> Görev Kaydet</button>
        <button class="btn btn-primary fab-mobile" onclick="openModal('trip-modal')"><i class="ph ph-plus"></i></button>
        ` : ''}
      </div>
      <div class="data-table-container">
        <table>
          <thead>
            <tr>
              <th>Senk. Tarihi</th>
              <th>Aktif Pilot</th>
              <th>Hedef Geometrisi (Rota)</th>
              <th>Katedilen Mesafe</th>
              ${state.isAdmin ? `<th>Yetki</th>` : ''}
            </tr>
          </thead>
          <tbody>
            ${state.trips.slice().reverse().map((t, idx) => `
              <tr>
                <td style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem;">${new Date(t.date).toLocaleDateString()}</td>
                <td><span class="pilot-name-cell" onclick="openMemberStats('${t.member}')"><i class="ph-fill ph-user-square"></i>${t.member}</span></td>
                <td style="font-size: 0.9rem;">${t.from.replace('➔', '<i class="ph ph-arrow-right" style="color:var(--color-primary); margin: 0 5px; font-weight:bold;"></i>')}</td>
                <td><span class="km-text">${t.km} KM</span></td>
                ${state.isAdmin ? `<td><button class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="removeTrip(${state.trips.length - 1 - idx})"><i class="ph ph-trash"></i> İptal</button></td>` : ''}
              </tr>
            `).join('')}
            ${state.trips.length === 0 ? `<tr><td colspan="${state.isAdmin ? 5 : 4}" style="text-align: center; color: var(--text-muted); padding: 3rem;">Aktif operasyon bulunmuyor.</td></tr>` : ''}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

const renderPlanner = () => {
  return `
    <div style="animation: fadeInUp 0.4s ease-out backwards;">
      <div class="page-header">
        <div>
          <div class="page-subtitle">Akıllı Asistan</div>
          <h1 class="page-title">Rota ve Hava Planlayıcı</h1>
        </div>
      </div>
      
      <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem;">
        <div class="form-row">
          <div class="form-group half">
            <label>Kalkış Şehri</label>
            <select id="plan-start-city">
              <option value="">Analiz İçin Şehir Seçin</option>
            </select>
          </div>
          <div class="form-group half">
            <label>Varış Şehri (Hedef)</label>
            <select id="plan-end-city">
              <option value="">Analiz İçin Şehir Seçin</option>
            </select>
          </div>
          <div class="form-group half" style="flex: 0.8;">
            <label>Planlanan Tarih</label>
            <div class="input-with-icon">
              <i class="ph ph-calendar"></i>
              <input type="date" id="plan-date" required>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="analyzeRoute()"><i class="ph ph-radar"></i> Taktik Sürüş İzini ve İklimi Çözümle</button>
      </div>

      <div id="planner-results" style="display: none; animation: fadeInUp 0.5s ease; flex-direction: column; gap: 2rem;">
        
        <div id="ai-weather-card" class="cyber-stat-card glass-panel" style="display:none; flex-direction: row; justify-content: space-between; align-items: center; border-left: 4px solid var(--color-cyan);">
          <div style="display:flex; align-items:center; gap: 1rem;">
             <div class="cyber-stat-icon" id="ai-w-icon" style="font-size: 3rem;"><i class="ph ph-cloud"></i></div>
             <div>
               <p id="ai-w-date" style="color:var(--text-muted); font-family:var(--font-mono); font-size:0.85rem;">YYYY-MM-DD</p>
               <h2 id="ai-w-desc" style="font-size: 1.5rem; margin-top:0.2rem;">Hava Durumu Değerlendiriliyor...</h2>
             </div>
          </div>
          <div style="display:flex; gap: 2rem; text-align:right;">
             <div>
               <p style="color:var(--text-muted); font-size:0.8rem;">Sıcaklık (Min-Max)</p>
               <h3 id="ai-w-temp" style="font-size: 1.2rem; font-family:var(--font-mono); color:#fff;">--°C / --°C</h3>
             </div>
             <div>
               <p style="color:var(--text-muted); font-size:0.8rem;">Yağış</p>
               <h3 id="ai-w-rain" style="font-size: 1.2rem; font-family:var(--font-mono); color:var(--color-cyan);">-- mm</h3>
             </div>
             <div>
               <p style="color:var(--text-muted); font-size:0.8rem;">Maks. Rüzgar</p>
               <h3 id="ai-w-wind" style="font-size: 1.2rem; font-family:var(--font-mono); color:#fff;">-- km/h</h3>
             </div>
          </div>
        </div>

        <div class="glass-panel inner-panel" style="padding: 0; overflow: hidden; border: 1px solid var(--border-subtle);">
          <div class="panel-heading" style="padding: 1.5rem 1.5rem 0 1.5rem;">
            <i class="ph ph-path"></i>
            <h3>Navigasyon ve Asfalt Durumu</h3>
          </div>
          <div id="plannerMap" style="height: 500px; z-index: 1; border-top: 1px solid var(--border-subtle); margin-top: 1rem;"></div>
        </div>

        <div class="glass-panel inner-panel" style="padding: 0; overflow: hidden; border: 1px solid var(--border-subtle);">
          <div class="panel-heading" style="padding: 1.5rem 1.5rem 0 1.5rem;">
            <i class="ph ph-cloud-lightning"></i>
            <h3>Hedef Bölge - Mikroklima Radarı</h3>
          </div>
          <div id="plannerWeather" style="height: 400px; width: 100%;"></div>
        </div>
      </div>
    </div>
  `;
};

const initCharts = () => {
  chartInstances.forEach(c => c.destroy());
  chartInstances = [];

  const trendCanvas = document.getElementById('trendChart');
  const top5Canvas = document.getElementById('top5Chart');

  if (trendCanvas && top5Canvas && window.Chart) {
    Chart.defaults.color = '#a1a1aa';
    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";

    // 1. Monthly Trend Data
    const monthlyKms = {};
    state.trips.forEach(t => {
      const d = new Date(t.date);
      const m = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      monthlyKms[m] = (monthlyKms[m] || 0) + Number(t.km);
    });
    const sortedMonths = Object.keys(monthlyKms).sort();
    const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    const labels = sortedMonths.map(m => {
      const [yy, mm] = m.split('-');
      return `${monthNames[parseInt(mm) - 1]} ${yy.slice(-2)}`;
    });
    const data = sortedMonths.map(m => monthlyKms[m]);

    const trendChart = new Chart(trendCanvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Aylık Yapılan KM',
          data: data,
          borderColor: '#ff5e00',
          backgroundColor: 'rgba(255, 94, 0, 0.2)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#ffffff',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    // 2. Top 5 Member Data
    const memberStats = state.members.map(m => ({
      name: m,
      km: state.trips.filter(t => t.member === m).reduce((acc, t) => acc + Number(t.km), 0)
    })).sort((a, b) => b.km - a.km).slice(0, 5);

    const top5Chart = new Chart(top5Canvas, {
      type: 'bar',
      data: {
        labels: memberStats.map(m => m.name.substring(0,8)),
        datasets: [{
          label: 'Toplam KM',
          data: memberStats.map(m => m.km),
          backgroundColor: [
            'rgba(255, 94, 0, 0.8)',
            'rgba(35, 134, 54, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(236, 72, 153, 0.8)'
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    chartInstances.push(trendChart, top5Chart);
  }
};

let tripMap = null;

const initMap = () => {
  const mapElement = document.getElementById('tripMap');
  if (!mapElement || !window.L) return;
  
  if (tripMap) tripMap.remove();

  tripMap = L.map('tripMap').setView([39.0, 35.0], 6);
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(tripMap);

  const hqIcon = L.divIcon({
    html: '<div style="font-size: 2.2rem; color: #f7931e; filter: drop-shadow(0 0 10px rgba(247,147,30,0.8)); display:flex; justify-content:center; align-items:center;"><i class="ph-fill ph-house-line"></i></div>',
    className: 'hq-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
  L.marker([40.3498991, 27.9789405], {icon: hqIcon, zIndexOffset: 1000}).addTo(tripMap).bindPopup('<div style="color:#000; font-weight:bold; font-size:1.1rem; text-align:center;">TRCC Bandırma<br><span style="color:#666; font-size:0.9rem;">Merkez Şube Üssü</span></div>');

  const geocodeCache = JSON.parse(localStorage.getItem('trcc_geocode')) || {
    "Balıkesir": {lat: 39.6484, lon: 27.8826},
    "Bursa": {lat: 40.1826, lon: 29.0671},
    "Çanakkale": {lat: 40.1553, lon: 26.4086},
    "İstanbul": {lat: 41.0082, lon: 28.9784},
    "İzmir": {lat: 38.4237, lon: 27.1428},
    "Bandırma": {lat: 40.3522, lon: 27.9744},
    "Gönen": {lat: 40.1047, lon: 27.6536},
    "Ocaklar": {lat: 40.4578, lon: 27.8028},
    "Alanya": {lat: 36.5438, lon: 31.9998},
    "Çerkezköy": {lat: 41.2867, lon: 28.0000},
    "Ayvalık": {lat: 39.3192, lon: 26.6958},
    "Manyas": {lat: 40.0469, lon: 27.9694},
    "Karşıyaka": {lat: 38.4547, lon: 27.1147},
    "Toplantı": null,
    "Şehir": null,
    "Bayrak": null,
    "Tatlısu": {lat: 40.3956, lon: 27.8925}
  };

  const roadCache = JSON.parse(localStorage.getItem('trcc_roads')) || {};

  const drawTrips = () => {
    tripMap.eachLayer(layer => {
       if(layer instanceof L.Polyline || layer instanceof L.CircleMarker || layer instanceof L.GeoJSON) {
           tripMap.removeLayer(layer);
       }
    });

    state.trips.forEach(t => {
      let sCity = "Bandırma";
      let eCity = null;
      
      const newFormatMatch = t.from.match(/^(.*?)\s+\(.*?\)\s+➔\s+(.*?)\s+\(/);
      if (newFormatMatch) {
         sCity = newFormatMatch[1].trim();
         eCity = newFormatMatch[2].trim();
      } else {
         if (t.from.includes(' - ')) {
           const parts = t.from.split(' - ');
           sCity = parts[0].trim();
           eCity = parts[1].replace(/[\d\.]+/g,'').trim();
         } else {
           eCity = t.from.replace(/[\d\.]+/g,'').trim().split(' ')[0];
         }
      }

      if (sCity && eCity && geocodeCache[sCity] && geocodeCache[eCity]) {
         const routeKey = `${sCity}-${eCity}`;
         
         const p1 = [geocodeCache[sCity].lat, geocodeCache[sCity].lon];
         const p2 = [geocodeCache[eCity].lat, geocodeCache[eCity].lon];
         
         L.circleMarker(p1, {radius: 4, color: '#f7931e', fillColor: '#000', fillOpacity: 1, weight: 2}).addTo(tripMap);
         L.circleMarker(p2, {radius: 4, color: '#f7931e', fillColor: '#000', fillOpacity: 1, weight: 2}).addTo(tripMap);

         if (roadCache[routeKey]) {
            if (roadCache[routeKey] === 'straight') {
               L.polyline([p1, p2], {color: '#f7931e', weight: 4, opacity: 0.6}).addTo(tripMap);
            } else {
               L.polyline(roadCache[routeKey], {color: '#f7931e', weight: 4, opacity: 0.6}).addTo(tripMap);
            }
         } else {
            if (!window.processRoadQueue.queue.includes(routeKey) && geocodeCache[sCity] && geocodeCache[eCity]) {
               window.processRoadQueue.queue.push({key: routeKey, start: geocodeCache[sCity], end: geocodeCache[eCity]});
            }
         }
      } else {
         [sCity, eCity].forEach(c => {
           if(c && geocodeCache[c] !== null && !geocodeCache[c] && !window.processGeocodeQueue.queue.includes(c)) {
             window.processGeocodeQueue.queue.push(c);
           }
         });
      }
    });
    
    if(window.processGeocodeQueue.queue.length > 0) window.processGeocodeQueue();
    if(window.processRoadQueue.queue.length > 0) window.processRoadQueue();
  };

  if(!window.processRoadQueue) {
     window.processRoadQueue = async () => {
       if(window.processRoadQueue.running || window.processRoadQueue.queue.length === 0) return;
       window.processRoadQueue.running = true;
       const task = window.processRoadQueue.queue.shift();
       try {
           const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${task.start.lon},${task.start.lat};${task.end.lon},${task.end.lat}?overview=simplified&geometries=geojson`);
           if (res.ok) {
              const data = await res.json();
              if (data.routes && data.routes[0]) {
                 const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
                 roadCache[task.key] = coords;
                 localStorage.setItem('trcc_roads', JSON.stringify(roadCache));
                 drawTrips();
              } else {
                 roadCache[task.key] = 'straight';
                 localStorage.setItem('trcc_roads', JSON.stringify(roadCache)); 
              }
           } else {
              if (res.status === 429) window.processRoadQueue.queue.unshift(task); // rate limited, try again later
           }
       } catch(e) { console.error(e); }
       
       setTimeout(() => {
          window.processRoadQueue.running = false;
          window.processRoadQueue();
       }, 2500); // 2.5s delay to strictly avoid OSRM rate limits
     };
     window.processRoadQueue.queue = [];
     window.processRoadQueue.running = false;
  }

  if(!window.processGeocodeQueue) {
     window.processGeocodeQueue = async () => {
       if(window.processGeocodeQueue.running || window.processGeocodeQueue.queue.length === 0) return;
       window.processGeocodeQueue.running = true;
       
       const city = window.processGeocodeQueue.queue.shift();
       try {
           const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ', Turkey')}`);
           const data = await res.json();
           if(data && data.length > 0) {
               geocodeCache[city] = {lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon)};
               localStorage.setItem('trcc_geocode', JSON.stringify(geocodeCache));
               drawTrips();
           } else {
               geocodeCache[city] = null; // Don't try again
               localStorage.setItem('trcc_geocode', JSON.stringify(geocodeCache));
           }
       } catch(e) { console.error(e); }
       
       setTimeout(() => {
          window.processGeocodeQueue.running = false;
          window.processGeocodeQueue();
       }, 2000);
     };
     window.processGeocodeQueue.queue = [];
     window.processGeocodeQueue.running = false;
  }

  drawTrips();
};

const updateView = () => {
  const main = document.getElementById('main-content');
  if (state.currentView === 'dashboard') {
    main.innerHTML = renderDashboard();
    setTimeout(() => { initCharts(); initMap(); }, 0);
  }
  if (state.currentView === 'members') {
    main.innerHTML = renderMembers();
  }
  if (state.currentView === 'trips') main.innerHTML = renderTrips();
  if (state.currentView === 'planner') {
    main.innerHTML = renderPlanner();
    const citiesHtml = `<option value="">Analiz İçin Şehir Seçin</option>` + Object.keys(locationData).sort().map(c => `<option value="${c}">${c}</option>`).join('');
    document.getElementById('plan-start-city').innerHTML = citiesHtml;
    document.getElementById('plan-end-city').innerHTML = citiesHtml;
  }
  
  // Highlight active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === state.currentView);
  });

  // Admin Switcher updates
  const adminDot = document.getElementById('admin-dot');
  const adminText = document.getElementById('admin-text');
  const adminBtn = document.getElementById('admin-status-btn');
  if (adminDot && adminText && adminBtn) {
    if (state.isAdmin) {
      adminDot.style.background = 'var(--color-cyan)';
      adminDot.style.boxShadow = '0 0 10px var(--color-cyan)';
      adminDot.style.animation = 'pulseCyan 2s infinite';
      adminText.style.color = 'var(--color-cyan)';
      adminText.innerText = 'Sistem Yöneticisi';
      adminBtn.style.opacity = '1';
    } else {
      adminDot.style.background = 'var(--text-muted)';
      adminDot.style.boxShadow = 'none';
      adminDot.style.animation = 'none';
      adminText.style.color = 'var(--text-muted)';
      adminText.innerText = 'Ziyaretçi Modu';
      adminBtn.style.opacity = '0.7';
    }
  }

  // Update trip modal member choice
  const memberContainer = document.getElementById('trip-member-container');
  if (memberContainer) {
    memberContainer.innerHTML = state.members.map(m => `
      <label class="checkbox-item">
        <input type="checkbox" value="${m}" class="trip-member-cb">
        <span class="cb-label">${m}</span>
      </label>
    `).join('');
  }
};

// --- Global Actions (Window defined for inline event handlers) ---

window.plannerRoutingControl = null;
window.plannerMapInstance = null;

window.analyzeRoute = async () => {
  const start = document.getElementById('plan-start-city').value;
  const end = document.getElementById('plan-end-city').value;
  const targetDateInput = document.getElementById('plan-date').value;
  
  if(!start || !end) {
    alert("Lütfen başlangıç ve bitiş şehirlerini seçin!");
    return;
  }
  
  document.getElementById('planner-results').style.display = 'flex';
  
  if(!window.plannerMapInstance) {
    window.plannerMapInstance = L.map('plannerMap').setView([39.0, 35.0], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(window.plannerMapInstance);

    const hqIcon = L.divIcon({
      html: '<div style="font-size: 2.2rem; color: #f7931e; filter: drop-shadow(0 0 10px rgba(247,147,30,0.8)); display:flex; justify-content:center; align-items:center;"><i class="ph-fill ph-house-line"></i></div>',
      className: 'hq-marker',
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
    L.marker([40.3498991, 27.9789405], {icon: hqIcon, zIndexOffset: 1000}).addTo(window.plannerMapInstance).bindPopup('<div style="color:#000; font-weight:bold; font-size:1.1rem; text-align:center;">TRCC Bandırma<br><span style="color:#666; font-size:0.9rem;">Merkez Şube Üssü</span></div>');
  }

  // Geocode cities
  const coords = await Promise.all([start, end].map(async city => {
    let geocodeCache = JSON.parse(localStorage.getItem('trcc_geocode')) || {};
    if(geocodeCache[city]) return geocodeCache[city];
    
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ', Turkey')}`);
    const data = await res.json();
    if(data && data.length > 0) {
      const latLon = {lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon)};
      geocodeCache[city] = latLon;
      localStorage.setItem('trcc_geocode', JSON.stringify(geocodeCache));
      return latLon;
    }
    return null;
  }));

  if(coords[0] && coords[1]) {
    if(window.plannerRoutingControl) {
       window.plannerMapInstance.removeControl(window.plannerRoutingControl);
    }
    
    window.plannerRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(coords[0].lat, coords[0].lon),
        L.latLng(coords[1].lat, coords[1].lon)
      ],
      routeWhileDragging: false,
      lineOptions: {
        styles: [{color: '#00F0FF', opacity: 0.8, weight: 6}]
      },
      show: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      createMarker: function(i, wp, nWps) {
        return L.circleMarker(wp.latLng, {radius: 6, color: (i===0)?'#10b981':'#FF4A00', fillColor: '#000', fillOpacity: 1, weight: 3});
      }
    }).addTo(window.plannerMapInstance);

    // Weather Fetching Logic using Open-Meteo
    if(targetDateInput) {
      document.getElementById('ai-weather-card').style.display = 'flex';
      
      const tdate = new Date(targetDateInput);
      const today = new Date();
      const diffTime = Math.abs(tdate - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      if(diffDays <= 16 && tdate >= new Date(today.setHours(0,0,0,0))) {
         try {
           const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords[1].lat}&longitude=${coords[1].lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto&start_date=${targetDateInput}&end_date=${targetDateInput}`);
           const weatherData = await weatherRes.json();
           
           if(weatherData.daily) {
             const maxT = weatherData.daily.temperature_2m_max[0];
             const minT = weatherData.daily.temperature_2m_min[0];
             const rain = weatherData.daily.precipitation_sum[0];
             const wind = weatherData.daily.windspeed_10m_max[0];
             const code = weatherData.daily.weathercode[0];
             
             let desc = "Bilinmiyor";
             let icon = "ph-cloud";
             let aiColor = "--text-muted";
             
             if(code === 0) { desc = "Güneşli (Optimum Asfalt)"; icon = "ph-sun"; aiColor = "#fcd34d"; }
             else if([1,2,3].includes(code)) { desc = "Kısmen Bulutlu"; icon = "ph-cloud"; aiColor = "#9ca3af"; }
             else if([45,48].includes(code)) { desc = "Sisli (Düşük Görüş)"; icon = "ph-cloud-fog"; aiColor = "#d1d5db"; }
             else if([51,53,55,61,63,65,80,81,82].includes(code)) { desc = "Yağmurlu (Kaygan Zemin)"; icon = "ph-cloud-rain"; aiColor = "var(--color-cyan)"; }
             else if([71,73,75,77,85,86].includes(code)) { desc = "Kar Yağışlı (Buzlanma Riski)"; icon = "ph-snowflake"; aiColor = "#93c5fd"; }
             else if([95,96,99].includes(code)) { desc = "Fırtına (UÇUŞ İPTAL ÖNERİSİ)"; icon = "ph-cloud-lightning"; aiColor = "var(--color-primary)"; }
             
             document.getElementById('ai-w-date').innerText = `HEDEF: ${end} | ${targetDateInput}`;
             document.getElementById('ai-w-desc').innerText = desc;
             document.getElementById('ai-w-desc').style.color = (code >= 95 ? 'var(--color-primary)' : '#fff');
             document.getElementById('ai-w-icon').innerHTML = `<i class="ph ${icon}"></i>`;
             document.getElementById('ai-w-icon').style.color = aiColor;
             
             document.getElementById('ai-w-temp').innerText = `${minT}°C / ${maxT}°C`;
             document.getElementById('ai-w-rain').innerText = `${rain} mm`;
             document.getElementById('ai-w-wind').innerText = `${wind} km/h`;
           }
         } catch(e) {
           document.getElementById('ai-w-desc').innerText = "Hava Durumu API'ye Ulaşılamadı";
         }
      } else {
        document.getElementById('ai-w-desc').innerText = "Tarih Kapsam Dışı (Maks. 16 Gün)";
        document.getElementById('ai-w-temp').innerText = "--";
        document.getElementById('ai-w-rain').innerText = "--";
        document.getElementById('ai-w-wind').innerText = "--";
      }
    } else {
       document.getElementById('ai-weather-card').style.display = 'none';
    }

    const weatherHtml = `<iframe width="100%" height="400" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=km%2Fh&zoom=8&overlay=rain&product=ecmwf&level=surface&lat=${coords[1].lat}&lon=${coords[1].lon}" frameborder="0" style="margin-top: 1rem; filter: brightness(0.9) contrast(1.1);"></iframe>`;
    document.getElementById('plannerWeather').innerHTML = weatherHtml;
  } else {
    alert("Kordinatlar bulunamadı!");
  }
};

let memberChartInstance = null;

window.openMemberStats = (name) => {
  const memberTrips = state.trips.filter(t => t.member === name);
  const totalKm = memberTrips.reduce((acc, t) => acc + Number(t.km), 0);
  const totalTrips = memberTrips.length;
  
  document.getElementById('ms-name').innerText = name;
  document.getElementById('ms-rank').innerHTML = getRank(totalKm);
  document.getElementById('ms-bike').innerHTML = `<i class="ph ph-motorcycle"></i> <span>${state.bikes[name] || 'Bilinmiyor'}</span>`;
  document.getElementById('ms-total-km').innerText = totalKm.toLocaleString() + ' KM';
  document.getElementById('ms-total-trips').innerText = totalTrips;
  
  // Calculate monthly trend
  const monthlyKms = {};
  memberTrips.forEach(t => {
    const d = new Date(t.date);
    const m = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    monthlyKms[m] = (monthlyKms[m] || 0) + Number(t.km);
  });
  
  const sortedMonths = Object.keys(monthlyKms).sort();
  const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  const labels = sortedMonths.map(m => {
    const [yy, mm] = m.split('-');
    return `${monthNames[parseInt(mm) - 1]} ${yy.slice(-2)}`;
  });
  const data = sortedMonths.map(m => monthlyKms[m]);

  if (memberChartInstance) {
    memberChartInstance.destroy();
  }
  
  const canvas = document.getElementById('memberTrendChart');
  if (canvas && window.Chart) {
    memberChartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Aylık KM',
          data: data,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#ffffff',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
  
  openModal('member-stats-modal');
};

window.openModal = (id) => {
  document.getElementById(id).style.display = 'flex';
};

window.closeModal = (id) => {
  document.getElementById(id).style.display = 'none';
};

window.editingMemberName = null;

window.openEditMember = (name) => {
  window.editingMemberName = name;
  document.getElementById('member-name').value = name;
  document.getElementById('member-bike').value = state.bikes[name] || '';
  document.querySelector('#member-modal h2').innerHTML = '<i class="ph ph-pencil-simple"></i> Pilotu Düzenle';
  openModal('member-modal');
};

window.resetData = () => {
  if (confirm('Tüm verileri silip orijinal listedeki verileri tekrar yüklemek istiyor musunuz?')) {
    localStorage.removeItem('trcc_members');
    localStorage.removeItem('trcc_trips');
    location.reload();
  }
};

window.removeMember = (name) => {
  if (confirm(`${name} isimli üyeyi silmek istediğinize emin misiniz?`)) {
    state.members = state.members.filter(m => m !== name);
    saveState();
    updateView();
  }
};

window.removeTrip = (index) => {
  if (confirm('Bu sürüş kaydını silmek istediğinize emin misiniz?')) {
    state.trips.splice(index, 1);
    saveState();
    updateView();
  }
};

window.exportData = () => {
  const headers = ['Tarih', 'Üye', 'Nereden', 'KM'];
  const rows = state.trips.map(t => [t.date, t.member, t.from, t.km]);
  
  let csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(",") + "\n"
    + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `TRCC_KM_Data_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- Initialization ---

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    state.currentView = link.dataset.view;
    updateView();
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  });
});

document.getElementById('member-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('member-name').value.trim();
  const bike = document.getElementById('member-bike').value.trim();
  
  if (window.editingMemberName) {
    if (name !== window.editingMemberName && state.members.includes(name)) {
      alert('Bu isimde başka bir pilot zaten var!');
      return;
    }
    
    const oldIndex = state.members.indexOf(window.editingMemberName);
    state.members[oldIndex] = name;
    
    delete state.bikes[window.editingMemberName];
    if (bike) state.bikes[name] = bike;
    
    state.trips = state.trips.map(t => {
      if (t.member === window.editingMemberName) t.member = name;
      return t;
    });
    
    window.editingMemberName = null;
    document.querySelector('#member-modal h2').innerHTML = '<i class="ph ph-user-plus"></i> Yeni Pilot Ekle';
    
  } else {
    if (!state.members.includes(name)) {
      state.members.push(name);
      if (bike) state.bikes[name] = bike;
    } else {
      alert('Bu üye zaten mevcut.');
      return;
    }
  }
  
  saveState();
  updateView();
  closeModal('member-modal');
  e.target.reset();
});

document.getElementById('trip-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedMembers = Array.from(document.querySelectorAll('.trip-member-cb:checked')).map(cb => cb.value);
  
  if (selectedMembers.length === 0) {
    alert('Lütfen en az bir üye seçin!');
    return;
  }

  const sCity = document.getElementById('start-city').value;
  const sDist = document.getElementById('start-dist').value;
  const eCity = document.getElementById('end-city').value;
  const eDist = document.getElementById('end-dist').value;
  const desc = document.getElementById('trip-desc').value.trim();

  if(!sCity || !sDist || !eCity || !eDist) {
    alert("Lütfen başlangıç ve bitiş rotasını seçiniz!");
    return;
  }

  let from = `${sCity} (${sDist}) ➔ ${eCity} (${eDist})`;
  if (desc) from += ` | ${desc}`;
  
  const km = document.getElementById('trip-km').value;
  const date = document.getElementById('trip-date').value;

  selectedMembers.forEach(member => {
    state.trips.push({ member, from, km, date });
  });

  saveState();
  updateView();
  closeModal('trip-modal');
  e.target.reset();
  
  document.getElementById('start-dist').innerHTML = '<option value="">İlçe Seçin</option>';
  document.getElementById('start-dist').disabled = true;
  document.getElementById('end-dist').innerHTML = '<option value="">İlçe Seçin</option>';
  document.getElementById('end-dist').disabled = true;
});

// --- City Initialization ---
let locationData = {};
fetch('/cities.json').then(r => r.json()).then(data => {
  locationData = data;
  const citiesHtml = `<option value="">İl Seçin</option>` + Object.keys(data).sort().map(c => `<option value="${c}">${c}</option>`).join('');
  
  const startCity = document.getElementById('start-city');
  const endCity = document.getElementById('end-city');
  if(startCity) startCity.innerHTML = citiesHtml;
  if(endCity) endCity.innerHTML = citiesHtml;
});

window.handleCityChange = (citySelectId, distSelectId) => {
  const city = document.getElementById(citySelectId).value;
  const distSelect = document.getElementById(distSelectId);
  if (city && locationData[city]) {
    distSelect.innerHTML = `<option value="">İlçe Seçin</option>` + locationData[city].sort().map(d => `<option value="${d}">${d}</option>`).join('');
    distSelect.disabled = false;
  } else {
    distSelect.innerHTML = `<option value="">İlçe Seçin</option>`;
    distSelect.disabled = true;
  }
};

document.getElementById('start-city').addEventListener('change', () => handleCityChange('start-city', 'start-dist'));
document.getElementById('end-city').addEventListener('change', () => handleCityChange('end-city', 'end-dist'));

// Initial Render
updateView();
console.log('TRCC KM Tracker initialized.');

window.toggleAdminMode = () => {
  if (state.isAdmin) {
    state.isAdmin = false;
    localStorage.removeItem('trcc_admin');
    updateView();
  } else {
    document.getElementById('admin-pass').value = '';
    openModal('admin-modal');
  }
};

document.getElementById('admin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('admin-pass').value;
  if (pass === 'trcc2026') {
    state.isAdmin = true;
    localStorage.setItem('trcc_admin', 'true');
    closeModal('admin-modal');
    updateView();
  } else {
    alert('Hatalı Yönetici Parolası!');
  }
});
