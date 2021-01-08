export const getPagingData = (limitedSpecies, page, limit) => {
	const { count: totalItems, rows: species } = limitedSpecies;
	const currentPage = page ? +page : 0;
	// Math floor for easier work on front-end with rendering items,
	// because counting in arrays and loops always start from 0
	const totalPages = Math.floor(totalItems / limit);

	return { totalPages, currentPage, totalItems, species }
}
