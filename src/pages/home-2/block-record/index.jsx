import PropTypes from 'prop-types';
import css from './block-record.module.scss';

const BlockRecord = (props) => {
    const { content } = props;
    return (
        <div className={css.blockRecord}>
            <div className={css.blockRecord__left}>
                <div className={css.blockRecord__left__img}>
                    {content.image}
                </div>
                <div className={css.blockRecord__left__content}>
                    <div className={css['blockRecord--blue']}>
                        {content.code}
                    </div>
                    <div className={css['blockRecord--gray']}>
                        {content.codeTime}
                    </div>
                </div>
            </div>
            <div className={css.blockRecord__right}>
                <div className={css.blockRecord__right__left}>
                    <div>
                        {content.contentTop}
                    </div>
                    <div>
                        {content.contentBot}
                        <span>
                            {content.actions}
                        </span>
                    </div>
                </div>
                <div className={css.blockRecord__right__right}>
                    {content.actions}
                </div>
            </div>
        </div>
    )
}

BlockRecord.propTypes = {
    content: PropTypes.object
}

export default BlockRecord;