import React from 'react';

export default function Child(props) {
    return (
        <tr>

            <th>{props.childData.image}</th>
            <th>{props.childData.name1}</th>
            <th>{props.childData.mobile}</th>
            <th>{props.childData.git}</th>
            <th>{props.childData.batch}</th>
            <th>{props.childData.referred}</th>
            <th>{props.childData.location}</th>
            <th>{props.childData.placement}</th>

        </tr>
    )
}
