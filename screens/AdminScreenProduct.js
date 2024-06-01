import AddProduct from "../components/ui/Products/AddProduct";
import GetProduct from "../components/ui/Products/GetProduct";
import GetAllProduct from "../components/ui/Products/GetAllProduct";
import DeleteProduct from "../components/ui/Products/DeleteProduct";
import MoveGroup from "../components/ui/Products/ChangeGroup";
import OptionProduct from "../components/AdminOptions/OptionsProduct";
import ScanBarcode from "../components/ui/Products/ScanBarcode";

import { createStackNavigator } from "@react-navigation/stack";
const InnerStack = createStackNavigator();

function AdminScreenProduct() {
  return (
    <InnerStack.Navigator
      initialRouteName="אופציות מכשירים"
      screenOptions={{
        headerShown: false,
      }}
    >
      <InnerStack.Screen name="אופציות מכשירים" component={OptionProduct} />
      <InnerStack.Screen name="הוסף מכשיר" component={AddProduct} />
      <InnerStack.Screen name="חיפוש מכשיר" component={GetProduct} />
      <InnerStack.Screen name="כל המכשירים" component={GetAllProduct} />
      <InnerStack.Screen name="העברת מכשיר" component={MoveGroup} />
      <InnerStack.Screen name="מחיקת מכשיר" component={DeleteProduct} />
      <InnerStack.Screen name="סריקת מכשיר" component={ScanBarcode} />
    </InnerStack.Navigator>
  );
}

export default AdminScreenProduct;
