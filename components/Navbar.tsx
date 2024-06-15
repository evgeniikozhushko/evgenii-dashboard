import Image from "next/image";
import Link from "next/link";
import logo from "@/img/2023_EK_Logo_White.png"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-stone-700 py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt='evgenii.ca' width ={40}/>
      </Link>
      
      
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src="https://avatars.github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className='text-black'>EK</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  );
}

export default Navbar;