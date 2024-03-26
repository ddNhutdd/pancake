import { DateInput } from 'src/components/date-input'
import { dateFormat } from 'src/constants'

export const Date = () => {

    return (
        <div className='row'>
            <div className='col-6 py-0 pl-0 col-sm-12'>
                <DateInput format={dateFormat} />
            </div>
            <div className='col-6 py-0 pl-0 col-sm-12 mt-sm-2'>
                <DateInput format={dateFormat} />
            </div>
        </div>
    )
}
