import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Field from './Field';
import Input from './Input';

const RegistrationForm = ({ onRegister }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm({ mode: 'onTouched' });

    const { append, fields, remove } = useFieldArray({
        name: 'socials',
        control,
    });

    const submitHandler = (formdata) => {
        console.log(formdata);
        const response = onRegister(formdata);
        if (response.success) {
            reset();
            alert(response.message);
        }
    };
    return (
        <form className="md:w-1/3 m-6" onSubmit={handleSubmit(submitHandler)}>
            <h1 className="text-center text-xl mb-5">Registration Form</h1>
            <Field label="Full Name" error={errors.fullName}>
                <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    {...register('fullName', {
                        required: 'full name is required',
                    })}
                    className={`bg-gray-50 border ${
                        errors.fullName ? 'border-red-600' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="test@test.com"
                />
            </Field>
            <Field label="Age" error={errors.age}>
                <Controller
                    name="age"
                    defaultValue=""
                    control={control}
                    // eslint-disable-next-line no-unused-vars
                    render={({ field: { ref, ...field } }) => (
                        <Input
                            id="age"
                            type="number"
                            className={`bg-gray-50 border ${
                                errors.age
                                    ? 'border-red-600'
                                    : 'border-gray-300'
                            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            placeholder="Age must be between 18-60"
                            {...field}
                        />
                    )}
                    rules={{
                        required: 'age is required',
                        min: {
                            value: 18,
                            message: 'age must be between 18 to 60',
                        },
                        max: {
                            value: 60,
                            message: 'age must be between 18 to 60',
                        },
                    }}
                />

                {/* <input
                    id="age"
                    type="number"
                    name="age"
                    {...register('age', {
                        required: 'age is required',
                        min: {
                            value: 18,
                            message: 'age must be between 18 to 60',
                        },
                        max: {
                            value: 60,
                            message: 'age must be between 18 to 60',
                        },
                    })}
                    className={`bg-gray-50 border ${
                        errors.age ? 'border-red-600' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="Age must be between 18-60"
                /> */}
            </Field>
            <Field label="Picture" error={errors.picture}>
                <Controller
                    name="picture"
                    defaultValue=""
                    control={control}
                    // eslint-disable-next-line no-unused-vars
                    render={({ field: { ref, ...field } }) => (
                        <Input
                            id="picture"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            className={`bg-gray-50 border ${
                                errors.picture
                                    ? 'border-red-600'
                                    : 'border-gray-300'
                            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            {...field}
                        />
                    )}
                    rules={{
                        required: 'picture is required',
                    }}
                />
            </Field>
            <Field label="Email" error={errors.email}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    {...register('email', {
                        required: 'email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address',
                        },
                    })}
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

            {fields.map((field, index) => (
                <div className="flex justify-between" key={field.id}>
                    <Field
                        label="Social Name"
                        error={
                            !!errors?.socials && errors?.socials[index]?.name
                        }
                    >
                        <input
                            type="text"
                            id={`socials[${index}].name`}
                            name={`socials[${index}].name`}
                            {...register(`socials[${index}].name`, {
                                required: 'Social name is required',
                            })}
                            className={`bg-gray-50 border ${
                                !!errors?.socials &&
                                errors?.socials[index]?.name
                                    ? 'border-red-600'
                                    : 'border-gray-300'
                            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5`}
                            placeholder="Facebook"
                        />
                    </Field>
                    <Field
                        label="Social Link"
                        error={
                            !!errors?.socials && errors?.socials[index]?.link
                        }
                    >
                        <input
                            type="text"
                            id={`socials[${index}].link`}
                            name={`socials[${index}].link`}
                            {...register(`socials[${index}].link`, {
                                required: 'Social link is required',
                            })}
                            className={`bg-gray-50 border ${
                                !!errors?.socials &&
                                errors?.socials[index]?.link
                                    ? 'border-red-600'
                                    : 'border-gray-300'
                            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5`}
                            placeholder="http://www.facebook.com/someone"
                        />
                    </Field>
                    <div className="flex justify-center items-center">
                        <button
                            className={`border p-1.5 border-gray-300 hover:bg-red-100 rounded-md ${
                                !!errors?.socials && errors?.socials[index]
                                    ? 'mt-6'
                                    : 'mt-[46px]'
                            } text-sm`}
                            onClick={() => remove(index)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            ))}

            <div className="flex justify-center">
                <button
                    className="text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 my-2 text-center mx-auto"
                    onClick={() => append({ name: '', link: '' })}
                >
                    Add Social Link
                </button>
            </div>

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

export default RegistrationForm;
