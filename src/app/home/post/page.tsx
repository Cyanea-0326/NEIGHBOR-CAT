"use client"
import React, { useState } from "react"
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { createClient } from "@/utils/supabase/client";
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

interface SessionUser {
	name?: string | null | undefined;
	email?: string | null | undefined;
	image?: string | null | undefined;
	id?: string | null | undefined;
}

export default function Page() {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { data: session } = useSession();

	// const uid: SessionUser | null = session?.user;

	const supabase = createClient();

	const uploadImage = async (imageFile: File) => {
		const { data, error } = await supabase.storage
			.from("cats-storage")
			.upload(`images/${imageFile.name}`, imageFile, {
			cacheControl: '3600',
			upsert: false,
		});
		const imageUrl = `https://qzioxjzxekxqmpdgowqh.supabase.co/storage/v1/object/public/cats-storage/${data?.path}`;
		console.log("return url is: ",imageUrl); // 確認済み
		
		if (error) {
			console.error('Error uploading image:', error.message);
			alert(error.message);
		} else {
			console.log('Image uploaded successfully:', data);
			alert('Image uploaded successfully!!');
		}
	};

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
			uploadImage(selectedImage);
		}
		console.log('Uploading image:', selectedImage);
	};

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
				className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
			>
			POST
			</button>
				<div className="pt-20">
					<button 
					className="bg-red-400 text-white px-4 py-2 rounded"
					onClick={() => signOut()}>
					signOut
					</button>
				</div>
			<Footer />
		</div>
		);
	}
}