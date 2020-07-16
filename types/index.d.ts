declare module 'react-eva-icons' {
	interface Animation {
		type: string,
		hover?: boolean,
		infinite?: boolean
	}
	interface EvaIcon {
		name: string | undefined,
		size?: string | number,
		fill?: string,
		class?: string,
		animation?: Animation
	}
	class Icon extends React.Component<EvaIcon, any> {}
    export default Icon;
}