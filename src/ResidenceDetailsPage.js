import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Home } from 'lucide-react';

export default function ResidenceDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: 'مجانية (تم إلغاء التمبر)', icon: 'DollarSign', color: 'green' },
        { label: 'المدة', value: '1-2 يوم', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: '3-4 وثائق (حسب الحالة)', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'دائرة الشرطة / الدرك الملكي', icon: 'MapPin', color: 'orange' }
    ];

    // الوثائق المطلوبة (تم تجميع الحالات الأكثر شيوعاً)
	const documents = [
		{
			title: 'نسخة من البطاقة الوطنية للتعريف (CNIE)',
			description: 'يجب أن تكون سارية الصلاحية.',
			note: 'ضرورية لإثبات الهوية.'
		},
		{
			title: 'إثبات السكن (فاتورة/عقد/التزام)',
			description: 'للمالك: شهادة الملكية أو آخر فاتورة ماء/كهرباء باسمك. للمكتري: عقد كراء أو وصل كراء + فاتورة باسم صاحب المنزل.',
			note: 'يجب أن تثبت محل إقامتك لمدة لا تقل عن 3 أشهر.'
		},
		{
			title: 'صورتان فوتوغرافيتان',
			description: 'صورتان شخصيتان حديثتان (حجم صغير).',
			note: 'وفقاً للمعايير المعتمدة (خلفية فاتحة)'
		},
        {
			title: 'شهادة العمل أو شهادة مدرسية',
			description: 'تُطلب غالباً لإثبات صفة الطالب أو العامل (خاصة إذا كنت مقيماً مع الأهل).',
			note: 'مطلوبة للطلبة والقاصرين بشكل خاص.'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'تحديد الجهة المسؤولة',
			description: 'في المجال الحضري: دائرة الشرطة. في المجال القروي: قيادة الدرك الملكي.',
			time: 'فوري'
		},
		{
			number: '2',
			title: 'تجهيز الوثائق الخاصة بحالتك',
			description: 'حدد حالتك (مالك، مكتري، مقيم مع الأهل) واجمع الوثائق المطلوبة بدقة.',
			time: 'يوم واحد'
		},
		{
			number: '3',
			title: 'تقديم الملف',
			description: 'توجه للمصلحة المختصة وقدم ملفك كاملاً.',
			time: '30 دقيقة'
		},
		{
			number: '4',
			title: 'استلام الشهادة',
			description: 'يتم إصدار الشهادة في نفس اليوم أو اليوم التالي.',
			time: '1-2 يوم'
		}
	];

	const faqs = [
		{
			q: 'هل الرسوم لازالت مطلوبة؟',
			a: 'لا، شهادة السكنى المسلمة من دوائر الشرطة أصبحت مجانية، فقد تم إلغاء حقوق التنبر (20 درهم) بموجب قانون المالية لسنة 2018.'
		},
		{
			q: 'ماذا لو لم تكن الفاتورة باسمي؟',
			a: 'إذا كنت مكترياً أو مقيماً مع الأهل، يجب عليك إرفاق التزام بالسكن (مصادق عليه) من طرف صاحب المنزل (المالك)، إضافة إلى فاتورة الماء/الكهرباء الخاصة به.'
		},
		{
			q: 'كم يجب أن تكون مدة إقامتي في العنوان؟',
			a: 'تُسلم شهادة السكنى لمن يقيم بالمحل لمدة زمنية لا تقل عن ثلاثة أشهر.'
		}
	];

	const tips = [
		'تحقق من أن آخر فاتورة للماء أو الكهرباء هي الأحدث (خاصة باسم المالك) لأنها ضرورية لإثبات السكن.',
		'إن رئيس الدائرة الأمنية له الحق في طلب وثيقة أو وثائق إضافية غير المذكورة أعلاه.',
		'في حالة تعذر الحصول على الوثائق المذكورة، يمكن في بعض الحالات للمواطن أن يحضر شهادة السكنى المسلمة من طرف السلطة المحلية (القايد).',
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50" dir="rtl">
			/* Header */
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
								<Home className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">شهادة السكنى (الإقامة)</h1>
								<p className="text-xs text-gray-500">Attestation de Résidence</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			/* Quick Info Cards */
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
								<FileText className="w-6 h-6 text-orange-600" />
								الوثائق المطلوبة (حسب حالة السكن)
							</h2>
							<div className="space-y-4">
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
										<div className="flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-orange-600" />
										</div>
										<div className="flex-1">
											<h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
											<p className="text-sm text-gray-600 mb-2">{doc.description}</p>
											<p className="text-xs text-orange-700 bg-orange-100 rounded-lg px-3 py-1 inline-block">
												💡 {doc.note}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						/* Steps Section */
						<div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الحصول على الشهادة</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
						<div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl shadow-md p-6 border border-emerald-200 sticky top-24">
							<div className="flex items-center gap-2 mb-4">
								<AlertCircle className="w-6 h-6 text-emerald-600" />
								<h3 className="font-bold text-gray-900">نصائح مهمة</h3>
							</div>
							<ul className="space-y-3">
								{tips.map((tip, index) => (
									<li key={index} className="flex items-start gap-2 text-sm text-gray-700">
										<span className="text-emerald-600 flex-shrink-0">✓</span>
										<span>{tip}</span>
									</li>
								))}
							</ul>
						</div>
                        /* Download Button */
						<button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
							<Download className="w-5 h-5" />
							تحميل قائمة الوثائق PDF
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من دائرة الشرطة أو قيادة الدرك الملكي التابع لها محل سكنك.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}