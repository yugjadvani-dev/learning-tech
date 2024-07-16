import Slider from '@react-native-community/slider';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video, { OnProgressData } from 'react-native-video';

const App: React.FC = () => {
  const [clicked, setClicked] = React.useState<boolean>(false)
  const [paused, setPaused] = React.useState<boolean>(false)
  const [progress, setProgress] = React.useState<OnProgressData | null>(null)
  const [fullScreen, setFullScreen] = React.useState<boolean>(false)
  const [muted, setMuted] = React.useState<boolean>(true)

  const ref = React.useRef<any>(null)

  const format = (seconds: number): string => {
    let mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    let secs = Math.floor(seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <>
      {!fullScreen ? <Text style={styles.title}>Video Player App</Text> : null}
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
          onPress={() => {
            setClicked(true)
          }}>
          <Video
            paused={paused}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }}
            ref={ref}
            onProgress={(x: OnProgressData) => {
              setProgress(x)
            }}
            muted={muted}
            style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
            resizeMode='contain'
          />
          {clicked && progress && (
            <TouchableOpacity style={styles.overlay}>
              <View style={styles.controlsRow}>
                <TouchableOpacity
                  onPress={() => {
                    ref.current?.seek(progress.currentTime - 10)
                  }}>
                  <Image
                    source={require('./assets/images/backward.png')}
                    style={styles.controlIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setPaused(!paused);
                  }}>
                  <Image
                    source={
                      paused
                        ? require('./assets/images/play-button.png')
                        : require('./assets/images/pause.png')
                    }
                    style={[styles.controlIcon, styles.playPauseIcon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    ref.current?.seek(progress.currentTime + 10)
                  }}>
                  <Image
                    source={require('./assets/images/forward.png')}
                    style={[styles.controlIcon, styles.forwardIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMuted(!muted);
                  }}>
                  <Image
                    source={
                      muted
                        ? require('./assets/images/mute.png')
                        : require('./assets/images/medium-volume.png')
                    }
                    style={[styles.controlIcon, styles.volumeIcon]}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.sliderRow}>

                <Text style={styles.timeText}>
                  {format(progress.currentTime)}
                </Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={progress.seekableDuration}
                  minimumTrackTintColor='#FFFFFF'
                  maximumTrackTintColor='#FFF'
                  onValueChange={(x) => {
                    ref.current?.seek(x)
                  }}
                />
                <Text style={styles.timeText}>
                  {format(progress.seekableDuration)}
                </Text>

              </View>
              <View style={styles.fullScreenButtonRow}>
                <TouchableOpacity
                  onPress={() => {
                    if (fullScreen) {
                      Orientation.lockToPortrait()
                    } else {
                      Orientation.lockToLandscape()
                    }
                    setFullScreen(!fullScreen)
                  }}>
                  <Image
                    source={fullScreen
                      ? require("./assets/images/minimize.png")
                      : require("./assets/images/full-size.png")
                    }
                    style={styles.fullScreenIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
    color: '#000000',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsRow: {
    flexDirection: 'row',
  },
  controlIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  playPauseIcon: {
    marginLeft: 50,
  },
  forwardIcon: {
    marginLeft: 50,
  },
  volumeIcon: {
    marginLeft: 50,
  },
  sliderRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
  },
  timeText: {
    color: 'white',
  },
  fullScreenButtonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  fullScreenIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
})