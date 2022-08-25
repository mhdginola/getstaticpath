import { useRouter } from 'next/router';
import React from 'react';
// in your page component


interface pppggg{
    name:string;
}

interface ppgg{
    user: pppggg;
}

export default function UsersG(props:ppgg){
    const router = useRouter();
    // const routerLink = useRouter();
    // const {id} = routerLink.query;
    const {user} = props;
    // console.log(user);
    if (router.isFallback) {
        return <div>loading...</div>
    }else{
        return (
            <h1>{user.name}</h1>
        )
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: { name: string; })=>({
        params:{
            id: `${user.name}`,
        },
    }));
    return{
        paths,
        fallback:true,
    };
}

interface pg{
    params:{
        id:string;
    }
}

export async function getStaticProps(context: pg) {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    // console.log(user);

    return{
        props:{
            user,
        },
    };
}