"use client"
import React, { useState } from "react"
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { createClient } from "@/utils/supabase/client";
import { DocumentIcon } from '@heroicons/react/24/solid'
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';


// interface SessionUser {
// 	name?: string | null | undefined;
// 	email?: string | null | undefined;
// 	image?: string | null | undefined;
// 	id?: string | null | undefined;
// }

export default function Page() {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { data: session } = useSession();

	// const uid: SessionUser | null = session?.user;

	const supabase = createClient();

	if (!session) {
		return (
			<div className="flex flex-col items-center justify-center space-y-4">
				<Header />
				<div className='flex item-center justify-center '>
					<h1 className="text-2xl font-bold mb-4">Profile</h1>
				</div>
					<div className="pt-10 flex flex-col items-center justify-center">You need to logIn!</div>
					<div className="pt-10 flex flex-col items-center justify-center">
					What you can do by logging in
						<br/>
						<br/>
					・Cat posts & confirmation<br/>
					・Vote for the lovery cat🐱
					<div className="pt-6 flex items-center justify-center">
						<DocumentIcon className="ms-14 h-6 w-6 text-[#b49c94]" />
						<a className="pr-14" href="https://github.com/Cyanea-0326/NEIGHBOR-CAT/blob/main/README.md" target="_blank" rel="noopener noreferrer">
							README.md
						</a>
					</div>
					</div>
					<div className="p-32 sm:p-48 md:p-48 lg:p-48">
						<button className="bg-blue-400 text-white px-4 py-2 rounded"
						onClick={() => signIn("google")}>Login with Google</button>
					</div>
				<Footer />
			</div>
		);
	} else {
		return (
			<div className="flex flex-col items-center justify-center space-y-4">
				<Header />
				<div className='flex item-center justify-center '>
					<h1 className="text-2xl font-bold mb-4">Profile</h1>
				</div>

				<div className="pt-20">
					<button 
					className="bg-red-400 text-white px-4 py-2 rounded"
					onClick={() => signOut()}>
					signOut
					</button>
				</div>
				<div className="flex items-center justify-center">
					<DocumentIcon className="ms-14 h-6 w-6 text-[#b49c94]" />
					<a className="pr-14" href="https://github.com/Cyanea-0326/NEIGHBOR-CAT/blob/main/README.md" target="_blank" rel="noopener noreferrer">
					README.md
					</a>
				</div>
			<Footer />
		</div>
		);
	}
}
