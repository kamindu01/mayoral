import useFetch from './useFetch'
import AllItems from './AllItems';
import SearchBar from './SearchBar';
import { useState } from 'react';
const Home = () => {

    const {pending , data : items , error} = useFetch('http://localhost:8001/items');
    const [sortedItems , setSortItems] = useState(null);

    // handle search
    const handleSearch = (searchInput)=>{
        let AllItems = Array.from(document.getElementsByClassName('single-item'));
        AllItems.forEach(item => {
            let title = item.dataset.title;
            if(title.search(searchInput)===-1){
                console.log(title);
                item.classList.add('hidden')
            }else{
                item.classList.remove('hidden')
            }
        })
    }

    // order items by price
    const orderItems = (e , order)=>{
        e.preventDefault();
        setSortItems(null)

        setTimeout(() => {
            let sortItms = items;

        sortItms.sort((a,b)=>{
            switch(order){
                case 'desc' : return b.price-a.price;
                case 'asc' : return a.price-b.price;
            }
        })

        console.log(sortItms)
        setSortItems(sortItms)
        }, 100);
        
    }

    return ( 
        <div className="content-wrapper">

            <div className="header">
                <div className="search-area">
                    <SearchBar handleSearch={handleSearch}/>
                </div>
                <div className="header-actions">
                    <ul>
                        <li><button onClick={(e)=>{orderItems(e,'asc')}}>+</button></li>
                        <li><button onClick={(e)=>{orderItems(e,'desc')}}>-</button></li>
                    </ul>   
                </div>
            </div>

            <div className="item-content-wrapper">
                {pending&& <div>Loading....</div>}
                {error&& <div>{error}</div>}
                {!sortedItems&& items&& <AllItems items={items}/>}
                {sortedItems&& <AllItems items={sortedItems}/>}
            </div>
            
        </div>
     );
}
 
export default Home;