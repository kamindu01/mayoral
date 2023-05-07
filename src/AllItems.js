const AllItems = ({items}) => {
    
return ( 
        <div className="All-items"> 
        {items.map((item) => (
                <div className="single-item" key={item.id} data-title={item.title} data-price={item.price}> 
                    <div className="single-item-img">
                        <img src={`./assets/img/${item.image}`} />
                    </div>
                    <div className="single-item-content">
                        <h2>{item.title}</h2>
                        <h3>${item.price}</h3>
                        <p>{item.excerpt}</p>
                        <button>View More</button>
                    </div>
                </div>
        ))
        }</div>)
}

export default AllItems;