import { FlatList, Text, Image, Box, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type dataProps = {
    id: string,
    title: string,
    image: string,
    screen: string
}

const data: dataProps[] = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

export default function NavOptions() {
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                    <Box p="2" pl="6" pb="8" pt="4" bgColor="rgb(226 232 240)" m="2" w="40">
                        <Image
                            alt={item.title}
                            h="120"
                            w="120"
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text mt="2" fontSize="15" fontWeight="600">{item.title}</Text>
                        <Box mt="4" bgColor="black" p="2" w="10" h="10" borderRadius="100" alignItems="center">
                            <Icon
                                as={FontAwesome}
                                name="arrow-right"
                                size="5"
                                color="white"
                            />
                        </Box>
                    </Box>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    );
}
