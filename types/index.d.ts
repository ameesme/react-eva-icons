declare module 'react-eva-icons' {
	interface Animation {
		type: string,
		hover?: boolean,
		infinite?: boolean
	}
	interface EvaIcon {
		name: string,
		size?: string | number,
		fill?: string,
		class?: string,
		animation?: Animation
	}
    const Icon: EvaIcon;
    export default Icon;
}