"use client"

import Header from "@/app/components/Header";
import Vote  from "@/app/components/Vote";
import Footer from "@/app/components/Footer";

export default function Home() {

  return (
	<main>
		<div className='flex flex-col items-center justify-center'>
			<Header />
			<Vote />
			<Footer />
		</div>
	</main>
  )
}
