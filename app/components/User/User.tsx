'use client';

import Image from 'next/image';
import { FormContext } from '../ContextProvider';
import { useContext } from 'react';

export default function User() {
	const { dirtyFields, watch } = useContext(FormContext);

	return (
		<div className="w-2/4 h-fit m-auto flex flex-col flex-1 gap-4 p-5 border-2 border-zinc-400 rounded">
			<div className="w-auto h-fit flex items-center justify-center rounded-full">
				{dirtyFields?.profileImage && (
					<Image
						src={URL.createObjectURL(watch('profileImage')[0])}
						alt="profile image"
						width={200}
						height={200}
						quality={100}
					/>
				)}
			</div>
			<div className="flex flex-col gap-3 items-center justify-center font-sans text-lg">
				{dirtyFields?.name && <p>{watch('name')}</p>}
				{dirtyFields?.email && <p>{watch('email')}</p>}
			</div>
		</div>
	);
}
