import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
    return (
        <div className="flex h-screen justify-center 
        items-center bg-gradient-to-r from-blue to-purple-500
        text-white" >
         /* using tailwind in className*/  
           <Layout title="Simple Register">
            <span>Texto</span>
           </Layout>
        </div>
    )
}