import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export async function POST(request: NextRequest) {
	const data = await request.formData();
	const name = data.get('name');
	const email = data.get('email');
	const profileImage = data.get('profileImage') as unknown as File;

	if (!profileImage || !name || !email) return NextResponse.json({ error: 'One or more field is missing.' });

	const user = { name, email, profileImage: profileImage.name };

	// Convert the file to a buffer to save it to the file system
	const bytes = await profileImage.arrayBuffer();
	const buffer = Buffer.from(bytes);

	// Save the file to the file system using fs library
	fs.writeFileSync(`./public/users/${profileImage.name}.json`, JSON.stringify(user));
	fs.writeFileSync(`./public/users/${profileImage.name}`, buffer);

	return NextResponse.json({ user });
}
