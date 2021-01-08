export const getPagingData = (limitedSpecies, page, limit) => {
	const { count: totalItems, rows: species } = limitedSpecies;
	const currentPage = page ? +page : 0;
	const totalPages = Math.floor(totalItems / limit);

	return { totalPages, currentPage, totalItems, species }
}
