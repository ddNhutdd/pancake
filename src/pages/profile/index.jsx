import Paging from "src/components/paging";
import { useState } from 'react';


function Profile() {
    const [totalItems] = useState(100);
    const [currentPage] = useState(1);

    const pagingChangeHandle = (page) => {
        console.log(page);
    }

    return (
        <div><Paging currentPage={currentPage} totalItems={totalItems} onChange={pagingChangeHandle} /></div>
    )
}

export default Profile