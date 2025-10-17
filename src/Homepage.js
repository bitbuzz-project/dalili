import React, { useState } from 'react';
import { Search, FileText, CreditCard, Car, Home, Users, Phone, MapPin, Clock, ChevronRight, Gavel } from 'lucide-react'; 

// قائمة بالوثائق المتاحة وكلماتها المفتاحية لتمكين البحث المرن
const availableDocuments = [
  { 
    key: 'cnie', 
    titles: ['بطاقة التعريف', 'بطاقة التعريف الوطنية', 'carte d\'identité', 'cnie', 'بطاقة', 'تعريف', 'وطنية'],
    titleAr: 'بطاقة التعريف الوطنية',
    titleFr: "Carte d'identité nationale",
    color: 'from-blue-500 to-blue-600',
    icon: <CreditCard className="w-8 h-8" />,
    searches: '12k+'
  },
  { 
    key: 'passport', 
    titles: ['جواز السفر', 'جواز السفر البيومتري', 'passeport', 'سفر', 'جواز', 'بيومتري'],
    titleAr: 'جواز السفر البيومتري',
    titleFr: 'Passeport Biométrique',
    color: 'from-green-500 to-green-600',
    icon: <FileText className="w-8 h-8" />,
    searches: '8.5k+'
  },
  { 
    key: 'acte_naissance', 
    titles: ['عقد الميلاد', 'شهادة الميلاد', 'acte de naissance', 'ميلاد', 'ازدياد', 'عقد', 'نسخة كاملة'],
    titleAr: 'عقد/شهادة الميلاد',
    titleFr: 'Acte de naissance',
    color: 'from-pink-500 to-pink-600',
    icon: <Users className="w-8 h-8" />,
    searches: '7k+'
  },
  { 
    key: 'acte_mariage', 
    titles: ['عقد الزواج', 'وثيقة الزواج', 'acte de mariage', 'زواج', 'توثيق', 'عقد'],
    titleAr: 'عقد الزواج',
    titleFr: 'Acte de mariage',
    color: 'from-red-500 to-pink-600',
    icon: <Users className="w-8 h-8" />,
    searches: '6k+'
  },
  { 
    key: 'acte_deces', 
    titles: ['شهادة الوفاة', 'رسم الوفاة', 'acte de décès', 'وفاة', 'دفن', 'إرث'],
    titleAr: 'شهادة الوفاة (نسخة)',
    titleFr: 'Acte de décès',
    color: 'from-gray-500 to-neutral-600',
    icon: <Gavel className="w-8 h-8" />,
    searches: '4k+'
  },
  { 
    key: 'residence', 
    titles: ['شهادة السكنى', 'شهادة الإقامة', 'attestation de résidence', 'سكنى', 'إقامة', 'فاتورة'],
    titleAr: 'شهادة السكنى',
    titleFr: 'Attestation de résidence',
    color: 'from-orange-500 to-amber-600',
    icon: <Home className="w-8 h-8" />,
    searches: '10k+'
  },
  { 
    key: 'property_title', 
    titles: ['شهادة الملكية', 'الرسم العقاري', 'titre foncier', 'ملكية', 'عقار', 'محافظة عقارية'],
    titleAr: 'شهادة الملكية العقارية',
    titleFr: 'Titre Foncier',
    color: 'from-teal-500 to-cyan-600',
    icon: <Home className="w-8 h-8" />,
    searches: '9k+'
  },
  // Other documents (for search, no pages yet)
  { 
    key: 'permis_conduire', 
    titles: ['رخصة السياقة', 'permis de conduire', 'سياقة', 'رخصة'],
    titleAr: 'رخصة السياقة',
    titleFr: 'Permis de conduire',
    color: 'from-purple-500 to-purple-600',
    icon: <Car className="w-8 h-8" />,
    searches: '10k+'
  },
  { 
    key: 'ramed', 
    titles: ['الرميد', 'ramed', 'assurance médicale'],
    titleAr: 'الرميد RAMED',
    titleFr: 'Assistance médicale',
    color: 'from-red-500 to-red-600',
    icon: <Phone className="w-8 h-8" />,
    searches: '5k+'
  }
];

// الوثائق التي لديها صفحات مفصلة حالياً
const searchableKeys = ['cnie', 'passport', 'acte_naissance', 'acte_mariage', 'acte_deces', 'residence', 'property_title'];


export default function Homepage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); 

  // نستخدم أول 6 وثائق فقط للعرض في قسم الخدمات الأكثر طلباً
  const popularServices = availableDocuments.slice(0, 6).map(doc => ({
    ...doc,
    title: doc.titleAr,
    icon: doc.icon
  }));

  const quickLinks = [
    { title: 'الوثائق المطلوبة', icon: <FileText className="w-5 h-5" /> },
    { title: 'أقرب إدارة', icon: <MapPin className="w-5 h-5" /> },
    { title: 'حاسبة الرسوم', icon: <CreditCard className="w-5 h-5" /> },
    { title: 'مواعيد العمل', icon: <Clock className="w-5 h-5" /> }
  ];

  const recentGuides = [
    {
      title: 'كيفاش تستخرج بطاقة التعريف؟',
      duration: '5 دقائق قراءة',
      views: '2.3k'
    },
    {
      title: 'شنو الوثائق لي خاصك لجواز السفر؟',
      duration: '4 دقائق قراءة',
      views: '1.8k'
    },
    {
      title: 'خطوات الحصول على رخصة السياقة',
      duration: '7 دقائق قراءة',
      views: '3.1k'
    }
  ];
  
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase().trim();
      const filteredSuggestions = availableDocuments
        .filter(doc => 
          doc.titles.some(title => title.toLowerCase().includes(lowerQuery)) || 
          doc.titleFr.toLowerCase().includes(lowerQuery)
        )
        .slice(0, 5); 
      
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (key) => {
    if (searchableKeys.includes(key)) {
        onNavigate(key);
    } else {
        alert(`عفواً، لا تتوفر صفحة تفصيلية لـ ${availableDocuments.find(doc => doc.key === key)?.titleAr || key} بعد.`);
        setSuggestions([]);
        setSearchQuery('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
        // إذا كان هناك اقتراحات، نذهب إلى أول نتيجة
        handleSuggestionClick(suggestions[0].key);
    } else {
        alert(`عفواً، لم يتم العثور على نتائج مطابقة لـ "${searchQuery}". الرجاء المحاولة بكلمة مختلفة.`);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">دليلك</h1>
                <p className="text-xs text-gray-500">دليلك للإجراءات الإدارية</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">الرئيسية</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">كل الخدمات</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">من نحن</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            شنو بغيتي <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">دير اليوم؟</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            كل الإجراءات الإدارية فبلاصة وحدة، بالدارجة وبسهولة 🇲🇦
          </p>
        </div>

        {/* Search Bar with Suggestions */}
        <div className="max-w-3xl mx-auto mb-8 relative">
          <form onSubmit={handleSearch} className="relative">
            <input
              key="search-input" // Added key for better React handling
              type="text"
              value={searchQuery}
              onChange={handleInputChange} 
              placeholder="ابحث على أي إجراء إداري... (مثلاً: بطاقة، جواز، ميلاد...)"
              className="w-full px-6 py-5 pr-14 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none shadow-lg text-lg"
              // The onBlur/onFocus handlers are commented out as they sometimes interfere in these limited environments
            />
            <button type="submit" className="absolute right-0 top-0 h-full px-4 rounded-r-2xl text-gray-400 hover:text-green-600">
                <Search className="w-6 h-6" />
            </button>
          </form>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && searchQuery.trim().length > 0 && (
            <div className="absolute top-full w-full bg-white rounded-xl shadow-xl mt-2 z-10 border border-gray-100 overflow-hidden">
              {suggestions.map((doc) => (
                <div
                  key={doc.key}
                  onClick={() => handleSuggestionClick(doc.key)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {doc.icon}
                    <div>
                      <p className="font-medium text-gray-900">{doc.titleAr}</p>
                      <p className="text-xs text-gray-500">{doc.titleFr}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${searchableKeys.includes(doc.key) ? 'text-green-600' : 'text-gray-400'}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all shadow-sm"
            >
              {link.icon}
              <span className="text-sm font-medium text-gray-700">{link.title}</span>
            </button>
          ))}
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            الخدمات الأكثر طلباً
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-green-200 group"
                onClick={() => service.key && handleSuggestionClick(service.key)} 
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{service.titleFr}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{service.searches} بحث هاد الشهر</span>
                  <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Guides */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">آخر الأدلة المضافة</h3>
          <div className="space-y-4">
            {recentGuides.map((guide, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{guide.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-500">{guide.duration}</span>
                      <span className="text-sm text-gray-400">• {guide.views} مشاهدة</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">دليلك</h3>
              </div>
              <p className="text-gray-400">دليلك الشامل للإجراءات الإدارية المغربية</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط مهمة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">كل الخدمات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <p className="text-gray-400 mb-4">ابقى على اطلاع بآخر التحديثات</p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span>📷</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span>🎵</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 دليلك - جميع الحقوق محفوظة 🇲🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
}