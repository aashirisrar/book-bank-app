import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const BookComponent = ({ bookId, image, title, details, price }: any) => {
    return (
        <Card className="mb-4">
            <CardContent key={bookId} className="grid gap-8">
                <div className="grid gap-4 grid-cols-1">
                    <div className="flex gap-5 max-sm:flex-col max-sm:items-center">
                        <div className="flex p-1">
                            <Image className="mx-auto" src={image} width={200} height={200} alt={bookId} />
                        </div>
                        <div className="flex p-2">
                            <div className="flex flex-col gap-4">
                                <div className="text-md font-medium leading-none">
                                    {title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {details}
                                </div>
                                <div className="text-sm text-primary">
                                    Rs {price}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BookComponent;
