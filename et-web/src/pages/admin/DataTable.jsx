import  { useState } from 'react';
import './Dashboard.css';
import { FaSearch } from 'react-icons/fa'; 

const Datatab = () => {
    const [searchText, setSearchText] = useState('');

    const data = [
        {
            name: 'varun',
            usn: '4CB22CB058',
            branch: "CSBS",
            email: "varunraj0609@gmail.com"
        },
        {
            name: 'vaibhav',
            usn: '5',
            branch: "CSBS",
            email: "vaibhav@gmail.com"
        },
        {
            name: 'pavin',
            usn: '4',
            branch: "CS",
            email: "paneo@gmail.com"
        }
    ];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredData = searchText ? data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.usn.toLowerCase().includes(searchText.toLowerCase()) ||
        item.branch.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    ) : data;

    return (
        <div className="table-container">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearch}
                    className="search-input"
                />
                <FaSearch className="search-icon" /> {/* Search icon */}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>USN</th>
                        <th>Branch</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.usn}</td>
                            <td>{item.branch}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Datatab;
