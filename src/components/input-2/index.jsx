import css from './input-2.module.scss';
import PropTypes from 'prop-types';

function Input2(props) {
    const { value, icon } = props;

    return (
        <div className={css.input2}>
            <input value={value} type='text'></input>
            {icon && <div>{icon}</div>}
        </div>
    )
}



export default Input2