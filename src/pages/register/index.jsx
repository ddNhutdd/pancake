import Card from 'src/components/card';
import css from './register.module.scss';
import Input3, {input3Type} from 'src/components/input-3';
import CheckBox from 'src/components/checkbox';
import Button2, {button2HtmlType, button2Type} from 'src/components/button-2';
import {useForm} from 'src/hooks/useForm';
import {commonString, regular, url} from 'src/constants';
import {useNavigate} from 'react-router-dom';

function Register() {
	const submitCallback = () => {};
	const [, errors, submitHandle, register] = useForm(submitCallback);
	const navigate = useNavigate();

	const redirectPage = (page) => {
		navigate(page);
		return;
	};

	return (
		<div className={css.register}>
			<div className={css.container}>
				<Card>
					<form
						onSubmit={submitHandle}
						className={css.register__card}
					>
						<div className={css.register__header}>Sign Up</div>
						<div className={css.register__headerSmall}>
							Already have an account?{' '}
							<span
								onClick={redirectPage.bind(null, url.login)}
								className='--text-blue'
							>
								Sign In here
							</span>
						</div>
						<div className={css.register__controls}>
							<label htmlFor='username'>Username</label>
							<Input3
								{...register('username')}
								placeholder={`Username`}
								max={[20, commonString.tooLong]}
								min={[3, commonString.tooShort]}
								require={[true, commonString.require]}
								errorText={errors['username']}
							/>
						</div>
						<div className={css.register__controls}>
							<label htmlFor='email'>Email Address</label>
							<Input3
								{...register('email')}
								require={[true, commonString.require]}
								regular={[
									regular.email.source,
									commonString.formatInvalid,
								]}
								placeholder={`Email`}
								errorText={errors['email']}
							/>
						</div>
						<div className={css.register__controls}>
							<label htmlFor='confirmEmail'>
								Confirm Email Address
							</label>
							<Input3
								{...register('confirmEmail')}
								require={[true, commonString.require]}
								asame={['email', commonString.emailNotMatch]}
								placeholder={`Re-enter your email address`}
								errorText={errors['confirmEmail']}
							/>
						</div>
						<div className={css.register__controls}>
							<label htmlFor='password'>Password</label>
							<Input3
								type={input3Type.password}
								{...register('password')}
								max={[20, commonString.tooLong]}
								min={[6, commonString.tooShort]}
								require={[true, commonString.require]}
								placeholder={`Password`}
								errorText={errors['password']}
							/>
						</div>
						<div className={css.register__controls}>
							<label htmlFor='confirmPassword'>
								Confirm Password
							</label>
							<Input3
								type={input3Type.password}
								{...register('confirmPassword')}
								require={[true, commonString.require]}
								asame={[
									'password',
									commonString.passwordNotMatch,
								]}
								placeholder={`Confirm Password`}
								errorText={errors['confirmPassword']}
							/>
						</div>
						<div className={css.register__controls}>
							<CheckBox
								{...register('eula')}
								require={[true, commonString.require]}
								errorText={errors['eula']}
								text={
									<>
										I agree to the{' '}
										<span className='--text-blue'>
											Terms and Conditions.
										</span>
									</>
								}
							/>
						</div>
						<div className={css.register__controls}>
							<CheckBox
								id={`ck2`}
								text={
									<>
										I would like to receive the BscScan
										newsletter and understand that I can{' '}
										<span className='--text-blue'>
											unsubscribe
										</span>{' '}
										at any time.
									</>
								}
							/>
						</div>
						<div className={css.register__controls}>
							<Button2
								classname={`w-100`}
								type={button2Type.primary}
								loading={false}
								htmlType={button2HtmlType.submit}
							>
								Create an Account
							</Button2>
						</div>
					</form>
				</Card>
			</div>
		</div>
	);
}

export default Register;
