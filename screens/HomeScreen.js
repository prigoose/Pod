import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Pod from '../base-ui/Pod'

export default function HomeScreen() {
  return (
      <ScrollView>
        <Pod
          name='Priya Ghose'
          handle='@prigoose'
          transcriptTeaser="the funniest thing just happened to me while I was walking down the street, y'all are in for a story..."
          numComments={5}
          numLikes={12}
          profilePic='https://pbs.twimg.com/profile_images/1118761606299541504/zbkiGSIR_400x400.png'
        />
        <Pod
          name='Andrew Roberts'
          handle='@__drewface'
          transcriptTeaser="Let me tell you how black holes work. Imagine you have a piece of paper and you put a heavy rock on it. But the rock would rip the paper...so instead imagine that the paper is made out of stretchy rubber..."
          numComments={7}
          numLikes={25}
          profilePic='https://pbs.twimg.com/profile_images/1144114474233630720/pKd-o6Ht_400x400.jpg'
        />
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
