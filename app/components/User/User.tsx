'use client';

import Image from 'next/image';
import { FormContext } from '../ContextProvider';
import { useContext } from 'react';

export default function User() {
	const { watch } = useContext(FormContext);

	const currentEmail = watch('email');
	const currentName = watch('name');
	const currentImageProfile = watch('profileImage')[0];

	return (
		<div className="w-full sm:w-2/4 h-1/2 sm:h-96 flex flex-col gap-2 sm:gap-4 p-4 border-2 border-zinc-400 rounded justify-evenly items-start">
			<div className="w-40 h-40 self-center flex items-center justify-center border-2 border-stone-400 rounded-full bg-white overflow-hidden">
				{currentImageProfile && (
					<Image
						className="object-cover w-full h-full"
						src={URL.createObjectURL(currentImageProfile)}
						alt="profile image"
						width={200}
						height={200}
						quality={100}
					/>
				)}
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<span className="flex flex-row gap-2 items-center">
					<b className="w-16 font-sans font-medium text-xl ml-1">Name:</b>
					<p className="font-sans text-lg indent-1">{currentName}</p>
				</span>
				<span className="flex flex-row gap-2 items-center">
					<p className="w-16 font-sans font-medium text-xl ml-1">Email:</p>
					<p className="font-sans text-lg indent-1">{currentEmail}</p>
				</span>
			</div>
		</div>
	);
}
