const FeedbackItem = ( { image, name, date, feedback } ) => {

	return (
		<div className="f-feedback-item f-feedback__item">
			<div className="f-feedback-item__header flex aic">
				<div className="f-feedback-item__image-container img-cover">
					<img src={ image } alt={ name } className="f-feedback-item__image"/>
				</div>
				<div className="f-feedback-item__name-side">
					<div className="f-feedback-item__name-container">
						<h3 className="f-feedback-item__name">{ name }</h3>
					</div>
					<div className="f-feedback-item__date-container">
						<span className="f-feedback-item__date block">{ date }</span>
					</div>
				</div>
			</div>
			<div className="f-feedback-item__feedback-container">
				<p className="f-feedback-item__feedback">{ feedback }</p>
			</div>
		</div>
	);
}

export default FeedbackItem;
