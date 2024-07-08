import PricesItem from './PricesItem';

const Prices = () => {
	const items = [
		{
			id: 'p1',
			time: '1 час для взрослого',
			description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание',
			price: '1 500'
		},
		{
			id: 'p2',
			time: '1 час для взрослого',
			description: '',
			price: '1 500'
		},
		{
			id: 'p3',
			time: '1 час для взрослого',
			description: '',
			price: '1 500'
		}
	];

	return (
		<div className="f-prices">
			<div className="f-prices__title-container">
				<h2 className="f-prices__title f-heading-2">Услуги и цены</h2>
			</div>
			<div className="f-prices__items flex fdc">
				{ items.map( ( item ) => (
					<PricesItem
						key={ item.id }
						time={ item.time }
						description={ item.description }
						price={ item.price }
					/>
				) )
				}
			</div>
		</div>
	);
}

export default Prices;
