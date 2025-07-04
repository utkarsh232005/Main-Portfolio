export default function StudioLoading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold text-gray-800">Loading Sanity Studio...</h2>
                <p className="text-gray-600 mt-2">This may take a moment on first load</p>
            </div>
        </div>
    )
}
