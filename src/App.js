import './App.css';
import { useState } from 'react';
import List from './components/List';
import TabButton from './components/TabButton';
import { v4 as uuidv4 } from 'uuid';

// const initialList = ['Learn JavaScript', 'Start my first React project', 'Build a complete app with database']
const initialList = [];

function App() {

  const [list, setList] = useState(initialList); // used to update the list
  const [name, setName] = useState(''); // used to update the input field
  // const [checked, setChecked] = useState(false); 
  const [nameIsEmpty, setNameIsEmpty] = useState()
  const [selectedTopic, setSelectedTopic] = useState('All');

  function handleSelect(test){
      setSelectedTopic(test)
  }

  function handleChange(event) { // get data from input field while typing
    setName(event.target.value);
    setNameIsEmpty(false)
  }

  function handleAdd() { //add input data to list using the button
    if (name.trim().length !== 0){
      const newList = [{id: uuidv4(), name}, ...list];
      setList(newList);
      setName('')
    }
  }

  function enterToList(e) { //add input data to list by pressing ENTER
    if (e.key === 'Enter') { 
      if (name.trim().length !== 0)  {
      const newList = [{id: uuidv4(), name}, ...list];
      setList(newList);
      setName('')
      }
      else {
        setNameIsEmpty(true)
      }
    }
  }

  function handleRemove(id) { // remove item from the list by id
    const newList = [...list];
    const objWithIdIndex = newList.findIndex((obj) => obj.id === id);
    newList.splice(objWithIdIndex, 1);
    setList(newList);
    setNameIsEmpty(false)
  }
  
  
  return (
   <>
    <div className="flex items-center justify-center h-screen body-font font-roboto-mono">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-10 rounded-lg sm:w-11/12 xl:w-3/4 sha">

          <h2 className="my-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out">
              To Do List
          </h2>

          <div className="relative w-full max-w-lg p-3 animate-fade-down animate-once animate-duration-500 animate-delay-300 animate-easeout">
              <input 
                type="text"
                autoFocus 
                className={"outline-none rounded-md w-full p-3 text-center placeholder-opacity-0 transition duration-300 ease-in-outrounded-md bg-base-200 hover:bg-base-300 hover:cursor-text" 
                          + (nameIsEmpty ? "  bg-warning" : "")} 
                placeholder={nameIsEmpty? "Please type something" : "Enter a new item"} 
                value={name} 
                onChange={handleChange} 
                onKeyDown={enterToList}/>
              <button 
                type="submit" 
                className="absolute font-bold right-7 top-6" 
                onClick={handleAdd}>
                  {name ? <p>ADD</p> : ""}
              </button>
          </div>
          
          {list.length > 0 ? 
            <div className="w-11/12 p-4 rounded-md menu bg-base-200 animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-out">
            
              <div className="flex justify-between my-2">
                <h2 className="text-lg menu-title">Your items:</h2>
                <div className="text-xs tabs tabs-boxed bg-none">
                  <TabButton 
                    isSelected={selectedTopic === 'All'} 
                    onSelect={() => handleSelect('All')}>
                      All
                  </TabButton>
                  <TabButton 
                    isSelected={selectedTopic === 'Active'} 
                    onSelect={() => handleSelect('Active')}>
                      Active
                  </TabButton>
                  <TabButton 
                    isSelected={selectedTopic === 'Completed'} 
                    onSelect={() => handleSelect('Completed')}>
                      Completed
                  </TabButton>
                </div>
              </div>
              
              
              <ul className="mx-6 mb-4 animate-fade-up animate-once animate-duration-300 animate-delay-200 ">
                <List myList={list} onSelect={handleRemove}/>
                
              </ul>
              <p className="place-self-center">{list.length} items</p>

            </div>
          :" "
          }
          
      </div>

    </div>
   </>
  );
}

export default App;
