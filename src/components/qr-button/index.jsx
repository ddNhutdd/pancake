import {BsQrCode} from 'react-icons/bs';
import css from './qr-button.module.scss';
import Popover, {popoverPlacementType} from '../popover';
import Modal2 from '../modal-2';
import {useState} from 'react';
import QRCode from 'react-qr-code';

const QRButton = function (props) {
	const {value} = props;
	const [showModal, setShowModal] = useState(false);

	const qrClickHandle = () => {
		setShowModal(true);
	};

	return (
		<>
			<div className={css.qRButton}>
				<Popover
					placement={popoverPlacementType.top}
					content={`Click to view QR code`}
				>
					<div
						className='flex items-center'
						onClick={qrClickHandle}
					>
						<BsQrCode />
					</div>
				</Popover>
			</div>
			<Modal2
				showFooter={false}
				show={showModal}
				setShow={setShowModal}
				title='Address QR Code'
				content={
					<div
						style={{
							height: 'auto',
							margin: '0 auto',
							maxWidth: 280,
							width: '100%',
							padding: 16,
							display: 'flex',
							flexDirection: 'column',
							gap: 10,
							alignItems: 'center',
						}}
					>
						<QRCode
							size={256}
							style={{
								height: 'auto',
								maxWidth: '100%',
								width: '100%',
							}}
							value={value}
							viewBox={`0 0 256 256`}
						/>
						<span
							style={{wordBreak: 'break-all', fontSize: 13}}
							className='text-center'
						>
							{value}
						</span>
					</div>
				}
			/>
		</>
	);
};

export default QRButton;
