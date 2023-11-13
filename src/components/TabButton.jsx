export default function TabButton({children, onSelect, isSelected}) {
    return (
    
        <button  className={isSelected ? 'tab tab-active' : 'tab'} onClick={onSelect}>{children}</button>
     
    );
  }