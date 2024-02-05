import Typography from "../custom/Typography";
import ContactForm from "./contact-form";

export default function Footer() {
  return (
    <footer className="px-6 w-full bg-[#f3f1ea] block">
      <div className="max-w-6xl mx-auto py-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Typography variant="h4" className="mb-1">
            Can{"'"}t find the review you need? Request it!
          </Typography>
          <Typography variant="body2">
            Our budtender network will review it and let you know when it{"'"}s
            ready.
          </Typography>
          <ContactForm />
        </div>
        <div className="col-span-12 md:col-span-2">
          <Typography variant="h6" className="mb-1">
            Budtender Network
          </Typography>
          <Typography>Sign Up</Typography>
          <Typography>Creator Portal</Typography>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Typography variant="h6" className="mb-1">
            Legal
          </Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Use</Typography>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Typography variant="h6" className="mb-1">
            Connect with us
          </Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter</Typography>
          <Typography>Linkedin</Typography>
        </div>
        <div className="col-span-12">
          <Typography variant="title2" className="mb-2">
            Disclaimer
          </Typography>
          <Typography variant="body2" className="!italic leading-relaxed">
            These products are not intended to diagnose, treat, cure or prevent
            any disease. All information presented here is not meant as a
            substitute for or alternative to information from healthcare
            practitioners. Please consult your healthcare professional about
            potential interactions or other possible complications before using
            any product. Effects & Medical Attributes are based on anecdotal
            evidence. Individual experiences can be varied.
          </Typography>
          <Typography variant="body2" className="mt-5">
            ©{new Date().getFullYear()} Moodi Day, All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
