import { StatusBar } from 'expo-status-bar';
import { Box } from 'native-base';

export default function EatsScreen() {
    return (
        <Box p="5" safeArea>
            Map Screen
            <StatusBar style="auto" />
        </Box>
    );
}
