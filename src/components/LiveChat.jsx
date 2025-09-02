import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState([]);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="mx-2 pb-2 border-x-2 border-t-2 border-slate-500 h-[460px] w-full rounded-t-lg overflow-y-scroll flex flex-col-reverse ">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="mx-2 border-x-2 border-b-2 border-slate-500 rounded-b-lg w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage("");
          dispatch(
            addMessage({
              name: "Harsh kumar",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="border-2 rounded-full border-gray-200 mr-2 p-1 w-3/4"
          placeholder="Send a message"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="font-mono text-lg bg-slate-300 px-4 py-1 rounded-full">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
