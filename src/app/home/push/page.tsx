// "use client"

// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";

// import { createClient } from "@/utils/supabase/client";

 export default function Home() {
// 	const supabase = createClient();

// 	const handlePush = async () => {
// 		for(let i = 0; i < 9; i++) {

// 			try {
// 				const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10",{
// 					method: 'GET',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 				});
// 				if (response.ok) {
// 					const data = await response.json();
// 					const newArray = await data.map((item: any) => ({
// 						u_id: "dummy",
// 						url: item.url,
// 					}));

// 					console.log(newArray);

// 					await supabase
// 						.from('dummy_cat')
// 						.upsert(
// 							newArray
// 						);

// 				} else {
// 					console.error('Failed to fetch data');
// 				}
// 			} catch (e) {
// 				console.log(e);
// 			}
// 			await new Promise(resolve => setTimeout(resolve, 10000));
// 		}
// 	}

	return (
		<></>
// 	<main>
// 		<div className='flex flex-col items-center justify-center'>
// 			<Header />
// 			<button
// 				onClick={handlePush}
// 				className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
// 			>
// 			PUSH
// 			</button>
// 			<Footer />
// 		</div>
// 	</main>
   )
}
