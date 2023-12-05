"use client"
import React, { useState } from "react"
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

export default function Page() {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { data: session } = useSession();

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();

		const file = event.target.files?.[0];
		if (file) {
			setSelectedImage(file);
			reader.onload = (e) => {
				const previewImage = e.target?.result as string;
				console.log('Preview:', previewImage);
			};
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

	// const handleLogout = async () => {
	// 	await signOut();
	// 	window.location.href = 'https://accounts.google.com/logout';
	//   };

	if (!session) {
		return (
			<div className="flex flex-col items-center justify-center space-y-4">
				<Header />
					<div className="flex flex-col items-center justify-center">ログインが必要です</div>

					<button onClick={() => signIn("google")}>Googleでログイン</button>
					{/* <button onClick={() => signOut()}>ログアウト</button> */}
				<Footer />
			</div>
		);
	} else {
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
				<button onClick={() => signOut()}>ログアウト</button>
			<Footer />
		</div>
		);
	}
}