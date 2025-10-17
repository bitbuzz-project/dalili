import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Users, Globe, Phone } from 'lucide-react';

export default function CNSSAffiliationDetailsPage({ onBack, name, nameFr }) {
    const [openFAQ, setOpenFAQ] = useState(null);
    const documentName = name || "ملف الانخراط لدى CNSS";
    const documentNameFr = nameFr || "Affiliation / Inscription CNSS";

    const documents = [
        {
            title: 'نموذج طلب الانخراط (للشركة)',
            description: 'النموذج المرجعي (Ref. 322-1-11) معبأ وموقع من المسؤول القانوني',
            note: 'مطلوب في أجل 30 يوماً من توظيف أول أجير'
        },
        {
            title: 'الوثائق القانونية للشركة',
            description: 'نسخة من السجل التجاري، التعريف الضريبي، وبطاقة الضريبة المهنية (Patente)',
            note: 'حسب الشكل القانوني للشركة (شركة فردية، محدودة، إلخ)'
        },
        {
            title: 'نسخة من CNIE للمسؤول القانوني',
            description: 'نسخة مصادق عليها من بطاقة التعريف الوطنية للمدير أو المسير',
            note: 'تثبت هوية الممثل القانوني للشركة'
        },
        {
            title: 'نموذج طلب التسجيل (للأجير)',
            description: 'نموذج فردي لكل عامل (للحصول على رقم التسجيل)',
            note: 'مرفق بنسخة من CNIE للأجير'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'تحضير ملف الانخراط للشركة',
            description: 'تجميع جميع الوثائق القانونية المطلوبة من الصندوق الوطني للضمان الاجتماعي',
            time: '1-2 أيام'
        },
        {
            number: '2',
            title: 'إيداع طلب الانخراط',
            description: 'إيداع الملف المكتمل في أقرب وكالة CNSS تابعة لمقر الشركة',
            time: 'ساعة واحدة'
        },
        {
            number: '3',
            title: 'الحصول على رقم الانخراط',
            description: 'بعد دراسة الملف، تحصل الشركة على رقم الانخراط الخاص بها',
            time: '1-3 أسابيع'
        },
        {
            number: '4',
            title: 'تسجيل الأجراء (Immatriculation)',
            description: 'قيام الشركة بتسجيل كل العاملين لديها للحصول على أرقام التسجيل الفردية',
            time: 'فوري (عبر Damancom)'
        },
        {
            number: '5',
            title: 'التصريح والأداء الشهري',
            description: 'التصريح بأجور العمال ودفع الاشتراكات شهرياً عبر بوابة Damancom',
            time: 'شهري'
        }
    ];

    const faqs = [
        {
            q: 'هل الانخراط إجباري؟',
            a: 'نعم، الانخراط إجباري على كل مشغل في القطاع الخاص، ويجب أن يتم في أجل 30 يوماً من توظيف أول عامل.'
        },
        {
            q: 'ما هي أهم الاستفادات من الانخراط؟',
            a: 'يستفيد الأجير من التأمين الصحي الإجباري (AMO)، والتقاعد (RCO)، والتعويضات العائلية، والتعويض عن فقدان الشغل.'
        },
        {
            q: 'هل يتغير رقم التسجيل (CNSS) الخاص بالأجير عند تغيير الشركة؟',
            a: 'لا، رقم التسجيل الممنوح للعامل هو رقم فريد يرافقه طوال مساره المهني، ولا يتغير بتغيير المشغل.'
        },
        {
            q: 'كيف يمكنني التأكد من أن الشركة تصرح بأجري؟',
            a: 'يمكنك الولوج إلى تطبيق MACNSS أو بوابة CNSS الإلكترونية للتحقق من التصريحات الشهرية لأجرك.'
        }
    ];

    const tips = [
        'تأكد من تسجيل الأجراء في الأجل القانوني لتجنب الغرامات المالية.',
        'استخدم بوابة Damancom لسهولة التصريح والأداء الإلكتروني.',
        'احتفظ بنسخة من نموذج تسجيل الأجير (بطاقة التسجيل) لضم العائلة للتغطية الصحية.',
        'قم بتحديث وضعيتك العائلية (زواج/مواليد) فوراً لضمان الاستفادة من التعويضات العائلية.'
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
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
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
                                <p className="text-lg font-bold text-gray-900">مجاني (الانخراط)</p>
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
                                <p className="text-lg font-bold text-gray-900">30 يوماً (كحد أقصى)</p>
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
                                <p className="text-lg font-bold text-gray-900">4 وثائق رئيسية</p>
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
                                <p className="text-lg font-bold text-gray-900">وكالات CNSS / Damancom</p>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الانخراط والتسجيل</h2>
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
                                <a href="https://www.cnss.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">الموقع الرسمي</p>
                                        <p className="text-xs text-gray-600">www.cnss.ma</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">المركز الهاتفي</p>
                                        <p className="text-xs text-gray-600">0802007200</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Button */}
                        <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            تحميل دليل الانخراط CNSS PDF
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