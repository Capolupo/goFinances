import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    border-radius: 5px;
    padding: 18px 16px;
    background-color: ${({ theme }) => theme.colors.shape} ;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular} ;
    font-size: ${RFValue(14)}px ;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(14)}px ;
    background-color: ${({ theme }) => theme.colors.text} ;
`;