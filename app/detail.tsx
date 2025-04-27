import { useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, Image } from 'react-native';

export default function Detail() {
  const { title, description, image } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      <Image
        source={{ uri: image as string }}
        style={{ width: '100%', height: 300, marginBottom: 20, borderRadius: 12 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      <Text style={{ fontSize: 18, color: '#555' }}>{description}</Text>
    </ScrollView>
  );
}
