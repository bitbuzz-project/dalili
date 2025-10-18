import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe, Car, CreditCard, RefreshCw } from 'lucide-react';

export default function CarteGriseDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const documents = [
		{
			title: 'طلب محرر على نموذج خاص',
			description: 'نموذج BI أو BII أو BIII حسب طريقة الشراء أو التجديد',
			note: 'يمكن تحميل النماذج من موقع NARSA'
		},
		{
			title: 'الوثائق التي تثبت الإقامة',
			description: 'نسخة مطابقة للأصل من بطاقة التعريف الوطنية (CNIE)',
			note: 'مطلوبة في حالة تغيير العنوان أو الهوية'
		},
		{
			title: 'البطاقة الرمادية الأصلية',
			description: 'الشهادة الأصلية للتسجيل (البطاقة الرمادية الحالية)',
			note: 'مطلوبة لاستبدال الحامل الإلكتروني أو تغيير المعلومات'
		},
		{
			title: 'وثيقة تبرر التجديد',
			description: 'قد تكون رفع اليد، محضر استلام انفرادي، أو وثيقة تغيير الهوية',
			note: 'حسب حالة التجديد (انتهاء صلاحية الحامل، تلف، تغيير خصائص المركبة)'
		},
		{
			title: 'وصل أداء الواجبات',
			description: 'يشمل رسوم التمبر والغرامات الإدارية إن وجدت',
			note: 'في حالة عدم الالتزام بأجل 30 يوماً، تفرض غرامة تأخير'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'تحضير الوثائق المطلوبة',
			description: 'تجهيز ملف الطلب حسب حالة التجديد (انتهاء، تلف، تغيير)',
			time: '1 يوم'
		},
		{
			number: '2',
			title: 'أداء الواجبات',
			description: 'دفع رسوم التمبر والغرامات المستحقة في وكالات الأداء المعتمدة',
			time: '15 دقيقة'
		},
		{
			number: '3',
			title: 'إيداع الملف',
			description: 'التوجه إلى وكالة بريد بنك / بريد كاش أو المصالح الإقليمية لنارسا وإيداع الملف',
			time: '30 دقيقة'
		},
		{
			number: '4',
			title: 'استلام الوصل',
			description: 'الحصول على وصل إيداع الملف المؤقت',
			time: 'فوري'
		},
		{
			number: '5',
			title: 'تتبع الطلب',
			description: 'تتبع مسار معالجة الطلب عبر موقع خدمات نارسا khadamat.narsa.gov.ma',
			time: '5 دقائق'
		},
		{
			number: '6',
			title: 'سحب البطاقة',
			description: 'سيتم إشعارك لاستلام البطاقة الرمادية الجديدة من نفس مكان الإيداع',
			time: '3-6 أسابيع'
		}
	];

	const faqs = [
		{
			q: 'ما هي مدة صلاحية البطاقة الرمادية؟',
			a: 'مدة صلاحية الحامل الإلكتروني لشهادة التسجيل (البطاقة الرمادية) هي 10 سنوات. يجب تجديدها عند انتهاء هذه المدة أو في حالة التلف.'
		},
		{
			q: 'هل تجديد البطاقة ضروري عند تغيير العنوان فقط؟',
			a: 'لا، في حالة تغيير العنوان فقط، تقوم الإدارة بتحديث المعلومات الموجودة في الشهادة دون الحاجة إلى تجديد الحامل الإلكتروني.'
		},
		{
			q: 'ماذا أفعل في حالة ضياع أو سرقة البطاقة؟',
			a: 'يجب التقدم بطلب للحصول على نظير منها (Duplicate)، وليس تجديداً، بعد الإعلان عن الضياع/السرقة.'
		},
		{
			q: 'هل هناك غرامة للتأخير في نقل الملكية؟',
			a: 'نعم، في حالة عدم احترام أجل إيداع ملف تحويل الملكية، تفرض غرامة إدارية قدرها 500 درهم مع غرامة إضافية بنسبة 10 % عن كل شهر تأخير.'
		}
	];

	const tips = [
		'في حالة نقل الملكية، تأكد من وجود عقد بيع محرر على نموذج خاص بموقع NARSA.',
		'إذا كنت تقوم بتصفية قرض، يجب إرفاق شهادة رفع اليد.',
		'تجنب الغرامات المالية بالتصريح بأي تغيير يطرأ على هويتك أو مركبتك في أجل 30 يوماً.',
		'يمكنك إيداع الملف في وكالات بريد بنك وبريد كاش لتسهيل العملية وتجنب الازدحام في مصالح NARSA.'
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
							<div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
								<CreditCard className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">البطاقة الرمادية (شهادة التسجيل)</h1>
								<p className="text-xs text-gray-500">Carte Grise / Certificat d'immatriculation</p>
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
								<p className="text-xs text-gray-500">الرسوم (إدارية/تمبر)</p>
								<p className="text-lg font-bold text-gray-900">حوالي 400 درهم</p>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
								<Clock className="w-5 h-5 text-blue-600" />
							</div>
							<div>
								<p className="text-xs text-gray-500">المدة (للاستلام)</p>
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
								<p className="text-lg font-bold text-gray-900">5 وثائق</p>
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
								<p className="text-lg font-bold text-gray-900">وكالات NARSA / بريد بنك</p>
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
								الوثائق المطلوبة (للتجديد / تغيير المعلومات)
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات تجديد البطاقة الرمادية</h2>
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
								<a href="https://khadamat.narsa.gov.ma/ar/services/mutation-de-vehicules" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">بوابة خدمات NARSA</p>
										<p className="text-xs text-gray-600">khadamat.narsa.gov.ma</p>
									</div>
								</a>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<MapPin className="w-5 h-5 text-gray-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">المصالح الإقليمية للسلامة الطرقية</p>
										<p className="text-xs text-gray-600">أو وكالات بريد بنك / بريد كاش</p>
									</div>
								</div>
							</div>
						</div>

						{/* Action Button */}
						<a href="https://khadamat.narsa.gov.ma/ar/services/mutation-de-vehicules" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<RefreshCw className="w-5 h-5" />
							انتقل لخدمات تسجيل المركبات
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