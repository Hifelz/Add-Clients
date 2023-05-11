import Client from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente []
}

export default function Tabela (props: TabelaProps) {
    return (
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </table>
    )
}