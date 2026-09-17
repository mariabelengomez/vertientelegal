/* Turns SITE_DATA into DOM. No framework — just template strings + insertAdjacentHTML. */

const ICONS = {
  droplet:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2.5s6.5 7.2 6.5 12A6.5 6.5 0 1 1 5.5 14.5C5.5 9.7 12 2.5 12 2.5Z"/></svg>',
  bolt:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke-linejoin="round"/></svg>',
  tree:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 5 12h4l-5 7h16l-5-7h4L12 3Z" stroke-linejoin="round"/><path d="M12 19v2"/></svg>',
  mountain:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 19 6-10 4 6 2-3 6 7Z" stroke-linejoin="round" stroke-linecap="round"/></svg>',
};

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderPracticeAreas() {
  const grid = document.querySelector("[data-practice-grid]");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.practiceAreas
    .map(
      (area) => `
      <article class="card">
        <div class="icon-tile">${ICONS[area.icon] ?? ""}</div>
        <h3 class="card__title">${escapeHTML(area.title)}</h3>
        <p class="card__desc">${escapeHTML(area.desc)}</p>
        <div class="card__tags">
          ${area.tags.map((tag) => `<span class="pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
}

function renderSectorWork() {
  const list = document.querySelector("[data-sector-list]");
  if (!list) return;

  list.innerHTML = SITE_DATA.sectorWork
    .map(
      (item, i) => `
      <div class="numbered-row">
        <div class="numbered-row__title">
          <span class="numbered-row__index">${String(i + 1).padStart(2, "0")}</span>
          <span>${escapeHTML(item.title)}</span>
        </div>
        <p>${escapeHTML(item.desc)}</p>
      </div>`
    )
    .join("");
}

function renderAboutStats() {
  const dl = document.querySelector("[data-about-stats]");
  if (!dl) return;

  dl.innerHTML = SITE_DATA.aboutStats
    .map(
      (stat) => `
      <div class="stat-row">
        <dt>${escapeHTML(stat.label)}</dt>
        <dd>${escapeHTML(stat.value)}</dd>
      </div>`
    )
    .join("");
}

function renderBookingSteps() {
  const ol = document.querySelector("[data-booking-steps]");
  if (!ol) return;

  ol.innerHTML = SITE_DATA.bookingSteps
    .map(
      (step, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span> ${escapeHTML(step)}</li>`
    )
    .join("");
}

function renderAreaOptions() {
  const select = document.querySelector("[data-area-select]");
  if (!select) return;

  select.innerHTML = SITE_DATA.practiceAreas
    .map((area) => `<option value="${escapeHTML(area.title)}">${escapeHTML(area.title)}</option>`)
    .join("");
}

function renderPhoneNumbers() {
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = SITE_DATA.phone;
  });
  document.querySelectorAll("[data-phone-href]").forEach((el) => {
    el.href = `tel:${SITE_DATA.phone.replace(/\s+/g, "")}`;
  });
}

function renderAll() {
  renderPracticeAreas();
  renderSectorWork();
  renderAboutStats();
  renderBookingSteps();
  renderAreaOptions();
  renderPhoneNumbers();
}
