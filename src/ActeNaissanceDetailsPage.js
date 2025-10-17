import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, MapPin, AlertCircle, ChevronDown, ChevronUp, Download, Phone, Globe } from 'lucide-react';

export default function ActeNaissanceDetailsPage({ onBack }) {
	const [openFAQ, setOpenFAQ] = useState(null);

	const quickInfo = [
        { label: 'الرسوم', value: 'رسوم الأداء والبريد', icon: 'DollarSign', color: 'green' },
        { label: 'المدة', value: '3-7 أيام', icon: 'Clock', color: 'blue' },
        { label: 'الوثائق', value: 'طلب إلكتروني', icon: 'FileText', color: 'purple' },
        { label: 'المكان', value: 'يصلك بالبريد المضمون', icon: 'MapPin', color: 'orange' }
    ];

	const documents = [
		{
			title: 'بيانات الشخص المعني بالوثيقة',
			description: 'الاسم الكامل، تاريخ ومكان الولادة، اسم الأب والأم',
			note: 'يجب أن تكون البيانات دقيقة ومطابقة لسجلات الحالة المدنية لتفادي رفض الطلب'
		},
		{
			title: 'عنوان التسليم',
			description: 'العنوان الكامل الذي ستُرسل إليه الوثيقة بالبريد المضمون',
			note: 'يتوجب على المستلم الإدلاء بوثيقة التعريف عند الاستلام'
		},
		{
			title: 'بطاقة بنكية',
			description: 'لأداء تكاليف الطوابع والبريد عبر الإنترنت',
			note: 'عملية الأداء تتم حصراً عبر البطاقة البنكية في المنصة'
		}
	];

	const steps = [
		{
			number: '1',
			title: 'الدخول إلى المنصة',
			description: 'ادخل على الموقع الرسمي www.watiqa.ma واختر "طلب عقد الولادة"',
			time: 'دقيقة واحدة'
		},
		{
			number: '2',
			title: 'تحديد نوع الوثيقة والجهة',
			description: 'اختر النسخة (موجزة/كاملة) وحدد الجماعة أو المقاطعة المسجل بها عقد الازدياد',
			time: '5 دقائق'
		},
		{
			number: '3',
			title: 'إدخال البيانات',
			description: 'املأ المعلومات الشخصية المطلوبة بدقة وعنوان التسليم وعدد النسخ',
			time: '10 دقائق'
		},
		{
			number: '4',
			title: 'تأكيد ودفع التكاليف',
			description: 'راجع بياناتك جيداً، ثم قم بالأداء الإلكتروني لتغطية تكاليف الطوابع والبريد',
			time: '5 دقائق'
		},
		{
			number: '5',
			title: 'معالجة الطلب والتتبع',
			description: 'يتم معالجة طلبك خلال 24 ساعة في مكتب الحالة المدنية. يمكنك تتبع الطلب لاحقاً',
			time: 'يوم واحد'
		},
		{
			number: '6',
			title: 'استلام الوثيقة',
			description: 'استلم الوثيقة على العنوان المحدد بالبريد المضمون خلال مدة أقصاها 5 أيام',
			time: '5 أيام كحد أقصى'
		}
	];

	const faqs = [
		{
			q: 'من يمكنه الاستفادة من هذه الخدمة؟',
			a: 'الخدمة مفتوحة للأشخاص الطبيعيين البالغين المسجلين في سجلات الأحوال المدنية المغربية، ويمكن للولي الشرعي طلب الوثيقة للقاصرين.'
		},
		{
			q: 'ما الفرق بين النسخة الموجزة والكاملة؟',
			a: 'النسخة الموجزة تتضمن المعلومات الأساسية فقط، بينما النسخة الكاملة تشمل كافة التفاصيل المتعلقة بالشخص ووالديه.'
		},
		{
			q: 'ما هي مدة التسليم المتوقعة؟',
			a: 'بعد معالجة الطلب في 24 ساعة، يتم الإرسال عبر البريد المسجل خلال مدة أقصاها 5 أيام.'
		},
		{
			q: 'هل يمكنني الدفع نقداً؟',
			a: 'لا، عملية الأداء حالياً تتم حصراً عبر البطاقة البنكية لتغطية رسوم الطوابع والبريد المضمون.'
		}
	];

	const tips = [
		'تأكد من اختيار الجماعة أو المقاطعة الصحيحة التي تم بها تسجيل الولادة.',
		'راجع كل البيانات المدخلة في الاستمارة (الاسم، تاريخ الميلاد) بدقة لتجنب رفض الطلب.',
		'الخدمة توفر عليك عناء ومشقة وتكاليف التنقل إلى مكاتب الحالة المدنية لمحل ولادتك.',
		'إذا لم يصلك العقد خلال أسبوع، يمكنك تتبع الطلب من حسابك على Watiqa.ma.'
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50" dir="rtl">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
							<ArrowRight className="w-5 h-5" />
							<span>رجوع</span>
						</button>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
								<FileText className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">عقد/شهادة الميلاد</h1>
								<p className="text-xs text-gray-500">Acte de Naissance (Copie Intégrale / Extrait)</p>
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
								المعلومات والوثائق المطلوبة
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
							<h2 className="text-2xl font-bold text-gray-900 mb-6">خطوات الطلب عبر الإنترنت (Watiqa.ma)</h2>
							<div className="space-y-4">
								{steps.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
								<a href="https://www.watiqa.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
									<Globe className="w-5 h-5 text-blue-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">الشباك الإلكتروني للوثائق</p>
										<p className="text-xs text-gray-600">www.watiqa.ma</p>
									</div>
								</a>
								<div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
									<Phone className="w-5 h-5 text-green-600" />
									<div>
										<p className="text-sm font-medium text-gray-900">دعم المنصة</p>
										<p className="text-xs text-gray-600">للاستفسارات والتتبع</p>
									</div>
								</div>
							</div>
						</div>

						{/* Download Button */}
						<button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
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
							المعلومات المقدمة استرشادية. يُرجى التأكد من مكاتب الحالة المدنية والجماعات المحلية.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}