import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function GET(req: Request) {
	const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
	console.log(ip)

	return NextResponse.json({ ip })
}
