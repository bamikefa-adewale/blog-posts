import { Avatar } from "@material-tailwind/react";
import React, { Fragment, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const PostItems = ({ post }) => {
  const userContext = useContext(AuthContext);
  console.log(userContext.users.id);

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {post.body}
        </p>

        {userContext.users.id === post.userId ? (
          <Fragment>
            {" "}
            <Avatar src={userContext.users.image} />
            <span>{userContext.users.username}</span>
          </Fragment>
        ) : null}
      </div>
    </article>
  );
};

export default PostItems;
