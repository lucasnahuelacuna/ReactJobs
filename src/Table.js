import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const { characterData, removeCharacter } = props;

    return (
        <tbody>
            {
                characterData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.job}</td>
                            <td>
                                <button
                                    onClick={() => removeCharacter(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })
            }
        </tbody>
    );
}


class Table extends Component {
    render() { 
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
            </table>
        );
    }
}
 
export default Table;