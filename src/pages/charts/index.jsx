import HeaderComponent2 from "src/components/header-component-2";
import css from "./charts.module.scss";
import ChartItem from "./chart-item";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Chart() {
    const [isStick, setIsStick] = useState(false);
    const menuElementRef = useRef(null);

    const scrollToMarkbook = (targetId, ev) => {
        ev.preventDefault();

        var element = document.getElementById(targetId);
        if (element) {
            var offset = element.offsetTop - 80;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }
    const setMenuStick = () => {
        var menu = menuElementRef.current;
        var menuPosition = menu.getBoundingClientRect().top;
        var currentPosition = window.scrollY || document.documentElement.scrollTop;

        if (currentPosition >= menuPosition + 50) {
            setIsStick(true);
        } else {
            setIsStick(false);
        }
    }
    const renderClassStick = () => {
        return isStick ? css.sticky : ''
    }
    const setActiveSideMenu = () => {
        var sections = document.querySelectorAll(`[data-section="section"]`);
        var menuItems = menuElementRef.current.querySelectorAll('li');

        sections.forEach(function (section, index) {
            var top = section.offsetTop;
            var height = section.offsetHeight;

            if (window.scrollY >= top - 200 && window.scrollY < top + height - 200) {
                menuItems[index].classList.add(css.active);
            } else {
                menuItems[index].classList.remove(css.active);
            }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', setMenuStick);
        window.addEventListener('scroll', setActiveSideMenu);

        return () => {
            window.removeEventListener('scroll', setMenuStick);
            window.removeEventListener('scroll', setActiveSideMenu);
        }
    }, [])

    return (
        <div className={css.chart}>
            <div className={css.container}>
                <HeaderComponent2 mainContent={`BNB Smart Chain Charts & Statistics`} />
                <div className="row mb-3 pt-5">
                    <div className="col-3 d-md-0">
                        <ul ref={menuElementRef} className={`${css.chart__menu} ${renderClassStick()}`}>
                            <li>
                                <NavLink onClick={scrollToMarkbook.bind(null, 'chart__record__market')} >
                                    Market Data
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={scrollToMarkbook.bind(null, 'chart__record__blockchain')}>
                                    Blockchain Data
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={scrollToMarkbook.bind(null, 'chart__record__network')}>
                                    Network Data
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={scrollToMarkbook.bind(null, 'chart__record__statistics')}>
                                    Top Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={scrollToMarkbook.bind(null, 'chart__record__data')}>
                                    Contracts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9 col-md-12 border-l-1 border-l-md-0">
                        <div id="chart__record__market" data-section={`section`} className={`row mb-3  border-b-1  ${css.chart__record}`}>
                            <div className={`col-12 mb-3 p-0 ${css.chart__header}`}>
                                Market Data
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                        </div>
                        <div id="chart__record__blockchain" data-section={`section`} className={`row mb-3 border-b-1  ${css.chart__record}`}>
                            <div className={`col-12 mb-3 p-0 ${css.chart__header}`}>
                                Blockchain Data
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                        </div>
                        <div id="chart__record__network" data-section={`section`} className={`row mb-3 border-b-1  ${css.chart__record}`}>
                            <div className={`col-12 mb-3 p-0 ${css.chart__header}`}>
                                Network Data
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                        </div>
                        <div id="chart__record__statistics" data-section={`section`} className={`row mb-3 border-b-1  ${css.chart__record}`}>
                            <div className={`col-12 mb-3 p-0 ${css.chart__header}`}>
                                Top Statistics
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                        </div>
                        <div id="chart__record__data" data-section={`section`} className={`row mb-3 border-b-1  ${css.chart__record}`}>
                            <div className={`col-12 mb-3 p-0 ${css.chart__header}`}>
                                Contracts Data
                            </div>
                            <div className={`col-4 col-lg-6 col-sm-12`}>
                                <ChartItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart