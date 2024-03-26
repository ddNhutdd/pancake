import ToolPage from 'src/components/tool-page';
import css from './csv-export.module.scss';
import { url } from 'src/constants';
import HeaderComponent4 from 'src/components/header-component-4';
import Card from 'src/components/card';
import { useEffect, useState } from 'react';
import { Dropdown2, dropdown2TriggerType } from 'src/components/dropdown-2';
import Popover, { popoverPlacementType } from 'src/components/popover';
import Input3 from 'src/components/input-3';
import RadioButton from 'src/components/radio-button';
import Switch2 from 'src/components/switch-2';
import { CiCircleQuestion } from "react-icons/ci";
import Button2, { button2Type } from 'src/components/button-2';
import { FaAngleDown } from "react-icons/fa6";
import { Date } from './date';
import Number from './number';

function CsvExport() {
    const dropdownTypeList = [
        {
            id: 1,
            content: 'Transaction'
        },
        {
            id: 2,
            content: 'Internation Transaction'
        }
    ]

    const [dropdownTypeSelected, setDropdownTypeSelected] = useState(dropdownTypeList[0]);
    const [isShowDropdownType, setIsShowDropdownType] = useState(false);
    const [isNote, setIsNote] = useState(false);
    const [isNameTag, setNameTag] = useState(false);

    const dropdownTypeChangeHandle = (item,) => {
        setDropdownTypeSelected(item);
        setIsShowDropdownType(false)
    }
    const dropdownTypeClickHandle = (ev) => {
        ev.stopPropagation();
        setIsShowDropdownType(true)
    }

    useEffect(() => {
        const closeDropdown = () => setIsShowDropdownType(false);

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
    }, [])

    return (
        <ToolPage menuActive={url.csvExport} >
            <HeaderComponent4
                title={`Download Data (CSV Export)`}
                content={<>
                    The information you requested can be downloaded from this page. Before continuing
                    <span className={css['headerComponent4--bold']}> please verify that you are not a robot</span> by completing the captcha below.
                </>}
            />
            <Card className={css.csvExport}>
                <div className={css.csvExport__cardBody}>
                    <div className={css.csvExport__input}>
                        <div className={css.csvExport__label}>Select export type</div>
                        <Popover
                            placement={popoverPlacementType.top}
                            content={`Please choose type export`}
                            className={`w-100`}
                        >
                            <Dropdown2
                                id='1'
                                list={dropdownTypeList}
                                header={
                                    <div
                                        onClick={dropdownTypeClickHandle}
                                        className={`flex items-center justify-between border-1 rounded px-3 py-1 w-100`}
                                    >
                                        {dropdownTypeSelected.content}
                                        <FaAngleDown />
                                    </div>
                                }
                                onChange={dropdownTypeChangeHandle}
                                trigger={dropdown2TriggerType.runtime}
                                show={isShowDropdownType} />
                        </Popover>
                    </div>
                    <div className={css.csvExport__input}>
                        <div className={css.csvExport__label}>Address <span className='--text-danger'>*</span></div>
                        <Input3 />
                    </div>
                    <div className={css.csvExport__input}>
                        <div
                            className={css.csvExport__label}>
                            Choose download option:
                        </div>
                        <div className='flex items-center gap-3'>
                            <RadioButton
                                id={`radio__date`}
                                name='date'>
                                Date
                            </RadioButton>
                            <RadioButton
                                id={`radio__block`}
                                name='date'>
                                Block Number
                            </RadioButton>
                        </div>
                    </div>
                    <div className={css.csvExport__input}>
                        <Date />
                    </div>
                    <div className={css.csvExport__input}>
                        <Number />
                    </div>
                    <div className={css.csvExport__input}>
                        <div className='flex items-center gap-2 mb-2'>
                            <Switch2
                                active={isNote}
                                setActive={setIsNote} />
                            <span>
                                Tick to include txn privates note
                            </span>
                        </div>
                        <div className=' flex items-center gap-2 mb-2'>
                            <Switch2
                                active={isNameTag}
                                setActive={setNameTag} />
                            <span>
                                Tick to include txn privates name tag
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiCircleQuestion />
                        The earliest 5,000 records within the selected range will be exported
                    </div>
                </div>
                <div className={`border-t-1 ${css.csvExport__cardFooter}`}>
                    <Button2 type={button2Type.primary}>Download</Button2>
                    <Button2 type={button2Type.outline} classname={css.csvExport__reset}>Reset</Button2>
                </div>
            </Card>
        </ToolPage >
    )
}

export default CsvExport