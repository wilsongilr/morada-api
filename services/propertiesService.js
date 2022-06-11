const responseError = require("../utils/responseError");
const responseOk = require("../utils/responseOk");
const PropertyModel = require("./../models/propertyModel");


const addProperty = async (propertyData) => {
  try {
      const property = new PropertyModel(propertyData);
      await property.save();
      return responseOk( { property });
  }
  catch (error) {
      responseError(500, 'Server Error');
  }
};




const getProperties = async (filter) => {
  try {
    const query = buildQueryFilter(filter);
    const properties = await PropertyModel.find(query);
    return responseOk( { properties });
  } catch (error) {
    console.log(error);
    return responseError(500, 'Server Error');
  }
};


//funcion para mapear 
const buildQueryFilter = (filter) => {
  const query = {};
  if(filter.city) query.city = Number(filter.city);
  if(filter.zone) query.zone = Number(filter.zone);
  if(filter.propertyType) query.propertyType = Number(filter.propertyType);
  if(filter.businessType) query.businessType = Number(filter.businessType);
  if(filter.status) query.status = Number(filter.status);
  if(filter.minPrice && filter.maxPrice) {
      query.value =  {
        $gte: Number(filter.minPrice),
        $lte: Number(filter.maxPrice) 
      }
  } 
  return query;
};
const getProperty = async (id) => {
  try {
   
   const property = await PropertyModel.findById(id);
   if (property)
   {
    return responseOk( { property });
   }
   return responseError(404, 'Property Not Found');

  } catch (error) {
    return responseError(500, 'Server Error');
  }
};

module.exports = {
  addProperty,
  getProperties,
  getProperty,
};
