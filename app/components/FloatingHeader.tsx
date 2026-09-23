'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function FloatingHeader() {
	const [isVisible, setIsVisible] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsVisible(scrollPosition > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ 
					y: isVisible ? 0 : -100, 
					opacity: isVisible ? 1 : 0 
				}}
				transition={{ duration: 0.3 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isVisible ? 'bg-white/85 backdrop-blur-md shadow-lg' : 'bg-transparent'
				}`}
			>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						{/* Desktop Nav */}
						<nav className="hidden md:flex items-center space-x-8">
							{[
								{ name: 'Projects', id: 'projects' },
								{ name: 'Education', id: 'education' },
								{ name: 'Experience', id: 'experience' },
								{ name: 'Skills', id: 'skills' },
								{ name: 'Contact', id: 'contact' }
							].map((item) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, y: -20 }}
									animate={{ 
										opacity: isVisible ? 1 : 0, 
										y: isVisible ? 0 : -20 
									}}
									transition={{ duration: 0.3, delay: 0.2 }}
									onClick={() => scrollToSection(item.id)}
									className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
								>
									{item.name}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
								</motion.button>
							))}
						</nav>
						{/* Hamburger for mobile */}
						<button
							onClick={() => setMobileNavOpen(true)}
							className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
							aria-label="Open navigation menu"
						>
							<FaBars className="w-6 h-6 text-gray-700" />
						</button>
					</div>
				</div>
			</motion.header>
			{mobileNavOpen && (
				<div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex flex-col">
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className="bg-white/90 shadow-lg rounded-l-2xl p-6 w-4/5 max-w-xs ml-auto h-full flex flex-col gap-6 relative"
					>
						<button
							onClick={() => setMobileNavOpen(false)}
							className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
							aria-label="Close navigation menu"
						>
							<FaTimes className="w-6 h-6 text-gray-700" />
						</button>
						<div className="flex flex-col w-full mt-12 gap-4">
							{[
								{ name: 'Projects', id: 'projects' },
								{ name: 'Education', id: 'education' },
								{ name: 'Experience', id: 'experience' },
								{ name: 'Skills', id: 'skills' },
								{ name: 'Contact', id: 'contact' }
							].map((item) => (
								<button
									key={item.id}
									onClick={() => {
										scrollToSection(item.id);
										setMobileNavOpen(false);
									}}
									className="text-gray-800 text-lg font-semibold py-2 px-4 rounded hover:bg-blue-50 transition text-left w-full"
								>
									{item.name}
								</button>
							))}
						</div>
					</motion.div>
				</div>
			)}
		</>
	);
} 