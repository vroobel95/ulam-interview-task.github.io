enum Category {
    Home = 1,
    Work = 2,
    Restaurant = 3,
    Shop = 4,
    Museum = 5,
    SportObject = 6,
    Object = 7
}

namespace Category {
    export const getCategory = (categoryName: string): Category => {
        switch (categoryName.toLowerCase()) {
            case 'home':
                return Category.Home
            case 'work':
                return Category.Work
            case 'restaurant':
                return Category.Restaurant
            case 'shop':
                return Category.Shop
            case 'museum':
                return Category.Museum
            case 'sport object':
                return Category.SportObject
            default:
                return Category.Object
        }
    }

    export const getColor = (category: Category): string => {
        switch (category) {
            case Category.Home:
                return '#d46e87'
            case Category.Work:
                return "#99e6ff"
            case Category.Restaurant:
                return "#ff8055"
            case Category.Shop:
                return "#cc66cc"
            case Category.Museum:
                return "#b87333"
            case Category.SportObject:
                return "#00ff7f"
            default:
                return "#bc8f8f"
        }
    }
}

export default Category;