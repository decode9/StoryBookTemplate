import React, { memo, FC } from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Props } from './interface';

const Welcome: FC<Props> = memo(() => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    </>
  );
});

export default Welcome;

