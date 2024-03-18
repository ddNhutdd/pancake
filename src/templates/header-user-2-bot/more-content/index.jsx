import css from "./more-content.module.scss";
import { AiOutlineSync } from "react-icons/ai";

export const MoreContent = () => {
    return (
        <div className={css.moreContent}>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Tools & Services
                </div>
                <div className={`${css.moreContent__record} ${css.text}`}>
                    Discover more of BscScan&apos;s tools and services in one place.
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Explore
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
            </div>
            <div className={css.moreContent__item}>
                <div className={`${css.moreContent__record} ${css.header}`}>
                    Explore
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
                <div className={css.moreContent__record}>
                    <AiOutlineSync />
                    Tools
                </div>
            </div>
        </div>
    )
}
