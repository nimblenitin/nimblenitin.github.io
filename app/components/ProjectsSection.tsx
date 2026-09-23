'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
	id: number;
	title: string;
	description: string;
	descriptionLink?: { text: string; url: string };
	descriptionEnd?: string;
	image?: string;
	video?: string;
	tags: string[];
	src: string;
	audio?: { input: string; output: string };
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Building a Storytelling Model',
		description: 'From-scratch PyTorch implementation of Gemma3 270M model trained on TinyStories dataset to generate simple stories for kids. Built the entire pipeline end-to-end including GPT-2 tokenizer, Grouped Query Attention, RoPE embeddings, sliding window attention, and RMS normalization. Achieved train loss 1.8 and val loss 2.0 with coherent story generation and proper grammar.',
		image: '/tinystories.png',
		tags: ['PyTorch', 'LLMs', 'Transformers', 'Gemma3', 'NLP', 'Python'],
		src: 'https://github.com/nimblenitin/tiny-tales-ai',
	},
	{
		id: 2,
		title: 'Whale Audio Generation using VampNet',
		description: 'A generative audio model that transforms input audio into synthetic whale coda recordings. Deployed a Gradio interface for end-to-end audio-to-coda generation, processed ~300 real whale recordings using custom extraction scripts, and evaluated synthetic audio quality against real recordings using Fréchet Audio Distance (FAD).',
		image: '/wham-project.png',
		tags: ['PyTorch', 'Audio ML', 'Gradio', 'VampNet', 'Python'],
		src: 'https://github.com/nimblenitin/wham-project',
		audio: { input: '/wham-input-1.mp3', output: '/output.wav' },
	},
	{
		id: 3,
		title: 'Agentic Tech Conference Trip Planner',
		description: 'This is a multi-agent AI conference trip planner built using LangGraph to orchestrate five specialized agents (flight, hotel, weather, itinerary, assembler) communicating via MCP (Model Context Protocol) with external services. Integrated Groq LLM for inference with Redis caching for API optimization and PostgreSQL for conversation state persistence.',
		image: '/confgo.gif',
		tags: ['LangGraph', 'MCP', 'Groq LLM', 'Redis', 'PostgreSQL', 'Python'],
		src: 'https://github.com/nimblenitin/ConfGo',
	},
	{
		id: 4,
		title: 'GPT-OSS with RL - Training LLM to Beat 2048',
		description: 'Fine-tuned OpenAI gpt-oss-20b using GRPO reinforcement learning to play 2048. The model generates Python code that learns strategy through three reward signals - whether the code runs, whether it only uses stdlib, and whether it actually wins. Used 4-bit quantization and LoRA to efficiently train the 20B parameter model.',
		image: '/gpt-rl.gif',
		tags: ['RL', 'GRPO', 'Unsloth', 'PyTorch', 'LLMs', 'Python'],
		src: 'https://github.com/nimblenitin/gpt-oss-with-rl',
	},
	{
		id: 5,
		title: 'Restaurant Dish Sentiment',
		description: 'Often when I go to a restaurant I scan through the reviews to select a dish. This is a web app that analyzes restaurant reviews to find and rank the most recommended dishes. It uses NLP and fine-tuned BERT models to score dishes based on sentiment, popularity, and nutrition data from the USDA. Built with React, Flask, and Playwright.',
		image: '/lil_guy_eating.png',
		tags: ['NLP', 'BERT', 'React', 'Flask', 'Playwright'],
		src: 'https://github.com/nimblenitin/restaurant-dish-sentiment',
	},
	{
		id: 6,
		title: 'FreezeGPT - Pin ChatGPT Code Blocks',
		description: 'Chrome extension that pins ChatGPT code blocks into floating windows so you can keep chatting while referring to code. Hover over any code block, click the freeze button, and drag/resize the floating window as needed.',
		image: '/freezegpt.gif',
		tags: ['Chrome Extension', 'JavaScript', 'DOM Manipulation'],
		src: 'https://github.com/nimblenitin/freezegpt',
	},
	{
		id: 7,
		title: 'Incident Diagnostic Assistant',
		description: 'This is an incident diagnostic assistant that helps engineers troubleshoot production issues faster and is built around the ',
		descriptionLink: { text: '7 habits of highly effective agentic systems', url: 'https://agent-habits.github.io/' },
		descriptionEnd: ' - an interesting article by Inbar Rose. When an alert fires, it loads the relevant runbook, suggests diagnostic commands, and proposes relevant changes - all through a Streamlit chat interface with pre-loaded alert context helping to diagnose critical production issues faster.',
		image: '/incident-copilot.gif',
		tags: ['LLMs', 'ReActAgent', 'FastAPI', 'Prometheus', 'Kubernetes', 'Streamlit'],
		src: 'https://github.com/nimblenitin/incident-diagnosis-agent-assistant',
	},
];

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="relative py-12 md:py-20 px-0 overflow-hidden"
			style={{
				backgroundImage: 'url(/bg-img.png)',
				backgroundRepeat: 'repeat'
			}}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-white/60 to-purple-100/80 pointer-events-none z-0" />
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800"
				>
					Featured Projects
				</motion.h2>
				<div className="flex flex-col gap-10">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group flex flex-col md:flex-row items-stretch bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
						>
							{/* Image/Video + Audio */}
							<div className="flex flex-col items-center justify-center w-full md:w-2/5">
								<div className="w-full h-full min-h-[16rem] md:min-h-[20rem] flex items-center justify-center bg-gray-50 p-6">
									{'video' in project && project.video ? (
										<video
											src={project.video}
											controls
											className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
										/>
									) : (
										<img
											src={project.image}
											alt={project.title}
											className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
										/>
									)}
								</div>
								{'audio' in project && project.audio && (
									<div className="flex flex-col gap-2 p-4 bg-gray-50 border-t border-gray-100 w-full">
										<p className="text-xs font-semibold text-gray-500 uppercase">Audio Samples</p>
										<div className="flex flex-col gap-1">
											<p className="text-xs text-gray-500">Input</p>
											<audio controls className="w-full h-8">
												<source src={project.audio.input} />
											</audio>
										</div>
										<div className="flex flex-col gap-1">
											<p className="text-xs text-gray-500">Generated Output</p>
											<audio controls className="w-full h-8">
												<source src={project.audio.output} />
											</audio>
										</div>
									</div>
								)}
							</div>
							{/* Text area */}
							<div className="flex-1 flex flex-col justify-center p-6 md:p-8">
								<h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span key={tag} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
											{tag}
										</span>
									))}
								</div>
								<p className="text-gray-700 mb-4 text-base md:text-sm">
									{project.description}
									{'descriptionLink' in project && project.descriptionLink && (
										<a href={project.descriptionLink.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
											{project.descriptionLink.text}
										</a>
									)}
									{'descriptionEnd' in project && project.descriptionEnd}
								</p>
								<div>
									<Link
										href={project.src}
										target='_blank'
										className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-all duration-300"
									>
										GitHub
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
