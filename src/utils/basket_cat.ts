import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// const cat_url = [{}];

let lastFetchTime = 0;
let cat_url: any = [];

export async function update_cats() {
	const now = Date.now();

	if (now - lastFetchTime >= 12 * 60 * 60 * 1000) {
		for (let i = 0; i < 3; i++) {
			try {
				const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10",{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (response.ok) {
					const data = await response.json();
					data.forEach((item: any) => {
						cat_url.push(item);
					});
					
				} else {
					console.error('Failed to fetch data');
				}
			} catch (error) {
				console.error(error);
			}
			await new Promise(resolve => setTimeout(resolve, 2000));
		};
		lastFetchTime = now;
	} else {
		console.log("timelock now");
	}
	return (cat_url);
};