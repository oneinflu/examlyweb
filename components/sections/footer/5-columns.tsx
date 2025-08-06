import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import LaunchUI from "../../logos/launch-ui";
import Link from "next/link";

import X from "../../logos/x";
import Discord from "../../logos/discord";


export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer className="border-t pt-8">
          <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
            <FooterColumn className="col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
              <div className="flex items-center gap-2">
                <LaunchUI />
               
              </div>
              <div className="ml-2.5 flex gap-4 sm:ml-0">
                <Link
                  href="/"
                  className="text-muted-foreground"
                >
                  <span className="sr-only">Linkedin</span>
                  <X className="h-5 w-5" />
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground"
                >
                  <span className="sr-only">Twitter</span>
                  <X className="h-5 w-5" />
                </Link>
                <Link href="/" className="text-muted-foreground">
                  <span className="sr-only">Discord</span>
                  <Discord className="h-5 w-5" />
                </Link>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Exam Preps</h3>
              <a href="#" className="text-sm text-muted-foreground">
                CMA
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                CPA
              </a>
               <a href="#" className="text-sm text-muted-foreground">
                EA
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a href="#" className="text-sm text-muted-foreground">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Careers
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a href="#" className="text-sm text-muted-foreground">
                Mail Us
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Call Us
              </a>
              <a
                href=""
                className="text-sm text-muted-foreground"
              >
                Raise Ticket
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Legal</h3>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground">
                Terms of Service
              </Link>
              <Link href="/copyright-trademarks" className="text-sm text-muted-foreground">
                Copyright & Trademarks
              </Link>
              <Link href="/return-policy" className="text-sm text-muted-foreground">
                Return Policy
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="border-0">
            <div>© 2025 Examly Global LLC. All rights reserved</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
