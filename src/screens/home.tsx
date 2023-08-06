import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IUser from '../interfaces/IUser';
import IData from '../interfaces/IData';


const Home = () => {
    const { navigate } = useNavigation();

    const [user, setUser] = useState<IUser>();
    const [listRpos, setListRepos] = useState<IData[]>([]);

    const URL = 'https://api.github.com';

    const clique = (item: IData) => {
        //navigate('Details', { item: "teste" });    
        //navigate('Details');
    };

    const teste = () => {
        navigate('Details',  "teste"  );
    };

    useEffect(() => {
        fetch(`${URL}/user`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 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',
            },
        })
            .then(response => response.json())
            .then(json => {
                //console.log(`RESPOSTA: ${JSON.stringify(json)}`);
                setUser(json);
            })
            .catch(e => {
                console.log(`Erro: ${e}`);
            })
            .finally(() => {
                // setIsLoading(false);
            });
    }, []);



    useEffect(() => {
        fetch(`${URL}/users/brunomoreyrabatysta/repos`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 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',
            },
        })
            .then(response => response.json())
            .then(json => {
                //console.log(`REPOSITORIOS: ${JSON.stringify(json)}`);
                setListRepos(json);
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>

            <View style={styles.imageView}>
                <Image source={{ uri: user?.avatar_url }} style={styles.image} />
                <Text style={{ fontSize: 24 }}>{user?.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user?.bio}</Text>
            </View>

            <View style={{ padding: 8 }}>
                <Text style={styles.labelNegrito}>Repositórios</Text>
            </View>

            <FlatList
                data={listRpos}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.button}
                        //onPress={teste}
                        onPress={() => navigate('Details',{ projeto: item })}
                    >
                        <View
                            key={index}
                            style={styles.item}>
                            <Text>Projeto: <Text style={styles.labelNegrito}>{item.name}</Text></Text>
                            <Text>Linguagem: <Text style={styles.labelNegrito}>{item.language || 'Linguagem não encontrada'}</Text></Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListEmptyComponent={<ActivityIndicator size={'large'} color={'red'} />}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 8,
    },
    image: {
        width: 120,
        height: 120,
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 60,
        alignSelf: 'center',
    },
    labelNegrito: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    item: {
        backgroundColor: '#FFF',
        marginTop: 8,
        padding: 8,
    },
    button: {
        height: 45,
        backgroundColor: '#000',
        justifyContent: 'center',
        marginTop: 16,
        borderRadius: 5,
    },
});

function navigate(arg0: string) {
    throw new Error('Function not implemented.');
}
