import Card from 'src/components/card'
import HeaderComponent4 from 'src/components/header-component-4'
import ToolPage from 'src/components/tool-page'
import { url } from 'src/constants';
import css from './unit-converter.module.scss';
import Input from './input';

function UnitConverter() {
    return (
        <ToolPage
            menuActive={url.unitConverter}
        >
            <HeaderComponent4
                title={`Unit Converter`}
                content={`BNB is often used in different denominations of its currency, such as Wei for interacting with smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them!`}
            />
            <Card className={css.unitConverter}>
                <div>Enter any value</div>
                <Input />
            </Card>
        </ToolPage>
    )
}

export default UnitConverter