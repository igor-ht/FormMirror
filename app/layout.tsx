import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className="w-screen h-screen overflow-hidden"
			lang="en">
			<body className="w-screen h-screen flex flex-row bg-slate-300 overflow-hidden">{children}</body>
		</html>
	);
}
