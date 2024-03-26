import { InputNumber } from "./input-number"


function Number() {
    return (
        <div className="row">
            <div className="col-6 pl-0 py-0 col-sm-12">
                <InputNumber />
            </div>
            <div className="col-6 pl-0 py-0 col-sm-12 mt-sm-2">
                <InputNumber />
            </div>
        </div>
    )
}

export default Number