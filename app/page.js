import demos from '@/json/demo.json'
import Link from 'next/link';
export default function RootPage() {

    return (
        <div className="container">
            <div className='my-24 grid grid-cols-4 gap-6'>
                        {
           demos.map((demo)=>(
                <div key={demo.id} className="h-40 shadow-md rounded-2xl bg-top bg-cover bg-no-repeat hover:bg-bottom transition-all duration-1000 group" style={{backgroundImage: `url(${demo.img})`}}>
                    <div className='group-hover:bg-black/60 opacity-0 group-hover:opacity-100 w-full h-full rounded-2xl flex items-center justify-center'>
                        <Link className='bg-blue-400 px-3 py-2 rounded-full text-white text-[10px]' href={demo.route}>View Demo</Link>
                    </div>
                </div>
           ))
        }
            </div>
        </div>
    );
}