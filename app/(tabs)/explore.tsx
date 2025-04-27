import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Explore() {
  const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, marginTop: 30, textAlign: 'center' }}>
        🔍 Explore Categories
      </Text>
      {categories.map((category, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#e0e0e0',
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>{category}</Text>
        </View>
      ))}
      <Button title="Go to About Page" onPress={() => router.push('/about')} />
    </View>
  );
}
