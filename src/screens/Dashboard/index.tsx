import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps{
   id:string; 
}


export function Dashboard(){
    const data : DataListProps[] = [
    {
        id:'1',
        type : 'positive',
        title:"Desenvolvimento de Site",
        amount:"12.000,00",
        category:{
            name:'vendas',
            icon: 'dollar-sign',
        },
        date:"13/04/2020"
    },
    {
        id:'2',
        type : 'negative',
        title:"hamburgueria izzy",
        amount:"59,00",
        category:{
            name:'vendas',
            icon: 'coffee',
        },
        date:"10/04/2020"
    },
    {
        id:'3',
        type : 'negative',
        title:"Aluguel do Apartamento",
        amount:"1.200,00",
        category:{
            name:'Casa',
            icon: 'shopping-bag',
        },
        date:"10/04/2020"
    }];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    
                    <UserInfo>                
                            <Photo 
                            source={{uri:'https://github.com/Capolupo.png'}}
                            />
                                <User>
                                    <UserGreeting>Olá, </UserGreeting>   
                                    <UserName>André</UserName>
                                </User>  
                    </UserInfo>

                    <Icon name="power"/>

                </UserWrapper>   

                
            </Header>

            <HighlightCards>

                <HighlightCard
                    type = "up" 
                    title="Entradas" 
                    amount="17.400,00" 
                    lastTransation="Ultima Entrada 13 de Abril" 
                />
                <HighlightCard 
                    type = "down"
                    title="Saidas" 
                    amount="1.259,00" 
                    lastTransation="Ultima Saida 13 de Abril" 
                /> 
                <HighlightCard 
                    type = "total"
                    title="Total" 
                    amount="16.141,00" 
                    lastTransation="Ultima Entrada 13 de Abril" 
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}
                />                
            </Transactions>

        </Container>
    )
}
