import Image from "next/image";
import Logo from "../../public/logo-sticker-album.svg";

import { Container, Banner, LogoContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  return (
    <Container>
      <Banner>
        <LogoContainer>
          <Image
            src={Logo}
            alt="Logo writtern Sticker Album"
            width={330}
            height={132}
          />
        </LogoContainer>
      </Banner>
      <div>{children}</div>
    </Container>
  );
};

export default Auth;
