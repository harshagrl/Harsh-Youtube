import React from "react";
const commentsData = [
  {
    name: "Harsh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
    replies: [
      {
        name: "Harsh kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
        replies: [],
      },
      {
        name: "Harsh kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
        replies: [
          {
            name: "Harsh kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
            replies: [],
          },
          {
            name: "Harsh kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
            replies: [
              {
                name: "Harsh kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
                replies: [
                  {
                    name: "Harsh kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
                    replies: [],
                  },
                  {
                    name: "Harsh kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
    replies: [],
  },
  {
    name: "Harsh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
    replies: [],
  },
  {
    name: "Harsh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
    replies: [],
  },
  {
    name: "Harsh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-slate-200 gap-2 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10 "
        src="https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_1280.png"
        alt="cmnt-user"
      />
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border-l-2 pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="mx-5 my-2 w-250">
      <div className="font-bold text-2xl">Comments</div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
