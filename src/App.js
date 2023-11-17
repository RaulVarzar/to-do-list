import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/List';
import TabButton from './components/TabButton';
// import { v4 as uuidv4 } from 'uuid';

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
  
  const [input, setInput] = useState(''); // used to update the input fiel
  // const [checked, setChecked] = useState(false); 
  
  const [selectedTopic, setSelectedTopic] = useState('Active');
  
  const [completedList, setCompletedList] = useState([])

  function handleChange(event) { // get data from input field while typing
    setInput(event.target.value);
  }

  function handleAdd(e) {  // add input data to list using the button
    if (e.trim().length !== 0){
      const newItem = {
        id: Math.random(), 
        content: e
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

          <Header
            // enterToList={enterToList}
            handleAdd={handleAdd}
            handleChange={handleChange}
           />
          
          
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
