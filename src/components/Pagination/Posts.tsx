import React from "react";
import styled from "styled-components";
const Posts = (props: { loading: any; posts: any[] }) => {
    if (props.loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className="list-group mb-4">
            {props.posts.map((comment) => (
                <li key={comment.id} className="list-group-item">
                    {comment.name}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
