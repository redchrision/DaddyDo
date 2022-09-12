import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../Constants/Styles';

// The image is a placeholder for Week 1. 
// The image is free for use, but the source is lost. 
// It will be replaced with a relevant image and the source will be added in a future version. 

function Week1 () {
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
                This week your baby has no size yet, because it is not yet conceived. 
                The first two weeks of a pregnancy are destined to have an ovulation happenig, 
                and conception takes place afterwards. 
            </Text>

            <Text style={styles.content}>
                Here are some suggestions about what to do this week:
            </Text>

            <Text style={styles.content}>
                1. Plan to spend as much time with your partner and make sure you are working on 
                conceiving the baby.
            </Text>

            <Text style={styles.content}>
                2. Get romantic! Organize a dinner with your partner or a holiday somewhere for the two   
                of you. 
            </Text>

            <Text style={styles.content}>
                3. If you are planning this pregnancy, make sure both your partner and yourself take 
                whatever vitamins / supplements / medicine recommended.  
            </Text>

            <Text style={styles.content}>
                4. It's never too early to discuss about baby names with your significant other. 
            </Text>

            <Text style={styles.content}>
            5. Don't consume too much alhohol, try to reduce smoking in this period if you are a smoker. 
            </Text>

         </ScrollView>
    </View>

}

export default Week1;

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