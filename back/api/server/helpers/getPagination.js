export const getPagination = (page = 0, size = 10) => {
	const limit = size;
	const offset = page * limit;

	return { limit, offset };
}