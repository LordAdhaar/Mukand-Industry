import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const faqs = [
	{
		question: 'Do you offer custom sizes or printed packaging?',
		answer: 'Yes. We manufacture stretch films, laminated rolls, and paper cores to your exact dimensions. For branded laminated films, clients typically provide final artwork or dielines.',
	},
	{
		question: 'What is the minimum order quantity (MOQ)?',
		answer: 'Our minimum order quantity varies depending on the product. Please contact us with your specific needs, and we can provide you with detailed information.',
	},
	{
		question: 'Can you ship outside Punjab or pan-India?',
		answer: 'Absolutely. We ship our products across India and to international destinations. Our logistics team ensures timely and safe delivery to your location.',
	},
	{
		question: 'How long does production usually take?',
		answer: 'Production lead times depend on the order size and complexity. Typically, it ranges from 1 to 3 weeks. We will provide a more precise timeline when you place your order.',
	},
	{
		question: 'Do you provide material or compliance certificates?',
		answer: 'Yes, we provide all necessary material and compliance certificates to ensure our products meet industry standards and your specific requirements.',
	},
	{
		question: 'How do I place an order or request a quote?',
		answer: 'You can place an order or request a quote by contacting our sales team through the contact form on our website, via email, or by calling us directly. We look forward to hearing from you!',
	},
];

const FaqItem = ({ faq, isOpen, onClick }) => (
	<div className="border-b border-zinc-800 py-6">
		<button
			onClick={onClick}
			className="w-full flex justify-between items-start text-left gap-6"
		>
			<span className="flex-1 text-indigo-300 text-lg font-semibold font-['Source_Sans_3'] leading-7">
				{faq.question}
			</span>
			<span className="pt-0.5">
				{isOpen ? (
					<MinusIcon className="w-6 h-6 text-indigo-300" />
				) : (
					<PlusIcon className="w-6 h-6 text-indigo-300" />
				)}
			</span>
		</button>
		<div
			className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
				isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
			}`}
		>
			<div className="overflow-hidden">
				<div className="mt-2 pr-12">
					<p className="text-blue-50 text-base font-normal font-['Source_Sans_3'] leading-normal">
						{faq.answer}
					</p>
				</div>
			</div>
		</div>
	</div>
);

const FaqSection = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="bg-slate-950 py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-blue-50 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
						Frequently asked questions
					</h2>
					<p className="mt-5 text-neutral-200 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
						Everything you need to know about our products, fulfillment, and
						order process.
					</p>
				</div>
				<div className="mt-12 max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<FaqItem
							key={index}
							faq={faq}
							isOpen={openIndex === index}
							onClick={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
