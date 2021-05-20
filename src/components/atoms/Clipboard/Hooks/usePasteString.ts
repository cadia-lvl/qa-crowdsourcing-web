import { useEffect, useCallback } from "react";

const usePasteString = (
	onPaste: (data: string) => void,
	dependencies: any[]
) => {
	const handlePaste = useCallback((e: any) => {
		onPaste(e.clipboardData.getData("text"));
	}, dependencies);

	useEffect(() => {
		window.addEventListener("paste", handlePaste);
		return () => {
			window.removeEventListener("paste", handlePaste);
		};
	}, dependencies);
};

export default usePasteString;
