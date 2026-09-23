'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatIDoSection() {
	return (
		<section
			id="what-i-do"
			className="relative py-16 md:py-24 px-4 overflow-hidden"
			style={{ backgroundImage: 'url(/bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 to-white/60 pointer-events-none z-0" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgb(255, 255, 255, 1))] pointer-events-none z-0" />
			<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left: Dummy Image */}
				<div className="flex justify-center items-center">
					<div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
						<Image
							src="/logos-some-clear.png"
							alt="What I do dummy"
							fill
							className="object-contain"
							priority
						/>
					</div>
				</div>

				{/* Right: Content */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="flex flex-col justify-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 drop-shadow-lg">What do I do?</h2>
					<p className="text-base md:text-lg text-gray-700 mb-8">
						I build intelligent, high-performance systems that solve real-world problems at scale. With professional experience leading backend architecture, deploying at enterprise scale, and working hands-on with AI/ML models, I bridge theory with execution. I&apos;m driven by curiosity, a love for clean and efficient code, and a habit of learning fast. Whether it&apos;s debugging deep system bottlenecks, training models with reasoning capabilities, or engineering scalable microservices, I bring a mix of analytical thinking, technical depth, and adaptability to every project.
					</p>
					<ul className="list-disc pl-5 text-gray-700 space-y-2">

						<li><strong>Full-Stack Development</strong> – End-to-end app development using React, Django, Vertica, and more</li>

						<li><strong>AI/ML</strong> – Applying machine learning to solve real-world problems with structured data</li>

						<li><strong>Data Visualization</strong> – Creating intuitive tools to analyze and present technical or business metrics</li>

						<li><strong>Infrastructure & Orchestration</strong> – Version control, CI/CD, and cloud deployment (Git, AWS)</li>

						<li><strong>Fast Learning & Adaptation</strong> – Exploring new languages, frameworks, and tech with ease</li>


					</ul>
				</motion.div>
			</div>
		</section>
	);
} 