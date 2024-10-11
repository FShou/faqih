import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center h-svh">
      <Card className="relative -top-[25%]">
        <CardHeader>
          <CardTitle>Welcome To my Portfolio website!</CardTitle>
          <CardDescription>This is still undone yet !!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Hi, I'm  <span className="font-medium">Achmad Faqih Suyudi</span></p>
          <p className="text-sm">i'm currently learning Android Development</p>
          
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" size={'lg'}>
              <a href="https://github.com/Fshou" >Go to my GitHub</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
