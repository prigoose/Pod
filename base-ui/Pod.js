import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Pod extends Component {
  render() {
    const { name, handle, transcriptTeaser, numComments, numLikes, profilePic } = this.props;
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: profilePic}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{handle}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
            <Text style={{fontWeight: "bold"}}>Transcript: </Text>
            </Body>
            </CardItem>
            <CardItem>
              <Body>
            <Text>{transcriptTeaser}</Text>
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