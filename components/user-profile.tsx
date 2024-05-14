import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserProfileComponent = ({ book, user }: any) => {
  return (
    <Card className="mb-4">
      <CardContent key={book.id} className="grid gap-8">
        <div className="grid ">
          <Avatar className="hidden h-20 w-20 flex mx-[auto] my-[20px] ">
            <AvatarImage src={user.profilePicture} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-md font-medium leading-none  mx-[auto]">
              <b>{book.title}</b>
            </p>
            <p className="text-sm text-muted-foreground mx-[auto]">
              {book.details}
            </p>
          </div>
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
