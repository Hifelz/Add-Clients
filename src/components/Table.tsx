import Client from "../../core/Client";

interface TabelaProps {
    clientes: Cliente []
}



export default function Tabela (props: TabelaProps) {
    
    
    function renderData() {
        return props.Client?.map((Client, i) => {
                    return (
                        <tr key={Client.id}>
                            <td>{Client.id}</td>
                            <td>{Client.name}</td>
                            <td>{Client.age}</td>
                        </tr>
                    )
                })
            }
        
    

    function renderHeader() {
        <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    }
    
    
   
    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
            
        </table>
    )
}