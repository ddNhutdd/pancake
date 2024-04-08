import css from './text-area.module.scss';

const TextArea = function (props) {
	const {className} = props;
	return <textarea className={`${css.textArea} ${className}`}></textarea>;
};

export default TextArea;
