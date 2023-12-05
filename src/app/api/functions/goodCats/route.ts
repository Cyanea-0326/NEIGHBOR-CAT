import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { limitGood } from '@/utils/limitGood';
import { handleTotalGood } from '@/utils/handleTotalGood';


export async function POST(req: Request) {
	const clientIP = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
	
	try {
		await limitGood(clientIP);
		
		
	} catch (error) {

	}
}