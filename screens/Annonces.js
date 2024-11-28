import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const BASE_URL = 'http://192.168.1.13:3000'; // URL de base de votre serveur

const Annonces = ({ navigation }) => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/annonces/api`)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // Debugging fetched data
        setAnnonces(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {annonces.length > 0 ? (
        <FlatList
          data={annonces}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AnnonceDetails', { annonce: item })}
              style={styles.item}
            >
              <Image
                source={{
                  uri: item.image
                    ? `${BASE_URL}${item.image}`
                    : 'https://via.placeholder.com/100', // Fallback image
                }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.titre || 'Titre non disponible'}</Text>
                <Text style={styles.price}>{item.prix ? `${item.prix} €` : 'Prix non spécifié'}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecece8',
  },
  item: {
    flexDirection: 'row', // Organise les éléments horizontalement
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Ombre pour Android
  },
  image: {
    width: 60, // Taille de l'image
    height: 60,
    borderRadius: 8,
    marginRight: 15, // Espacement entre l'image et le texte
  },
  textContainer: {
    flex: 1, // Permet au texte de prendre l'espace restant
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
});

export default Annonces;
