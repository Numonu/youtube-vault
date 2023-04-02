export function getVideoCode(link) {
	try {
		const url = new URL(link);
		const code = url.searchParams.get("v");
		return code;
	} catch (error) {
		return null;
	}
}
