import { useState } from "react";

export default function Header({handleAdd,  handleChange}) {

    const [input, setInput] = useState(''); // used to update the input field

    function handleChange(event) { // get data from input field while typing
        setInput(event.target.value);
      }

    return(
        <>
            <h2 className="my-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out">
              To Do List
            </h2>

            <div className="relative w-full max-w-lg p-3 animate-fade-down animate-once animate-duration-500 animate-delay-300 animate-easeout">
                <input 
                    type="text"
                    autoFocus 
                    className={"outline-none p-3 text-center duration-300 w-full ease-in-out rounded-lg bg-base-200 hover:bg-base-300 hover:cursor-text"} 
                    value={input} 
                    onChange={handleChange} 
                    // onKeyDown={enterToList}
                />
                <button 
                    type="submit" 
                    className="absolute font-bold right-7 top-6" 
                    onClick={() => (handleAdd(input), setInput(""))}>
                    {input ? <p className='text-info animate-fade-right animate-once animate-duration-200 animate-delay-0 animate-ease-out'>ADD</p> : ""}
                </button>
            </div>
        </>
    )
}