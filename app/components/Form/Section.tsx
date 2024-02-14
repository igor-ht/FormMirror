import Input from './Input';
import Label from './Label';

interface SectionProps {
	label: {
		children: string;
		rest: any;
	};
	input: {
		rest: any;
	};
}

export default function Section({ label, input }: SectionProps) {
	return (
		<section className="w-full flex flex-col gap-1 sm:gap-2 content-center items-start">
			<Label {...label.rest}>{label.children}</Label>
			<Input {...input.rest} />
		</section>
	);
}
