'use client'
import {gql} from "@apollo/client";
import client from "@/lib/apolloClient";
import {useEffect, useState} from "react";

const HELLO_QUERY = gql`
    query {
        hello
    }
`;


const User = (props: any) => {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        client.query({query: HELLO_QUERY}).then((res)=> {
            setData(res.data);
        })
    }, []);
    return <div>
        {data ? data.hello : 'loading'}
    </div>
}

export default User;
