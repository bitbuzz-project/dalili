import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe } from 'lucide-react';

export default function CNIEDetailsPage({ onBack }) { // تصحيح: استقبال الخاصية onBack
	const [openFAQ, setOpenFAQ] = useState(null);

	const documents = [
		{
			title: 'شهادة السكنى',
			description: 'في الوسط الحضري: من مصالح الأمن الوطني (الكوميسارية)',
			note: 'في الوسط القروي: من الدرك الملكي أو السلطة المحلية (القايد)'
		},
		{
			title: '4 صور فوتوغرافية',
			description: 'حديثة ومطابقة للمعايير',
			note: 'خلفية بيضاء أو رمادية فاتحة، حجم 35×45 ملم، بدون نظارات'
		},
		{
			title: 'نسخة من رسم الولادة',
			description: 'أو نسخة كاملة من سجل الحالة المدنية',
			note: 'يجب ألا تتجاوز مدة 3 أشهر من تاريخ تسليمها'
		},
		{
			title: 'نسخة من الدفتر العائلي',
			description: 'مع تقديم الدفتر الأصلي',
			note: 'في حالة الطلب لأول مرة عند بلوغ 18 سنة'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'حجز موعد إلكتروني',
			description: 'ادخل على الموقع الرسمي www.cnie.ma واحجز موعدك',
			time: '5 دقائق'
		},
		{
			number: '2',
			title: 'تحضير الوثائق',
			description: 'جمع جميع الوثائق المطلوبة والتأكد من صلاحيتها',
			time: '1-3 أيام'
		},
		{
			number: '3',
			title: 'التوجه للمركز',
			description: 'في موعدك المحدد، توجه لمركز تسجيل المعطيات',
			time: '30-60 دقيقة'
		},
		{
			number: '4',
			title: 'التقاط الصورة والبصمات',
			description: 'سيتم أخذ صورتك وبصماتك بشكل رقمي',
			time: '10 دقائق'
		},
		{
			number: '5',
			title: 'استلام الوصل',
			description: 'احتفظ بالوصل لتتبع طلبك واستلام البطاقة',
			time: 'فوري'
		},
		{
			number: '6',
			title: 'استلام البطاقة',
			description: 'استلم بطاقتك من نفس المركز',
			time: '3-6 أسابيع'
		}
	];

	const faqs = [
		{
			q: 'شحال كتخلص؟',
			a: '75 درهم للبالغين والقاصرين فوق 12 سنة، و50 درهم للقاصرين تحت 12 سنة'
		},
		{
			q: 'شحال كتبقى صالحة البطاقة؟',
			a: 'مدة صلاحية البطاقة 10 سنوات كاملة من تاريخ إصدارها'
		},
		{
			q: 'واش خاصني نحجز موعد؟',
			a: 'نعم، يُفضل حجز موعد عبر الموقع الرسمي لتجنب الانتظار الطويل'
		},
		{
			q: 'واش يمكن للقاصر ياخد البطاقة؟',
			a: 'نعم، يمكن الحصول عليها ابتداءً من سن 16 سنة، ويجب حضور النائب الشرعي'
		},
		{
			q: 'واش شهادة السكنى ضرورية للتجديد؟',
			a: 'إذا لم يتغير عنوان السكن، فشهادة السكنى ليست مطلوبة. أما إذا تغير العنوان، فهي ضرورية'
		},
		{
			q: 'شنو ندير إذا ضاعت ليا البطاقة؟',
			a: 'توجه فوراً لأقرب مركز أمني لتقديم إعلان بالضياع، ثم قدم طلب جديد مع تصريح بالشرف'
		}
	];

	const tips = [
		'تأكد من صلاحية جميع الوثائق (3 أشهر كحد أقصى)',
		'الصور يجب أن تكون حديثة وبخلفية فاتحة',
		'احجز موعدك مبكراً لتجنب الانتظار الطويل',
		'احتفظ بالوصل في مكان آمن لاستلام البطاقة',
		'تأكد من صحة المعلومات قبل المصادقة النهائية',
		'يمكنك تتبع طلبك عبر الموقع الرسمي باستخدام رقم الوصل'
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
							<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
								<FileText className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">بطاقة التعريف الوطنية</h1>
								<p className="text-xs text-gray-500">Carte d'identité nationale</p>
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
								<p className="text-xs text-gray-500">الرسوم</p>
								<p className="text-lg font-bold text-gray-900">75 درهم</p>
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
								<p className="text-lg font-bold text-gray-900">3-6 أسابيع</p>
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
								<p className="text-lg font-bold text-gray-900">الكوميسارية</p>
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على البطاقة</h2>
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
								<a href="https://www.cnie.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الموقع الرسمي</p>
										<p className="text-xs text-gray-600">www.cnie.ma</p>
									</div>
								</a>
								<div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
									<Phone className="w-5 h-5 text-green-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">المديرية العامة للأمن الوطني</p>
										<p className="text-xs text-gray-600">للاستفسارات</p>
									</div>
								</div>
							</div>
						</div>

						{/* Download Button */}
						<button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							تحميل قائمة الوثائق PDF
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من المديرية العامة للأمن الوطني
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}