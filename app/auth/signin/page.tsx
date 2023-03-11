import { getProviders } from "next-auth/react";
import Image from "next/image";

import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full mx-2 object-cover"
          alt="Profile Picture"
          src="https://links.papareact.com/161"
          width={700}
          height={700}
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
