import { View, Text, Image } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png' }}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>Tugas UTS</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', color: '#555' }}>
        This is a simple product listing app that I created with React Native, Expo, and TypeScript to fulfill a mid-term assignment. 🚀
      </Text>
    </View>
  );
}
