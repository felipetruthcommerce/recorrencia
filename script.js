// ===== Dados =====
const DATA = {
  mensal: [
    {
      title: "Essencial",
      price: "R$ 597,00",
      variant: "base",
      features: [
        "Grupo exclusivo com especialistas",
        "1 banner para loja virtual / mês",
        "1 card para Instagram / mês",
        "PriceMatrix™ — planilha de precificação por marketplace",
        "Rede de Fornecedores Homologados"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Escala",
      price: "R$ 697,00",
      variant: "recommended",
      tag: "Recomendado",
      features: [
        "Tudo do Essencial",
        "3 banners mensais (1 rotativo + 2 de categoria)",
        "3 cards para Instagram / mês",
        "Rede de Fornecedores Homologados"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Truth Master",
      price: "R$ 897,00",
      variant: "master",
      features: [
        "Tudo do Escala",
        "4 banners mensais (2 rotativos + 2 de categoria)",
        "4 cards para Instagram / mês",
        "1 Análise de performance em até 2 canais com insights"
      ],
      cta: { label: "Fale com um especialista", secondary: true }
    }
  ],

  semestral: [
    {
      title: "Essencial",
      price: "R$ 567,15",
      variant: "base",
      savings: "Economize R$ 179,10 no semestre",
      features: [
        "Grupo exclusivo com especialistas",
        "1 banner para loja virtual / mês",
        "1 card para Instagram / mês",
        "PriceMatrix™ — planilha de precificação por marketplace",
        "Rede de Fornecedores Homologados",
        "BÔNUS: +1 card para Instagram / mês",
        "1 Análise de performance em até 2 canais com insights"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Escala",
      price: "R$ 662,15",
      variant: "recommended",
      savings: "Economize R$ 209,10 no semestre",
      features: [
        "Tudo do Essencial",
        "3 banners mensais (1 rotativo + 2 de categoria)",
        "3 cards para Instagram / mês",
        "Rede de Fornecedores Homologados",
        "BÔNUS: +1 card para Instagram / mês",
        "2 Análises de performance em até 2 canais com insights"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Truth Master",
      price: "R$ 852,15",
      variant: "master",
      savings: "Economize R$ 269,10 no semestre",
      features: [
        "Tudo do Escala",
        "4 banners mensais (2 rotativos + 2 de categoria)",
        "4 cards para Instagram / mês",
        "1 Análise de performance em até 2 canais com insights",
        "BÔNUS: +2 cards para Instagram / mês",
        "Relatório de performance semestral com roadmap"
      ],
      cta: { label: "Fale com um especialista", secondary: true }
    }
  ],

  anual: [
    {
      title: "Essencial",
      price: "R$ 537,30",
      variant: "base",
      savings: "Economize R$ 716,40 no ano",
      features: [
        "Grupo exclusivo com especialistas",
        "1 banner para loja virtual / mês",
        "1 card para Instagram / mês",
        "PriceMatrix™ — planilha de precificação por marketplace",
        "Rede de Fornecedores Homologados",
        "BÔNUS: +1 card para Instagram / mês",
        "Relatório semestral de boas práticas",
        "Análise de performance em marketplaces e e-commerce + reunião com insights semestral"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Escala",
      price: "R$ 627,30",
      variant: "recommended",
      savings: "Economize R$ 836,40 no ano",
      features: [
        "Tudo do Essencial",
        "3 banners mensais (1 rotativo + 2 de categoria)",
        "3 cards para Instagram / mês",
        "Rede de Fornecedores Homologados",
        "BÔNUS: +1 banner extra por trimestre",
        "Call de análise de performance (até 2 marketplaces) + validação de UX/UI com insights"
      ],
      cta: { label: "Assinar agora", secondary: false }
    },
    {
      title: "Truth Master",
      price: "R$ 807,30",
      variant: "master",
      savings: "Economize R$ 1.076,40 no ano",
      features: [
        "Tudo do Escala",
        "4 banners mensais (2 rotativos + 2 de categoria)",
        "4 cards para Instagram / mês",
        "1 Análise de performance em até 2 canais com insights",
        "BÔNUS: +1 banner extra por trimestre",
        "Selo “Cliente Premium Truth”",
        "Call de análise de performance (até 2 marketplaces) + validação de UX/UI com insights"
      ],
      cta: { label: "Fale com um especialista", secondary: true }
    }
  ]
};

// ===== Helpers =====
const $  = (s,ctx=document)=>ctx.querySelector(s);
const $$ = (s,ctx=document)=>[...ctx.querySelectorAll(s)];
const cardsRoot = $("#cards");
const prevBtn   = $(".cards-nav .prev");
const nextBtn   = $(".cards-nav .next");

function iconCheck(){ return `<span class="icon" aria-hidden="true">✓</span>`; }

// ===== Render =====
function render(period="mensal"){
  cardsRoot.classList.add("fade");
  cardsRoot.innerHTML = "";

  DATA[period].forEach(plan=>{
    const card = document.createElement("article");
    card.className = "card" +
      (plan.variant==="recommended" ? " recommended" : "") +
      (plan.variant==="master" ? " master" : "");

    // Cabeçalho
    const head = document.createElement("div");
    head.className = "card-head";
    head.innerHTML =
      `<h2 class="plan-title">${plan.title}</h2>` +
      (plan.tag ? `<span class="badge">${plan.tag}</span>` : "");

    // Preço
    const price = document.createElement("div");
    price.className = "price";
    price.innerHTML = `${plan.price}<small>/mês</small>`;

    // Savings
    let savingsEl = null;
    if (plan.savings){
      savingsEl = document.createElement("div");
      savingsEl.className = "savings";
      const valorNegrito = plan.savings.replace(/(R\$[\s\d.,]+)/, "<strong class='highlight'>$1</strong>");
      savingsEl.innerHTML = valorNegrito;
    }

    // Linha
    const hr = document.createElement("div");
    hr.className = "hr";

    // Benefícios
    const feats = document.createElement("div");
    feats.className = "features";
    feats.innerHTML = plan.features
      .map(f => `<div class="feature">${iconCheck()}<div>${f}</div></div>`)
      .join("");

    // CTA
    const ctaWrap = document.createElement("div");
    ctaWrap.className = "card-cta";
    ctaWrap.innerHTML = `<button class="cta ${plan.cta.secondary ? "secondary" : ""}" aria-label="${plan.cta.label} — ${plan.title}">
      ${plan.cta.label}
    </button>`;

    // Montagem
    card.append(head, price);
    if (savingsEl) card.appendChild(savingsEl);
    card.append(hr, feats, ctaWrap);
    cardsRoot.appendChild(card);
  });

  setTimeout(()=>cardsRoot.classList.remove("fade"), 350);
  updateArrows();
}

// ===== Carrossel mobile =====
function scrollByOneCard(dir=1){
  const first = cardsRoot.querySelector(".card");
  if(!first) return;
  const gap = parseInt(getComputedStyle(cardsRoot).gap || "18", 10);
  const delta = first.getBoundingClientRect().width + gap;
  cardsRoot.scrollBy({ left: dir*delta, behavior: "smooth" });
}
function updateArrows(){
  if(!prevBtn || !nextBtn) return;
  const maxScroll = cardsRoot.scrollWidth - cardsRoot.clientWidth - 2;
  prevBtn.disabled = cardsRoot.scrollLeft <= 2;
  nextBtn.disabled = cardsRoot.scrollLeft >= maxScroll;
}
if (prevBtn && nextBtn){
  prevBtn.addEventListener("click", ()=>scrollByOneCard(-1));
  nextBtn.addEventListener("click", ()=>scrollByOneCard(1));
  cardsRoot.addEventListener("scroll", updateArrows, { passive:true });
  window.addEventListener("resize", updateArrows);
}

// ===== Toggle =====
const buttons = $$(".toggle-btn");
buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    buttons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
    btn.classList.add("active"); btn.setAttribute("aria-selected","true");
    render(btn.dataset.billing);
  });
});

// Inicial
render("mensal");
