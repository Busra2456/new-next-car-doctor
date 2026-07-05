"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import { BsGithub, BsGoogle} from "react-icons/bs"
const SocialSignin = () => {
      const router = useRouter()
      // const searchParams = useSearchParams();
            //     const path = searchParams.get('redirect')
      const session = useSession()
      const handleSocialLogin = (provider) =>{
            const resp = signIn(provider,{
                  redirect : false,
                  //  callbackUrl : path ? path : '/',
                  callbackUrl: "/",
            })
           

      }
      if(session.status === "authenticated")
             router.push('/')
      return (
            <div className="flex items-center justify-center space-x-3">
                   
                              <button onClick={() => handleSocialLogin('google')} className='px-4 py-2 text-xl'> <BsGoogle/></button>
                              <button onClick={() => handleSocialLogin('github')} className='px-4 py-2 text-xl'> <BsGithub/></button>
                         
                  
            </div>
      );
};

export default SocialSignin;