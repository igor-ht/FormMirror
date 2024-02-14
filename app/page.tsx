import FormContextProvider from './components/ContextProvider';
import Form from './components/Form/Form';
import User from './components/User/User';

export default function Home() {
	return (
		<div className="flex flex-col gap-3 sm:flex-row justify-center w-full p-4">
			<FormContextProvider>
				<Form />
				<User />
			</FormContextProvider>
		</div>
	);
}
