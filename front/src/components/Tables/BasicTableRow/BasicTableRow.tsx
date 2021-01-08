import * as React from 'React';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const BasicTableRow = ({
	id,
	name_link,
	name,
	Family,
	GuardCategory,
	year_gathering_place_link,
	year,
	gathering_place
}) => (
	<tr key={id}>
		{/* Название вида */}
		<td>
		<a href={name_link}>{name}</a>
		</td>
		{/* Семейство */}
		<td>{Family.name}</td>
		{/* Категория охраны */}
		<td>{GuardCategory.abbreviation}</td>
		{/* Год */}
		<td>
		<a href={year_gathering_place_link}>{year}</a>
		</td>
		{/* Место сбора */}
		<td>
		<a href={year_gathering_place_link}>
			{gathering_place}
		</a>
		</td>
		{/* addition */}
		<td>
		<Link to={`species/${id}`}>
			<Button variant="secondary">больше</Button>
		</Link>
		</td>
	</tr>
);
