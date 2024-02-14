import { useForm } from 'react-hook-form';

export default function FormContextApi() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isSubmitting, dirtyFields, touchedFields },
		setError,
	} = useForm({ defaultValues: { name: '', email: '', profileImage: '' } });

	return { register, watch, handleSubmit, errors, isSubmitting, dirtyFields, touchedFields, setError };
}
