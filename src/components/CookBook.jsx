import RecipeCard from './RecipeCard.jsx'
import './CookBook.css'
import { useState } from 'react'

const CookBook = () => {
    const [result, setResult] = useState();


    const handleInputChange = () => {

    }

    const handleSearch = () => {
        fetch('https://dummyjson.com/recipes/search?q=Margherita')
        .then(res => res.json())
        .then((data) => {
            setResult(data);
        });
    }

    return (
        <div className='container'>
            <div className='sideNav'>
                
            </div>
            <div className='mainContent'>
                Search Recipe: <input type="text" onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
                <hr />
                <div>
                    {
                        
                    }
                    {JSON.stringify(result)}
                </div>
            </div>
        </div>
    );
}

export default CookBook;