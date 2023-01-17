import {Text, View, Pressable} from 'react-native';
export const Task = (props) => {
    const styles = props.styles;
    return (
        <View style = {styles.itensContainer}>
            <Text style =  {props.status === 'ToWatch' ? styles.itens : styles.itensWatched }> {props.name}</Text>
            <View style = {styles.buttons}>
                <Pressable style = {styles.buttonToWatch} onPress={ () => {props.watch(props.id)}}>
                <Text style = {props.status === 'ToWatch' ? styles.buttonToWatch : styles.buttonWatched }> {props.status === 'ToWatch' ? 'To Watch' : 'Watched'} </Text>
                </Pressable>
                <Pressable style = {styles.buttonDelete} onPress={ () => {props.delete(props.id)}}>
                <Text style = {styles.buttonDeleteInside}> X </Text>
                </Pressable>
            </View>
        </View>) ;
}