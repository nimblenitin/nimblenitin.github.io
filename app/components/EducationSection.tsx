'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
	{
		id: 1,
		university: 'University at Buffalo (SUNY)',
		degree: 'MS in Information Systems',
		gpa: '',
		courses: [],
		logo: '/201-Interlocking-UB-RGB-Blue.png',
		location: 'Buffalo, NY',
		dates: 'Aug 2024 - Dec 2025',
		position: 'left'
	},
	{
		id: 2,
		university: 'University of Mumbai',
		degree: 'BS in Information Technology',
		gpa: '',
		courses: [],
		logo: '/UOM.png',
		location: '',
		dates: '2016 - 2019',
		position: 'right'
	}
];

export default function EducationSection() {
	return (
		<section
			id="education"
			className="relative py-12 md:py-20 px-4 overflow-hidden"
			style={{
				backgroundImage: 'url(/bg-img.png)',
				backgroundRepeat: 'repeat'
			}}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-purple-100/80 to-white/90 pointer-events-none z-0" />
			<div className="relative z-10 max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-gray-800"
				>
					Education
				</motion.h2>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400" />

					{/* Education items */}
					{educationData.map((edu, index) => (
						<motion.div
							key={edu.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className={`relative mb-12 md:mb-16 flex items-center ${edu.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
						>
							{/* Content */}
							<div className={`w-full md:w-5/12 md:w-[40%] pl-8 md:pl-0 ${edu.position === 'left' ? 'md:pr-4' : 'md:pl-4'}`}>
								<motion.div
									whileHover={{ scale: 1.02 }}
									className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row overflow-hidden w-full max-w-md mx-auto md:max-w-none ${edu.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
								>
									{/* Logo Container */}
									<div
										className={`relative w-full h-24 md:h-auto md:w-1/3 p-4 flex-shrink-0 flex items-center justify-center bg-white`}
										style={{
											maskImage: `linear-gradient(to ${edu.position === 'left' ? 'right' : 'left'}, black 60%, transparent)`,
											WebkitMaskImage: `linear-gradient(to ${edu.position === 'left' ? 'right' : 'left'}, black 60%, transparent)`,
										}}
									>
										<Image
											src={edu.logo}
											alt={`${edu.university} logo`}
											fill
											className="object-contain"
										/>
									</div>

									{/* Text Content */}
									<div className="w-full md:w-2/3 p-4 md:p-6 text-center md:text-left flex flex-col justify-center">
										<h3 className="text-xl font-bold text-gray-800 mb-2">{edu.university}</h3>
										<p className="text-blue-600 font-semibold mb-2">{edu.degree}</p>
										<p className="text-gray-500 text-sm mb-3">{edu.dates}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{edu.gpa}</p>
									</div>
								</motion.div>
							</div>

							{/* Timeline node */}
							<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

							{/* Spacer for mobile/desktop */}
							<div className="hidden md:block md:w-1/12"></div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
