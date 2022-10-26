import styled from 'styled-components/native';
import { truncate } from '../helpers';

const PostView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  margin-right: 12px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
`;

const PostDate = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

export const Post = ({ title, createdAt, imageUrl }) => (
    <PostView>
        <PostImage source={{ uri: imageUrl }}/>
        <PostDetails>
            <PostTitle>{truncate(title, 50) + "..."}</PostTitle>
            {createdAt && <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>}
        </PostDetails>
    </PostView>
);