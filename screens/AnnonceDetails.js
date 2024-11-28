import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BASE_URL = 'http://192.168.1.13:3000'; // Adjust this if needed

const AnnonceDetails = ({ route }) => {
  const { annonce } = route.params || {};

  if (!annonce) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erreur : Les détails de l'annonce sont introuvables.</Text>
      </View>
    );
  }

  const imageUrl = annonce.image
    ? `${BASE_URL}${annonce.image}`
    : 'https://via.placeholder.com/200';

  console.log('Full Image URL:', imageUrl); // Debugging the full image URL

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
        onError={(error) => console.log('Image load error:', error.nativeEvent)} // Log errors if image fails to load
      />
      <Text style={styles.title}>{annonce.titre || 'Titre non disponible'}</Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Prix:</Text> {annonce.prix ? `${annonce.prix} €` : 'Non spécifié'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Description:</Text> {annonce.description || 'Non disponible'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Ville:</Text> {annonce.localisation?.ville || 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Code Postal:</Text> {annonce.localisation?.codePostal || 'Non spécifié'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Surface:</Text> {annonce.surface ? `${annonce.surface} m²` : 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Chambre:</Text> {annonce.caracteristiques?.chambre || 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Salle De Bain:</Text> {annonce.caracteristiques?.salleDeBain || 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Balcon:</Text> {annonce.caracteristiques?.balcon || 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Jardin:</Text> {annonce.caracteristiques?.jardin || 'Non spécifiée'}
      </Text>
      <Text style={styles.label}>
        <Text style={styles.bold}>Parking:</Text> {annonce.caracteristiques?.parking || 'Non spécifiée'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecece8',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
    paddingHorizontal: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AnnonceDetails;
