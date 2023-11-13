import { useState } from 'react';

export default function List ({myList, handleRemove}){
    
    // const [checked, setChecked] = useState(false); 
    
    // const handleChange = () => { 
    //     setChecked(!checked); 
    // }; 

    // const [list, setList] = useState(myList);

    return(
        <>
        {/* {myList.map((item) => 
            <li key={item.id} className="mt-1">
                <label className="items-center justify-start py-3 pr-2 cursor-pointer label justify-items-end group">
                    <input type="checkbox" className="checkbox" onChange={handleChange}/>
                    <span className="ml-2 label-text justify-self-start">{item.name}</span> 
                    <button className="absolute hidden r-0 btn btn-sm btn-error btn-outline group-hover:inline" onClick={() => handleRemove(item.id)}>Delete</button>
                </label>
            </li>
        )} */}
        </>
    )
}