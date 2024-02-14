'use client';

import Section from './Section';
import { useContext } from 'react';
import { FormContext } from '../ContextProvider';

export default function Form() {
	const { handleSubmit } = useContext(FormContext);

	const onSubmit = (data: { name: string; email: string; profileImage: string }) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-2/4 h-fit m-auto flex flex-col gap-4 p-5 border-2 border-zinc-400 rounded">
			<Section
				label={{ children: 'Name', rest: { htmlFor: 'name' } }}
				input={{ rest: { type: 'text', id: 'name', name: 'name', required: true } }}
			/>
			<Section
				label={{ children: 'Email', rest: { htmlFor: 'email' } }}
				input={{ rest: { type: 'email', id: 'email', name: 'email', required: true } }}
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
