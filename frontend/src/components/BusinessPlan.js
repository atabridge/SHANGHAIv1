import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Home, 
  TrendingUp, 
  Building, 
  ChefHat, 
  MapPin, 
  DollarSign, 
  Target,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { businessPlanData, navigationSections } from '../mock';
import { 
  MarketGrowthChart, 
  CostComparisonChart, 
  InvestmentPieChart, 
  RevenueProjectionChart,
  DemographicsChart 
} from './Charts';

const iconMap = {
  Home, TrendingUp, Building, ChefHat, MapPin, DollarSign, Target
};

const BusinessPlan = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const Navigation = () => (
    <nav className="space-y-2">
      {navigationSections.map((section) => {
        const Icon = iconMap[section.icon];
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-red-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{section.title}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header - Fixed Position */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-40">
        <h1 className="text-lg font-bold text-gray-900">Shanghai Cloud Kitchen</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Content Padding */}
      <div className="lg:hidden pt-16"></div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="bg-white w-64 h-full p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Menü</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>
            <Navigation />
          </div>
        </div>
      )}

      <div className="lg:flex">
        {/* Desktop Sidebar - Fixed Position */}
        <div className="hidden lg:block w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen overflow-y-auto z-30">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Shanghai Cloud Kitchen</h1>
              <p className="text-sm text-gray-600">CAVA Tarzı Akdeniz Mutfağı</p>
            </div>
            <Navigation />
          </div>
        </div>

        {/* Main Content with Left Margin for Fixed Sidebar */}
        <div className="lg:ml-64 flex-1 max-w-4xl mx-auto p-6 lg:p-8">
          {/* Hero Section */}
          <section id="overview" className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Yatırım Sunumu
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {businessPlanData.company.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {businessPlanData.company.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-red-100 text-red-800 px-4 py-2">
                  Taze, Sağlıklı
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  Özelleştirilebilir
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                  Cloud Kitchen
                </Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">2M RMB</h3>
                  <p className="text-sm text-gray-600">İlk Yıl Hedef Ciro</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">25-45 Yaş</h3>
                  <p className="text-sm text-gray-600">Hedef Demografisi</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-6 text-center">
                  <Building className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">4 Lokasyon</h3>
                  <p className="text-sm text-gray-600">12 Ay İçinde</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">20% Kar</h3>
                  <p className="text-sm text-gray-600">Net Profit Margin</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">🎯 Vizyon</h3>
                    <p className="text-red-100 mb-4">{businessPlanData.executiveSummary.vision}</p>
                    <h3 className="font-semibold mb-2">👥 Hedef Pazar</h3>
                    <p className="text-red-100">{businessPlanData.executiveSummary.targetMarket}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🏢 İş Modeli</h3>
                    <p className="text-red-100 mb-4">{businessPlanData.executiveSummary.businessModel}</p>
                    <h3 className="font-semibold mb-2">💰 Finansal Hedef</h3>
                    <p className="text-red-100">{businessPlanData.executiveSummary.financialTarget}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Market Analysis */}
          <section id="market" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pazar Analizi</h2>
              <p className="text-lg text-gray-600">Shanghai yemek teslimat pazarı ve cloud kitchen büyüme trendi</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                    Shanghai Yemek Pazarı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-600">{businessPlanData.marketData?.shanghai_market?.size || "50+ milyar"}</h3>
                      <p className="text-sm text-gray-600">Pazar Büyüklüğü (RMB)</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-600">{businessPlanData.marketData?.shanghai_market?.growth || "15-20%"}</h3>
                      <p className="text-sm text-gray-600">Yıllık Büyüme</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-600">{businessPlanData.marketData?.shanghai_market?.penetration || "85%+"}</h3>
                      <p className="text-sm text-gray-600">Online Penetrasyon</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-600">{businessPlanData.marketData?.shanghai_market?.average_order || "45-80"}</h3>
                      <p className="text-sm text-gray-600">Ortalama Sipariş (RMB)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hedef Müşteri Demografisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <DemographicsChart data={businessPlanData.targetDemographics} />
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-1 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pazar Büyüme Trendi (2020-2027)</CardTitle>
                </CardHeader>
                <CardContent>
                  <MarketGrowthChart data={businessPlanData.marketData?.cloud_kitchen_growth || []} />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cloud Kitchen vs Geleneksel Restoran Maliyet Karşılaştırması</CardTitle>
              </CardHeader>
              <CardContent>
                <CostComparisonChart data={businessPlanData.marketData?.cost_comparison || []} />
              </CardContent>
            </Card>
          </section>

          {/* Business Model */}
          <section id="business" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">İş Modeli</h2>
              <p className="text-lg text-gray-600">Cloud Kitchen avantajları ve CAVA model uyarlaması</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Düşük Maliyet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• %60-70 daha düşük kira</li>
                    <li>• Servis personeli yok</li>
                    <li>• Prime location gerektirmez</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Hızlı Ölçekleme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 4-6 hafta açılış süresi</li>
                    <li>• Düşük yatırım maliyeti</li>
                    <li>• Test kitchen avantajı</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Data-Driven
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Gerçek zamanlı takip</li>
                    <li>• Müşteri davranış analizi</li>
                    <li>• Dinamik menü optimizasyonu</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-red-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">CAVA Model Uyarlaması</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🥗 Menü Konsepti</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Build-your-own bowl sistemi</li>
                      <li>• Taze malzemeler (günlük tedarik)</li>
                      <li>• Akdeniz + Asya füzyon lezzetleri</li>
                      <li>• Vegan/vegetarian seçenekler</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">💰 Fiyatlandırma</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bowl: 35-55 RMB</li>
                      <li>• Premium bowl: 55-75 RMB</li>
                      <li>• Yan ürünler: 15-25 RMB</li>
                      <li>• Ortalama sipariş: 52 RMB</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Menu Section */}
          <section id="menu" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Menü & Ürünler</h2>
              <p className="text-lg text-gray-600">Signature bowls ve özelleştirilebilir seçenekler</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {(businessPlanData.menu?.signature_bowls || []).map((bowl, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <ChefHat className="w-8 h-8 text-red-600" />
                      <Badge className="bg-red-100 text-red-800">{bowl.price}</Badge>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{bowl.name}</h3>
                    <p className="text-gray-600 text-sm">{bowl.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🥙 Pita Seçenekleri</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(businessPlanData.menu?.pitaOptions || []).map((pita, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 text-blue-600 flex items-center justify-center font-bold text-lg">🥙</div>
                        <Badge className="bg-blue-100 text-blue-800">{pita.price}</Badge>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{pita.name}</h3>
                      <p className="text-gray-600 text-sm">{pita.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">🥩 Protein Seçenekleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(businessPlanData.menu?.proteins || []).map((protein, index) => (
                      <Badge key={index} variant="secondary" className="bg-red-100 text-red-800">
                        {protein}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">🥗 Toppings & Soslar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(businessPlanData.menu?.toppings || []).map((topping, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {topping}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">🥖 Yan Ürünler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(businessPlanData.menu?.sides || []).map((side, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                        {side}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Operations */}
          <section id="operations" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Operasyon Planı</h2>
              <p className="text-lg text-gray-600">Lokasyon stratejisi ve aşamalı büyüme planı</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 1 Lokasyonlar (İlk 6 ay)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {businessPlanData.locations.filter(loc => loc.phase === 1).map((location, index) => (
                  <Card key={index} className="border-red-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-600">
                        <MapPin className="w-5 h-5 mr-2" />
                        {location.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Alan:</span>
                          <span>{location.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Kapasite:</span>
                          <span>{location.capacity}</span>
                        </div>
                        <div className="mt-3">
                          <span className="font-medium">Özellikler:</span>
                          <ul className="mt-2 space-y-1">
                            {(location.features || []).map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 2 Lokasyonlar (6-12 ay)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {businessPlanData.locations.filter(loc => loc.phase === 2).map((location, index) => (
                  <Card key={index} className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-600">
                        <Clock className="w-5 h-5 mr-2" />
                        {location.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Alan:</span>
                          <span>{location.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Kapasite:</span>
                          <span>{location.capacity}</span>
                        </div>
                        <div className="mt-3">
                          <span className="font-medium">Özellikler:</span>
                          <ul className="mt-2 space-y-1">
                            {(location.features || []).map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🚛 Tedarik Zinciri</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• %70 yerel, %30 ithal malzeme</li>
                    <li>• HACCP standartları</li>
                    <li>• Çevre dostu ambalaj</li>
                    <li>• Günlük taze tedarik</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💻 Teknoloji Altyapısı</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Meituan, Ele.me entegrasyonu</li>
                    <li>• Sipariş takip sistemi</li>
                    <li>• WeChat mini-program</li>
                    <li>• Çoklu ödeme sistemleri</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Financial Section */}
          <section id="financial" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Finansal Projeksiyonlar</h2>
              <p className="text-lg text-gray-600">Başlangıç yatırımı ve gelir tahminleri</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Başlangıç Yatırımı (İlk 2 Lokasyon)</CardTitle>
                </CardHeader>
                <CardContent>
                  <InvestmentPieChart data={businessPlanData.financialData?.initial_investment || []} />
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-gray-900">1,000,000 RMB</span>
                    <p className="text-sm text-gray-600">Toplam Yatırım</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gelir Projeksiyonu (İlk Yıl)</CardTitle>
                </CardHeader>
                <CardContent>
                  <RevenueProjectionChart data={businessPlanData.financialData?.revenue_projection || []} />
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-green-600">
                      {businessPlanData.financialData?.profitability?.yearly_revenue?.toLocaleString() || '6,300,000'} RMB
                    </span>
                    <p className="text-sm text-gray-600">Yıllık Ciro Hedefi</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-600">
                    {((businessPlanData.financialData?.profitability?.yearly_revenue || 6300000) / 1000000).toFixed(1)}M RMB
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Yıllık Ciro</p>
                  <div className="text-xs text-green-700">İlk yıl hedef</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {((businessPlanData.financialData?.profitability?.operation_costs || 5040000) / 1000000).toFixed(2)}M RMB
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Operasyon Giderleri</p>
                  <div className="text-xs text-blue-700">{businessPlanData.financialData?.profitability?.margin ? (100 - businessPlanData.financialData.profitability.margin) : 80}% gider oranı</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-purple-600">
                    {((businessPlanData.financialData?.profitability?.net_profit || 1260000) / 1000000).toFixed(2)}M RMB
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Net Kâr</p>
                  <div className="text-xs text-purple-700">{businessPlanData.financialData?.profitability?.margin || 20}% net marj</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Investment Section */}
          <section id="investment" className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Yatırım Teklifi</h2>
              <p className="text-lg text-gray-600">Aranan yatırım ve yatırımcı fırsatları</p>
            </div>

            <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold mb-2">{businessPlanData.investment?.amount || "1,500,000 RMB"}</h3>
                  <p className="text-xl">Aranan Yatırım</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {(businessPlanData.investment?.usage || []).map((usage, index) => (
                    <div key={index} className="text-center">
                      <h4 className="text-2xl font-bold">%{usage.percentage}</h4>
                      <p className="text-sm opacity-90">{usage.purpose}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    Yatırımcı İçin Fırsatlar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                      Hızla büyüyen pazar segmentinde erken giriş
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                      Kanıtlanmış ABD modeli
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                      Güçlü marka potansiyeli
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                      Ölçeklenebilir teknoloji altyapısı
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                      Güçlü financial return potansiyeli
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    ROI Projeksiyonu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(businessPlanData.investment?.roi_projection || []).map((roi, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium">{roi.year}. Yıl:</span>
                        <span className="font-bold text-green-600">{roi.roi}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Başarı Kriterleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">6 Aylık Hedefler</h4>
                      <ul className="space-y-2">
                        {(businessPlanData.successMetrics?.six_months || []).map((metric, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">12 Aylık Hedefler</h4>
                      <ul className="space-y-2">
                        {(businessPlanData.successMetrics?.twelve_months || []).map((metric, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Bu sunum gizlidir ve sadece potansiyel yatırımcılar için hazırlanmıştır.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Shanghai Cloud Kitchen Project © 2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;