"use client"

import { useState, useEffect, FormEvent } from 'react';
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

// const timelineData = [
// 	{ id: 1, date: '2023-01-01', description: 'Event 1' },
// 	{ id: 2, date: '2023-03-15', description: 'Event 2' },
// 	// Add more events as needed
//   ];

// interface TimelineType {
// 	id: number;
// 	date: string;
// 	description: string;
//   }

// const timelineData: TimelineType[] = [];

// for (let i = 1; i <= 100; i++) {
// 	timelineData.push({
// 	  id: i,
// 	  date: '2023-01-01',
// 	  description: `Event ${i}`,
// 	});
// }

interface CatImage {
	id: string;
	url: string;
	good: number;
	bad: number;
	index: number;
}

export default function Timeline() {
	const [catImages, setCatImages] = useState<CatImage[]>([]);

	useEffect(() => {
		// 初回のレンダリング時にAPIからデータを取得
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10",{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				const data = await response.json();
				const indexed = [];
				for(let i = 0; i < data.length; i++) {
					indexed.push({ ...data[i], index: i });
				}
				setCatImages(indexed);
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleButtonClick = () => {
		// ボタンが押されたときにAPIからデータを再取得
		fetchData();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	
	// const events = timelineData;


	return (
		<div className="timeline-container">
			<Header />
		<div className='flex item-center justify-center '>
			<h1 className="text-2xl font-bold mb-4">Timeline</h1>
		</div>

			<div className="flex flex-col items-center justify-center mb-20">
			<ul className="grid grid-cols-2">
			{catImages.map((catImage) => (
				<li key={catImage.index} className="m-2">
					<img src={catImage.url} alt="Cat" className="w-64 h-auto" />
				</li>
			))}
			</ul>
				<div className='pt-8'>
					<button className='bg-blue-400 text-white px-4 py-2 rounded' onClick={handleButtonClick}>Get Cat Images</button>
				</div>
			</div>
		<Footer />
		</div>
	);
}