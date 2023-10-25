import { Image, StyleSheet, Text, View } from "react-native"
import { Cast } from "../interfaces/movieCreditsInterfaces"

interface Props {
    actor: Cast;
}

export const ActorItem = ({ actor }: Props) => {
    const imgUrl = actor.profile_path !== null ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png'
    return (
        <View style={styles.container}>
            <Image
                style={styles.actorPicture}
                source={{
                    uri: imgUrl
                }}
            />

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginRight: 15,
        marginTop: 18,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2,
    },
    actorInfo: {
        marginRight: 10
    },
    actorPicture: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 8,
        marginVertical: 5
    }
});
