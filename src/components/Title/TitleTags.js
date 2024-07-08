import TitleTag from './TitleTag';
import imgNew from '../../images/tag-new.svg';
import imgFrisson from '../../images/tag-frisson.svg';

const titleTags = () => {

	return (
		<div className="f-title__tags flex">
			<TitleTag image={imgNew} />
			<TitleTag image={imgFrisson} />
		</div>
	);
}

export default titleTags;
