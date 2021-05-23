import React, { memo, FC } from 'react';
import styles from './styles';
import { StatusBar, ActivityIndicator, View } from 'react-native';
import { Props } from './interface';
import Welcome from '../Welcome';

const Main: FC<Props> = memo(() => {
  const loader = false
  const auth = false;
  return (
    <>
      <StatusBar barStyle={'default'} translucent={true} backgroundColor={'transparent'} />
      <View>
        {auth ? <></> : <Welcome />}
        {
          loader ? (
            <View style={styles.loader}>
              <ActivityIndicator size='large' color={'gray'} />
            </View>
          ) : null
        }
      </View>
    </>
  );
});

export default Main;
