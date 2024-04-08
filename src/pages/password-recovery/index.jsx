import Card from 'src/components/card';
import css from './password-recovery.module.scss';
import Input3 from 'src/components/input-3';
import Button2, {button2HtmlType, button2Type} from 'src/components/button-2';
import {NavLink} from 'react-router-dom';
import {commonString, regular, url} from 'src/constants';
import {useForm} from 'src/hooks/useForm';

function PasswordRecovery() {
	const submitCallback = (values) => {
		values;
	};
	const [, errors, submitHandle, register] = useForm(submitCallback);

	return (
		<div className={css.passwordRecovery}>
			<div className={css.container}>
				<Card className={css.passwordRecovery__card}>
					<form onSubmit={submitHandle}>
						<div className={css.passwordRecovery__header}>
							Password Recovery
						</div>
						<div className={css.passwordRecovery__headerSmall}>
							Enter the email address you used when you joined and
							we&apos;ll send you instructions to reset your
							password.
						</div>
						<Input3
							placeholder={`Your Email Address`}
							{...register('email')}
							require={[true, commonString.require]}
							regular={[
								regular.email,
								commonString.formatInvalid,
							]}
							errorText={errors['email']}
						/>
						<Button2
							type={button2Type.primary}
							htmlType={button2HtmlType.submit}
						>
							Reset Password
						</Button2>
						<NavLink
							to={url.login}
							className={`--text-blue ${css.toSignIn}`}
						>
							Back to sign in
						</NavLink>
					</form>
				</Card>
			</div>
		</div>
	);
}

export default PasswordRecovery;
