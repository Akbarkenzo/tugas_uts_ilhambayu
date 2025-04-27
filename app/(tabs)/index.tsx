import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20,marginTop: 30, textAlign: 'center' }}>🛒 Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({
              pathname: '/detail',
              params: {
                title: item.title,
                description: item.description,
                image: item.image,
              }
            })}
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              marginBottom: 15,
              borderRadius: 10,
              elevation: 3,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 2 },
              padding: 10,
              alignItems: 'center'
            }}
          >
            <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 8, marginRight: 10 }} />
            <Text style={{ flex: 1, fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}