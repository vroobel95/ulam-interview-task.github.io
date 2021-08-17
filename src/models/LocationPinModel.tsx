import Category from "../enums/Category";

interface LocationPinModel {
    longitude?: number;
    latitude?: number;
    color: string;
    address: string;
    city: string;
    zipCode: string;
    state: string;
    category: Category;
}

export default LocationPinModel;