import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe, Gavel, UserCheck } from 'lucide-react';

export default function CasierJudiciaireDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const documents = [
		{
			title: 'نسخة من بطاقة التعريف الوطنية (CNIE)',
			description: 'صورة واضحة سارية المفعول',
			note: 'في حالة الطلب الحضوري أو للتسجيل في الخدمة الإلكترونية'
		},
		{
			title: 'وصل أداء رسوم التمبر',
			description: 'يتم أداؤه إلكترونياً أو بمكتب التسجيل حسب طريقة الطلب',
			note: 'الرسوم رمزية (عادة 20 درهم للطابع)'
		},
		{
			title: 'طلب خطي (في حالة الطلب الحضوري)',
			description: 'طلب رسمي موجه إلى وكيل الملك بالمحكمة الابتدائية المختصة',
			note: 'يُفضل استخدام الخدمة الإلكترونية لتقليص الإجراءات'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'التسجيل في البوابة الإلكترونية (أونلاين)',
			description: 'الدخول إلى بوابة وزارة العدل والتسجيل كمستخدم جديد أو الدخول بحسابك',
			time: '10 دقائق'
		},
		{
			number: '2',
			title: 'تعبئة نموذج الطلب',
			description: 'إدخال جميع المعلومات الشخصية المطلوبة بدقة (الاسم، تاريخ ومكان الولادة، رقم CNIE)',
			time: '5 دقائق'
		},
		{
			number: '3',
			title: 'أداء الرسوم إلكترونياً',
			description: 'دفع قيمة الطابع المالي (التمبر) عبر وسائل الدفع المتاحة',
			time: '5 دقائق'
		},
		{
			number: '4',
			title: 'تلقي الإشعار بالمعالجة',
			description: 'تلقي إشعار بأن طلبك قيد المعالجة',
			time: 'فوري'
		},
		{
			number: '5',
			title: 'استخراج الشهادة',
			description: 'يمكن سحب الشهادة إلكترونياً (PDF مختوم) أو من المحكمة حسب اختيارك',
			time: '24-48 ساعة'
		}
	];

	const faqs = [
		{
			q: 'ما هي مدة صلاحية شهادة السجل العدلي؟',
			a: 'مدة صلاحية الشهادة هي 3 أشهر من تاريخ إصدارها، وهي المدة المعتمدة في أغلب الإدارات والمؤسسات.'
		},
		{
			q: 'أين يتم إيداع الطلب بشكل حضوري؟',
			a: 'يتم إيداعه لدى مصلحة السجل العدلي بالمحكمة الابتدائية التابع لها مكان ولادة المعني بالأمر.'
		},
		{
			q: 'هل يمكن للأجانب طلب السجل العدلي في المغرب؟',
			a: 'نعم، يتم تقديم طلب السجل العدلي للأجانب المقيمين في المغرب بنفس الطريقة، مع تقديم وثيقة الإقامة.'
		},
		{
			q: 'هل الخدمة الإلكترونية متوفرة للجميع؟',
			a: 'نعم، الخدمة الإلكترونية متاحة للمواطنين المغاربة المولودين بالمغرب أو بالخارج، والأجانب المقيمين.'
		}
	];

	const tips = [
		'يُفضل استخدام الخدمة الإلكترونية لوزارة العدل لأنها الأسرع والأكثر فعالية.',
		'تأكد من كتابة اسمك الكامل وتاريخ ومكان ولادتك بدقة كما هو مدون في وثائق الحالة المدنية.',
		'يجب أن يكون لديك حساب بريد إلكتروني فعال لاستقبال إشعارات وتأكيد طلبك.',
		'يجب أن يكون لديك رقم بطاقة تعريف وطنية (CNIE) ساري المفعول للطلب الإلكتروني.'
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
							<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-lg flex items-center justify-center">
								<Gavel className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">شهادة السجل العدلي (حسن السيرة)</h1>
								<p className="text-xs text-gray-500">Extrait de casier judiciaire</p>
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
								<p className="text-lg font-bold text-gray-900">20 درهم (تمبر)</p>
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
								<p className="text-lg font-bold text-gray-900">3 أشهر</p>
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
								<p className="text-lg font-bold text-gray-900">3 وثائق</p>
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
								<p className="text-lg font-bold text-gray-900">بوابة وزارة العدل / المحكمة</p>
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
								الوثائق المطلوبة (للطلب)
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على السجل العدلي إلكترونياً</h2>
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
								<a href="https://casierjudiciaire.justice.gov.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">البوابة الإلكترونية</p>
										<p className="text-xs text-gray-600">casierjudiciaire.justice.gov.ma</p>
									</div>
								</a>
								<div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
									<UserCheck className="w-5 h-5 text-teal-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">وزارة العدل</p>
										<p className="text-xs text-gray-600">الجهة المسؤولة عن الخدمة</p>
									</div>
								</div>
							</div>
						</div>

						{/* Action Button */}
						<a href="https://casierjudiciaire.justice.gov.ma/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							انتقل لطلب السجل العدلي إلكترونياً
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من وزارة العدل المغربية.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}