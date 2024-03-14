import Paging from "src/components/paging";
import { useState } from 'react';
import { useForm } from "src/hooks/useForm";

function Profile() {
    const [totalItems] = useState(100);
    const [currentPage] = useState(1);

    const pagingChangeHandle = (page) => {
        console.log(page);
    }
    const submitForm = (values) => {
        console.log(values);
    }

    const [handleChange, errors, submitHandle] = useForm(submitForm, { username: '', password: '', confirm: '' });

    return (
        <div>
            <Paging currentPage={currentPage} totalItems={totalItems} onChange={pagingChangeHandle} />
            <form onSubmit={submitHandle}>
                <input
                    id="username"
                    onChange={handleChange}
                    type="text"
                    placeholder="username"
                    data-max={JSON.stringify([20, 'too long'])}
                    data-min={JSON.stringify([3, 'too short'])}
                    data-require={JSON.stringify([true, 'require'])}
                />
                <br />
                {errors?.username && <span>{errors.username}</span>}
                <br />
                <input
                    id="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="password"
                    data-max={JSON.stringify([20, 'too long'])}
                    data-min={JSON.stringify([3, 'too short'])}
                    data-require={JSON.stringify([true, 'require'])}
                />
                <br />
                {errors?.password && <span>{errors.password}</span>}
                <br />

                <input
                    id="confirm"
                    onChange={handleChange}
                    type="password"
                    placeholder="confirm"
                    data-max={JSON.stringify([20, 'too long'])}
                    data-min={JSON.stringify([3, 'too short'])}
                    data-require={JSON.stringify([true, 'require'])}
                    data-asame={JSON.stringify(['password', 'password not match'])}
                />
                <br />
                {errors?.confirm && <span>{errors.confirm}</span>}
                <br />
                <br />
                {errors?.email && <span>{errors.email}</span>}
                <br />
                <br />
                <button type="submit">ok</button>
            </form>
        </div>


    )
}

export default Profile