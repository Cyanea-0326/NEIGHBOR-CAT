import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import * as limitGood from '@/utils/limitGood';
// import { handleTotalGood } from '@/utils/handleTotalGood';


export async function GET(req: Request) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const clientIP = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
	
	try {
		await limitGood.limitGood(clientIP);
		if (limitGood.requestsPerMinute[clientIP].count >= limitGood.GOOD_LIMIT) {
			return NextResponse.json({ message: 'Too Many Requests' });
		}
		const data: any = await supabase
			.from('dummy_cat')
			.select('*')
			.order('created_at', { ascending: false }) // created_at フィールドを基準に降順でソート
			.limit(30);

		console.log(data.data)
		return NextResponse.json(data.data);
	} catch (error) {

	}
}