const UserList = ({ users }) => {
    return (
        <div className="relative overflow-x-auto md:w-1/3 m-6">
            <h1 className="text-center text-xl mb-5">User List</h1>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-2">
                            Password
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr
                            className="bg-white hover:bg-gray-100 dark:bg-gray-800 cursor-pointer"
                            key={item.id}
                        >
                            <th
                                scope="row"
                                className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {item.email}
                            </th>
                            <td className="px-4 py-2">{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
