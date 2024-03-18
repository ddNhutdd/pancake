import Modal2 from 'src/components/modal-2';
import css from './home-2.module.scss';
import Top from './top';
import { useState } from 'react';

function Home2() {

    const [isShowModal, setIsShowModal] = useState();


    const rea = (ev) => {
        ev.stopPropagation();
        setIsShowModal(true);
    }
    return (
        <div>
            <Top />
            <Modal2 content={`fjd;ajfdksa`} show={isShowModal} setShow={setIsShowModal} />

            <button onClick={rea}>dfas</button>
        </div>
    )
}

export default Home2