import axios from "axios";
import { Alert } from "react-native";

export async function GetProduct(groupName) {
  const products = await axios
    .get(
      "http://83.229.71.121:8000/api/v1/product/getProductByNameGroup" +
        `${"?group_name=" + groupName}`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת כל המוצרים נכשל, אנא נסה שוב מאוחר יותר");
    });
  return products;
}
export async function GetAllProduct() {
  const products = await axios
    .get("http://83.229.71.121:8000/api/v1/product/getAllProducts")
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("קבלת כל המוצרים נכשל, אנא נסה שוב מאוחר יותר");
    });
  return products;
}
export async function GetProductById(id) {
  const products = await axios
    .get(
      "http://83.229.71.121:8000/api/v1/product/getProductById" +
        `${"?id_product=" + id}`
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("צ' לא קיים, נא לנסות שוב");
    });
  return products;
}

export async function ChangeStatusProduct(idProduct) {
  await axios
    .patch(
      "http://83.229.71.121:8000/api/v1/product/updateStatusProduct" +
        `${"?id_product=" + idProduct}`
    )
    .then((response) => {
      if (response.data) {
        return response.data.status[0].status_product;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("שינוי סטטוס נכשל, אנא נסה שוב מאוחר יותר.");
    });
}

export async function ChangeLocationProduct(idProduct, location) {
  await axios
    .patch(
      "http://83.229.71.121:8000/api/v1/product/updateLocationProduct" +
        `${"?_id=" + idProduct}`,
      { locationProduct: location }
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("שינוי מיקום נכשל, אנא נסה שוב מאוחר יותר.");
    });
}

export async function ChangeGroupProduct(idProduct, group_name) {
  await axios
    .patch(
      "http://83.229.71.121:8000/api/v1/product/updateGroup" +
        `${"?_id=" + idProduct}`,
      { group_name: group_name }
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("שינוי פלוגה נכשל, אנא נסה שוב מאוחר יותר.");
    });
}

export async function CreateProduct(
  productName,
  idProduct,
  group,
  locationProduct
) {
  const data = {
    product_name: productName,
    group_name: group,
    id_product: idProduct,
    locationProduct: locationProduct,
    status_product: false,
  };

  try {
    await axios.post(
      "http://83.229.71.121:8000/api/v1/product/createProduct",
      data
    );
    Alert.alert("המכשיר נוסף");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      Alert.alert(error.response.data.errors[0].msg);
    }
    if (error.response.data.error.code === 11000) {
      Alert.alert("קיים מכשיר עם צ' זהה");
    }
  }
}

export async function ProductDelete(idProduct) {
  await axios
    .delete(
      "http://83.229.71.121:8000/api/v1/product/deleteProduct" +
        `${"?id_product=" + idProduct}`
    )
    .then((response) => {
      if (response.data) {
        Alert.alert("המכשיר נמחק");

        return response.data;
      } else {
        Alert.alert("axios Failed!");
      }
    })
    .catch((error) => {
      Alert.alert("משהו השתבש, מחיקת מכשיר לא הצליחה");
    });
}
