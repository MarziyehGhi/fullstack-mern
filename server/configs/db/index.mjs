import mongoose from "mongoose"

export function DbConfig() {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("db connected successfully!")
    }).catch(() => {
        console.log("db connection faild!")
    })
}