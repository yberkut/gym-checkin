import React from 'react';
import Camera from 'react-native-camera';

const QRReader = ({ onBarCodeRead, style }) => {
  return (
    <Camera
      style={[styles.container, style]}
      captureAudio={false}
      onBarCodeRead={onBarCodeRead}
      type={Camera.constants.Type.back}
    />
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
};

export { QRReader };
