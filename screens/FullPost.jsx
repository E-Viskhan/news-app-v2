import styled from 'styled-components/native';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../components';

const PostContainer = styled.View`
  padding: 20px;
`;

const PostImage = styled.Image`
  margin-bottom: 20px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ navigation, route }) => {
    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { id, title } = route.params;

    useEffect(() => {
        navigation.setOptions({ title });

        axios.get(`https://6358160ac26aac906f3b5d9e.mockapi.io/articles/${id}`)
            .then(({ data }) => {
                setPost(data);
            })
            .catch((err) => {
                console.log("Ошибка при получении статьи");
                Alert.alert("Ошибка", "Ошибка при получении статьи");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <Loading/>;

    return (
        <PostContainer>
            <PostImage source={{ uri: post.imageUrl }}/>
            <PostText>{post.text}</PostText>
        </PostContainer>
    )
};