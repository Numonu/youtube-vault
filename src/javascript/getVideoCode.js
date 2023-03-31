export function getVideoCode(link) {
	const url = new URL(link);
	const code = url.searchParams.get("v");
	return code;
}
