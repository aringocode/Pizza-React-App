import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useSelector} from "react-redux";

function Home() {
    const { items } = useSelector(({ pizzas, filters }) => {
        return {
            items: pizzas.items,
        }
    });


    return (
        <div className="container">
            <div className="content__top">
                <Categories items={["Meat", "Vegetarian", "Grilled", "Spicy", "Covered"]}/>
                <SortPopup items={[
                    { name: "popularity", type: "popular"},
                    { name: "price", type: "price"},
                    {name: "alphabetically", type: "alphabetically"}
                ]}
                />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    items && items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
        </div>
    );
}

export default Home;