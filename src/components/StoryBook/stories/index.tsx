import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

const CenteredView = ({ children }: any) => (<View style={style.main}>{children}</View>);

storiesOf('CenteredView', module).add('default view', () => (<CenteredView><Text>Characha</Text></CenteredView>));