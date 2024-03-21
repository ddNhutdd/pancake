import Card from 'src/components/card';
import css from './login.module.scss';
import Input3, { input3Type } from 'src/components/input-3';
import CheckBox from 'src/components/checkbox';
import Popover, { placementType } from 'src/components/popover';
import { useForm } from 'src/hooks/useForm';
import Button2, { button2HtmlType, button2Type } from 'src/components/button-2';
import { commonString, url } from 'src/constants';
import { useNavigate } from 'react-router-dom';

function Login() {
    const submitHandleCallBack = (values) => {
        console.log(values);
    }
    const [, errors, submitHandle, register] = useForm(submitHandleCallBack);
    const navigate = useNavigate();

    const redirectPage = (page) => {
        navigate(page);
        return;
    }

    return (
        <div className={css.login}>
            <div className={css.container}>
                <Card>
                    <form onSubmit={submitHandle} className={css.cardContainer}>
                        <div className={css.login__title}>
                            Sign In
                        </div>
                        <div className={css.login__subTitle}>
                            Don&apos;t have an account?
                            {" "}
                            <span
                                onClick={redirectPage.bind(null, url.register)}
                                className='--text-blue'>
                                Sign Up
                            </span>
                        </div>
                        <div className={css.login__input}>
                            <label htmlFor="loginUsername">
                                Username
                            </label>
                            <Input3
                                placeholder={`username`}
                                {...register('username')}
                                max={[20, commonString.tooLong]}
                                min={[3, commonString.tooShort]}
                                require={[true, commonString.require]}
                                errorText={errors.username}
                            />
                        </div>
                        <div className={css.login__input}>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="loginUsername">
                                    Username
                                </label>
                                <div className='d-sm-0 --text-blue'>
                                    Forgot your password?
                                </div>
                            </div>
                            <Input3
                                placeholder={`password`}
                                type={input3Type.password}
                                {...register('password')}
                                max={[20, commonString.tooLong]}
                                min={[3, commonString.tooShort]}
                                require={[true, commonString.require]}
                                errorText={errors.password}
                            />
                        </div>
                        <div className={css.login__input}>
                            <CheckBox
                                errorText={errors.eula}
                                require={[true, commonString.require]}
                                {...register('eula')}
                                text={<Popover
                                    placement={placementType.bottom}
                                    content={
                                        <div className='flex items-center justify-center flex-col p-0'>
                                            <span>Please do not check this box</span>
                                            <span>if you are using a public</span>
                                        </div>
                                    }>
                                    Remember & auto login
                                </Popover>} />
                            <div className='d-0 d-sm-b --text-blue'>
                                Forgot your password?
                            </div>
                        </div>
                        <div className={css.login__input}>
                            <Button2
                                loading={false}
                                classname={`w-100`}
                                type={button2Type.primary}
                                htmlType={button2HtmlType.submit}>
                                LOGIN
                            </Button2>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login