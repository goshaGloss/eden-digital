export default function Navigation() {
    return <div className='absolute bottom-0 right-0 w-4/5 min-h-[24] overflow-hidden'>
        <div style={{ backgroundColor: '#96FFFF'}} className='w-full rounded-tl-2xl'>
            <img src="/bottom-icons/info.svg" className='p-2' alt=""/>
            <div style={{ backgroundColor: '#C7BDFF'}} className='ml-11 w-full rounded-tl-2xl'>
                <img src="/bottom-icons/tech.svg" className='p-2' alt=""/>
                <div style={{ backgroundColor: '#E7F590'}} className='ml-11 w-full rounded-tl-2xl'>
                    <img src="/bottom-icons/team.svg" className='p-2' alt=""/>
                    <div style={{ backgroundColor: '#9AFF77'}} className='ml-11 w-full rounded-tl-2xl'>
                        <img src="/bottom-icons/contact.svg" className='p-2' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}