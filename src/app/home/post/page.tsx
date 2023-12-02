"use client"
import React, { useState } from "react"
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

export default function Page() {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);

	// const storedImage = sessionStorage.getItem('temporaryImage') || "";
	// const imageData = JSON.parse(storedImage);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();

		// if (imageData) {
		// 	reader.onload = (e) => {
		// 		  const previewImage = e.target?.result as string;
		// 		  console.log('Preview:', previewImage);
		// 	  };
		// 	reader.readAsDataURL(imageData);
		// 	return ;
		// }

		const file = event.target.files?.[0];
		if (file) {
			setSelectedImage(file);
			reader.onload = (e) => {
				const previewImage = e.target?.result as string;
				console.log('Preview:', previewImage);
			};
			// try {
			// 	const imageDataString = JSON.stringify(selectedImage);
		
			// 	sessionStorage.setItem('temporaryImage', imageDataString);
			// 	console.log('Image saved to session storage.');
			// } catch (error) {
			// 	console.error('Error saving image to session storage:', error);
			// }
			reader.readAsDataURL(file);
		}
	}

	const handleUpload = () => {
		if (!selectedImage) {
			alert("Pls set cat images. 🐱");
		} else {
			alert("B");
		}
		console.log('Uploading image:', selectedImage);
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<Header />
		{selectedImage && (
			<img
			src={URL.createObjectURL(selectedImage)}
			alt="Selected Preview"
			className="max-h-40 max-w-40"
			/>
		)}
		<input
			type="file"
			onChange={handleImageChange}
			className="border border-gray-300 p-2"
		/>
		<button
			onClick={handleUpload}
			className="bg-blue-500 text-white px-4 py-2 rounded"
		>
		Upload
		</button>
		<Footer />
	  </div>
	);
}