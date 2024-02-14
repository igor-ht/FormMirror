'use client';

import { useContext } from 'react';
import { FormContext } from '../ContextProvider';

export default function Input({ ...rest }) {
	const { register } = useContext(FormContext);
	return (
		<input
			{...rest}
			{...register(rest.name, { required: true })}
			className="w-full rounded-md border-2 border-slate-300 p-1 sm:p-2 font-sans font-normal text-lg text-slate-900 hover:border-slate-500 focus:border-slate-500 focus-within:border-slate-500 focus-visible:border-slate-900 outline-none active:border-slate-500 transition-all duration-300 ease-in-out"
		/>
	);
}
