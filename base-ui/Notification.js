import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Notification extends Component {
  render() {
    const { name, recipientHandle, replyText, numComments, numLikes, profilePic } = this.props;
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: profilePic}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>Replying to {recipientHandle}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
            <Text>{replyText}</Text>
            </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <Icon name="chatbubbles" />
                  <Text>{numComments}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Icon name="thumbs-up" />
                  <Text>{numLikes}</Text>
                </Button>
              </Body>
              <Right>
              <Icon name="share" />
              </Right>
            </CardItem>
          </Card>
    );
  }
}