export const truncate = (
	text: string,
	length = 60
) => text.length > length ? `${text.slice(0, length)}...` : text;
