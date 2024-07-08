import DetailsItem from './DetailsItem';

const Details = () => {
	const items = [
		{
			id: 'd1',
			title: 'Описание',
			description: '<p>Вашему вниманию предлагается уникальный спортивный аттракцион: симулятор свободного падения! Парение в воздухе без каких-либо удерживающих устройств.</p>'
		},
		{
			id: 'd2',
			title: 'Направление',
			description: '<p>Воздухоплавание</p>'
		},
		{
			id: 'd3',
			title: 'Особенности',
			description: '<p>Отплата только наличными</p>'
		},
		{
			id: 'd4',
			title: 'Часы работы',
			description: '<ul><li>Будни — 12:00–20:00</li><li>Выходные — 10:00–19:00</li></ul>'
		},
		{
			id: 'd5',
			title: 'Адрес',
			description: '<p>Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский, строение 180Б</p>',
			button: { link: '#', name: 'Проложить маршрут' }
		}
	]

	return (
		<div className="f-details">
			<div className="f-details__items">
				{ items && items.map( ( item ) => (
					<DetailsItem
						key={ item.id }
						title={ item.title }
						description={ item.description }
						button={ item.button }
					/>
				) )
				}
			</div>
		</div>
	);
}

export default Details;
