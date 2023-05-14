import { Button, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/global.js';

const ReviewDetails = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={globalStyles.container}>
            {/* from the navigation props, we can get what we want from the object*/}
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.paragraph}>{item.body}</Text>
            <Text style={globalStyles.paragraph}>{item.rating}</Text>
        </View>
    );
};

export default ReviewDetails;
