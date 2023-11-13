export default function TabButton({children, onSelect, isSelected}) {
    return (
    
        <button  className={isSelected ? 'tab tab-active justify-self-stretch' : 'tab justify-self-stretch'} onClick={onSelect}>{children}</button>
     
    );
  }