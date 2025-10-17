import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Home, Globe, Phone } from 'lucide-react';

export default function ContratLocationDetailsPage({ onBack, name, nameFr }) {
    const [openFAQ, setOpenFAQ] = useState(null);
    const documentName = name || "عقد الكراء / وصل الكراء";
    const documentNameFr = nameFr || "Contrat de location / Quittance de loyer";

    const documents = [
        {
            title: 'العقد المكتوب',
            description: 'يجب تحرير العقد كتابياً بموجب القانون 67.12',
            note: 'يجب أن يكون ثابت التاريخ ومُصحح الإمضاءات'
        },
        {
            title: 'وصل الأداء',
            description: 'وصل أداء آخر سومة كرائية (لإثبات العلاقة الكرائية)',
            note: 'يفضل التحويل البنكي أو وصل موقع من المالك'
        },
        {
            title: 'نسخة من CNIE',
            description: 'نسخة من البطاقة الوطنية للمؤجر والمستأجر',
            note: 'التأكد من تطابق بيانات البطاقة مع بيانات العقد'
        },
        {
            title: 'حالة الأماكن (اختياري)',
            description: 'جرد دقيق لوصف المحل عند التسليم (État des lieux)',
            note: 'مهم لحماية الطرفين من النزاع حول الأضرار لاحقاً'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'التفاوض والاتفاق',
            description: 'الاتفاق بين المؤجر والمستأجر على السومة الكرائية ومدة العقد',
            time: 'فوري'
        },
        {
            number: '2',
            title: 'تحرير العقد كتابياً',
            description: 'كتابة العقد وتضمين جميع الشروط والبيانات الإلزامية',
            time: 'ساعة واحدة'
        },
        {
            number: '3',
            title: 'المصادقة على الإمضاءات',
            description: 'التوجه إلى الملحقة الإدارية لتصحيح إمضاءات الطرفين',
            time: '30 دقيقة'
        },
        {
            number: '4',
            title: 'تسليم المحل وتوثيق حالته',
            description: 'تسليم المفاتيح للمكتري وتوثيق حالة الأماكن',
            time: 'فوري'
        },
        {
            number: '5',
            title: 'تسجيل العقد (اختياري)',
            description: 'تسجيل العقد لدى مصالح التسجيل (حسب الحاجة للتأمين)',
            time: '1-3 أيام'
        }
    ];

    const faqs = [
        {
            q: 'هل العقد الشفوي مقبول في القانون المغربي؟',
            a: 'لا، القانون رقم 67.12 يلزم بتحرير عقود كراء السكن أو الاستعمال المهني كتابة لضمان حقوق الطرفين.'
        },
        {
            q: 'كم يبلغ مبلغ الضمان (الاحتياط) الذي يمكن للمالك طلبه؟',
            a: 'لا يمكن أن يتجاوز مبلغ الضمان أو الاحتياط قيمة شهرين من الوجيبة الكرائية.'
        },
        {
            q: 'متى يحق للمالك مراجعة السومة الكرائية (زيادة الكراء)؟',
            a: 'يحق للمالك المطالبة بمراجعة السومة الكرائية بعد مرور كل 3 سنوات من بدء العقد أو من آخر مراجعة، وفق النسب القانونية المحددة.'
        },
        {
            q: 'ما هو إجراء استرداد المحل للاستعمال الشخصي؟',
            a: 'يتطلب توجيه إنذار بالإفراغ للمكتري (بواسطة مفوض قضائي) مع منح أجل شهرين للإفراغ، مع ضرورة تعويض المكتري في بعض الحالات.'
        }
    ];

    const tips = [
        'احتفظ دائماً بنسخة أصلية من العقد المصدق على إمضاءاتك.',
        'ادفع الكراء بتحويل بنكي أو بشيك لتوثيق تاريخ الأداء.',
        'حدد في العقد مسؤوليات كل طرف تجاه الإصلاحات (الكبيرة والصغيرة).',
        'تأكد من أن حالة الأماكن (État des lieux) دقيقة وتفصيلية.'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50" dir="rtl">
            <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                            <span>رجوع</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{documentName}</h1>
                                <p className="text-xs text-gray-500">{documentNameFr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">الرسوم</p>
                                <p className="text-lg font-bold text-gray-900">غير محدد (رسوم توثيق)</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">المدة</p>
                                <p className="text-lg font-bold text-gray-900">فوري (لتصحيح الإمضاء)</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">الوثائق</p>
                                <p className="text-lg font-bold text-gray-900">3-4 وثائق</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">المكان</p>
                                <p className="text-lg font-bold text-gray-900">الملحقة الإدارية</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Documents Section */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-blue-600" />
                                الوثائق المطلوبة
                            </h2>
                            <div className="space-y-4">
                                {documents.map((doc, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <div className="flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                                            <p className="text-xs text-blue-700 bg-blue-100 rounded-lg px-3 py-1 inline-block">
                                                💡 {doc.note}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Steps Section */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات توثيق العقد</h2>
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-8 border-r-2 border-gray-200 pr-6" style={{ borderRightStyle: index === steps.length - 1 ? 'none' : 'solid' }}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-900">{step.title}</h3>
                                                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                    <Clock className="w-3 h-3 inline mr-1" />
                                                    {step.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs Section */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">أسئلة شائعة</h2>
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 text-right">{faq.q}</span>
                                            {openFAQ === index ? (
                                                <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                            )}
                                        </button>
                                        {openFAQ === index && (
                                            <div className="p-4 bg-white border-t border-gray-200">
                                                <p className="text-gray-700">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Tips Card */}
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-md p-6 border border-orange-200 sticky top-24">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertCircle className="w-6 h-6 text-orange-600" />
                                <h3 className="font-bold text-gray-900">نصائح مهمة</h3>
                            </div>
                            <ul className="space-y-3">
                                {tips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-orange-600 flex-shrink-0">✓</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">معلومات الاتصال</h3>
                            <div className="space-y-3">
                                <a href="https://idarati.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">الموقع الرسمي</p>
                                        <p className="text-xs text-gray-600">idarati.ma</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">الوكالة الوطنية للمحافظة العقارية</p>
                                        <p className="text-xs text-gray-600">للاستفسارات حول التسجيل</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Button */}
                        <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            تحميل دليل إجراءات الكراء PDF
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer (Placeholder) */}
            <footer className="bg-gray-900 text-white mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-400">© 2025 دليلك - جميع الحقوق محفوظة 🇲🇦</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}