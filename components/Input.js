const Input = ({
    type = 'text',
    name = '',
    className = '',
    placeholder = '',
    ...props
}) => {
    return <input
        type={type}
        name={name}
        className={`p-2 rounded shadow-inner-2 w-full border focus:border-purple-500 outline-none hover:border-purple-500 transition ${className}`}
        placeholder={placeholder}
        {...props}
    />
}

export default Input