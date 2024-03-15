import css from './loader.module.scss';

function Loader() {
    return (
        <div className={css.loader}>
            <div className={css.loader__dot}></div>
            <div className={css.loader__dot}></div>
            <div className={css.loader__dot}></div>
        </div>
    )
}

export default Loader