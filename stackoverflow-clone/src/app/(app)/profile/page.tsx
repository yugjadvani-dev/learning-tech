"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface User {
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
  username: string;
  _id: string;
}

export default function ProfilePage() {
  const [data, setData] = useState<User>({
    email: '',
    isAdmin: false,
    isVerified: false,
    username: '',
    _id: '',
  });
  console.log("data", data);
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me');
      setData(res.data.data);
    };

    getUserDetails();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-[200px_1fr] items-start">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-center">
              <div className="text-xl font-bold">John Doe</div>
              <div className="text-sm text-muted-foreground">{`@${data.username}`}</div>
              <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Logout</button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="text-sm font-medium text-muted-foreground">Bio</div>
              <div className="text-base">
                I'm a software engineer with a passion for building scalable and efficient web applications. I've been an
                active member of the StackOverflow community for several years, helping others and learning from the
                amazing community.
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="grid gap-1">
                  <div className="text-2xl font-bold">12,345</div>
                  <div className="text-sm text-muted-foreground">Reputation</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-2xl font-bold">78</div>
                  <div className="text-sm text-muted-foreground">Badges</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">Top Questions</div>
                  <div className="grid gap-2">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
                      <span>How to optimize a React component for performance?</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
                      <span>What is the difference between let and const in JavaScript?</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
                      <span>How to implement a custom pagination component in React?</span>
                    </Link>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">Top Answers</div>
                  <div className="grid gap-2">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <CheckIcon className="w-5 h-5 text-muted-foreground" />
                      <span>Explained the difference between async/await and promises in JavaScript.</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <CheckIcon className="w-5 h-5 text-muted-foreground" />
                      <span>
                        Provided a detailed solution to the problem of implementing a debounce function in JavaScript.
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-base font-medium hover:underline"
                      prefetch={false}
                    >
                      <CheckIcon className="w-5 h-5 text-muted-foreground" />
                      <span>
                        Explained the use of the useEffect hook in React and how to properly manage side effects.
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FileQuestionIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>
  );
}