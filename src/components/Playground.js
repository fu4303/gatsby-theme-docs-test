import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

function Playground({ children }) {
  return (
    <LiveProvider code={children}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}

export default Playground;
