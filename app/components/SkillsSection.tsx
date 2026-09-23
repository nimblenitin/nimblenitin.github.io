'use client';

import { motion } from 'framer-motion';
import * as simpleIcons from 'simple-icons';

const skills = [
	{ name: 'Python', icon: simpleIcons.siPython },
	{ name: 'PyTorch', icon: simpleIcons.siPytorch },
	{ name: 'Linux', icon: simpleIcons.siLinux },
	{ name: 'Bash', icon: simpleIcons.siGnubash },
	{ name: 'C++', icon: simpleIcons.siCplusplus },
	{ name: 'Docker', icon: simpleIcons.siDocker },
	{ name: 'SQL', icon: simpleIcons.siMysql },
	{ name: 'Tensorflow', icon: simpleIcons.siTensorflow },
	{ name: 'ReactJS', icon: simpleIcons.siReact },
	{ name: 'NodeJS', icon: simpleIcons.siNodedotjs },
	{ name: 'Git', icon: simpleIcons.siGit },
	{ name: 'Pandas', icon: simpleIcons.siPandas },
	{ name: 'Numpy', icon: simpleIcons.siNumpy },
	{ name: 'Flask', icon: simpleIcons.siFlask },
	{ name: 'Django', icon: simpleIcons.siDjango },
	{ name: 'Spark', icon: simpleIcons.siApachespark },
];

export default function SkillsSection() {
	return (
		<section
			id="skills"
			className="relative py-12 md:py-20 px-4 overflow-hidden"
			style={{ backgroundImage: 'url(/bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-100/80 to-purple-100/80 pointer-events-none z-0" />
			<div className="relative z-10 max-w-7xl mx-auto px-8">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800"
				>
					Skills & Technologies
				</motion.h2>
				<motion.div
					className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-y-6 gap-x-0 md:gap-x-0 justify-items-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { transition: { staggerChildren: 0.08 } },
						hidden: {},
					}}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							variants={{
								hidden: { opacity: 0, scale: 0.8 },
								visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: index * 0.03 } },
							}}
							className="flex flex-col items-center group"
						>
							<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full object-contain transition-colors duration-300"
									aria-label={skill.name}
								>
									<path d={skill.icon.path} fill="#7b7b7b" className="transition-colors duration-300 group-hover:fill-purple-500" />
								</svg>
							</div>
							<span className="text-gray-500 text-sm md:text-base mt-1 text-center">{skill.name}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
