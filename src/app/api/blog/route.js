import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        connectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts")
    }
}

export const DELETE = async (req) => {
    try {
        connectToDb()
        const posts = await Post.deleteOne({slug})
        return NextResponse.json(posts)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete posts")
    }
}