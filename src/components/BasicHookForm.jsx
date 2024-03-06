import { useForm } from 'react-hook-form';

const BasicHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: 'test@test.com',
        },
    });

    const submitHandler = (data) => {
        console.log(data);
    };
    watch('email');

    console.log('object');

    return (
        <form
            className="max-w-sm mx-auto"
            onSubmit={handleSubmit(submitHandler)}
        >
            <h1 className="text-center text-xl mb-5">Registration Form</h1>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'Email is required',
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                />
                {errors.email && (
                    <span className="font-thin text-red-600">
                        {errors.email.message}
                    </span>
                )}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    {...register('password', {
                        required: 'password is required',
                        minLength: {
                            value: 8,
                            message: 'password must be 8 digit',
                        },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {errors.password && (
                    <span className="font-light text-red-600">
                        {errors.password.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                Submit
            </button>
        </form>
    );
};

export default BasicHookForm;
