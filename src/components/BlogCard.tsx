import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export const BlogCard = ({ title, date, image, excerpt }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm">
          {date}
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        <span className="text-primary hover:underline">Read More</span>
      </CardContent>
    </Card>
  );
};