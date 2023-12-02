import Image from 'next/image'
import logo from '../../../public/logo.png'

export default function Header() {
	return (
		<div className='w-full bg-[#f5ecdb] sticky top-0 z-50 flex items-center justify-center shadow-lg mb-10'>
			<Image src={logo} alt="logo" className="sticky top-0 z-50 w-96 min-w-1/4" />
		</div>
	);
};