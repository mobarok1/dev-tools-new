import { headers } from 'next/headers';

export function HOME_PAGE_URL(){
    const headersList = headers();
    
    const domain = headersList.get('host') as string;
    if(domain=="localhost:3000"){
        return "http://"+domain;
    }else{
        return "https://"+domain;
    }
}

