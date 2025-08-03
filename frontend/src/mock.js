// Mock data for Shanghai Cloud Kitchen Business Plan

export const businessPlanData = {
  // Company Info
  company: {
    name: "SHANGHAI CLOUD KITCHEN PROJECT",
    subtitle: "CAVA Tarzı Akdeniz Mutfağı - Yatırım Sunumu",
    tagline: "Taze, Sağlıklı, Özelleştirilebilir",
    vision: "Shanghai'da CAVA restorant zincirine benzer bir model ile premium, sağlıklı ve özelleştirilebilir Akdeniz yemeklerini cloud kitchen formatında sunmak.",
    target: "Shanghai'daki sağlık bilincine sahip, premium yemek deneyimi arayan 25-45 yaş arası kentli profesyoneller."
  },

  // Executive Summary
  executiveSummary: {
    vision: "Shanghai'da CAVA restorant zincirine benzer bir model ile premium, sağlıklı ve özelleştirilebilir Akdeniz yemeklerini cloud kitchen formatında sunmak.",
    targetMarket: "Shanghai'daki sağlık bilincine sahip, premium yemek deneyimi arayan 25-45 yaş arası kentli profesyoneller.",
    businessModel: "Cloud kitchen (hayalet mutfak) formatında, sadece teslimat ve paket servis odaklı operasyon.",
    financialTarget: "İlk yıl 2 milyon RMB ciro, %20 net kar marjı."
  },

  // Market Analysis Data
  marketData: {
    shanghaiMarket: {
      size: "50+ milyar RMB",
      growth: "15-20%",
      penetration: "85%+",
      averageOrder: "45-80 RMB"
    },
    cloudKitchenGrowth: [
      { year: 2020, traditional: 5, cloudKitchen: 25, marketShare: 15 },
      { year: 2021, traditional: 6, cloudKitchen: 30, marketShare: 18 },
      { year: 2022, traditional: 7, cloudKitchen: 35, marketShare: 22 },
      { year: 2023, traditional: 8, cloudKitchen: 40, marketShare: 26 },
      { year: 2024, traditional: 8, cloudKitchen: 45, marketShare: 28 },
      { year: 2025, traditional: 9, cloudKitchen: 50, marketShare: 32 },
      { year: 2026, traditional: 9, cloudKitchen: 55, marketShare: 37 },
      { year: 2027, traditional: 10, cloudKitchen: 60, marketShare: 45 }
    ],
    costComparison: [
      { category: "Kira Maliyeti", traditional: 100, cloudKitchen: 35, savings: 65 },
      { category: "Personel Gideri", traditional: 100, cloudKitchen: 55, savings: 45 },
      { category: "Dekor/Mobilya", traditional: 100, cloudKitchen: 12, savings: 88 },
      { category: "Toplam CapEx", traditional: 100, cloudKitchen: 40, savings: 60 }
    ]
  },

  // Menu Items
  menu: {
    signatureBowls: [
      { name: "Mediterranean Power Bowl", price: "65 RMB", description: "Protein, taze sebzeler ve Akdeniz sosları" },
      { name: "Greek Goddess Bowl", price: "58 RMB", description: "Klasik Yunan lezzetleri modern sunumla" },
      { name: "Levantine Fusion Bowl", price: "62 RMB", description: "Doğu Akdeniz tatları Asya dokunuşlarıyla" },
      { name: "Shanghai Spice Bowl", price: "55 RMB", description: "Yerel damak tadına uyarlanmış özel karışım" },
      { name: "Quinoa Garden Bowl", price: "52 RMB", description: "Vegan dostu süper gıda kasesi" }
    ],
    pitaOptions: [
      { name: "Mediterranean Pita Wrap", price: "38 RMB", description: "Taze malzemelerle dolu klasik pita" },
      { name: "Chicken Shawarma Pita", price: "42 RMB", description: "Baharatlı tavuk ve taze soslarla" },
      { name: "Falafel Pita Delight", price: "35 RMB", description: "Ev yapımı falafel ve tahini soslu" },
      { name: "Shanghai Fusion Pita", price: "44 RMB", description: "Doğu-Batı füzyon lezzetleri" }
    ],
    proteins: ["Grilled Chicken", "Lamb Kofta", "Falafel", "Grilled Salmon", "Tofu Teriyaki"],
    toppings: ["Hummus", "Tzatziki", "Harissa", "Tabbouleh", "Roasted Vegetables", "Fresh Herbs"],
    sides: ["Pita Bread", "Baklava Bites", "Fresh Fruit Cups", "Premium Beverages"]
  },

  // Financial Projections
  financialData: {
    initialInvestment: [
      { category: "Mutfak Ekipmanları", amount: 300000, percentage: 30 },
      { category: "Renovasyon & Kurulum", amount: 200000, percentage: 20 },
      { category: "Marka Geliştirme", amount: 50000, percentage: 5 },
      { category: "İlk Stok & Malzeme", amount: 100000, percentage: 10 },
      { category: "Teknoloji & Yazılım", amount: 80000, percentage: 8 },
      { category: "Pazarlama", amount: 150000, percentage: 15 },
      { category: "İşletme Sermayesi", amount: 120000, percentage: 12 }
    ],
    revenueProjection: [
      { month: "Ay 1-3", orders: 3000, avgValue: 50, revenue: 150000, cumulative: 450000 },
      { month: "Ay 4-6", orders: 8000, avgValue: 52, revenue: 416000, cumulative: 1698000 },
      { month: "Ay 7-9", orders: 12000, avgValue: 55, revenue: 660000, cumulative: 3678000 },
      { month: "Ay 10-12", orders: 15000, avgValue: 58, revenue: 870000, cumulative: 6288000 }
    ]
  },

  // Target Demographics
  targetDemographics: [
    { age: "25-35 yaş", percentage: 45, description: "Tech-savvy profesyoneller" },
    { age: "35-45 yaş", percentage: 35, description: "Aileli yöneticiler" },
    { age: "45+ yaş", percentage: 20, description: "Üst düzey yöneticiler" }
  ],

  // Locations
  locations: [
    {
      name: "Jing'an Cloud Kitchen",
      area: "200 m²",
      capacity: "150 sipariş/gün",
      features: ["Premium konut bölgesi", "5 km teslimat yarıçapı"],
      phase: 1
    },
    {
      name: "Huangpu Cloud Kitchen", 
      area: "180 m²",
      capacity: "120 sipariş/gün",
      features: ["İş merkezi yakınlığı", "Hızlı teslimat imkanı"],
      phase: 1
    },
    {
      name: "Pudong Cloud Kitchen",
      area: "220 m²", 
      capacity: "180 sipariş/gün",
      features: ["Finansal merkez", "Yüksek gelir demografisi"],
      phase: 2
    },
    {
      name: "Xuhui Cloud Kitchen",
      area: "190 m²",
      capacity: "140 sipariş/gün", 
      features: ["Genç profesyoneller", "Üniversite yakınlığı"],
      phase: 2
    }
  ],

  // Success Metrics
  successMetrics: {
    sixMonths: [
      "2 cloud kitchen operasyonda",
      "Günlük 200+ sipariş",
      "4.5+ yıldız rating",
      "%15+ repeat customer rate",
      "%30+ marka bilinirliği"
    ],
    twelveMonths: [
      "4 cloud kitchen operasyonda", 
      "Günlük 600+ sipariş",
      "6+ milyon RMB ciro",
      "%20+ net profit margin",
      "%60+ marka bilinirliği"
    ]
  },

  // Investment
  investment: {
    amount: "1,500,000 RMB",
    usage: [
      { purpose: "Cloud kitchen kurulum", percentage: 60 },
      { purpose: "Marka geliştirme & pazarlama", percentage: 25 },
      { purpose: "İşletme sermayesi", percentage: 15 }
    ],
    roiProjection: [
      { year: 2, roi: "150%" },
      { year: 3, roi: "300%" },
      { year: 5, roi: "Exit Strategy: Series A (3-5x multiple)" }
    ]
  }
};

// Navigation sections
export const navigationSections = [
  { id: "overview", title: "Genel Bakış", icon: "Home" },
  { id: "market", title: "Pazar Analizi", icon: "TrendingUp" },
  { id: "business", title: "İş Modeli", icon: "Building" },
  { id: "menu", title: "Menü & Ürünler", icon: "ChefHat" },
  { id: "operations", title: "Operasyon", icon: "MapPin" },
  { id: "financial", title: "Finansal", icon: "DollarSign" },
  { id: "investment", title: "Yatırım", icon: "Target" }
];