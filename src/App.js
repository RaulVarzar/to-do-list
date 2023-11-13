import './App.css';
import { useState } from 'react';
// import List from './components/List';
import TabButton from './components/TabButton';
import { v4 as uuidv4 } from 'uuid';

// const initialList = ['Learn JavaScript', 'Start my first React project', 'Build a complete app with database']
const initialList = [
  {
    id: '1',
    name: 'This is your first item. You can delete it or add more',
  },
];

function App() {

  const [list, setList] = useState(initialList); // used to update the list
  const [name, setName] = useState(''); // used to update the input field
  const [checked, setChecked] = useState(false); 

  const [selectedTopic, setSelectedTopic] = useState('All');

  function handleSelect(test){
      setSelectedTopic(test)
  }

  function handleChange(event) { // get data from input field while typing
    setName(event.target.value);
  }

  const handleCheckbox = () => {  // change state of checkbox
    setChecked(!checked); 
  }; 

  function handleAdd() { //add input data to list using the button
    const newList = [{id: uuidv4(), name}, ...list];
    setList(newList);
    setName('')
  }

  function enterToList(e) { //add input data to list by pressing ENTER
    if (e.key === 'Enter') {
      const newList = [{id: uuidv4(), name}, ...list];
      setList(newList);
      setName('')
    }
  }

  function handleRemove(id) { // remove item from the list by id
    const newList = [...list];
    const objWithIdIndex = newList.findIndex((obj) => obj.id === id);
    newList.splice(objWithIdIndex, 1);
    setList(newList);
  }
  
  
  return (
   <>
    <div className="flex items-center justify-center h-screen body-font font-roboto-mono">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-10 rounded-lg sm:border border-info-content sm:w-11/12 xl:w-1/2 sha">

          <h2 className="my-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              To Do List
          </h2>

          <div className="relative w-full max-w-lg p-3">
              <input type="text" className="w-full p-3 rounded-md bg-base-200 focus:bg-base-300" value={name} onChange={handleChange} onKeyDown={enterToList}/>
              <button type="submit" className="absolute right-6 top-6" onClick={handleAdd}>ADD</button>
          </div>
          
          <div className="w-11/12 p-4 rounded-md menu bg-base-200">
            
              <div className="flex justify-between my-2">
                <h2 className="text-lg menu-title">Your items:</h2>
                <div className="text-xs tabs tabs-boxed">
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
    
              <ul className="mx-6 mb-4">
                {/* <List myList={list} handleRemove={handleRemove}/> */}
                {list.map((item) => 
                  <li key={item.id} className="mt-1">
                      <label className="items-center justify-start py-3 pr-2 cursor-pointer label justify-items-end group">
                          <input type="checkbox" className="checkbox" onChange={handleCheckbox}/>
                          <span className="ml-2 label-text justify-self-start">{item.name}</span> 
                          <button className="absolute hidden r-0 btn btn-sm btn-error btn-outline group-hover:inline" onClick={() => handleRemove(item.id)}>Delete</button>
                      </label>
                  </li>
                 )}
              </ul>
              <p className="place-self-center">{list.length} items</p>

          </div>
          
          
      </div>

    </div>
   </>
  );
}

export default App;
