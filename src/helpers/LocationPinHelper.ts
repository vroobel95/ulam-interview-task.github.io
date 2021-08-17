import Category from "../enums/Category";
import ChooseColumnFormModel from "../models/ChooseColumnFormModel";
import LocationPinModel from "../models/LocationPinModel";

class LocationPinHelper {
  static getLocations = (
    records: string[][],
    columns: ChooseColumnFormModel
  ) => {
    const data = records.slice(1);
    let locations = [] as LocationPinModel[];

    for (let record of data) {
      if (record.length > 1) {
        locations.push({
          address: record[columns.address - 1],
          category: Category.getCategory(record[columns.category - 1]),
          city: record[columns.city - 1],
          color: Category.getColor(
            Category.getCategory(record[columns.category - 1])
          ),
          state: record[columns.state - 1],
          zipCode: record[columns.zipCode - 1],
        });
      }
    }

    return locations;
  };
}

export default LocationPinHelper;
