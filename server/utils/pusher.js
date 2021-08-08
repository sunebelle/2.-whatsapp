import mongoose from "mongoose";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1246738",
  key: "c11f1dd1499b31c5ca3e",
  secret: "f14623741b8d1a55b309",
  cluster: "ap1",
  useTLS: true,
});

const realtimePusher = (DBCollection, myChannel, myEvent) => {
  const db = mongoose.connection;
  db.once("open", () => {
    console.log(`${DBCollection} connected`);
    const msgCollection = db.collection(DBCollection);
    const changeStream = msgCollection.watch();
    //https://docs.mongodb.com/manual/changeStreams/
    changeStream.on("change", (change) => {
      console.log(change);
      if (change.operationType === "insert") {
        const msgDetail = change.fullDocument;
        pusher.trigger(myChannel, myEvent, {
          name: msgDetail.name,
          message: msgDetail.message,
          room: msgDetail.room,
          userId: msgDetail.userId,
          username: msgDetail.username,
          createdAt: msgDetail.createdAt,
          room: msgDetail.room,
          _id: msgDetail._id,
        });
      } else {
        console.log("Error triggering pusher");
      }
    });
  });
};

export default realtimePusher;
