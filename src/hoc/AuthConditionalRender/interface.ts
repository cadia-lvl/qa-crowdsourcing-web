export interface IProps {
	children: (v1: CondFuncJSX, v2: CondFuncJSX) => any;
}

type CondFuncJSX = (props: CondIProps) => JSX.Element | null;

export interface CondIProps {
	children: React.ReactNode;
}
