export const getPagingData = (limitedSpecies, page, limit) => {
	const { count: totalItems, rows: species } = limitedSpecies;
	const totalPages = Math.ceil(totalItems / limit);

	return { totalPages, currentPage: page, totalItems, species }
}
