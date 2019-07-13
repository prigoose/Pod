import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Notification from '../base-ui/Notification';

export default function NotificationsScreen() {
  return (
  <Notification
    name='Andrew Roberts'
    recipientHandle='@prigoose'
    replyText="wow great podcast"
    numComments={0}
    numLikes={1}
    profilePic='https://pbs.twimg.com/profile_images/1144114474233630720/pKd-o6Ht_400x400.jpg'
  />
  )
}

NotificationsScreen.navigationOptions = {
  title: 'Notifications',
};
