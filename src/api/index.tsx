import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../core/Client'

export default function Home () {

    const client = [
        new Client('Ana', 34, '1'),
        new Client('John', 13, '2'),
        new Client('Arthur', 45, '3'),
        new Client ('Gold. Roger', 50, '4'),
    ]

    return (
        <div className="flex h-screen justify-center 
        items-center bg-gradient-to-r from-blue to-purple-500
        text-white" >
         /* using tailwind in className*/  
           <Layout title="Simple Register">
            <Table Clients={client}></Table>
           </Layout>
        </div>
    )
}