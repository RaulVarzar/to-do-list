export default function ListItem ({item, deleteItem, addToCompleted, complete}){    
        return(
            <>  
                <li className="flex justify-between p-3 mt-1 transition duration-200 border-white rounded-xl basis:1/2 animate-flip-down animate-duration-500 animate-once hover:bg-base-100">
                    <p className="mr-4 text-xs grow md:text-md lg:text-lg sm:ml-2">{item}</p> 
                        {!complete ?  
                            <div className="join">                            
                                <button className="btn btn-sm btn-primary btn-outline join-item" onClick={() => addToCompleted()}>Complete</button> 
                                <button className="btn btn-sm btn-error btn-outline join-item" onClick={() => deleteItem()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div> 
                        : <p className="text-success">Completed</p>} 
                </li>
            </>
        )
    
}