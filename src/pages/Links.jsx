import teara from '../../public/teara.png'
function LinkCard({ link }) {
    return (
    <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-md active:shadow-sm transition transform hover:translate-y-1 active:translate-y-2 duration-200 max-w-sm w-full mx-auto flex flex-col justify-between h-full"
    >
        <div className="relative">
        {link.image && (
            <img
            src={link.image}
            alt={link.title || link.site}
            className="w-full h-36 object-cover"
            />
        )}

        <h3 className="text-xl font-semibold text-gray-800 text-center my-4">
            {link.site}
        </h3>
        </div>
    </a>
    );
}
export default function Links() {
    const links = [
        {
            id: 1,
            site: 'X（旧Twitter）',
            url: 'https://x.com/teara_ocha',
            image: teara
        },
        {
            id: 2,
            site: 'GitHub',
            url: 'https://github.com/TEAra-official',
            image: teara
        }
    ]

    return(
        <div className="w-full min-h-screen bg-lime-50 min-h-screen py-8 px-4 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* スケジュールの見出し */}
        <h1 className="text-3xl font-bold text-center text-emerald-700 mb-8">
            TEAra Link集
        </h1>

          {/* イベントカードグリッド - レスポンシブ対応 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link) => (
                <LinkCard key={link.id} link={link} />
            ))}
            </div>
        </div>
        </div>
    </div>
    )
}
