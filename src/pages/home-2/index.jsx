import Card from 'src/components/card';
import css from './home-2.module.scss';
import Top from './top';
import TopCardContent from './top-card-content';
import CardContent from './card-content';
import { useState } from 'react';
import { BsBox } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { BiGasPump } from "react-icons/bi";
import Popover, { placementType } from 'src/components/popover';
import Button2, { button2Type } from 'src/components/button-2';
import BlockRecord from './block-record';

function Home2() {
    const listImage = {
        imageBox: <BsBox />,
        imageDoc: <IoDocumentOutline />,
        imageGas: <BiGasPump />
    }
    const blockList = [
        {
            id: 1,
            image: listImage.imageDoc,
            code: `37095153`,
            codeTime: '9 secs ago',
            contentTop: <>
                <span>
                    Validated By
                </span>
                {" "}
                <span>
                    <Popover
                        className={css['home2--blue']}
                        placement={placementType.top}
                        content={`dfdsafdsafdsafdsafdsa`}>
                        Validator: Defibit
                    </Popover>
                </span>
            </>,
            contentBot: <div>
                <Popover
                    className={css['home2--blue']}
                    placement={placementType.top}
                    content={`dafdsafd;sajfkdsjafdsfdhsalfdhsa`}
                >
                    142 txns
                </Popover>
                {' '}
                <span className={css['blockRecord--gray']}>
                    in 3 secs
                </span>
            </div>,
            actions: <Button2 type={button2Type.outlineSmall}>0.5267 BNB</Button2>
        },
        {
            id: 2,
            image: listImage.imageDoc,
            code: `37095153`,
            codeTime: '9 secs ago',
            contentTop: <>
                <span>
                    Validated By
                </span>
                {" "}
                <span>
                    <Popover
                        className={css['home2--blue']}
                        placement={placementType.top}
                        content={`dfdsafdsafdsafdsafdsa`}>
                        Validator: Defibit
                    </Popover>
                </span>
            </>,
            contentBot: <div>
                <Popover
                    className={css['home2--blue']}
                    placement={placementType.top}
                    content={`dafdsafd;sajfkdsjafdsfdhsalfdhsa`}
                >
                    142 txns
                </Popover>
                {' '}
                <span className={css['blockRecord--gray']}>
                    in 3 secs
                </span>
            </div>,
            actions: <Button2 type={button2Type.outlineSmall}>0.5267 BNB</Button2>
        },
        {
            id: 3,
            image: listImage.imageDoc,
            code: `37095153`,
            codeTime: '9 secs ago',
            contentTop: <>
                <span>
                    Validated By
                </span>
                {" "}
                <span>
                    <Popover
                        className={css['home2--blue']}
                        placement={placementType.top}
                        content={`dfdsafdsafdsafdsafdsa`}>
                        Validator: Defibit
                    </Popover>
                </span>
            </>,
            contentBot: <div>
                <Popover
                    className={css['home2--blue']}
                    placement={placementType.top}
                    content={`dafdsafd;sajfkdsjafdsfdhsalfdhsa`}
                >
                    142 txns
                </Popover>
                {' '}
                <span className={css['blockRecord--gray']}>
                    in 3 secs
                </span>
            </div>,
            actions: <Button2 type={button2Type.outlineSmall}>0.5267 BNB</Button2>
        },
        {
            id: 4,
            image: listImage.imageDoc,
            code: `37095153`,
            codeTime: '9 secs ago',
            contentTop: <>
                <span>
                    Validated By
                </span>
                {" "}
                <span>
                    <Popover
                        className={css['home2--blue']}
                        placement={placementType.top}
                        content={`dfdsafdsafdsafdsafdsa`}>
                        Validator: Defibit
                    </Popover>
                </span>
            </>,
            contentBot: <div>
                <Popover
                    className={css['home2--blue']}
                    placement={placementType.top}
                    content={`dafdsafd;sajfkdsjafdsfdhsalfdhsa`}
                >
                    142 txns
                </Popover>
                {' '}
                <span className={css['blockRecord--gray']}>
                    in 3 secs
                </span>
            </div>,
            actions: <Button2 type={button2Type.outlineSmall}>0.5267 BNB</Button2>
        },
        {
            id: 5,
            image: listImage.imageDoc,
            code: `37095153`,
            codeTime: '9 secs ago',
            contentTop: <>
                <span>
                    Validated By
                </span>
                {" "}
                <span>
                    <Popover
                        className={css['home2--blue']}
                        placement={placementType.top}
                        content={`dfdsafdsafdsafdsafdsa`}>
                        Validator: Defibit
                    </Popover>
                </span>
            </>,
            contentBot: <div>
                <Popover
                    className={css['home2--blue']}
                    placement={placementType.top}
                    content={`dafdsafd;sajfkdsjafdsfdhsalfdhsa`}
                >
                    142 txns
                </Popover>
                {' '}
                <span className={css['blockRecord--gray']}>
                    in 3 secs
                </span>
            </div>,
            actions: <Button2 type={button2Type.outlineSmall}>0.5267 BNB</Button2>
        }
    ]
    const typeFilter = {
        block: 'block',
        transaction: 'transaction',
        contract: 'contract',
        guzzler: 'guzzler'
    }

    const [cardLeftTitle] = useState('Latest Blocks');
    const [cardRightTitle] = useState('Latest Transactions');
    const [cardLeftFooter] = useState('Latest Blocks');
    const [cardRightFooter] = useState('Latest Transactions');
    const [leftCardFilterType] = useState(typeFilter.block);

    const renderLeftCard = () => {
        switch (leftCardFilterType) {
            case typeFilter.block:
                if (!blockList || blockList.length <= 0) return;
                return blockList.map(item => {
                    if (item !== blockList.at(-1)) {
                        return <div key={item.id}>
                            <BlockRecord content={item} />
                            <div className={css.line}></div>
                        </div>
                    } else {
                        return <BlockRecord key={item.id} content={item} />
                    }

                });
            default:
                break;
        }
    }

    return (
        <div className={css.home2}>
            <Top />
            <div className={css.container}>
                <div className={css.home2__top}>
                    <Card>
                        <TopCardContent />
                    </Card>
                </div>
                <div className={css.home2__left}>
                    <Card>
                        <CardContent
                            title={cardLeftTitle}
                            footerContent={cardLeftFooter}
                            content={renderLeftCard()} />
                    </Card>
                </div>
                <div className={css.home2__right}>
                    <Card>
                        <CardContent
                            title={cardRightTitle}
                            footerContent={cardRightFooter}
                            content={renderLeftCard()} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home2