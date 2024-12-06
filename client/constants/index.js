export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png')
    }
    ,
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/pizzaIcon.png')
    }
    ,
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 6,
        name: 'Salads',
        image: require('../assets/images/pizzaIcon.png')
    }
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender chicken wings',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizzaIcon.png'),
            description: 'Hot and spicy pizza',
            lng: 38.2145602,
            lat: -85.5323232,
            address: '42, Long Island',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheesy garlic pizza',
                    price: 500,
                    image: require('../assets/images/pizzaIcon.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'farmhouse pizza',
                    price: 500,
                    image: require('../assets/images/pizzaIcon.png')
                },
            ]
        }
    ]
}