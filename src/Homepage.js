import React, { useState, useEffect } from 'react';
import { Search, FileText, CreditCard, Car, Home, Users, Phone, MapPin, Clock, ChevronRight, Briefcase, GraduationCap, Star, Landmark, Gavel, ChevronDown, ChevronUp } from 'lucide-react'; 

// قائمة بالوثائق المتاحة وكلماتها المفتاحية لتمكين البحث المرن
const availableDocuments = [
    // --- Essential Documents ---
    {
        key: 'cnie',
        titles: ['بطاقة التعريف', 'بطاقة التعريف الوطنية', 'carte d\'identité', 'cnie', 'بطاقة', 'تعريف', 'وطنية'],
        titleAr: 'بطاقة التعريف الوطنية',
        titleFr: "Carte d'identité nationale",
        color: 'from-blue-500 to-blue-600',
        icon: <CreditCard className="w-8 h-8" />,
    },
    {
        key: 'passport',
        titles: ['جواز السفر', 'جواز السفر البيومتري', 'passeport', 'سفر', 'جواز', 'بيومتري'],
        titleAr: 'جواز السفر البيومتري',
        titleFr: 'Passeport Biométrique',
        color: 'from-green-500 to-green-600',
        icon: <FileText className="w-8 h-8" />,
    },
    {
        key: 'acte_naissance',
        titles: ['عقد الميلاد', 'شهادة الميلاد', 'acte de naissance', 'ميلاد', 'ازدياد', 'عقد', 'نسخة كاملة'],
        titleAr: 'عقد/شهادة الميلاد',
        titleFr: 'Acte de naissance',
        color: 'from-pink-500 to-pink-600',
        icon: <Users className="w-8 h-8" />,
    },
    // --- NEW 5 Documents Integrated (Updated Icons) ---
    {
        key: 'permis_conduire',
        titles: ['رخصة السياقة', 'permis de conduire', 'سياقة', 'رخصة', 'بيرمي'],
        titleAr: 'رخصة السياقة (تجديد)',
        titleFr: 'Permis de conduire',
        color: 'from-yellow-500 to-amber-600',
        icon: <Car className="w-8 h-8" />,
    },
    {
        key: 'carte_grise',
        titles: ['البطاقة الرمادية', 'شهادة التسجيل', 'carte grise', 'تسجيل مركبة', 'رمادية'],
        titleAr: 'البطاقة الرمادية',
        titleFr: 'Carte Grise (Certificat d\'immatriculation)',
        color: 'from-gray-500 to-gray-600',
        icon: <CreditCard className="w-8 h-8" />,
    },
    {
        key: 'controle_technique',
        titles: ['الفحص التقني', 'visite technique', 'controle technique', 'فحص', 'تقني'],
        titleAr: 'شهادة الفحص التقني',
        titleFr: 'Contrôle technique',
        color: 'from-red-500 to-red-600',
        icon: <Car className="w-8 h-8" />, // تم استبدال Tool
    },
    {
        key: 'attestation_fiscale',
        titles: ['البطاقة الجبائية', 'الرقم الضريبي', 'identifiant fiscal', 'attestation fiscale', 'ضرائب', 'DGI'],
        titleAr: 'البطاقة الجبائية',
        titleFr: 'Identifiant Fiscal',
        color: 'from-purple-500 to-indigo-600',
        icon: <Landmark className="w-8 h-8" />,
    },
    {
        key: 'casier_judiciaire',
        titles: ['السجل العدلي', 'حسن السيرة', 'casier judiciaire', 'سجل', 'عدلي'],
        titleAr: 'السجل العدلي (حسن السيرة)',
        titleFr: 'Extrait de casier judiciaire',
        color: 'from-indigo-500 to-teal-600',
        icon: <Gavel className="w-8 h-8" />, // تم استخدام Gavel الآن
    },
    // --- Other Detailed Documents ---
    {
        key: 'contrat_location',
        titles: ['عقد الكراء', 'وصل الكراء', 'كراء', 'عقد', 'location', 'contrat de location', 'quittance de loyer'],
        titleAr: 'عقد الكراء / وصل الكراء',
        titleFr: "Contrat de location",
        color: 'from-purple-500 to-purple-600',
        icon: <Home className="w-8 h-8" />,
    },
    {
        key: 'cnss_affiliation',
        titles: ['انخراط CNSS', 'CNSS', 'ضمان اجتماعي', 'تأمين', 'affiliation cnss', 'inscription cnss', 'cnss'],
        titleAr: 'ملف الانخراط لدى CNSS',
        titleFr: 'Affiliation / Inscription CNSS',
        color: 'from-indigo-500 to-indigo-600',
        icon: <Users className="w-8 h-8" />,
    },
    {
        key: 'attestation_travail',
        titles: ['شهادة العمل', 'attestation de travail', 'عمل', 'شهادة', 'شغل'],
        titleAr: 'شهادة العمل',
        titleFr: 'Attestation de travail',
        color: 'from-teal-500 to-teal-600',
        icon: <Briefcase className="w-8 h-8" />,
    },
    {
        key: 'bacalaureat',
        titles: ['شهادة الباكالوريا', 'باكالوريا', 'bac', 'bacalauréat', 'تعليم', 'شهادة مدرسية'],
        titleAr: 'شهادة الباكالوريا',
        titleFr: 'Baccalauréat diploma',
        color: 'from-amber-500 to-amber-600',
        icon: <GraduationCap className="w-8 h-8" />,
    },
    // --- Placeholders/General Services ---
    {
        key: 'acte_mariage',
        titles: ['عقد الزواج', 'شهادة الزواج', 'acte de mariage', 'زواج', 'عقد'],
        titleAr: 'عقد/شهادة الزواج',
        titleFr: 'Acte de mariage',
        color: 'from-yellow-500 to-yellow-600',
        icon: <Users className="w-8 h-8" />,
    },
    {
        key: 'acte_deces',
        titles: ['عقد الوفاة', 'شهادة الوفاة', 'acte de décès', 'وفاة', 'عقد'],
        titleAr: 'عقد/شهادة الوفاة',
        titleFr: 'Acte de décès',
        color: 'from-gray-500 to-gray-600',
        icon: <FileText className="w-8 h-8" />,
    },
    {
        key: 'residence',
        titles: ['شهادة السكنى', 'certificat de résidence', 'سكنى', 'إقامة'],
        titleAr: 'شهادة السكنى',
        titleFr: 'Certificat de résidence',
        color: 'from-orange-500 to-orange-600',
        icon: <Home className="w-8 h-8" />,
    },
    {
        key: 'property_title',
        titles: ['تحفيظ عقاري', 'رسم عقاري', 'titre foncier', 'عقار', 'محافظة', 'عقار'],
        titleAr: 'الرسم العقاري',
        titleFr: 'Titre Foncier',
        color: 'from-brown-500 to-brown-600',
        icon: <Home className="w-8 h-8" />,
    },
    {
        key: 'ramed',
        titles: ['الرميد', 'ramed', 'assurance médicale'],
        titleAr: 'الرميد RAMED',
        titleFr: 'Assistance médicale',
        color: 'from-red-500 to-red-600',
        icon: <Phone className="w-8 h-8" />,
    },
    // General Services
    {
        key: 'nearest_office',
        titles: ['أقرب إدارة', 'موقع الإدارات', 'مكان الإدارة', 'nearest office', 'locator', 'map'],
        titleAr: 'أقرب إدارة (تحديد الموقع)',
        titleFr: 'Nearest Office Locator',
        color: 'from-amber-500 to-orange-600',
        icon: <MapPin className="w-8 h-8" />,
    },
    {
        key: 'feedback',
        titles: ['تقييم الخدمات', 'شكاوى', 'اقتراحات', 'rating', 'feedback', 'review'],
        titleAr: 'تقييم الخدمات والإدارات',
        titleFr: 'Service Rating',
        color: 'from-pink-500 to-purple-600',
        icon: <Star className="w-8 h-8" />,
    }
];

// الوثائق التي لديها صفحات مفصلة حالياً
const searchableKeys = [
    'cnie', 
    'passport', 
    'acte_naissance', 
    'acte_mariage', 
    'acte_deces',   
    'residence',    
    'property_title',
    'contrat_location', 
    'cnss_affiliation', 
    'attestation_travail', 
    'bacalaureat',
    // NEW 5 Documents Keys
    'permis_conduire',
    'carte_grise',
    'controle_technique',
    'attestation_fiscale',
    'casier_judiciaire',
    'nearest_office', 
    'feedback'
];

// **********************************************
// Document Categorization based on Sector
// **********************************************
const documentCategories = {
    'الهوية والجنسية (DGSN)': {
        icon: <CreditCard className="w-6 h-6 text-blue-600" />,
        docs: ['cnie', 'passport'],
    },
    'المركبات والسلامة الطرقية (NARSA)': {
        icon: <Car className="w-6 h-6 text-red-600" />,
        docs: ['permis_conduire', 'carte_grise', 'controle_technique'],
    },
    'الحالة المدنية (الجماعات المحلية)': {
        icon: <Users className="w-6 h-6 text-pink-600" />,
        docs: ['acte_naissance', 'acte_mariage', 'acte_deces'],
    },
    'السكن والعقار (ANCFCC / سلطات محلية)': {
        icon: <Home className="w-6 h-6 text-orange-600" />,
        docs: ['property_title', 'residence', 'contrat_location'],
    },
    'الضمان الاجتماعي والتشغيل (CNSS / المشغل)': {
        icon: <Briefcase className="w-6 h-6 text-teal-600" />,
        docs: ['cnss_affiliation', 'attestation_travail'],
    },
    'القضاء والوثائق القانونية (وزارة العدل)': {
        icon: <Gavel className="w-6 h-6 text-indigo-600" />,
        docs: ['casier_judiciaire'],
    },
    'التعليم والشهادات (وزارة التربية الوطنية)': {
        icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
        docs: ['bacalaureat'],
    },
    'الضرائب والمعاملات المالية (DGI)': {
        icon: <Landmark className="w-6 h-6 text-purple-600" />,
        docs: ['attestation_fiscale'],
    },
    'خدمات أخرى ومواقع الإدارات': {
        icon: <MapPin className="w-6 h-6 text-gray-600" />,
        docs: ['nearest_office', 'feedback'],
    },
};

// **********************************************
// Component: AdministrativeCategories (Accordion Structure)
// **********************************************
const AdministrativeCategories = ({ categories, onDocumentClick, openCategory, onCategoryToggle }) => {
    const allDocsMap = availableDocuments.reduce((acc, doc) => {
        acc[doc.key] = doc;
        return acc;
    }, {});

    return (
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-purple-600" />
                الفئات الإدارية
            </h3>
            
            <div className="space-y-3">
                {Object.entries(categories).map(([categoryTitle, categoryData], index) => {
                    const isOpen = openCategory === categoryTitle;
                    const isAnyDocumentAvailable = categoryData.docs.some(docKey => searchableKeys.includes(docKey));

                    return (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
                            {/* Category Header (Clickable Accordion Button) */}
                            <button
                                onClick={() => onCategoryToggle(categoryTitle)}
                                className={`w-full flex items-center justify-between p-5 transition-all duration-300 ${isOpen ? 'bg-green-50' : 'bg-white hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Icon and Title */}
                                    {React.cloneElement(categoryData.icon, { 
                                        className: `w-7 h-7 flex-shrink-0 ${isOpen ? 'text-green-700' : categoryData.icon.props.className}` 
                                    })}
                                    <span className={`font-bold text-xl text-right ${isOpen ? 'text-green-800' : 'text-gray-900'}`}>{categoryTitle}</span>
                                </div>
                                
                                {/* Toggle Icon */}
                                {isOpen ? (
                                    <ChevronUp className="w-6 h-6 text-green-700 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                                )}
                            </button>

                            {/* Documents List (Collapsible Content) */}
                            {isOpen && (
                                <div className="p-6 bg-white border-t border-gray-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categoryData.docs.map(docKey => {
                                            const doc = allDocsMap[docKey];
                                            if (!doc) return null;
                                            const isAvailable = searchableKeys.includes(docKey);

                                            return (
                                                <button
                                                    key={doc.key}
                                                    onClick={() => isAvailable ? onDocumentClick(doc.key) : alert(`عفواً، لا تتوفر صفحة تفصيلية لـ ${doc.titleAr} بعد.`)}
                                                    className={`group flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 text-right w-full min-h-[70px]
                                                        ${isAvailable
                                                            ? 'bg-white border-green-200 hover:bg-green-100 cursor-pointer'
                                                            : 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed'
                                                        }`}
                                                    disabled={!isAvailable}
                                                >
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className={`font-semibold text-base ${isAvailable ? 'text-gray-900 group-hover:text-green-700' : 'text-gray-600'}`}>{doc.titleAr}</p>
                                                        <p className="text-xs text-gray-500">{doc.titleFr}</p>
                                                    </div>
                                                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isAvailable ? 'text-green-600 group-hover:translate-x-1' : 'text-gray-400'}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {!isAnyDocumentAvailable && (
                                        <p className="mt-4 text-center text-sm text-gray-500">
                                            لا تتوفر وثائق مفصلة في هذه الفئة بعد.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// **********************************************
// Main Homepage Component
// **********************************************

export default function Homepage({ onNavigate, views }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [serviceCounts, setServiceCounts] = useState({});
    const [openCategory, setOpenCategory] = useState(null); // State for the accordion/categories

    // Toggle logic for the categories accordion
    const handleCategoryToggle = (categoryTitle) => {
        setOpenCategory(prev => prev === categoryTitle ? null : categoryTitle);
    };

    // Simulated data fetching (useEffect remains the same)
    useEffect(() => {
        const mockCounts = {
            'cnie': '12,450', 'passport': '9,120', 'acte_naissance': '7,880', 'contrat_location': '4,500', 
            'cnss_affiliation': '6,200', 'attestation_travail': '7,150', 'bacalaureat': '5,800', 
            'permis_conduire': '10,050', 'carte_grise': '9,500', 'controle_technique': '8,200', 
            'attestation_fiscale': '5,300', 'casier_judiciaire': '6,000', 'residence': '6,540',
            'ramed': '5,100', 'nearest_office': '3,200', 'feedback': '1,500' 
        };
        const timer = setTimeout(() => {
            setServiceCounts(mockCounts);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const popularServices = availableDocuments.slice(0, 6).map(doc => ({
        ...doc,
        title: doc.titleAr,
        icon: doc.icon,
        searches: serviceCounts[doc.key] || 'جاري التحميل...'
    }));

    const quickLinks = [
        { title: 'الوثائق المطلوبة', icon: <FileText className="w-5 h-5" />, key: 'cnie' },
        { title: 'أقرب إدارة', icon: <MapPin className="w-5 h-5" />, key: 'nearest_office' },
        { title: 'تقييم الخدمات', icon: <Star className="w-5 h-5" />, key: 'feedback' }, 
        { title: 'مواعيد العمل', icon: <Clock className="w-5 h-5" />, key: 'cnie' }
    ];

    const recentGuides = [
        { title: 'كيفاش تستخرج بطاقة التعريف؟', duration: '5 دقائق قراءة', views: '2.3k' },
        { title: 'شنو الوثائق لي خاصك لجواز السفر؟', duration: '4 دقائق قراءة', views: '1.8k' },
        { title: 'خطوات تجديد رخصة السياقة', duration: '7 دقائق قراءة', views: '3.1k' }
    ];

    // Search and Navigation Logic (remains the same)
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
        const doc = availableDocuments.find(d => d.key === key);

        if (Object.values(views).includes(key)) {
            onNavigate(key, { name: doc?.titleAr, nameFr: doc?.titleFr, documentName: doc?.titleAr });
            setSuggestions([]);
            setSearchQuery('');
        } else {
            alert(`عفواً، لا تتوفر صفحة تفصيلية لـ ${doc?.titleAr || key} بعد.`);
            setSuggestions([]);
            setSearchQuery('');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            handleSuggestionClick(suggestions[0].key);
        } else {
            alert(`عفواً، لم يتم العثور على نتائج مطابقة لـ "${searchQuery}". الرجاء المحاولة بكلمة مختلفة.`);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50" dir="rtl">
            {/* Header (No change) */}
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

            {/* Hero Section (No change) */}
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
                            type="text"
                            value={searchQuery}
                            onChange={handleInputChange} // Use the new handler
                            placeholder="ابحث على أي إجراء إداري... (مثلاً: بطاقة، جواز، ميلاد، تقييم...)"
                            className="w-full px-6 py-5 pr-14 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none shadow-lg text-lg"
                        />
                        <button type="submit" className="absolute right-0 top-0 h-full px-4 rounded-r-2xl text-gray-400 hover:text-green-600">
                            <Search className="w-6 h-6" />
                        </button>
                    </form>

                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                        <div className="absolute top-full w-full bg-white rounded-xl shadow-xl mt-2 z-10 border border-gray-100 overflow-hidden">
                            {suggestions.map((doc) => (
                                <div
                                    key={doc.key}
                                    onClick={() => handleSuggestionClick(doc.key)}
                                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-green-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Use Star icon for feedback */}
                                        {doc.key === 'feedback' ? 
                                            <Star className={`w-5 h-5 ${searchableKeys.includes(doc.key) ? 'text-purple-600' : 'text-gray-400'}`} />
                                            :
                                            <FileText className={`w-5 h-5 ${searchableKeys.includes(doc.key) ? 'text-green-600' : 'text-gray-400'}`} />
                                        }
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

                {/* Quick Links - NEW: Added Rating Link */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {quickLinks.map((link, index) => (
                        <button
                            key={index}
                            // Use the key to navigate to the respective page (or default 'cnie' for placeholders)
                            onClick={() => handleSuggestionClick(link.key)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all shadow-sm"
                        >
                            {link.icon}
                            <span className="text-sm font-medium text-gray-700">{link.title}</span>
                        </button>
                    ))}
                </div>

                {/* Popular Services (Only showing first 6 for visual consistency) */}
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
                                onClick={() => service.key && handleSuggestionClick(service.key)} // Use the new handler for navigation
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

                {/* NEW: Administrative Categories Section (using the Accordion component) */}
                <AdministrativeCategories 
                    categories={documentCategories} 
                    onDocumentClick={handleSuggestionClick} 
                    openCategory={openCategory}
                    onCategoryToggle={handleCategoryToggle}
                />
                
                {/* Recent Guides (Updated Guide Title) */}
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

            {/* Footer (No change) */}
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