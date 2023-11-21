import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
    
    // const [name, setName] = useState('Alin');
    // const [count, setCount] = useState(0);

   /*  const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    } 

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e);
    } */


    return(
        <>
        
           {/*  <p>Hello {name}</p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={(e) => {handleClick3(e)}}>Click it</button> */}
             {items.length ? (
                <ItemList 
                   items={items}
                   handleCheck={handleCheck}
                   handleDelete={handleDelete} 
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content