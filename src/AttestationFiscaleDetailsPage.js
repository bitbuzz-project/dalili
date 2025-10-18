import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe, Briefcase, Stamp } from 'lucide-react';

export default function AttestationFiscaleDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const documents = [
		{
			title: 'طلب خطي للحصول على الرقم الضريبي',
			description: 'محرر وموقع من طرف المعني بالأمر أو وكيله',
			note: 'يمكن استخدام نموذج الطلب المتاح على موقع DGI'
		},
		{
			title: 'نسخة من بطاقة التعريف الوطنية (CNIE)',
			description: 'صورة واضحة سارية المفعول',
			note: 'مطلوبة لإثبات الهوية الشخصية'
		},
		{
			title: 'شهادة السكنى أو إثبات العنوان',
			description: 'في حالة طلب الرقم الضريبي الفردي، لضمان الربط بالمحل الضريبي الصحيح',
			note: 'قد تكون وثيقة رسمية (فاتورة ماء/كهرباء) أو شهادة سكنى'
		},
		{
			title: 'وثيقة إثبات النشاط (للأشخاص المعنويين)',
			description: 'نسخة من السجل التجاري، القانون الأساسي، أو ما يثبت ممارسة النشاط المهني',
			note: 'هذا يخص المقاولات والمهنيين أكثر من الأفراد العاديين'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'تعبئة نموذج الطلب',
			description: 'ملء استمارة طلب الرقم الضريبي بعناية فائقة، سواء إلكترونياً أو ورقياً',
			time: '15 دقيقة'
		},
		{
			number: '2',
			title: 'تجميع الوثائق',
			description: 'جمع CNIE ووثيقة إثبات العنوان وأي وثيقة داعمة للنشاط',
			time: '1 يوم'
		},
		{
			number: '3',
			title: 'إيداع الملف',
			description: 'التوجه إلى المديرية الجهوية للضرائب أو المصلحة التابع لها محل الإقامة/النشاط',
			time: '30 دقيقة'
		},
		{
			number: '4',
			title: 'تسجيل الطلب',
			description: 'يتم تسجيل الطلب وإعطاؤك وصل إيداع',
			time: 'فوري'
		},
		{
			number: '5',
			title: 'استلام الإشعار بالرقم',
			description: 'تتلقى إشعاراً رسمياً برقمك الضريبي (Identifiant Fiscal - IF)',
			time: '7-15 أيام'
		}
	];

	const faqs = [
		{
			q: 'هل الحصول على البطاقة الجبائية مجاني؟',
			a: 'نعم، الحصول على الرقم الضريبي (IF) أو البطاقة الجبائية لأول مرة هو إجراء مجاني لدى المديرية العامة للضرائب (DGI).'
		},
		{
			q: 'ما هو الهدف الأساسي من الرقم الضريبي؟',
			a: 'هو الهوية الضريبية التي تسمح للمعني بالأمر بالتعامل مع الإدارة الضريبية والقيام بجميع المعاملات المالية والإدارية التي تتطلب هذا الرقم.'
		},
		{
			q: 'هل يمكنني الحصول على الرقم الضريبي إلكترونياً؟',
			a: 'نعم، توفر المديرية العامة للضرائب خدمة الطلب المسبق للرقم الضريبي عبر بوابتها الإلكترونية (CIYAD).'
		},
		{
			q: 'هل الرقم الضريبي هو نفسه رقم السجل التجاري؟',
			a: 'الرقم الضريبي (IF) هو رقم موحد، بينما السجل التجاري يخص المقاولات والشركات، والرقم الضريبي مطلوب حتى للأفراد.'
		}
	];

	const tips = [
		'في حالة النشاط المهني، تأكد من إرفاق جميع الوثائق المتعلقة بالنشاط (الرخصة، السجل، إلخ).',
		'يُنصح بالاحتفاظ بنسخة ورقية وإلكترونية من الإشعار بالرقم الضريبي.',
		'يمكنك استخدام الرقم الضريبي في جميع معاملاتك مع الجهات الحكومية والبنكية.',
		'البوابة الإلكترونية DGI تسمح بتتبع حالة طلبك بعد الإيداع.'
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
							<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
								<Briefcase className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">البطاقة الجبائية (الرقم الضريبي)</h1>
								<p className="text-xs text-gray-500">Identifiant Fiscal / Attestation Fiscale</p>
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
								<p className="text-lg font-bold text-gray-900">مجاني</p>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
								<Clock className="w-5 h-5 text-blue-600" />
							</div>
							<div>
								<p className="text-xs text-gray-500">المدة (للإصدار)</p>
								<p className="text-lg font-bold text-gray-900">7-15 أيام</p>
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
								<p className="text-lg font-bold text-gray-900">مصلحة الضرائب (DGI)</p>
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
								الوثائق المطلوبة (للأفراد)
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على الرقم الضريبي</h2>
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
								<a href="https://www.tax.gov.ma/wps/portal/dgi/accueil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الموقع الرسمي للضرائب</p>
										<p className="text-xs text-gray-600">www.tax.gov.ma</p>
									</div>
								</a>
								<a href="https://ciyad.tax.gov.ma/ciyad/adhesion/demandeIF" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
									<Stamp className="w-5 h-5 text-purple-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">بوابة طلب الرقم الضريبي</p>
										<p className="text-xs text-gray-600">CIYAD - DGI</p>
									</div>
								</a>
							</div>
						</div>

						{/* Action Button */}
						<a href="https://ciyad.tax.gov.ma/ciyad/adhesion/demandeIF" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							انتقل لطلب الرقم الضريبي إلكترونياً
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من المديرية العامة للضرائب (DGI)
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}