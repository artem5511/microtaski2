import React from 'react';

type NewComponentPropsType = {
    // students: Array<StudentType>
    topCars: Array<topCarsPropsType>
}
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
type topCarsPropsType = {
    manufacturer: string
    model: any
}


export const NewComponent = (props: NewComponentPropsType) => {
    debugger
    return (
        <div>
            <table>
                    <tr>
                        <th>num p/p</th>
                        <th>manufacturer</th>
                        <th>model</th>
                    </tr>
                {props.topCars.map((topCars, index) => {
                    return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{topCars.manufacturer}</td>
                        <td>{topCars.model}</td>
                    </tr>
                )
            })}
            </table>
            {/*<ul>*/}
            {/*    {props.students.map((objectFromStudentArray)=>{*/}
            {/*    return (*/}
            {/*        <li key={objectFromStudentArray.id}>*/}
            {/*            <span>{objectFromStudentArray.name}</span>*/}
            {/*            <span> age: {objectFromStudentArray.age}</span></li>*/}
            {/*    )*/}
            {/*    })*/}
            {/*    }*/}
            {/*    <li>Coffe</li>*/}
            {/*    <li>Tea</li>*/}
            {/*    <li>Milk</li>*/}
            {/*</ul>*/}
        </div>
    );
};
