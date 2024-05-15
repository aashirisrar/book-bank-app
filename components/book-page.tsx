import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BookPage = ({ book, user }: any) => {
    return (
        <Card className="mb-4">
            <CardContent key={book.bookId} className="grid gap-8">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="flex gap-5 max-sm:flex-col max-sm:items-center">
                        <div className="flex-1 w-[30%] p-1">
                            <Image className="mx-auto" src={book.image} width={200} height={200} alt={book.bookId} />
                        </div>
                        <div className="flex-2 w-[70%] p-2">
                            <div className="flex flex-col gap-4">
                                <div className="text-md font-medium leading-none">
                                    {book.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {book.details}
                                </div>
                                <div className="text-sm text-primary">
                                    Rs {book.price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-md:justify-center items-center gap-4">
                        <div className="font-semibold text-center">Seller Details</div>
                        <Link href={"/user/" + user.name}>
                            <div className="gap-2 inline-flex hover:bg-primary-foreground p-4 rounded-lg">
                                <Avatar className="h-20 w-20 max-sm:w-10 max-sm:h-10">
                                    <AvatarImage src={user.profilePicture} alt="Avatar" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <CardTitle className="mt-[10px] ml-[10px] max-sm:mt-0 max-sm:text-base" >
                                    <div>{user.firstName}</div>
                                    <div className="text-sm font-light">@ {user.name}</div>
                                    <div className="text-sm font-light">{user.phone}</div>
                                </CardTitle>
                            </div>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BookPage;
