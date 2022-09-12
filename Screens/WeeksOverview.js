import { StyleSheet, Button, ScrollView, Text } from 'react-native';

function WeeksOverview({ navigation }) {
    function buttonClick(i) {
        navigation.navigate('Week ' + i)
    }

    function weeks () {
        var out =[];
        for (var i=1; i<=42; i++) {
            ((i)=>{
                // i changes and we need to capture it for the button click call
                out.push(<Button key={i} title= {'Week' + ' ' + i} onPress={()=>buttonClick(i)}/>)
            })(i);
        }
        return out;
    }
      
    return <ScrollView style={styles.week}>
        <Text style={styles.title}> All 40+ weeks of pregnancy </Text>
        <Text style={styles.content}> One click away ideas for what to do for each week of pregnancy, tailored for your experience as father-to-be. </Text>
        {weeks()}
    </ScrollView>
}

export default WeeksOverview;

const styles = StyleSheet.create ({
    week: {
        flexDireaction: 'row',
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 23
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 23
    },

    content: {
        fontSize: 18,
        marginBottom: 4,
        color: 'black',
        textAlign: 'center',         
        padding: 5, 
    },
})

