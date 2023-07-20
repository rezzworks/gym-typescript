import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            This is just a bunch of randome text that I typed out to take up
            space. Mabye next time, I'll just copy and paste ipsem lorum, but
            until then, it's whatever. Nah mean?
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Just some more random text</p>
          <p className="my-5">Just some more random text</p>
          <p>Ullamcorper vivamus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Just some more random text</p>
          <p>(757) 555-0000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
