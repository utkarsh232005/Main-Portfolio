import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import config from '../../../sanity.config'

// Optimize the studio loading
export { metadata }

export default function StudioPage() {
    return <NextStudio config={config} />
}
