"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
  const router = useRouter();
  const { status } = useSession();

  const handleSocialLogin = (provider) => {
    signIn(provider, {
      callbackUrl: "/",
    });
  };

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <button onClick={() => handleSocialLogin("google")} className="px-4 py-2 text-xl">
        <BsGoogle />
      </button>

      <button onClick={() => handleSocialLogin("github")} className="px-4 py-2 text-xl">
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;