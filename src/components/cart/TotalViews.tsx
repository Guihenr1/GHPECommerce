import AppText from "../texts/AppText";
import {StyleSheet, View} from "react-native";
import {s, vs} from "react-native-size-matters";
import {Colors} from "../../styles/colors";
import {FC} from "react";
import {shipping, taxes} from "../../constants/constants";

interface TotalViewsProps {
    itemsTotal: number;
    orderTotal: number;
}

const TotalViews: FC<TotalViewsProps> = ({itemsTotal, orderTotal}) => {
    return (
        <View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Items Total</AppText>
                <AppText style={styles.textPrice}>€ {itemsTotal}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Taxes</AppText>
                <AppText style={styles.textPrice}>€ {taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping</AppText>
                <AppText style={styles.textPrice}>€ {shipping}</AppText>
            </View>

            <View style={styles.separator}/>

            <View style={styles.row}>
                <AppText style={styles.textTitle}>Total Price</AppText>
                <AppText style={styles.textPrice}>€ {orderTotal}</AppText>
            </View>
        </View>
    )
}

export default TotalViews

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vs(10)
    },
    textTitle: {
        fontSize: s(16),
        flex: 1,
    },
    textPrice: {
        fontSize: s(16),
        color: Colors.primary,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.blueGray,
        marginVertical: vs(5)
    }
})