import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function update_cats() {
	let cat_url: any[] = [];

		for (let i = 0; i < 3; i++) {
			// try {
				const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10",{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (response.ok) {
					const data = await response.json();
					cat_url.push(...data);
				} else {
					console.error('Failed to fetch data');
				}
			// } catch (error) {
			// 	console.error(error);
			// }
			console.log(i);
			await new Promise(resolve => setTimeout(resolve, 2000));
		};
	console.log("Arraylen is: ", cat_url.length)
	return (cat_url);
};