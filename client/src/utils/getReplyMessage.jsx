import data from "./messageData.json";

export const getReplyMessage = (message) => {
    message = message.trim().toLowerCase();

    let reply;

    for (let msg of data.messages) {
        if (message === msg.sender) {
            reply = msg.receiver;
        }
    }

    reply = reply || "Sorry! I don't understand that.";

    return reply;
};
