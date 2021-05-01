import React from "react";

export const Pagination = (props: {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
}) => {
    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(props.totalPosts / props.postsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => props.paginate(number)}
                            href="!#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
// import { ISinglePost } from "./posts";

// export interface ISingleUser {
//     concat(arg0: ISinglePost): any[];
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     adress: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: { lat: string; lng: string };
//     };
//     phone: string;
//     website: string;
//     company: { name: string; catchPhrase: string; bs: string };
// }
