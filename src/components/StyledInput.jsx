const StyledInput = (props) => {
    const { errorMessage, onChange, ...inputProps } = props;

    return (
        <div>
            <input
                {...inputProps}
                onChange={onChange}
                className='poppins-regular w-full mb-1 border border-gray-300 p-2 rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
            />
            <span className='poppins-light text-xs hidden text-red-400 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>{errorMessage}</span>
        </div>
    )
}

export default StyledInput;
