import { useForm } from 'react-hook-form';
import Field from './Field';
const DEFAULT_USER = { email: 'shakil@gmail.com', password: '12345678' };
const LoginForm = ({ onLogin }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: { ...DEFAULT_USER },
    });
    const submitHandler = (formData) => {
        const response = onLogin(formData);

        if (!response.success) {
            setError('root.invalid', {
                type: 'invalid',
                message: response.message,
            });
        } else {
            reset();

            alert(response.message);
        }
    };
    return (
        <form className="md:w-1/3 m-6" onSubmit={handleSubmit(submitHandler)}>
            <h1 className="text-center text-xl mb-5">Login Form</h1>
            <Field label="Email" error={errors.email}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    {...register('email', { required: 'email is required' })}
                    className={`bg-gray-50 border ${
                        errors.email ? 'border-red-600' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="test@test.com"
                />
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                    type="password"
                    id="password"
                    name="password"
                    {...register('password', {
                        required: 'password is required',
                        minLength: {
                            value: 8,
                            message:
                                'password must be minimum 8 character long',
                        },
                    })}
                    className={`bg-gray-50 border ${
                        errors.password ? 'border-red-600' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="********"
                />
            </Field>
            {!!errors?.root?.invalid && (
                <span className="text-sm font-light text-red-600">
                    {errors?.root?.invalid?.message}
                </span>
            )}
            <Field>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </Field>
        </form>
    );
};

export default LoginForm;
