import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe } from 'lucide-react';

export default function PassportDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: '500 درهم', icon: 'DollarSign', color: 'green' },
        { label: 'المدة', value: '3-6 أسابيع', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: '5 وثائق رئيسية', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'الملحقة الإدارية', icon: 'MapPin', color: 'orange' }
    ];

	const documents = [
		{
			title: 'استمارة طلب الحصول على جواز السفر',
			description: 'موقعة ومؤرخة من طرف المعني بالأمر',
			note: 'يتم ملؤها وطبعها عبر الموقع الرسمي: passeport.ma'
		},
		{
			title: 'وصل أداء الطابع الإلكتروني',
			description: 'وصل يثبت دفع واجبات التمبر المحدثة (500 درهم)',
			note: 'يُشترى الطابع عبر الإنترنت قبل ملء الاستمارة'
		},
		{
			title: 'نسخة من البطاقة الوطنية للتعريف الإلكترونية (CNIE)',
			description: 'يجب أن تكون سارية الصلاحية وتحمل عنوان السكن الحالي',
			note: 'إلزامية حتى في حالة التجديد'
		},
		{
			title: 'صورتان شمسيتان للتعريف',
			description: 'حديثتان ومتشابهتان (حجم 45x35 مم، خلفية فاتحة)',
			note: 'يجب أن تظهر بوضوح ملامح الوجه وتكون مطابقة للمعايير'
		},
		{
			title: 'جواز السفر القديم أو ما يبرر مصيره',
			description: 'يُقدم الجواز القديم أو شهادة التصريح بالضياع/السرقة',
			note: 'شهادة الضياع تُسلم من الأمن الوطني/الدرك الملكي أو القنصلية بالخارج'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'شراء الطابع الإلكتروني',
			description: 'ادفع واجبات التمبر (500 درهم) عبر الموقع الرسمي للتمبر',
			time: '5 دقائق'
		},
		{
			number: '2',
			title: 'ملء وطبع الاستمارة',
			description: 'ادخل على موقع www.passeport.ma، املأ الاستمارة واطبعها على ورقة A4',
			time: '15 دقيقة'
		},
		{
			number: '3',
			title: 'تكوين الملف وتجهيز الوثائق',
			description: 'اجمع الاستمارة المطبوعة ووصل الطابع والوثائق الأخرى المطلوبة',
			time: '1-3 أيام'
		},
		{
			number: '4',
			title: 'إيداع الطلب وأخذ البصمات',
			description: 'توجه إلى الملحقة الإدارية أو القيادة التابعة لمقر سكنك لتقديم الملف وأخذ بصماتك وصورتك الرقمية',
			time: '30-60 دقيقة'
		},
		{
			number: '5',
			title: 'تتبع الطلب',
			description: 'يمكنك تتبع حالة طلبك عبر الموقع الرسمي، وسيصلك إشعار عند الإصدار',
			time: 'فوري'
		},
		{
			number: '6',
			title: 'سحب جواز السفر',
			description: 'اسحب جواز السفر شخصيًا من نفس مركز الإيداع بعد الإدلاء بوصل الإيداع',
			time: '3-6 أسابيع (المدة الإجمالية)'
		}
	];

	const faqs = [
		{
			q: 'شحال المدة ديال صلاحية الجواز؟',
			a: 'مدة صلاحية الجواز هي 5 سنوات كاملة بالنسبة للبالغين والأطفال فوق سن 3 سنوات.'
		},
		{
			q: 'شنو ندير إذا ضاع لي الجواز القديم؟',
			a: 'يجب الإدلاء بشهادة التصريح بالضياع أو السرقة مسلمة من مصالح الأمن الوطني أو الدرك الملكي (أو القنصلية بالخارج).'
		},
		{
			q: 'واش خاص CNIE تكون سارية المفعول؟',
			a: 'نعم، يجب أن تكون البطاقة الوطنية سارية المفعول وتحمل عنوان سكنك الحالي وهي وثيقة أساسية.'
		},
		{
			q: 'شحال المدة القصوى لسحب الجواز؟',
			a: 'تلغى جوازات السفر البيومترية التي لم يتم سحبها داخل أجل شهرين من تاريخ إصدارها.'
		}
	];

	const tips = [
		'تأكد أن بطاقة التعريف الوطنية سارية المفعول وتحمل عنوانك الصحيح.',
		'الصور يجب أن تكون حديثة ومطابقة للمعايير بدقة لتجنب رفض الطلب.',
		'يُفضل الاحتفاظ بنسخة رقمية لوصل أداء الطابع الإلكتروني ورقم تتبع الطلب.',
		'في حالة القاصرين، يجب أن يكونوا مصحوبين بالنائب الشرعي عند إيداع الطلب.'
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">جواز السفر البيومتري</h1>
								<p className="text-xs text-gray-500">Passeport Biométrique</p>
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

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column */}
					<div className="lg:col-span-2 space-y-8">
						{/* Documents Section */}
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
								<FileText className="w-6 h-6 text-green-600" />
								الوثائق المطلوبة
							</h2>
							<div className="space-y-4">
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
										<div className="flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-green-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
											<p className="text-sm text-gray-600 mb-2">{doc.description}</p>
											<p className="text-xs text-green-700 bg-green-100 rounded-lg px-3 py-1 inline-block">
												💡 {doc.note}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Steps Section */}
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على الجواز</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
								<a href="https://www.passeport.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الموقع الرسمي للجوازات</p>
										<p className="text-xs text-gray-600">www.passeport.ma</p>
									</div>
								</a>
								<a href="https://www.timbre.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
									<DollarSign className="w-5 h-5 text-red-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">شراء الطابع الإلكتروني</p>
										<p className="text-xs text-gray-600">www.timbre.ma</p>
									</div>
								</a>
							</div>
						</div>

						{/* Download Button */}
						<button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							تحميل دليل الوثائق PDF
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من المصالح المسؤولة عن الجوازات
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}