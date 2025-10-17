import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Users } from 'lucide-react';

export default function ActeDecesDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: '2 درهم (للنسخة) + رسوم بريد', icon: 'DollarSign', color: 'green' },
        { label: 'المدة', value: '1 يوم (في المكتب)', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: 'مراجع التسجيل/دفتر العائلة', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'مكتب الحالة المدنية لمحل الوفاة', icon: 'MapPin', color: 'orange' }
    ];

    // الوثائق المطلوبة للحصول على نسخة من رسم الوفاة
	const documents = [
		{
			title: 'إحدى الوثائق التالية لإثبات المرجع',
			description: 'نسخة سابقة من رسم الوفاة، أو الدفتر العائلي، أو مراجع تسجيل رسم الوفاة.',
			note: 'يمكن الإدلاء بالدفتر العائلي أو كناش التعريف والحالة المدنية'
		},
		{
			title: 'نسخة من البطاقة الوطنية (لصاحب الطلب)',
			description: 'لإثبات هوية الشخص الذي يطلب النسخة.',
			note: 'ضرورية للتحقق من هوية طالب الوثيقة.'
		},
		{
			title: 'طلب خطي/إلكتروني',
			description: 'يُقدم الطلب للمكتب أو عبر المنصة الإلكترونية (إن توفرت الخدمة).',
			note: 'يوجه الطلب إلى مكتب الحالة المدنية لمحل الوفاة'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'تحديد المرجع والمكتب',
			description: 'حدد مراجع تسجيل الوفاة (الدفتر العائلي) وتوجه إلى مكتب الحالة المدنية لمحل الوفاة.',
			time: 'فوري'
		},
		{
			number: '2',
			title: 'تقديم الطلب',
			description: 'قم بتقديم طلب خطي للحصول على نسخة موجزة أو كاملة من رسم الوفاة.',
			time: '5 دقائق'
		},
		{
			number: '3',
			title: 'دفع الرسوم',
			description: 'دفع رسوم الإنجاز المقدرة بـ 2 درهم (رسوم النسخة).',
			time: 'فوري'
		},
		{
			number: '4',
			title: 'استلام النسخة',
			description: 'يتم تسليم النسخة المطلوبة في نفس اليوم أو اليوم التالي على أبعد تقدير.',
			time: '1 يوم كحد أقصى'
		}
	];

	const faqs = [
		{
			q: 'من يمكنه الحصول على نسخة من رسم الوفاة؟',
			a: 'يمكن لأي شخص معني (وارث، قريب) طلب نسخة من رسم الوفاة بعد الإدلاء بإحدى وثائق المرجع المذكورة.'
		},
		{
			q: 'ماذا لو لم يتم التصريح بالوفاة في الأجل القانوني؟',
			a: 'إذا لم يتم التصريح خلال الأجل القانوني (30 يوماً)، فإن التسجيل لا يتم إلا عن طريق حكم قضائي بناءً على طلب موجه للمحكمة الابتدائية.'
		},
		{
			q: 'هل يمكن طلبها إلكترونياً؟',
			a: 'يمكن طلبها إلكترونياً إذا كانت الخدمة متوفرة في مكتب الحالة المدنية التابع للمتوفى عبر الشباك الإلكتروني watiqa.ma.'
		}
	];

	const tips = [
		'للحصول على نسخة من رسم الوفاة بسرعة، يُفضل التوجه إلى مكتب الحالة المدنية لمحل الوفاة والإدلاء بالدفتر العائلي.',
		'التصريح بالوفاة يجب أن يقدم خلال أجل أقصاه 30 يوماً من تاريخ الوفاة لتجنب الإجراءات القضائية لتسجيلها.',
		'نسخة رسم الوفاة ضرورية لإجراءات الإرث والمعاملات القانونية والتوثيق.'
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-neutral-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-neutral-600 rounded-lg flex items-center justify-center">
								<Users className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">شهادة الوفاة (نسخة)</h1>
								<p className="text-xs text-gray-500">Acte de Décès (Copie)</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Quick Info Cards */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {quickInfo.map((info, index) => {
                        const IconComponent = ({ name }) => {
                            if (name === 'DollarSign') return <DollarSign className={`w-5 h-5 text-${info.color}-600`} />;
                            if (name === 'Clock') return <Clock className={`w-5 h-5 text-${info.color}-600`} />;
                            if (name === 'FileText') return <FileText className={`w-5 h-5 text-${info.color}-600`} />;
                            if (name === 'MapPin') return <MapPin className={`w-5 h-5 text-${info.color}-600`} />;
                            return null;
                        };
                        return (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 bg-${info.color}-100 rounded-lg flex items-center justify-center`}>
                                        <IconComponent name={info.icon} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{info.label}</p>
                                        <p className="text-lg font-bold text-gray-900">{info.value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
				</div>

				/* Main Content */
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					/* Left Column */
					<div className="lg:col-span-2 space-y-8">
						/* Documents Section */
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
								<FileText className="w-6 h-6 text-gray-600" />
								الوثائق المطلوبة (للحصول على نسخة)
							</h2>
							<div className="space-y-4">
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
										<div className="flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-gray-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
											<p className="text-sm text-gray-600 mb-2">{doc.description}</p>
											<p className="text-xs text-gray-700 bg-gray-100 rounded-lg px-3 py-1 inline-block">
												💡 {doc.note}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						/* Steps Section */
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على نسخة من رسم الوفاة</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-neutral-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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

						/* FAQs Section */
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

					/* Right Column - Sidebar */
					<div className="space-y-6">
						/* Tips Card */
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
                        /* Download Button */
						<button className="w-full bg-gradient-to-r from-gray-600 to-neutral-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							تحميل دليل خطوات الطلب PDF
						</button>
					</div>
				</div>
			</section>

			/* Footer */
			<footer className="bg-gray-900 text-white mt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center">
						<p className="text-gray-400">© 2025 دليلك - جميع الحقوق محفوظة 🇲🇦</p>
						<p className="text-sm text-gray-500 mt-2">
							المعلومات المقدمة استرشادية. يُرجى التأكد من مكاتب الحالة المدنية والجماعات المحلية.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}