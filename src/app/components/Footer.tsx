import Link from 'next/link'

import { HomeIcon, ArrowUpTrayIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

export default function Footer() {

	const handleHome = () => {
		<Link href="/home" />
	}

	const handlePost = () => {
		<Link href="home/post" />
	}

	const handleTimeline = () => {

	}

	return (
		<div className='p-4 border-t-2 border-[#b49c94] w-full mt-10 bg-[#f5ecdb] sticky bottom-0 flex items-center justify-center'>
			<div className='flex'>
				<Link href="/home">
					<HomeIcon className="mr-14 h-12 w-12 text-[#b49c94]" />
				</Link>
				<Link href="/home/post">
					<ArrowUpTrayIcon className="h-12 w-12 text-[#b49c94]" />
				</Link>
				<Link href="/home/timeline">
					<GlobeAltIcon className="ms-14 h-12 w-12 text-[#b49c94]" />
				</Link>
			</div>
		</div>
	);
};