import React from 'react'

const FilterByPrice = ({handleFilters})  => {

    const prices = [{

        _id: 1,
        name: "any",
        value: []
    },
    {
        _id :2,
        name: "0$ to 39$" ,
        value: [0,39]
    },
    {
        _id :3,
        name: "40$ to 79$" ,
        value: [40,79]
    },
    {
        _id :4,
        name: "80$ to 119$" ,
        value: [80,119]
    },
    {
        _id :5,
        name: "120$ to 160$" ,
        value: [120,160]
    },{
        _id :6,
        name: "more" ,
        value: [161,99999999]
    },
    ]


    const handlPrice = (e) => {

        handleFilters(prices[e.target.value]['value'])

    }
    return (
        <div>
            <h4 className="mt-5">Filter by price </h4>

            {prices.map((price, i) => (
                <div key={i} className="my-2">
                    <label htmlform={`${i}-${price.name}`}>
                        <input 
                        onChange={handlPrice}
                        className="mx-3" 
                        type="radio" 
                        name="price" 
                        id={`${i}-${price.name}`}
                        value={i}
                        
                        />
                        {price.name}
                    </label>
                </div>
            ))}


        </div>
    )
}

export default FilterByPrice