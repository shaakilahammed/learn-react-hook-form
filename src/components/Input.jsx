const Input = ({ onChange, type = 'text', ...rest }) => {
    const handleChange = (e) => {
        let value;
        if (e.target.type === 'file') {
            value = event?.target?.value;
        } else {
            value =
                e.target.type === 'number'
                    ? e.target.valueAsNumber || 0
                    : e.target.value;
        }
        onChange(value);
    };
    return <input type={type} onChange={handleChange} {...rest} />;
};

export default Input;
