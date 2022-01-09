import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";


interface Transaction {
    id: number;
    name: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions ] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.name}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    } )}

                </tbody>
            </table>
        </Container>
    );
}