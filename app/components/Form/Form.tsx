'use client';

import Section from './Section';
import { DragEvent, useContext } from 'react';
import { FormContext } from '../ContextProvider';
import { uploadUser } from '@/utils/actions';

export default function Form() {
	const { handleSubmit } = useContext(FormContext);

	const onSubmit = async (data: { name: string; email: string; profileImage: string }) => {
		const formData = new FormData();
		formData.set('name', data.name);
		formData.set('email', data.email);
		formData.set('profileImage', data.profileImage[0]);

		const response = await fetch('/api/upload', { method: 'POST', body: formData });
		const result = await response.json();
		console.log(result);
	};

	const fileOnDrop = (e: DragEvent<HTMLInputElement>) => {
		e.preventDefault();
		// if file is not an image do nothing
		if (!e.dataTransfer.files[0].type.startsWith('image')) return;
		e.currentTarget.files = e.dataTransfer.files;
		e.currentTarget.dispatchEvent(new Event('change', { bubbles: true }));
	};

	return (
		<form
			// onSubmit={handleSubmit(onSubmit)}
			action={uploadUser}
			className="w-full sm:w-2/4 h-1/2 sm:h-96 flex flex-col gap-2 sm:gap-4 p-4 border-2 border-zinc-400 rounded">
			<Section
				label={{ children: 'Name', rest: { htmlFor: 'name' } }}
				input={{ rest: { type: 'text', id: 'name', name: 'name', autoComplete: 'name', required: true, placeholder: 'Your name here' } }}
			/>
			<Section
				label={{ children: 'Email', rest: { htmlFor: 'email' } }}
				input={{
					rest: { type: 'email', id: 'email', name: 'email', autoComplete: 'email', required: true, placeholder: 'email@example.com' },
				}}
			/>
			<Section
				label={{ children: 'Profile Image', rest: { htmlFor: 'profileImage' } }}
				input={{
					rest: {
						type: 'file',
						id: 'profileImage',
						name: 'profileImage',
						required: true,
						accept: '.png,.jpg,.jpeg,.jfif,.pjpeg,.pjp,.svg,.webp,.gif,.ico',
						title: 'Drag and drop your image here or click to select a file.',
						onDrop: fileOnDrop,
					},
				}}
			/>
			<button
				className="w-28 h-12 self-center bg-cyan-400 rounded-md shadow font-sans font-medium text-xl text-slate-100 hover:bg-cyan-500 hover:shadow-sm active:bg-cyan-600 active:shadow-md transition-all duration-300 ease-in-out"
				type="submit">
				Submit
			</button>
		</form>
	);
}
