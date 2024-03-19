import Popover from "src/components/popover";
import css from "./top-card-content.module.scss";
import { RiGlobalLine } from "react-icons/ri";
import bnbIcon from "imgs/staking-2.png";
import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function TopCardContent() {
    const data = [
        {
            name: "Page A",
            pv: 2400,
        },
        {
            name: "Page B",
            pv: 1398,
        },
        {
            name: "Page C",
            pv: 9800,
        },
        {
            name: "Page D",
            pv: 3908,
        },
        {
            name: "Page E",
            pv: 4800,
        },
        {
            name: "Page F",
            pv: 3800,
        },
        {
            name: "Page G",
            pv: 4300,
        }
    ];

    return (
        <div className={css.topCardContent}>
            <div className={css.topCardContent__section}>
                <div className={css.topCardContent__row}>
                    <img src={bnbIcon} alt="bnbicon" />
                    <div>
                        <div>
                            BNB PRICE
                        </div>
                        <Popover
                            className={css['topCardContent__row--hoverBlue']}
                            content={`View historical BNB price`}>
                            <span>$537.10</span>
                            {" "}
                            <span className={css['topCardContent__row--normal']}>
                                @ 0.008147 BTC
                            </span>
                            {" "}
                            <span className={css['topCardContent__row--red']}>
                                (-3.73%)
                            </span>
                        </Popover>
                    </div>
                </div>
                <div className={css.topCardContent__row}>
                    <RiGlobalLine />
                    <div>
                        BNB MARKET CAP ON BSC
                        <div className={css['topCardContent__row--hoverBlue']}>
                            <span>$12,903,938,790.00</span>
                            {" "}
                            <span
                                className={css['topCardContent__row--normal']}>
                                (24,025,375 BNB)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.topCardContent__section}>
                <div className={css.topCardContent__row}>
                    <div className={css.topCardContent__row__left}>
                        <img src={bnbIcon} alt="bnbicon" />
                        <div>
                            TRANSACTIONS
                            <div>
                                <Popover content={
                                    <>
                                        <span>Total transaction counter</span>
                                        <span>Update every 5 mins</span>
                                    </>
                                }>
                                    5,505.20 M
                                </Popover>

                                <Popover content={
                                    `transaction per seconds`
                                }>
                                    (71.4 TPS)
                                </Popover>
                            </div>
                        </div>
                    </div>
                    <div className={css.topCardContent__row__right}>
                        <div>
                            MED GAS PRICE
                        </div>
                        <div>
                            <span>3 Gwei</span>
                            <span>($0.03)</span>
                        </div>
                    </div>
                </div>
                <div className={css.topCardContent__row}>
                    <div className={css.topCardContent__row__left}>
                        <img src={bnbIcon} alt="bnbicon" />
                        <div>
                            LATEST BLOCK
                            <div>
                                <Popover content={
                                    <>
                                        <span>Total transaction counter</span>
                                        <span>Update every 5 mins</span>
                                    </>
                                }>
                                    5,505.20 M
                                </Popover>
                                <Popover content={
                                    `transaction per seconds`
                                }>
                                    (71.4 TPS)
                                </Popover>
                            </div>
                        </div>
                    </div>
                    <div className={css.topCardContent__row__right}>
                        <div>
                            MED GAS PRICE
                        </div>
                        <div>
                            <span>3 Gwei</span>
                            <span>($0.03)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.topCardContent__section}>
                <div className={css.topCardContent__chart}>
                    <div>BNB SMART CHAIN TRANSACTION HISTORY IN 14 DAYS</div>
                    <ResponsiveContainer width="100%" height="70%">
                        <LineChart
                            width={400}
                            height={120}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 0 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default TopCardContent