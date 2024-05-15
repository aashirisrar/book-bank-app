import { LucideMenu, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LikeComponent from "@/components/like";
import Link from "next/link";

export default function PostComponent({
  image,
  bookId,
  title,
  details,
  price
}: any) {
  function calculateTimeDifference(
    timeCreatedAt: Date | string | number
  ): string {
    const postTime: Date = new Date(timeCreatedAt); // Convert to Date object

    const currentTime: Date = new Date();
    const timeDifference: number = currentTime.getTime() - postTime.getTime();

    // Convert milliseconds to seconds
    const seconds: number = Math.floor(timeDifference / 1000);

    // Define time intervals in seconds
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (seconds < minute) {
      return "Just now";
    } else if (seconds < hour) {
      const minutes = Math.floor(seconds / minute);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds < day) {
      const hours = Math.floor(seconds / hour);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      // For differences greater than a day, displaying the actual date and time
      return postTime.toLocaleString();
    }
  }

  return (
    <Card className="space-y-2 px-6 mb-4 w-[80%] mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <p className="font-bold text-muted-foreground">{title}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <Image
              width={400}
              className="w-full"
              style={{ objectFit: "contain" }}
              height={400}
              alt={bookId}
              src={image}
            />
          </div>
          <p className="text-sm text-muted-foreground">{details}</p>
          <p className="text-sm text-primary">Rs. {price}</p>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Link href={"/book/" + bookId}>
              <Button className="w-full">View Book</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
