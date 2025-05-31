import { Text, Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  backgroundColor: string;
  pressedColor: string;
  textColor: string;
  textPressedColor: string;
  onPress: () => void;
};

export default function Button_TelaInicial({
  title,
  backgroundColor,
  pressedColor,
  textColor,
  textPressedColor,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? pressedColor : backgroundColor,
        },
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.text_button, { color: pressed ? textPressedColor : textColor }]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 160,
    height: 60,
  },
  text_button: {
    fontSize: 18,
    fontWeight: '700',
  },
});
