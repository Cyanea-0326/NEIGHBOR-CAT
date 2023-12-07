"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

interface CatImage {
	id: string;
	url: string;
	good: number;
	bad: number
	width: number;
	height: number;
}

export const votedList: Record<string, { flag: boolean }> = {};

export default function Vote() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [images, setCatImages] = useState<CatImage[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = sessionStorage.getItem('lastTime');
		if (getData) {
			const obj = JSON.parse(getData);
			setCatImages(obj);
			setIsLoading(false);
			console.log("session obj");
			return ;
		}
		if (!getData) {
			console.log("init");
			fetchData();
		}
	},[isLoading]);

	const fetchData = async () => {
		try {
			setIsLoading(true);

			const response = await fetch("api/functions/getVoteCat",{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},

			});
			if (response.ok) {
				const data = await response.json();
				const dataWithDimensions = data.map((item: any)  => ({
					...item,
					width: 256,
					height: 256
				}));
				const jsonString = JSON.stringify(dataWithDimensions);
				sessionStorage.setItem('lastTime', jsonString);
				setCatImages(dataWithDimensions);
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleGood = async () => {
		if (votedList[images[currentIndex].id]?.flag == true) {
			return alert("You've already voted for this cat!");
		}

		try {
			const response = await fetch("/api/functions/handleVote" ,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				// increment good
				body: JSON.stringify({
					id: images[currentIndex].id,
					good: images[currentIndex].good + 1,
					bad: 0,
				}),
			});
			
			if (response.ok) {
				const res = await response.json();
				console.log('Server response:', res);
				
				votedList[images[currentIndex].id] = { flag: true };
				alert(res.message);
				// images[currentIndex].good += 1	--spam prevention
				setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
			} else {
				console.error('Failed to save bet & payoff')
				const res = await response.json();
				console.log('Server response:', res);
				
				alert(res.message);
			}
		} catch (e) {
			console.error('Error:', e);
			alert(`${e}\nPls check status-code`);
		}
	}

	const handleBad = async () => {
		if (votedList[images[currentIndex].id]?.flag == true) {
			return alert("You've already voted for this cat!");
		}

		try {
			const response = await fetch("/api/functions/handleVote" ,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				// increment bad
				body: JSON.stringify({
					id: images[currentIndex].id,
					good: 0,
					bad: images[currentIndex].bad + 1,
				}),
			});

			if (response.ok) {
				const res = await response.json();
				console.log('Server response:', res);
				votedList[images[currentIndex].id] = { flag: true };
				alert(res.message);

				setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
			} else {
				console.error('Failed to save bet & payoff')
				const res = await response.json();
				console.log('Server response:', res);
				
				alert(res.message);
			}
		} catch (e) {
			console.error('Error:', e);
			alert(`${e}\nPls check status-code`);
		}
	}


	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div className="vote-container">
			<div className='flex items-center justify-cente'>
				<div className="p-6 bg-gray-800 relative rounded-lg pb-10">

					{/* 非同期の表示切り替え */}
					{isLoading && 
						<div className="flex items-center justify-center text-white w-64 h-56 sm:w-96 sm:h-72 md:w-96 md:h-72 lg:w-96 lg:h-72">Now Loading ...</div>
					}

					{!isLoading && 
						<Image src={images.length > 0 ? images[currentIndex].url : ''} alt="this_is_cat"
						width={
						images.length > 0
						? images[currentIndex].width > 256
						? 256 // 制限を超える場合は256に縮小
						: images[currentIndex].width
						: 256 // デフォルト値を256に設定
						}
						height={
						images.length > 0
						? images[currentIndex].height > 256
						? 256 // 制限を超える場合は256に縮小
						: images[currentIndex].height
						: 256 // デフォルト値を256に設定
						}
					className="w-64 h-56 sm:w-96 sm:h-72 md:w-96 md:h-72 lg:w-96 lg:h-72"
					/>
					}

					{/* Prev and Next */}
					<div className='bg-black flex items-center justify-center'>
						<button onClick={handlePrevClick}
								className="text-white py-2 px-4 mr-6">
							<ChevronLeftIcon className="h-8 w-8 text-white" />
						</button>
						<button onClick={handleNextClick}
								className="text-white py-2 px-4">
							<ChevronRightIcon className="h-8 w-8 text-white" />
						</button>
					</div>
					{/* Vote */}
					<div className='pt-10 flex items-center justify-center'>
						<button type="submit" onClick={handleBad} className="bg-red-500 w-32 h-16 sm:mr-12 md:mr-12 lg:mr-12 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all duration-300">
						Bad
						</button>
						<button type="submit" onClick={handleGood} className="bg-green-500 w-32 h-16 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-all duration-300">
						Good
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};