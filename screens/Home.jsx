import { Alert, FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Loading, Post } from '../components';
import axios from 'axios';

export const Home = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchArticles = () => {
        setIsLoading(true);
        axios.get('https://6358160ac26aac906f3b5d9e.mockapi.io/articles')
            .then(({ data }) => {
                setItems(data);
            })
            .catch((err) => {
                console.log("Ошибка при получении статей");
                Alert.alert("Ошибка", "Ошибка при получении статей");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const renderItem = ({ item }) => {
        const handleTouch = () => {
            const { id, title } = item;

            navigation.navigate("FullPost", { id, title })
        };

        return (
            <TouchableOpacity onPress={handleTouch}>
                <Post {...item}/>
            </TouchableOpacity>
        )
    };

    useEffect(fetchArticles, []);

    if (isLoading) return <Loading/>;

    return (
        <View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchArticles}/>}
            />
        </View>
    );
};