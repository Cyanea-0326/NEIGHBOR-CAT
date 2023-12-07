import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as limitGood from '@/utils/limitGood';
import { createClient } from '@/utils/supabase/server';
// import { handleTotalGood } from '@/utils/handleTotalGood';


export async function POST(req: Request) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const reqData = await req.json();

	const clientIP = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
	
	await limitGood.limitGood(clientIP);
	if (limitGood.requestsPerMinute[clientIP].count >= limitGood.GOOD_LIMIT) {
		return NextResponse.json({ message: 'Too Many Requests' });
	}
	try {
		let columnName = "good";
		if (reqData.bad != 0) {
			columnName = "bad";
		}
		await supabase
			.from('dummy_cat')
			.update({ [columnName]: reqData.good})
			.eq('id', `${reqData.id}`);
		return NextResponse.json({ message: ' Voting successed' });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error });
	}
}