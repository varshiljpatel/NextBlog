const InputF = (props) => {
    return (
        <div>
            <div className='border-[1.5px] px-4 py-3 rounded-sm border-black flex w-[100%]'>
                <div className='flex items-center justify-center w-[10%]'>
                    {props.children}
                </div>
                <input
                    className='placeholder:text-black focus:border-none focus:border-0 selection:border-0 outline-0 focus:outline-0 border-none border-0 w-[90%]'
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    placeholder={props.placeholder}
                ></input>
            </div>
        </div>
    )
}

export default InputF
