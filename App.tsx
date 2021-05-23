import React from 'react';
import Main from './src/main';
import ErrorBoundary from './src/components/ErrorBoundary';
import StoryBook from './src/components/StoryBook';
import Config from 'react-native-config'

const App = () => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StoryBook : App