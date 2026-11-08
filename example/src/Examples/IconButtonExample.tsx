import { StyleSheet, View } from 'react-native';

import { IconButton, List, Palette } from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

const ButtonExample = () => {
  return (
    <ScreenWrapper contentContainerStyle={styles.v3Container}>
      <List.Section title="Default">
        <View style={styles.row}>
          <IconButton
            aria-label="Open camera"
            icon="camera"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            selected
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Camera is loading"
            icon="camera"
            size={24}
            onPress={() => {}}
            loading
          />
        </View>
      </List.Section>

      <List.Section title="Contained">
        <View style={styles.row}>
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="contained"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="contained"
            selected
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="contained"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Camera is loading"
            icon=""
            mode="contained"
            selected
            loading
            size={24}
            onPress={() => {}}
          />
        </View>
      </List.Section>

      <List.Section title="Contained-tonal">
        <View style={styles.row}>
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="contained-tonal"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            selected
            mode="contained-tonal"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="contained-tonal"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Camera is loading"
            icon=""
            mode="contained-tonal"
            disabled
            size={24}
            onPress={() => {}}
            loading
          />
        </View>
      </List.Section>

      <List.Section title="Outlined">
        <View style={styles.row}>
          <IconButton
            aria-label="Open camera"
            icon="camera-outline"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            selected
            icon="camera"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Camera is loading"
            icon="camera"
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
            loading
          />
        </View>
      </List.Section>

      <List.Section title="Custom">
        <View style={styles.row}>
          <IconButton
            aria-label="Lock in place"
            icon="lock"
            size={24}
            iconColor={Palette.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Show password"
            icon="eye"
            mode="contained"
            style={styles.square}
            size={24}
            iconColor={Palette.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Show password"
            icon="eye"
            mode="contained"
            style={styles.slightlyRounded}
            size={24}
            contentStyle={styles.contentPadding}
            iconColor={Palette.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            aria-label="I like it"
            icon="heart"
            mode="contained-tonal"
            style={styles.differentBorderRadius}
            size={24}
            iconColor={Palette.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            aria-label="I like it"
            icon="heart"
            mode="outlined"
            style={styles.differentBorderRadius}
            size={24}
            iconColor={Palette.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Open camera"
            icon="camera"
            size={36}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Lock in place"
            icon="lock"
            size={36}
            onPress={() => {}}
            containerColor={Palette.tertiary60}
          />
          <IconButton
            aria-label="I like it"
            icon="heart"
            size={60}
            onPress={() => {}}
          />
          <IconButton
            aria-label="Camera is loading"
            icon=""
            size={60}
            onPress={() => {}}
            loading
          />
        </View>
      </List.Section>
    </ScreenWrapper>
  );
};

ButtonExample.title = 'Icon Button';

const styles = StyleSheet.create({
  v3Container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  square: {
    borderRadius: 0,
  },
  slightlyRounded: {
    borderRadius: 4,
    width: 48,
    height: 48,
  },
  contentPadding: {
    padding: 8,
  },
  differentBorderRadius: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 6,
  },
});

export default ButtonExample;
