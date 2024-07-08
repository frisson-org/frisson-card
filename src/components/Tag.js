const Tag = ( { title, icon } ) => {

	return (
		<div className='f-tag flex aic'>
			<div className='f-tag__image-container img-contain'>
				<img src={icon} alt=""/>
			</div>
			<div className='f-tag__title-container'>
				<h2 className='f-tag__title'>{title}</h2>
			</div>
		</div>
	);
}

export default Tag;
