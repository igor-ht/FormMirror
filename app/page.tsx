import FormContextProvider from './components/ContextProvider';
import Form from './components/Form/Form';
import User from './components/User/User';

export default function Home() {
	return (
		<div className="flex flex-col gap-3 sm:flex-row justify-center items-center w-full p-2 sm:p-4 h-full">
			<FormContextProvider>
				<Form />
				<User />
			</FormContextProvider>
		</div>
	);
}
