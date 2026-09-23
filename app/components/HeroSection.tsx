'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const TerminalEmulator = dynamic(() => import('@/app/components/TerminalEmulator'), { ssr: false });

export default function HeroSection() {
	const [terminalOpen, setTerminalOpen] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-0"
			style={{ backgroundImage: 'url(/bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 to-white/60 pointer-events-none z-0" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.7),rgb(255, 255, 255, 1))]" />
			</div>

			<div className="absolute top-0 left-0 right-0 z-20">
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
									whileTap={{ scale: 0.95 }}
									onClick={() => scrollToSection(item.id)}
									className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
								>
									{item.name}
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
				{/* Mobile Nav Overlay */}
				{mobileNavOpen && (
					<div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col">
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
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center md:items-start pt-0">
				{/* Left: All text content */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:mt-0 md:w-1/2">
					<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.15 }}
						className="text-lg md:text-xl text-gray-500 mb-2 font-medium"
					>
						Hi, I&apos;m
					</motion.p>

				<motion.h1
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 break-words"
				>
					Nitin Naidu
				</motion.h1>

				<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-gray-600 mb-4"
				>
					AI/ML and Backend Software Engineer
				</motion.p>

					<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-base md:text-lg text-gray-700 mb-8"
					>
						I am a resilient and passionate developer. I love building stuff that makes a positive difference - writing code, implementing data structures and algorithms that stand the test of time. I enjoy taking intiative and putting my 200% in whatever I pick up.
						<br /><br />
						As a kid when I was given a YoYo(Toy) instead of playing with it, I took it apart, experimented with how it showed light when played with and the put it back together. I have a curiosity to know how everything works.
						<br /><br />
						In my free time I enjoy dropping in to attend tech conference and asking questions, learning about what people are working on.
					</motion.p>
				</div>

				{/* Right: Image and quote */}
				<div className="flex flex-col items-center w-full md:w-1/2 mt-8 md:mt-0">
					{/* <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-purple-600 shadow-2xl mb-6 md:mb-0">
						<Image
							src="/headshot.JPG"
							alt="Nitin Naidu"
							fill
							className="object-cover"
							priority
						/>
					</div> */}
					{/* <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] mb-6 md:mb-0">
					<Image
						src="/headshot.JPG"
						alt="Nitin Naidu"
						fill
						className="object-cover"
						priority
						style={{
						maskImage: 'url(/blob-bg.png)',
						WebkitMaskImage: 'url(/blob-bg.png)',
						maskSize: '130% 130%',
						WebkitMaskSize: '130% 130%',
						maskRepeat: 'no-repeat',
						WebkitMaskRepeat: 'no-repeat',
						maskPosition: 'center 40%',
						WebkitMaskPosition: 'center 40%',
						borderRadius: '0px',
						}}
					/>
					</div> */}
					<div className="relative w-64 h-80 md:w-[24rem] md:h-[36rem] mb-6 md:mb-0">
						<Image
						src="/headshot-blob.png"
						alt="Nitin Naidu"
						fill
						className="object-contain object-top"
						style={{ objectPosition: '-35% top' }}
						priority
						/>
					</div>
					

					{/* Bouncing arrow: below quote on mobile only */}
					<div className="flex justify-center w-full mt-4 md:mt-0 block md:hidden">
						<div className="animate-bounce">
							<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			{/* Bouncing arrow: absolute at bottom for desktop only */}
			<div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>

			{/* Terminal Icon Button */}
			<button
				onClick={() => setTerminalOpen(true)}
				className="fixed z-50 bottom-6 right-6 bg-black/70 hover:bg-black/90 shadow-lg rounded-full p-3 border border-gray-800 transition-all duration-200 focus:outline-none opacity-80 backdrop-blur-md"
				aria-label="Open Terminal"
			>
				<FaTerminal className="w-6 h-6 text-white" />
			</button>

			{/* Floating Terminal */}
			{terminalOpen && (
				<TerminalEmulator onClose={() => setTerminalOpen(false)} />
			)}
		</motion.section>
	);
}
