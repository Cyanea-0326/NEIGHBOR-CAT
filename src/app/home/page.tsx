"use client"

import Header from "@/app/components/Header";
import Vote  from "@/app/components/Vote";
import Footer from "@/app/components/Footer";

export default function Home() {

return (
	<main>
		<div className='flex flex-col items-center justify-center'>
			<Header />
				<div className='flex flex-col items-center justify-center'>
					<p className="pt-6 pb-8 text-3xl font-bold">Vote for your favorite cat!</p>
				</div>
			<Vote />
			<Footer />
		</div>
	</main>
  )
}
