import logo from '../assets/react.svg'

const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]


export default function Day1() {
    return (
        <div className="p-10 space-y-5 mx-auto">
            <h2 className="text-slate-900 text-2xl">#Day 1</h2>
            <div className="p-7 flex max-w-sm bg-white rounded-xl shadow-lg items-center space-x-5">
                <div className="shrink-0">
                    <img className="h-12 w-12" src={logo} alt=""/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <button
                className="bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-200 px-5 py-2 rounded-full font-semibold text-white">
                Save changes
            </button>

            <ul className="divide-y divide-slate-200 bg-slate-100 rounded-2xl overflow-hidden cursor-pointer">
                {people.map(person => (
                    <li className="flex items-center justify-between p-4 hover:bg-amber-100 group/item">
                        <div className="flex gap-4">
                            <img className="h-12 w-12 rounded-full" src={person.image}/>
                            <div className="ml-3">
                                <p className="font-semibold text-black">{person.name}</p>
                                <p className="font-light text-slate-400">{person.email}</p>
                            </div>
                        </div>
                        <a className="group/edit invisible group-hover/item:visible
                            relative flex items-center whitespace-nowrap rounded-full
                            py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200
                        ">
                            <span
                                className="group-hover/edit:text-gray-700 group-hover/edit:translate-x-0.5">Call</span>
                        </a>
                    </li>
                ))}
            </ul>
            this is the comment I want to test
            the button need to be hover and active, when it hover it shoul db change the color

            <button className="bg-slate-800 text-white py-2 px-8 rounded-full hover:bg-slate-500">Click me</button>
            <button className="text-white bg-amber-500 hover:bg-amber-700 py-2 px-8 rounded-full"> Click me </button>
            <table>
                <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                    <td className="px-6 py-3 text-left text-sm font-medium text-slate-900">Image</td>
                    <td className="px-6 py-3 text-left text-sm font-medium text-slate-900">Name</td>
                    <td className="px-6 py-3 text-left text-sm font-medium text-slate-900">Email</td>
                </tr>
                </thead>
                <tbody>
                {people.map(person => (
                    <tr className="odd:bg-white even:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            <img className="h-12 w-12 rounded-full" src={person.image}/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{person.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{person.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <a href="#"
               className="group block max-w-xs mx-auto rounded-lg p-6
                          bg-white ring-1 ring-slate-900/5
                          shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500
                          ">
                <div className="flex items-center space-x-3">
                    <img className="h-8 w-8 group-hover:text-white" src={logo} alt=""/>
                    <h3 className="text-slate-900 text-sm font-semibold group-hover:text-white">New Project</h3>
                </div>
                <p className="text-slate-500 text-sm group-hover:text-white"> Create a new project from a variety of
                    starting templates</p>
            </a>
            <div className="bg-white dark:bg-slate-800 shadow p-8 mx-auto rounded-2xl space-y-3">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-200">Ingredients</h3>
                <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                    <li>5 cups chopped Porcini mushrooms</li>
                    <li>1/2 cup of olive oil</li>
                    <li>3lb of celery</li>
                </ul>
            </div>
        </div>
    )
}