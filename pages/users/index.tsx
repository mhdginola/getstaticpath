import { useRouter } from 'next/router';
import React, { Key } from 'react';

export default function Users(props: { dataUsers: any; }) {    
    const router = useRouter();
    const {dataUsers} = props;
    // const res = fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(dataUsers);
  return (
    <ul>
        {
            dataUsers.map((dt: {
                id: Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
})=>(
                <li key={dt.id} onClick={()=>router.push(`/users/${dt.id}`)}>{dt.name}</li>
            ))
        }
    </ul>
  )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    // console.log(res);
    return{
        props:{
            dataUsers,
        },
    };
}