import css from './cake-staking.module.scss';
import { FaArrowRight } from "react-icons/fa6";
import Button from 'components/button';
import Card from 'pages/cake-staking/card';
import { FaRegQuestionCircle } from "react-icons/fa";
import { HeaderComponentList2 } from 'src/constants/header-component-list-2';
import HeaderComponent from 'src/components/header-component';
import Theme3 from "src/assets/theme/theme-3.theme.jsx";
import questionImage from 'imgs/staking-10.png';
import staking1 from 'imgs/staking-1.png';
import lock from 'imgs/lock.png';
import staking4 from 'imgs/staking-4.png';
import staking5 from 'imgs/staking-5.png';
import staking6 from 'imgs/staking-6.png';
import staking7 from 'imgs/staking-7.png';
import staking8 from 'imgs/staking-8.png';
import staking9 from 'imgs/staking-9.png';
import { useTheme } from "context/dark-theme";

function CakeStaking() {

    const { isDarkMode } = useTheme();

    const renderDarkTheme = () => {
        return isDarkMode ? css.dark : '';
    }

    return (
        <div className={`${css.cakeStaking} ${renderDarkTheme()}`}>
            <HeaderComponent list={HeaderComponentList2} />
            <div className={css.cakeStaking__top}>
                <div className={css.cakeStaking__container}>
                    <div className={css.cakeStaking__top__content}>
                        <div className={css.cakeStaking__top_left}>
                            <div className={css.cakeStaking__top__header}>CAKE Staking</div>
                            <div className={css.cakeStaking__top__text}>
                                Enjoy the benefits of weekly CAKE yield, revenue share, gauges voting, farm yield boosting, participating in IFOs, and so much more!
                            </div>
                            <div className={css.cakeStaking__top__nav}>
                                Get CAKE <FaArrowRight />
                            </div>
                        </div>
                        <div className={css.cakeStaking__top_right}>
                            <span>
                                <div className="d-md-0">
                                    new to cake staking
                                </div>
                                <FaRegQuestionCircle />
                            </span>
                            <span className='d-sm-0'><Theme3 /></span>
                            <span><img src={questionImage}></img></span>
                        </div>
                        <div className={css.cakeStaking__top__card}>
                            <div className={css.cakeStaking__top__card__header}>
                                Lock CAKE to get veCAKE
                            </div>
                            <div className={css.cakeStaking__top__card__input}>
                                <div className={`${css.cakeStaking__top__card__input__group} ${css.cakeStaking__top__card__input__left}`}>
                                    <div>ADD CAKE</div>
                                    <div className={css.cakeStaking__top__card__input__item}>
                                        <div>
                                            <img src={staking1} alt="staking-1" />
                                        </div>
                                        <div>
                                            <div>
                                                <input type="text" />
                                                <span>Balance: 0</span>
                                            </div>
                                            <div>
                                                ~5,599,406,648.49 USD
                                            </div>
                                        </div>
                                    </div>
                                    <div className={css.cakeStaking__top__card__input__list}>
                                        <div className={`${css.cakeStaking__top__card__input__list__item} ${css.active} ${css.left}`}>25%</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>50%</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>75%</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>Max</div>
                                    </div>
                                </div>
                                <div className={`${css.cakeStaking__top__card__input__group} ${css.cakeStaking__top__card__input__right}`}>
                                    <div>ADD DURATION</div>
                                    <div className={css.cakeStaking__top__card__input__item}>
                                        <div>
                                            <img src={lock} alt="lock" />
                                        </div>
                                        <div>
                                            <div>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div>Week</div>
                                    </div>
                                    <div className={css.cakeStaking__top__card__input__list}>
                                        <div className={`${css.cakeStaking__top__card__input__list__item} ${css.active} ${css.right}`}>1W</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>1M</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>6M</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>1Y</div>
                                        <div className={css.cakeStaking__top__card__input__list__item}>4Y</div>
                                    </div>
                                </div>
                            </div>
                            <div className={css.cakeStaking__top__card__overide}>
                                <div className={css.cakeStaking__top__card__overide__header}>LOCK OVERVIEW</div>
                                <div className={css.cakeStaking__top__card__overide__main}>
                                    <span className={css.cakeStaking__top__card__overide__main__item}>
                                        <img src={staking4} alt="staking-4" />
                                    </span>
                                    <span className={css.cakeStaking__top__card__overide__main__item}>
                                        <span>
                                            MY veCAKE
                                        </span>
                                        <span>159760680.869</span>
                                    </span>
                                </div>
                                <div className={css.cakeStaking__top__card__overide__info}>
                                    <div className={css.cakeStaking__top__card__overide__info__item}>
                                        <span>CAKE TO BE LOCKED</span>
                                        <span>1321321321</span>
                                    </div>
                                    <div className={css.cakeStaking__top__card__overide__info__item}>
                                        <span>FACTOR</span>
                                        <span>0.12x</span>
                                    </div>
                                    <div className={css.cakeStaking__top__card__overide__info__item}>
                                        <span>DURATION</span>
                                        <span>26 weeks</span>
                                    </div>
                                    <div className={css.cakeStaking__top__card__overide__info__item}>
                                        <span>UNLOCK ON</span>
                                        <span>Sep 5 2024 07:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className={css.cakeStaking__top__card__actions}><Button isDark={isDarkMode} className='w-100'>Connect Wallet</Button></div>
                        </div>
                        <div className={css.cakeStaking__top__smallTitle}>Benefits of veCAKE</div>
                        <div className={css.cakeStaking__top__secondCardContainer}>
                            <div className={css.cakeStaking__top__secondCard}>
                                <Card
                                    img={staking5}
                                    title={<>
                                        Earn CAKE
                                        <FaRegQuestionCircle />
                                    </>}
                                    smallTitle={`Total Distributed`}
                                    number={`886,579.69 CAKE`}
                                    info={[`Weekly revenue sharing`, `Weekly CAKE pool rewards`]}
                                    action={`Check Reward`}
                                />
                            </div>
                            <div className={css.cakeStaking__top__secondCard}>
                                <Card
                                    img={staking6}
                                    title={<>
                                        Gauges Voting
                                        <FaRegQuestionCircle />
                                    </>}
                                    smallTitle={`Number of Gauges to Vote`}
                                    number={`319`}
                                    info={[`Boost rewards on your favorite farms`, `Claim additional incentives from other protocols`]}
                                    action={`Check Gauges`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.cakeStaking__bottom}>
                <div className={css.cakeStaking__container}>
                    <div className={css.cakeStaking__bottom__header}>And So Much More...</div>
                    <div className={css.cakeStaking__bottom__content}>
                        <div className={css.cakeStaking__bottom__item}>
                            <Card
                                img={staking7}
                                title={<>
                                    Farm Boost
                                    <FaRegQuestionCircle />
                                </>}
                                smallTitle={`Farming Boost Up To`}
                                number={`2.5x`}
                                info={[`Boost your farm earnings`, `Supports multi-chain boosts`]}
                                action={`Check Farms`}
                                outline_button />
                        </div>
                        <div className={css.cakeStaking__bottom__item}>
                            <Card
                                img={staking8}
                                title={<>
                                    Snapshot Voting
                                    <FaRegQuestionCircle />
                                </>}
                                smallTitle={`Number of Proposals`}
                                number={`3719`}
                                info={[`Use your veCAKE to vote on important governance proposals`]}
                                action={`Check Snapshot Voting`}
                                outline_button />
                        </div>
                        <div className={css.cakeStaking__bottom__item}>
                            <Card
                                img={staking9}
                                title={<>
                                    IFO
                                    <FaRegQuestionCircle />
                                </>}
                                smallTitle={`Number of Proposals`}
                                number={`$-`}
                                info={[`Participate in IFO public sales`, `Supports multi-chain IFOs`]}
                                action={`Check IFOs`}
                                outline_button />
                        </div>
                        <div className={css.cakeStaking__bottom__item}>
                            <Card
                                img={staking4}
                                title={<>
                                    And So Much More...
                                </>}
                                info={[`Boost your winning in Trading Rewards campaigns. Regardless which chain you are trading on.`, `Boost your earnings in fixed staking.`, `More to come...`]}
                                action={`Learn more`}
                                outline_button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CakeStaking