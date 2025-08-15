import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CtaSection = () => {
	return (
		<div className="bg-neutral-50">
			<div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-20">
				<div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl py-24 px-8 text-center relative overflow-hidden">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-gray-900 text-4xl md:text-5xl font-bold font-['Space_Grotesk'] leading-tight">
							Ready to upgrade your packaging supply
						</h2>
						<p className="mt-5 text-gray-600 text-lg md:text-xl font-normal font-['Source_Sans_3'] leading-relaxed">
							Join over 500+ manufacturers, exporters, and logistics brands
							already sourcing their packaging from Mukand Industries.
						</p>
					</div>
					<div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
						<button className="px-5 py-3 bg-blue-50 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-indigo-300 flex justify-center items-center gap-2 text-blue-800 text-base font-bold font-['Space_Grotesk'] leading-normal w-full sm:w-auto">
							<PlayCircleIcon className="w-5 h-5 text-blue-800" />
							<span>Explore Products</span>
						</button>
						<Link to="/contact" className="px-5 py-3 bg-blue-800 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-indigo-100 text-base font-bold font-['Space_Grotesk'] leading-normal w-full sm:w-auto text-center">
							Get a Quote
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CtaSection;
