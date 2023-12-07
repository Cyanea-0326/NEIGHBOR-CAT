// import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';
// import { update_cats } from '../../../../utils/basket_cat';

// export async function GET(req: Request) {
// 	let respons_json: any
// 	try {
// 		respons_json = await update_cats();
// 		console.log(respons_json.length);
// 		return NextResponse.json(respons_json);
// 	} catch (e) {
// 		return NextResponse.json({ message: "failed" });
// 	}
// };