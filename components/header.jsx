import Link from 'next/link'
export default function Header() {
    return <header className='flex justify-between px-16 py-8'>
        <img src='/logo.png' alt=""/>
        <nav className='flex gap-x-8 items-center text-sm font-extrabold'>
            <Link href='/about' >
                <a className='flex items-center'>О компании</a>
            </Link>
            <Link href='/technologies' >
                <a className='flex items-center'>Технологии</a>
            </Link>
            <Link href='/team' >
                <a className='flex items-center'>Команда</a>
            </Link>
            <Link href='/contacts' >
                <a className='flex items-center'>Контакты</a>
            </Link>
            <button className="py-2 px-4 rounded-xl bg-black text-white font-extrabold">заказать</button>
        </nav>
    </header>
}