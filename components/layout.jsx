import Header from "./header";
import Navigation from "./navigation";
import cn from "classnames";
import {useRouter} from "next/router";
export default function Layout ({children}) {
    const {route} = useRouter()
    return <div className={
        cn({
            'min-h-screen':true,
            'bg-contain':true,
            'home-page': route === '/'
        })
    }>
        <Header/>
        <main className='px-16 w-full'>{children}</main>
        <Navigation />
    </div>
}