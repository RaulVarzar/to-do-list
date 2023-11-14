import './App.css';
import { useState } from 'react';
import ListItem from './components/List';
import TabButton from './components/TabButton';
// import { v4 as uuidv4 } from 'uuid';

// const initialList = ['Learn JavaScript', 'Start my first React project', 'Build a complete app with database']
const initialList = [
  { 
    id: Math.random(), 
    content: 'This is a test item',
   
  },
  { 
    id: Math.random(), 
    content: 'You can add more using the input field',
  }
];

function App() {
  const [list, setList] = useState(initialList); // used to update the list
  const [input, setInput] = useState(''); // used to update the input field
  // const [checked, setChecked] = useState(false); 
  const [nameIsEmpty, setNameIsEmpty] = useState()
  const [selectedTopic, setSelectedTopic] = useState('Active');
  
  const [completedList, setCompletedList] = useState([])

  function handleChange(event) { // get data from input field while typing
    setInput(event.target.value);
    setNameIsEmpty(false)
  }

  function handleAdd(e) {  // add input data to list using the button
    if (input.trim().length !== 0){
      const newItem = {
        id: Math.random(), 
        content: input
      }
      setList([newItem, ...list]);
      setInput('')
    }
  }

  function enterToList(e) { //add input data to list by pressing ENTER
    if (e.key === 'Enter') { 
      if (input.trim().length !== 0)  {
        const newItem = {
          id: Math.random(), 
          content: input,
        }
        setList([newItem, ...list]);
        setInput('')
      }
      else {
        setNameIsEmpty(true)
      }
    }
  }

  function handleRemove(id) { // remove item from the list by id
    const newList = list.filter ( (item) => item.id != id)
    setList(newList)
  }

  function moveToCompleted(item) {
    setCompletedList([...completedList, item])
    handleRemove(item.id)
  }

  return (
   <>
    <div className="flex items-center justify-center mt-10 body-font font-roboto-mono">
      <div className="flex flex-col items-center justify-center w-full md:p-10 sm:w-11/12 xl:w-3/4">

          <h2 className="my-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-out">
              To Do List
          </h2>

          <div className="relative w-full max-w-lg p-3 animate-fade-down animate-once animate-duration-500 animate-delay-300 animate-easeout">
              <input 
                type="text"
                autoFocus 
                className={"outline-none p-3 text-center duration-300 w-full ease-in-out rounded-lg bg-base-200 hover:bg-base-300 hover:cursor-text" 
                          + (nameIsEmpty ? "  bg-warning" : "")} 
                placeholder={nameIsEmpty? "Please type something" : "Enter a new item"} 
                value={input} 
                onChange={handleChange} 
                onKeyDown={enterToList}
              />
              <button 
                type="submit" 
                className="absolute font-bold right-7 top-6" 
                onClick={() => handleAdd(input)}>
                  {input ? <p className='text-info animate-fade-right animate-once animate-duration-200 animate-delay-0 animate-ease-out'>ADD</p> : ""}
              </button>
          </div>
          
          
          <div className="w-full p-1 py-3 text-center sm:rounded-lg md:p-4 bg-base-200 animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-out">
            
              <div className="w-full px-4 my-2 text-center">

                <h2 className="text-md md:text-xl justify-self-start">Current items</h2>

                <div className="p-0 mx-auto text-xs sm:justify-center tabs tabs-bordered ">
                  <TabButton 
                    isSelected={selectedTopic === 'Active'} 
                    onSelect={() => setSelectedTopic('Active')}>
                      Active
                  </TabButton>
                  <TabButton 
                    isSelected={selectedTopic === 'Completed'} 
                    onSelect={() => setSelectedTopic('Completed')}>
                      Completed
                  </TabButton>
                </div>

              </div>
              
              
              <ul className="my-6 text-left md:mx-6 animate-fade-up animate-once animate-duration-300 animate-delay-200">


              {selectedTopic === "Active" ? 
                  <div>{list.map((item) => 
                    <ListItem 
                      key={item.id} 
                      item={item.content} 
                      deleteItem={() => handleRemove(item.id)} 
                      addToCompleted={() => moveToCompleted(item)} 
                      complete = {false}
                    />
                    )}
                  </div> 
                  :
                  <div>{completedList.map((item) => 
                    <ListItem 
                      key={item.id} 
                      item={item.content} 
                      addToCompleted={() => moveToCompleted(item)} 
                      complete = {true}
                    />)}
                  </div> 
                }
              </ul>

              <p className="mx-auto">
              
              {selectedTopic + " "}
                items:
                {selectedTopic === "Active" ? `${list.length} ` : `${completedList.length} `}
              </p>

            </div>
          
      </div>

    </div>
   </>
  );
}

export default App;
