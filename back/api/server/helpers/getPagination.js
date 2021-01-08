export const getPagination = (page = 0, size = 10) => {
	const limit = size ? +size : 10;
	const offset = page ? page * limit : 0;

	return { limit, offset };
}
