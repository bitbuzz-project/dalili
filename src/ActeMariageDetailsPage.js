import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, Users, AlertCircle, ChevronDown, ChevronUp, Download, MapPin } from 'lucide-react';

export default function ActeMariageDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: '160 درهم (صائر المحكمة) + رسوم العدول', icon: 'DollarSign', color: 'red' },
        { label: 'المدة', value: '1-3 أسابيع (للمغاربة)', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: '6 وثائق أساسية', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'قاضي الأسرة / العدول', icon: 'MapPin', color: 'orange' }
    ];

	const documents = [
		{
			title: 'طلب الإذن بتوثيق الزواج',
			description: 'يُقدم لقاضي الأسرة المكلف بالزواج (موقع من طرف صاحبه أو وكيله)',
			note: 'ضروري للحصول على إذن القاضي قبل إبرام العقد عند العدول'
		},
		{
			title: 'نسخة من رسم الولادة',
			description: 'لكل واحد من الخطيبين',
			note: 'يجب أن تكون حديثة (أقل من 3 أشهر)'
		},
		{
			title: 'الشهادة الإدارية',
			description: 'لكل واحد من الخطيبين (تشمل شهادة العزوبة/الطلاق/الترمل حسب الحالة)',
			note: 'تُسلم من الجهات المختصة (كالمقاطعة)'
		},
		{
			title: 'الشهادة الطبية',
			description: 'شهادة تثبت خلو الزوجين من الأمراض المعدية',
			note: 'تُسلم من طبيب معتمد'
		},
        {
			title: 'نسخة من البطاقة الوطنية للتعريف (CNIE)',
			description: 'صورة مصادق عليها لكل واحد من الخطيبين',
			note: 'يجب أن تكون سارية الصلاحية'
		},
        {
			title: 'الإذن بالزواج في الحالات الخاصة',
			description: 'في حالات القاصر، التعدد، الإعاقة الذهنية، أو الزواج المختلط',
			note: 'يُطلب إذن خاص من القاضي لهذه الحالات'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'تكوين الملف الأولي',
			description: 'جمع الوثائق الأساسية: نسخ رسوم الولادة، الشهادات الإدارية والطبية، ونسخ البطاقة الوطنية.',
			time: '3 أيام'
		},
		{
			number: '2',
			title: 'تقديم طلب الإذن للقاضي',
			description: 'توجه إلى قاضي الأسرة المكلف بالزواج في المحكمة الابتدائية لمحل إقامتك وقم بتقديم طلب الإذن',
			time: 'يوم واحد'
		},
		{
			number: '3',
			title: 'معالجة الطلب وإصدار الإذن',
			description: 'يتم دراسة الملف والتأكد من استيفاء الشروط القانونية، ثم يُصدر القاضي الإذن بتوثيق الزواج.',
			time: '1-2 أسابيع'
		},
		{
			number: '4',
			title: 'إبرام عقد الزواج لدى العدول',
			description: 'بعد الحصول على الإذن القضائي، يتم إبرام العقد وتوثيقه لدى العدول.',
			time: 'يوم واحد'
		},
		{
			number: '5',
			title: 'تسلم نسختي العقد',
			description: 'يُسلم أصل رسم الزواج للزوجة، ونظير منه للزوج، بعد تأشير قاضي الأسرة عليه.',
			time: 'فوري'
		}
	];

	const faqs = [
		{
			q: 'من هو المسؤول عن توثيق العقد؟',
			a: 'يتم إبرام العقد وتوثيقه لدى عدلين (Adoul) بعد الحصول على الإذن بالتوثيق من قاضي الأسرة المكلف بالزواج في المحكمة الابتدائية.'
		},
		{
			q: 'ما هي أهمية الشهادة الطبية؟',
			a: 'الشهادة الطبية تثبت خلو الزوجين من الأمراض وتعتبر خطوة حاسمة لضمان شرعية العلاقة الزوجية وحماية حقوق الزوجين.'
		},
		{
			q: 'ماذا يحدث بعد توثيق العقد؟',
			a: 'يوجه ملخص العقد إلى ضابط الحالة المدنية لمحل ولادة الزوجين لتسجيله وتحديث الحالة العائلية.'
		}
	];

	const tips = [
		'يجب التأكد من أن جميع الوثائق الإدارية حديثة ولا تتجاوز مدتها 3 أشهر.',
		'في حالة الزواج المختلط، تكون الإجراءات والوثائق أكثر تعقيداً وتستغرق وقتاً أطول (30 إلى 90 يوماً).',
		'يُفضل الاستعانة بعدل لترتيب الملف وتقديم الوثائق بشكل صحيح منذ البداية لتفادي التأخير.',
		'يُسلم أصل عقد الزواج للزوجة، ونظير منه للزوج، لذا يجب الاحتفاظ بهما في مكان آمن.'
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
								<Users className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">عقد الزواج</h1>
								<p className="text-xs text-gray-500">Acte de Mariage</p>
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
								<FileText className="w-6 h-6 text-pink-600" />
								الوثائق المطلوبة (ملف الإذن بالزواج)
							</h2>
							<div className="space-y-4">
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
										<div className="flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-pink-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
											<p className="text-sm text-gray-600 mb-2">{doc.description}</p>
											<p className="text-xs text-pink-700 bg-pink-100 rounded-lg px-3 py-1 inline-block">
												💡 {doc.note}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Steps Section */}
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات توثيق الزواج</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
                        {/* Download Button */}
						<button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من مكتب الحالة المدنية / المحكمة الشرعية (حسب الحالة)
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}