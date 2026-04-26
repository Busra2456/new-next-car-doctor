"use client"
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { BsGithub, BsGoogle} from "react-icons/bs"
const SocialSignin = () => {
      // const router = useRouter()
      const searchParams = useSearchParams();
                const path = searchParams.get('redirect')
      const session = useSession()
      const handleSocialLogin = (provider) =>{
            const resp = signIn(provider,{
                  redirect : true,
                   callbackUrl : path ? path : '/',
            })
           

      }
      // if(session.status === "authenticated")
      //        router.push('/')
      return (
            <div className="flex items-center justify-center space-x-3">
                   
                              <button onClick={() => handleSocialLogin('google')} className='text-xl px-4 py-2'> <BsGoogle/></button>
                              <button onClick={() => handleSocialLogin('github')} className='text-xl px-4 py-2'> <BsGithub/></button>
                         
                  
            </div>
      );
};

export default SocialSignin;