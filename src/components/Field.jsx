import React from 'react';

const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children);
    return (
        <div className="mt-5">
            {label && (
                <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    {label}
                </label>
            )}
            {children}

            {!!error && (
                <span className="text-sm font-light text-red-600">
                    {error.message}
                </span>
            )}
        </div>
    );
};

const getChildId = (children) => {
    const child = React.Children.only(children);

    if ('id' in child.props) {
        return child.props.id;
    }
};

export default Field;
