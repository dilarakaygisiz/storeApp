import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        
        

        
        
    },
    inner_container: {
        backgroundColor: '#C7C8CC',
        borderRadius: 10,
        padding: 8,
        width: Dimensions.get('window').width / 2.10,
        height: Dimensions.get('window').height / (5/2),
        margin: 2

        
        

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    image: {
        height: Dimensions.get('window').height / 4,
        
        

    },
    description: {
        margin: 8
    },
    price: {
        fontSize: 16,
        marginTop: 5
    },
    inStock: {
        color: 'red',
        marginTop: 5
    }
})