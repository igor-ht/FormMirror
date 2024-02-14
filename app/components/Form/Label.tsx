export default function Label({ children, ...rest }: { children: string } & React.LabelHTMLAttributes<HTMLLabelElement>) {
	return (
		<label
			{...rest}
			className="flex font-sans font-medium text-xl ml-1">
			{children}
		</label>
	);
}
