import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Car, Calendar } from 'lucide-react'; // تم حذف Tool

export default function ControleTechniqueDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const documents = [
		{
			title: 'البطاقة الرمادية الأصلية',
			description: 'شهادة تسجيل المركبة (Carte Grise) سارية المفعول',
			note: 'وثيقة ضرورية لإثبات هوية المركبة ومالكها'
		},
		{
			title: 'شهادة التأمين',
			description: 'نسخة من وثيقة التأمين سارية المفعول',
			note: 'مطلوبة للتأكد من شرعية سير المركبة'
		},
		{
			title: 'وصل أداء رسوم الفحص',
			description: 'يتم دفعه مباشرة في مركز الفحص أو عبر وسائل الدفع المعتمدة',
			note: 'الرسوم تختلف حسب نوع المركبة (خفيفة، شاحنة، دراجة..)'
		},
		{
			title: 'محضر الفحص التقني السابق',
			description: 'في حالة إعادة الفحص أو التجديد الدوري',
			note: 'لتتبع سجل المركبة وحالة الفحص الأخير'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'حجز موعد',
			description: 'اتصل بمركز الفحص التقني المعتمد أو احجز موعدك إلكترونياً (إذا توفرت الخدمة)',
			time: '10 دقائق'
		},
		{
			number: '2',
			title: 'تحضير المركبة والوثائق',
			description: 'التأكد من نظافة وسلامة المركبة ظاهرياً وجمع جميع الوثائق المطلوبة',
			time: '1-2 ساعة'
		},
		{
			number: '3',
			title: 'التوجه إلى المركز',
			description: 'الحضور في الموعد المحدد والانتظار لبدء عملية الفحص',
			time: '15 دقيقة'
		},
		{
			number: '4',
			title: 'إجراء الفحص التقني',
			description: 'يقوم الفاحص بفحص الجوانب الميكانيكية، البيئية والسلامة للمركبة',
			time: '45 دقيقة'
		},
		{
			number: '5',
			title: 'استلام الشهادة',
			description: 'في حال النجاح، تسلم شهادة الفحص التقني للمركبات',
			time: 'فوري'
		},
		{
			number: '6',
			title: 'إعادة الفحص (في حال الرسوب)',
			description: 'يجب إصلاح الأعطال والعودة لإعادة الفحص خلال المدة المحددة قانونياً',
			time: 'حسب نوع العطل'
		}
	];

	const faqs = [
		{
			q: 'ما هي مدة صلاحية شهادة الفحص التقني؟',
			a: 'مدة صلاحيتها عادة سنة واحدة (12 شهراً) بالنسبة للمركبات الخاصة التي تجاوز عمرها 5 سنوات.'
		},
		{
			q: 'هل السيارات الجديدة تحتاج إلى فحص تقني؟',
			a: 'لا، السيارات الجديدة (أقل من 5 سنوات) معفاة من الفحص التقني الدوري.'
		},
		{
			q: 'ما هي الفئات التي يخضع فحصها كل 6 أشهر؟',
			a: 'تخضع مركبات النقل العمومي (الأجرة، الحافلات) ومركبات النقل المزدوج للفحص كل ستة أشهر.'
		},
		{
			q: 'ماذا يحدث إذا لم أنجح في الفحص؟',
			a: 'يجب إصلاح الأعطال المذكورة في تقرير الفحص والعودة لإجراء فحص مضاد خلال مدة لا تتجاوز 15 يوماً.'
		}
	];

	const tips = [
		'تأكد من عمل المصابيح، الفرامل، والإطارات قبل التوجه للمركز.',
		'إجراء فحص مبكر قبل انتهاء صلاحية الشهادة السابقة لتجنب الغرامات.',
		'تجنب أي تعديلات غير مرخصة على المركبة (مثل تغيير لون المصابيح أو المحرك).',
		'الفحص إلزامي لنقل ملكية المركبة بين البائع والمشتري.'
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
								<Car className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">شهادة الفحص التقني للمركبات</h1>
								<p className="text-xs text-gray-500">Contrôle technique des véhicules</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Quick Info Cards */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
					<div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
								<DollarSign className="w-5 h-5 text-green-600" />
							</div>
							<div>
								<p className="text-xs text-gray-500">الرسوم (تقديري)</p>
								<p className="text-lg font-bold text-gray-900">450 درهم</p>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
								<Clock className="w-5 h-5 text-blue-600" />
							</div>
							<div>
								<p className="text-xs text-gray-500">المدة (للصلاحية)</p>
								<p className="text-lg font-bold text-gray-900">سنة واحدة</p>
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
								<p className="text-lg font-bold text-gray-900">4 وثائق</p>
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
								<p className="text-lg font-bold text-gray-900">مراكز الفحص المعتمدة</p>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column */}
					<div className="lg:col-span-2 space-y-8">
						{/* Documents Section */}
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
								<FileText className="w-6 h-6 text-blue-600" />
								الوثائق المطلوبة للفحص
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات إجراء الفحص التقني</h2>
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
								<div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
									<Car className="w-5 h-5 text-red-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الوكالة الوطنية للسلامة الطرقية (NARSA)</p>
										<p className="text-xs text-gray-600">الجهة المسؤولة عن الاعتماد</p>
									</div>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<MapPin className="w-5 h-5 text-gray-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">مراكز الفحص المعتمدة</p>
										<p className="text-xs text-gray-600">تختلف حسب المنطقة</p>
									</div>
								</div>
							</div>
						</div>

						{/* Action Button */}
						<a href="https://www.narsa-securiteroutiere.ma/ar/categories-etablissement-de-controle-technique" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Calendar className="w-5 h-5" />
							البحث عن مركز فحص معتمد
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white mt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center">
						<p className="text-gray-400">© 2025 دليلك - جميع الحقوق محفوظة 🇲🇦</p>
						<p className="text-sm text-gray-500 mt-2">
							المعلومات المقدمة استرشادية. يُرجى التأكد من الوكالة الوطنية للسلامة الطرقية (NARSA)
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}