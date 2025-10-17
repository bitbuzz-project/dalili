import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Globe, Home } from 'lucide-react';

export default function PropertyTitleDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: '100 درهم تقريباً (أداء إلكتروني)', icon: 'DollarSign', color: 'green' },
        { label: 'المدة', value: '48 ساعة (عبر الإنترنت)', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: 'رقم الرسم العقاري (Titre)', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'الوكالة الوطنية للمحافظة العقارية (ANCFCC)', icon: 'MapPin', color: 'orange' }
    ];

    // الوثائق المطلوبة (للطلب الإلكتروني)
	const documents = [
		{
			title: 'رقم الرسم العقاري (Titre)',
			description: 'يجب معرفة رقم التيتر مسبقاً قبل الدخول لخدمة طلب الشهادة.',
			note: 'يمكن طلب الشهادة للرسم العقاري أو مطلب التحفيظ.'
		},
		{
			title: 'بطاقة التعريف الوطنية (CNIE)',
			description: 'ضرورية للتحقق من هوية صاحب الطلب.',
			note: 'للتأكد من هوية المستخدم في المرحلة الأخيرة.'
		},
		{
			title: 'بطاقة بنكية سارية الصلاحية',
			description: 'لأداء الواجبات المالية للشهادة عبر الإنترنت.',
			note: 'ضرورة تفعيل مخصصة التجارة الإلكترونية في البطاقة البنكية.'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'الدخول إلى المنصة وتحديد الخدمة',
			description: 'ادخل إلى موقع ANCFCC واختر "طلب شهادة الملكية الإلكترونية".',
			time: '5 دقائق'
		},
		{
			number: '2',
			title: 'ملء معلومات الرسم العقاري',
			description: 'أدخل رقم الرسم العقاري (Titre) الخاص بالعقار.',
			time: '5 دقائق'
		},
		{
			number: '3',
			title: 'تأكيد الهوية ودفع الرسوم',
			description: 'قم بتأكيد رقم الهاتف، ثم قم بإدخال بيانات بطاقتك البنكية لأداء الرسوم.',
			time: '10 دقائق'
		},
		{
			number: '4',
			title: 'تتبع الطلب',
			description: 'ستتوصل برسالة نصية تحتوي على رمز التتبع الخاص بطلبك.',
			time: 'فوري'
		},
		{
			number: '5',
			title: 'تحميل الشهادة',
			description: 'بعد معالجة الطلب (خلال 48 ساعة)، يمكنك تحميل الشهادة المحينة والموقعة إلكترونياً بصيغة PDF.',
			time: '48 ساعة'
		}
	];

	const faqs = [
		{
			q: 'ما هي المدة اللازمة لاستخراج الشهادة؟',
			a: 'في الحالات العادية، يتم معالجة الطلب في حدود 48 ساعة، إلا إذا كان هناك ما يمنع ذلك (ملاحظات على الملف العقاري).'
		},
		{
			q: 'هل الشهادة المستخرجة إلكترونياً قانونية؟',
			a: 'نعم، الشهادة المستخرجة إلكترونياً تكون موقعة من طرف المحافظ على الأملاك العقارية، ويمكن التحقق من صحتها عبر خاصية "التحقق من صحة شـهادة الملكيـة" على الموقع.'
		},
		{
			q: 'هل تتوفر الشهادة باللغة الفرنسية؟',
			a: 'الشهادة التي يتم استخراجها تكون باللغة العربية، وفي حالة الرغبة في نسخة بالفرنسية يمكن الاستعانة بمترجم محلف.'
		}
	];

	const tips = [
		'يُنصح بمعرفة رقم الرسم العقاري (Titre) مسبقاً لتسريع عملية الطلب.',
		'احتفظ برمز التتبع ورمز التحقق للوثيقة لاستخدامهما في خاصية التحقق من صحة الشهادة لاحقاً.',
		'الشهادة تطلب عبر ملء الاستمارة الإلكترونية المعدة لذلك دون الحاجة للإدلاء بأي وثيقة أخرى غير رقم التيتر.',
		'لتفادي المشاكل أثناء الأداء، تأكد من تفعيل خدمة التجارة الإلكترونية لبطاقتك البنكية.',
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
								<Home className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">شهادة الملكية العقارية</h1>
								<p className="text-xs text-gray-500">Attestation de Propriété / Titre Foncier</p>
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
                            // تم دمج Home هنا لتجنب الخطأ
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

				
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					
					<div className="lg:col-span-2 space-y-8">
					
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
								<FileText className="w-6 h-6 text-cyan-600" />
								الوثائق والمتطلبات (للطلب الإلكتروني)
							</h2>
							<div className="space-y-4">
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-4 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
										<div className="flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-cyan-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
											<p className="text-sm text-gray-600 mb-2">{doc.description}</p>
											<p className="text-xs text-cyan-700 bg-cyan-100 rounded-lg px-3 py-1 inline-block">
												💡 {doc.note}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Steps Section */}
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات طلب شهادة الملكية (إلكترونياً)</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
								<a href="https://www.ancfcc.gov.ma/ar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الموقع الرسمي للمحافظة العقارية</p>
										<p className="text-xs text-gray-600">www.ancfcc.gov.ma</p>
									</div>
								</a>
							</div>
						</div>

						{/* Download Button */}
						<button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							تحميل دليل خطوات الطلب PDF
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white mt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center">
						<p className="text-gray-400">© 2025 دليلك - جميع الحقوق محفوظة 🇲🇦</p>
						<p className="text-sm text-gray-500 mt-2">
							المعلومات المقدمة استرشادية. يُرجى التأكد من الوكالة الوطنية للمحافظة العقارية والمسح العقاري والخرائطية (ANCFCC).
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}