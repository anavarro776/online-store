

const catalog = [
    {
        "title":"Cleats",
        "image":"cleats.jpg",
        "price":70.00,
        "category":"footwear",
        "_id":"1"
    },
    {
        "title":"Gloves",
        "image":"gloves.jpg",
        "price":25.00,
        "category":"dairy",
        "_id":"2"
    },
    {
        "title":"Coffee",
        "image":"coffee.png",
        "price":2.33,
        "category":"dairy",
        "_id":"3"
    },
    {
        "title":"Hoodie",
        "image":"soccerhoodie.jpg",
        "price":40.33,
        "category":"clothes",
        "_id":"4"
    },
    {
        "title":"Milk",
        "image":"milk.png",
        "price":2.33,
        "category":"dairy",
        "_id":"5"
    },
    {
        "title":"Oranges",
        "image":"oranges.png",
        "price":2.33,
        "category":"fruits",
        "_id":"6"
    },
    {
        "title":"Steak",
        "image":"Steak.jpeg",
        "price":2.33,
        "category":"dairy",
        "_id":"7"
    },
    {
        "title":"Tea",
        "image":"tea.jpg",
        "price":2.33,
        "category":"dairy",
        "_id":"8"
    },
    {
        "title":"Teapot",
        "image":"teapot.jpg",
        "price":2.33,
        "category":"non-dairy",
        "_id":"9"
    },
    {
        "title":"Vitamins",
        "image":"vitamins.png",
        "price":2.33,
        "category":"non-dairy",
        "_id":"10"
    }
]

class DataService{
    getProducts(){
        return catalog;
    }

}

export default DataService;