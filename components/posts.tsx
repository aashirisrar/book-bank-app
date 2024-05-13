
import PostComponent from "@/components/post-item";
import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonCard } from "./skeleton-card";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchFriendsPost() {
        try {
            const response = await axios.post("/api/book/getbooks");
            setPosts(response.data.books);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        fetchFriendsPost();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }

    return (
        <div className="flex flex-col ">
            {posts?.map((post: any) => (
                <PostComponent key={post.postId} {...post} />
            ))}
        </div>
    )
}

export default Posts