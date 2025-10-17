import React, { useState } from 'react';
import { ArrowRight, MapPin, Search, Home, CreditCard, Users, Gavel, Clock, Phone, Globe, ChevronRight } from 'lucide-react';

// =============================================================
// MOCK DATA: البيانات المستخلصة من التحليل (دراسة حالة سطات)
// =============================================================

const mockLocations =,
        addressAr: 'الحي الإداري، سطات، ص.ب 598',
        contactPhone: '06 60 10 28 46',
        workingHours: '08:30 - 16:30',
        icon: <Home className="w-5 h-5" />,
        color: 'teal',
        latitude: 33.00,
        longitude: -7.61,
        linkKey: 'property_title'
    },
    {
        id: 'SETTAT_ANCFCC_CADASTRE',
        agency: 'ANCFCC',
        subTypeAr: 'المسح العقاري (التقني) - سطات',
        serviceKeys: ['property_surveying', 'land_mapping'],
        addressAr: 'الحي الإداري، سطات، ص.ب 561',
        contactPhone: '06 60 10 28 47',
        workingHours: '08:30 - 16:30',
        icon: <Home className="w-5 h-5" />,
        color: 'teal',
        latitude: 33.001,
        longitude: -7.608,
        linkKey: 'property_title' 
    },
    {
        id: 'SETTAT_DGSN_CNIE',
        agency: 'DGSN',
        subTypeAr: 'مركز تسجيل المعطيات (بطاقة التعريف)',
        serviceKeys: ['cnie', 'passport'],
        addressAr: 'مقر الدائرة الأمنية (يحدد بالمقاطعة)',
        contactPhone: 'غير متاح للعموم (يرجى الاتصال بالبدالة)',
        workingHours: '08:30 - 16:00',
        icon: <CreditCard className="w-5 h-5" />,
        color: 'blue',
        latitude: 32.99,
        longitude: -7.62,
        linkKey: 'cnie'
    },
    {
        id: 'SETTAT_JUSTICE',
        agency: 'Justice',
        subTypeAr: 'محكمة الأسرة (الإذن بالزواج)',
        serviceKeys: ['acte_mariage'],
        addressAr: 'المحكمة الابتدائية، وسط المدينة',
        contactPhone: '05 23 XX XX XX', // Mocked based on structure
        workingHours: '08:30 - 17:00',
        icon: <Gavel className="w-5 h-5" />,
        color: 'purple',
        latitude: 32.98,
        longitude: -7.615,
        linkKey: 'acte_mariage'
    },
    {
        id: 'SETTAT_COMMUNE',
        agency: 'Commune',
        subTypeAr: 'مكتب الحالة المدنية (المقاطعة 1)',
        serviceKeys: ['acte_deces', 'acte_naissance', 'residence'],
        addressAr: 'المقاطعة الإدارية رقم 1، حي النور',
        contactPhone: '05 23 72 13 63', 
        workingHours: '08:30 - 16:00',
        icon: <Users className="w-5 h-5" />,
        color: 'orange',
        latitude: 33.01,
        longitude: -7.63,
        linkKey: 'residence'
    }
];

// قائمة أنواع الخدمات لمرشح (Filter)
const serviceOptions = [
    { key: 'all', label: 'جميع الإدارات', icon: <MapPin className="w-5 h-5" />, color: 'gray' },
    { key: 'cnie', label: 'بطاقة التعريف/جواز السفر', icon: <CreditCard className="w-5 h-5" />, color: 'blue' },
    { key: 'property_title', label: 'المحافظة العقارية', icon: <Home className="w-5 h-5" />, color: 'teal' },
    { key: 'acte_mariage', label: 'قضاء الأسرة (الزواج)', icon: <Gavel className="w-5 h-5" />, color: 'purple' },
    { key: 'residence', label: 'الحالة المدنية والسكنى', icon: <Users className="w-5 h-5" />, color: 'orange' },
];

export default function NearestOfficePage({ onBack }) {
    const = useState('');
    const [filterKey, setFilterKey] = useState('all');
    const = useState(mockLocations);

    // تطبيق الفلترة والبحث
    const filteredLocations = mockLocations.filter(location => {
        const matchesFilter = filterKey === 'all' |

| location.serviceKeys.includes(filterKey);
        const matchesSearch = location.subTypeAr.includes(searchTerm) |

| location.addressAr.includes(searchTerm);
        return matchesFilter && matchesSearch;
    });
    
    // محاكاة لـ Quick Info Card لكي تتوافق مع تصميم الصفحات الأخرى
    const quickInfo = selectedOffice? :;


    // وظيفة للتعامل مع النقر على زر التوجيه (محاكاة)
    const handleNavigate = () => {
        alert(`جاري توجيهك إلى ${selectedOffice.subTypeAr} عبر تطبيق الملاحة...`);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                            <span>رجوع</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-amber-600 rounded-lg flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">أقرب إدارة</h1>
                                <p className="text-xs text-gray-500">Nearest Government Office Locator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content: Map & Sidebar */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-3 gap-8">
                    {/* Right Column: Filter and Offices List */}
                    <div className="lg:col-span-1 space-y-6">
                        
                        {/* Service Filter */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">حدد نوع الخدمة المطلوبة:</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {serviceOptions.map(option => (
                                    <button
                                        key={option.key}
                                        onClick={() => setFilterKey(option.key === filterKey? 'all' : option.key)}
                                        className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-200 
                                            ${filterKey === option.key? `bg-${option.color}-600 text-white border-${option.color}-600 shadow-md` : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
                                    >
                                        {React.cloneElement(option.icon, { className: `w-5 h-5 ${filterKey === option.key? 'text-white' : `text-${option.color}-600`}` })}
                                        <span className="text-sm font-medium">{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="البحث حسب العنوان أو الاسم..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                            />
                            <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                        </div>
                        
                        {/* Office List (Cards) */}
                        <div className="space-y-4 max-h-[600px] overflow-y-auto">
                            {filteredLocations.length > 0? (
                                filteredLocations.map((location) => (
                                    <div 
                                        key={location.id} 
                                        onClick={() => setSelectedOffice(location)}
                                        className={`bg-white p-4 rounded-xl shadow-md border-2 cursor-pointer transition-all duration-200
                                            ${selectedOffice?.id === location.id? 'border-red-500 shadow-xl ring-2 ring-red-200' : 'border-gray-200 hover:border-gray-400'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {React.cloneElement(location.icon, { className: `w-6 h-6 text-${location.color}-600` })}
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{location.subTypeAr}</h3>
                                                    <p className="text-xs text-gray-600 truncate">{location.addressAr}</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center p-6 bg-yellow-50 rounded-lg text-yellow-800">
                                    عفواً، لا توجد إدارات مطابقة لمعايير البحث في هذه المنطقة.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Left Column: Map & Quick Info Card */}
                    <div className="lg:col-span-2 space-y-6 mt-8 lg:mt-0">
                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-96 rounded-2xl shadow-xl flex items-center justify-center text-gray-500 text-xl font-bold border border-gray-300">
                            {/* Placeholder for Interactive Map */}
                            خريطة تفاعلية (تمثيل جغرافي لموقع {selectedOffice? selectedOffice.subTypeAr : 'الإدارة المختارة'})
                        </div>

                        {/* Quick Info Card - Replicating Existing Design */}
                        {selectedOffice && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">معلومات الإدارة المختارة</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    {quickInfo.map((info, index) => {
                                        // Using conditional icon rendering as in other detail pages
                                        const IconComponent = ({ name, color }) => {
                                            if (name === 'Phone') return <Phone className={`w-5 h-5 text-green-600`} />; 
                                            if (name === 'Clock') return <Clock className={`w-5 h-5 text-blue-600`} />;
                                            if (name === 'FileText') return <FileText className={`w-5 h-5 text-${info.color}-600`} />;
                                            if (name === 'MapPin') return <MapPin className={`w-5 h-5 text-orange-600`} />;
                                            return null;
                                        };

                                        return (
                                            <div key={index} className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <IconComponent name={info.icon} color={info.color} />
                                                    <p className="font-bold text-gray-900 text-sm">{info.label}</p>
                                                </div>
                                                <p className="text-sm text-gray-600">{info.value}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-6">
                                    <button 
                                        onClick={handleNavigate}
                                        className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className="w-5 h-5" />
                                        التوجيه إلى الموقع (عبر Waze/Google Maps)
                                    </button>
                                    <a 
                                        href={`tel:${selectedOffice.contactPhone}`}
                                        className="flex-1 border border-green-600 text-green-600 font-bold py-3 rounded-lg shadow-md hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        اتصال مباشر
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
