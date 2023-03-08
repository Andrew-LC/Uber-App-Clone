import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Box, Image } from 'native-base';
import NavOptions from '../components/NavOptions';

export default function HomeScreen() {
    return (
        <Box p="5" safeArea>
            <Image
                h="100"
                w="100"
                resizeMode="contain"
                source={{
                    uri: "https://links.papareact.com/gzs",
                }}
                alt="uber-logo"
            />
            <NavOptions />
            <StatusBar style="auto" />
        </Box>
    );
}
