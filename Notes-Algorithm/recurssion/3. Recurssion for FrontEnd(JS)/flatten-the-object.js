/*

 */

const amazon = {
  department: {
    cloths: {
      brand: "levis",
      name: "comfy pant",
    },
    electronics: {
      mobile: {
        brand: "Samsung",
        model: "s20 plus",
      },
    },
  },
  user: {
    name: "abhi",
    email: "abhi@gmail.com",
  },
};

let outputObj = {};

const flattenTheObject = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenTheObject(obj[key], `${parent}_${key}`);
    } else {
      outputObj[`${parent}_${key}`] = obj[key];
    }
  }

  return outputObj;
};

const output = flattenTheObject(amazon, "amazon");
console.log(output);
/*
{
  amazon_department_cloths_brand: 'levis',
  amazon_department_cloths_name: 'comfy pant',
  amazon_department_electronics_mobile_brand: 'Samsung',
  amazon_department_electronics_mobile_model: 's20 plus',
  amazon_user_name: 'abhi',
  amazon_user_email: 'abhi@gmail.com'
}
*/
