import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../Constants/Styles';

function Week24 () {
    return <View style={styles.container}>
        <ScrollView>  
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("./Images/question.webp")}
                /> 
            </View>

            <Text style={styles.title}>Ideas for Week 1</Text>

            <Text style={styles.content}>
                This week your baby is smaller than the size of a piece of cell. 
            </Text>

            <Text style={styles.content}>
                Here are some suggestions about what to do this week:
            </Text>

            <Text style={styles.content}>
                1. industry. Lorem Ipsum has been the industry's standard dummy text ever s
                ince the 1500s, when an unknown printer took a galley of type and scrambled 

            </Text>

            <Text style={styles.content}>
                1. industry. Lorem Ipsum has been the industry's standard dummy text ever s
                ince the 1500s, when an unknown printer took a galley of type and scrambled 

            </Text>

            <Text style={styles.content}>
                1. industry. Lorem Ipsum has been the industry's standard dummy text ever s
                ince the 1500s, when an unknown printer took a galley of type and scrambled 

            </Text>

            <Text style={styles.content}>
                1. industry. Lorem Ipsum has been the industry's standard dummy text ever s
                ince the 1500s, when an unknown printer took a galley of type and scrambled 

            </Text>
         </ScrollView>
    </View>

}

export default Week24;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20, 
        backgroundColor: GlobalStyles.colors.primary800,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 23
    },

    content: {
        fontSize: 18,
        marginBottom: 4,
        color: 'white',
        textAlign: 'justify',         
        padding: 5, 
    },

    image: {
        resizeMode: "cover",
        height: 150,
        width: 250,
    }
})