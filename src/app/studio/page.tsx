'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Studio component with SSR disabled
const Studio = dynamic(() => import('@/components/Studio'), { ssr: false });

export default function StudioPage() {
    return <Studio />;
}
