'use client';

import { motion } from 'framer-motion';

export default function NeuronLogo({ className = '' }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 120 80"
			className={`w-14 h-10 ${className}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="neuronGrad" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#3b82f6" />
					<stop offset="50%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#ec4899" />
				</linearGradient>
				<filter id="glow">
					<feGaussianBlur stdDeviation="2" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{/* Dendrites - branching tree on left */}
			<g filter="url(#glow)">
				{/* Main dendrite branches */}
				<motion.path
					d="M38 40 L20 25 L8 15"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
				/>
				<motion.path
					d="M20 25 L12 28"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.3 }}
				/>
				<motion.path
					d="M38 40 L22 40 L5 38"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.2 }}
				/>
				<motion.path
					d="M22 40 L15 48"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
				/>
				<motion.path
					d="M38 40 L25 55 L10 65"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.4 }}
				/>
				<motion.path
					d="M25 55 L18 58"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.7 }}
				/>
				<motion.path
					d="M38 40 L28 28 L15 18"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.9, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.6 }}
				/>
				<motion.path
					d="M38 40 L30 58 L20 72"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2.1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.8 }}
				/>

				{/* Dendrite tips */}
				{[[8, 15], [12, 28], [5, 38], [15, 48], [10, 65], [18, 58], [15, 18], [20, 72]].map(([x, y], i) => (
					<motion.circle
						key={i}
						cx={x}
						cy={y}
						r="2"
						fill="#3b82f6"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, delay: i * 0.15, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
					/>
				))}
			</g>

			{/* Soma - cell body with texture */}
			<motion.ellipse
				cx="45"
				cy="40"
				r="14"
				rx="14"
				ry="13"
				fill="url(#neuronGrad)"
				filter="url(#glow)"
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.08, 1] }}
				transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
			/>
			{/* Inner soma detail */}
			<motion.ellipse
				cx="45"
				cy="40"
				r="10"
				rx="10"
				ry="9"
				fill="none"
				stroke="white"
				strokeWidth="0.8"
				opacity="0.4"
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
			/>

			{/* Nucleus */}
			<motion.circle
				cx="45"
				cy="40"
				r="5"
				fill="white"
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.15, 1] }}
				transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
			/>
			{/* Nucleolus */}
			<motion.circle
				cx="45"
				cy="40"
				r="2"
				fill="#8b5cf6"
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.2, 1] }}
				transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
			/>

			{/* Axon - thick main output */}
			<motion.path
				d="M59 40 L95 40"
				stroke="url(#neuronGrad)"
				strokeWidth="3"
				strokeLinecap="round"
				filter="url(#glow)"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
			/>

			{/* Myelin sheath segments */}
			{[65, 73, 81, 89].map((x, i) => (
				<motion.rect
					key={i}
					x={x}
					y="36"
					width="5"
					height="8"
					rx="2"
					fill="url(#neuronGrad)"
					opacity="0.3"
					initial={{ opacity: 0.2 }}
					animate={{ opacity: [0.2, 0.5, 0.2] }}
					transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
				/>
			))}

			{/* Axon terminals - branching ends */}
			<g filter="url(#glow)">
				<motion.path
					d="M95 40 L105 30 L112 22"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.3 }}
				/>
				<motion.path
					d="M95 40 L108 38 L115 38"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
				/>
				<motion.path
					d="M95 40 L105 50 L112 58"
					stroke="url(#neuronGrad)"
					strokeWidth="2"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.7 }}
				/>
				<motion.path
					d="M95 40 L100 48 L105 60"
					stroke="url(#neuronGrad)"
					strokeWidth="1.5"
					strokeLinecap="round"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.9 }}
				/>
			</g>

			{/* Terminal boutons - rounded ends */}
			{[[112, 22], [115, 38], [112, 58], [105, 60]].map(([x, y], i) => (
				<motion.circle
					key={i}
					cx={x}
					cy={y}
					r="3"
					fill="url(#neuronGrad)"
					filter="url(#glow)"
					initial={{ scale: 0 }}
					animate={{ scale: [0, 1.2, 1] }}
					transition={{ duration: 1, delay: 0.8 + i * 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
				/>
			))}

			{/* Signal pulse traveling down axon */}
			<motion.circle
				cx="60"
				cy="40"
				r="3"
				fill="#60a5fa"
				filter="url(#glow)"
				initial={{ cx: 60, opacity: 0 }}
				animate={{ cx: [60, 95], opacity: [0, 1, 1, 0] }}
				transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
			/>

			{/* Secondary signal pulse */}
			<motion.circle
				cx="60"
				cy="40"
				r="2"
				fill="#c084fc"
				filter="url(#glow)"
				initial={{ cx: 60, opacity: 0 }}
				animate={{ cx: [60, 95], opacity: [0, 0.8, 0.8, 0] }}
				transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
			/>
		</svg>
	);
}
