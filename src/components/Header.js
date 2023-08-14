import React from 'react'
import { Appbar } from 'react-native-paper';

const Header = ({ icon, title, handleSearch }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} color='#780000' />
            {icon && <Appbar.Action icon={icon} onPress={handleSearch} />}
        </Appbar.Header>
    )
}
export default Header
