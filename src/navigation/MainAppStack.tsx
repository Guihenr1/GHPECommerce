import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import Checkout from "../components/cart/Checkout";

const Stack = createStackNavigator();

export default function MainAppStack() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="AuthStack" component={AuthStack}/>
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs}/>
            <Stack.Screen name="Checkout" options={{headerShown: true}} component={Checkout}/>
        </Stack.Navigator>
    )
}