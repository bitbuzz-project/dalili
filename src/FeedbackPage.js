import React, { useState } from 'react';
import { ArrowRight, Star, Send, Users, Shield, BookOpen, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';

// Mock list of administrative sections and services to rate
const mockServices = [
    { id: 'cnie', nameAr: 'بطاقة التعريف الوطنية (CNIE)', nameFr: 'CNIE' },
    { id: 'passport', nameAr: 'جواز السفر البيومتري', nameFr: 'Passeport' },
    { id: 'acte_naissance', nameAr: 'عقد/شهادة الميلاد', nameFr: 'Acte de Naissance' },
    { id: 'residence', nameAr: 'شهادة السكنى', nameFr: 'Attestation de Résidence' },
    { id: 'cnss', nameAr: 'ملف الانخراط لدى CNSS', nameFr: 'Affiliation CNSS' },
    { id: 'travail', nameAr: 'شهادة العمل', nameFr: 'Attestation de travail' },
    { id: 'ancfcc', nameAr: 'شهادة الملكية العقارية (ANCFCC)', nameFr: 'Titre Foncier' },
];

export default function FeedbackPage({ onBack }) {
    const [selectedService, setSelectedService] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend service
        console.log({
            service: selectedService,
            rating: rating,
            comment: comment
        });
        setIsSubmitted(true);
        // Reset form after a brief delay for user feedback
        setTimeout(() => {
            setIsSubmitted(false);
            setSelectedService('');
            setRating(0);
            setComment('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50" dir="rtl">
            <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                            <span>رجوع</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">تقييم الخدمات والإدارات</h1>
                                <p className="text-xs text-gray-500">Service & Administration Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">
                    
                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-4">
                            مشاركتك تساهم في تحسين جودة الخدمات العمومية.
                        </p>
                        {isSubmitted ? (
                            <div className="flex items-center justify-center gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                                <p className="font-semibold text-green-800">
                                    تم إرسال تقييمك بنجاح! شكراً لك.
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-3 bg-purple-50 p-4 rounded-lg border border-purple-200">
                                <AlertCircle className="w-6 h-6 text-purple-600" />
                                <p className="font-medium text-purple-800">
                                    التقييمات مجهولة المصدر وتستخدم لأغراض إحصائية فقط.
                                </p>
                            </div>
                        )}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div>
                            <label htmlFor="service-select" className="block text-right text-sm font-medium text-gray-700 mb-2">
                                1. اختر الإدارة أو الخدمة التي تريد تقييمها:
                            </label>
                            <select
                                id="service-select"
                                name="service-select"
                                required
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="mt-1 block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-base"
                            >
                                <option value="" disabled>-- اختر من القائمة --</option>
                                {mockServices.map((service) => (
                                    <option key={service.id} value={service.id}>
                                        {service.nameAr} ({service.nameFr})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Rating Section */}
                        <div className="pt-4">
                            <label className="block text-right text-sm font-medium text-gray-700 mb-3">
                                2. ما هو تقييمك العام للخدمة؟
                            </label>
                            <div className="flex justify-center gap-2">
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <Star
                                        key={starIndex}
                                        onClick={() => setRating(starIndex)}
                                        className={`w-10 h-10 cursor-pointer transition-transform duration-200 ${
                                            rating >= starIndex
                                                ? 'text-yellow-400 fill-yellow-400 scale-110'
                                                : 'text-gray-300 hover:text-yellow-300 hover:fill-yellow-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="text-center mt-2 text-sm text-gray-500">
                                {rating > 0 ? `لقد منحت ${rating} نجوم من أصل 5` : 'انقر على نجمة للتقييم'}
                            </p>
                        </div>

                        {/* Comment Section */}
                        <div className="pt-4">
                            <label htmlFor="comment" className="block text-right text-sm font-medium text-gray-700 mb-2">
                                3. ملاحظات إضافية (اختياري):
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows="4"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="اكتب ملاحظاتك هنا..."
                            ></textarea>
                            <p className="mt-2 text-xs text-gray-500 text-left">
                                (الحد الأقصى 500 حرف)
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={!selectedService || rating === 0 || isSubmitted}
                            className={`w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-all
                                ${!selectedService || rating === 0 || isSubmitted
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg'
                                }`}
                        >
                            <Send className="w-5 h-5" />
                            {isSubmitted ? 'جاري الإرسال...' : 'إرسال التقييم'}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}