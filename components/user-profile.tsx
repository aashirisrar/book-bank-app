import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const UserProfileComponent = ({ book, user }: any) => {
  return (
    <Card className="mb-4">
      <CardContent key={book.bookId} className="grid gap-8">
        <div className="grid ">
          <Avatar className="hidden h-20 w-20 flex mx-[auto] my-[20px] ">
            <AvatarImage src={user.profilePicture} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div>
            <div>Seller Details</div>
            <div className="grid gap-1">
              <p>{user.firstName + " " + user.lastName}</p>
              <p>{user.name}</p>
              <p>{user.phone}</p>
            </div>
          </div>
          <div className="grid gap-1">
            <p className="text-md font-medium leading-none  mx-[auto]">
              <b>{book.title}</b>
            </p>
          </div>
          <Image src={book.image} width={200} height={200} alt={book.bookId} />
          <p className="text-sm text-muted-foreground mx-[auto]">
            {book.details}
          </p>
          <p className="text-sm text-muted-foreground mx-[auto]">
            Rs {book.price}
          </p>

          {/* <div className="mx-[auto] font-medium">
            {book.firstName + " " + book.lastName}
          </div>
          <div className="mx-[auto] font-medium"> {book.gender}</div>
          <div style={{ display: "inline-flex" }}>
            <div className="ml-auto font-medium">
              Following: {book.followingCount}
            </div>
            <div className="mx-[10px]"></div>
            <div className="mr-auto font-medium">
              Followers: {book.followerCount}
            </div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileComponent;
