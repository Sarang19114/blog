import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionURL = "mongodb+srv://testing:testing123@cluster0.c8n0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(connectionURL).then(() => console.log("Conneted DB"))
    .catch((err) => console.log(err))
};

export default connectToDB;