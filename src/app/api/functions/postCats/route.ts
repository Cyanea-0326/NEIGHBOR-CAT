import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(req: Request) {

	try {

		
		return NextResponse.json({  });
	} catch (e) {
		return NextResponse.json({ message: "failed" })
	}

	
}