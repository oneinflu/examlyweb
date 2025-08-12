import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";

export default function Accessibility() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        
        <div className="prose max-w-none">
          <div className="container mx-auto px-4 py-12 mt-16">
            <h1 className="font-plus-jakarta text-4xl font-bold mb-6 text-[#143E39] text-3xl md:text-4xl font-semibold mb-6">Accessibility Statement</h1>
            <p className="font-plus-jakarta text-base mb-4 text-xl text-gray-500 mb-8">Last Updated: August 2025</p>
            <div className="border border-solid mb-8"></div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Our Commitment to Accessibility</h2>
              <p className="text-gray-600 mb-4 text-xl">Examly Global LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Conformance Status</h2>
              <p className="text-gray-600 mb-4 text-xl">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</p>
              <p className="text-gray-600 mb-4 text-xl">MyExamly.com is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Accessibility Features</h2>
              <p className="text-gray-600 mb-2 text-xl">MyExamly.com includes the following accessibility features:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>Keyboard navigation support</li>
                <li>Text alternatives for non-text content</li>
                <li>Proper heading structure</li>
                <li>Sufficient color contrast</li>
                <li>Resizable text without loss of content or functionality</li>
                <li>Alternative methods for consuming time-based media</li>
                <li>Consistent navigation and identification of elements</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Limitations and Alternatives</h2>
              <p className="text-gray-600 mb-2 text-xl">Despite our best efforts to ensure accessibility of MyExamly.com, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">Known limitations:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li><strong>Interactive simulations:</strong> Some exam simulations may not be fully accessible to screen readers. We offer alternative formats and assistance for these components.</li>
                  <li><strong>PDF documents:</strong> Some older PDF documents may not be fully accessible. We are working to remediate these documents and can provide alternative formats upon request.</li>
                  <li><strong>Third-party content:</strong> Some third-party content or functionality may not be fully accessible. We are working with our vendors to improve accessibility.</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Feedback and Assistance</h2>
              <p className="text-gray-600 mb-4 text-xl">We welcome your feedback on the accessibility of MyExamly.com. Please let us know if you encounter accessibility barriers:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>Email: accessibility@myexamly.com</li>
                <li>Phone: (406) 555-0120</li>
                <li>Postal address: 30 N Gould St Ste R, Sheridan, WY 82801</li>
              </ul>
              <p className="text-gray-600 mb-4 text-xl mt-4">We try to respond to feedback within 3 business days.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Compatibility with Browsers and Assistive Technology</h2>
              <p className="text-gray-600 mb-4 text-xl">MyExamly.com is designed to be compatible with the following assistive technologies:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>JAWS (latest version)</li>
                <li>NVDA (latest version)</li>
                <li>VoiceOver (latest version)</li>
                <li>TalkBack (latest version)</li>
                <li>Dragon NaturallySpeaking (latest version)</li>
                <li>ZoomText (latest version)</li>
              </ul>
              <p className="text-gray-600 mb-4 text-xl mt-4">MyExamly.com is designed to be compatible with the following browsers:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>Chrome (latest 2 versions)</li>
                <li>Firefox (latest 2 versions)</li>
                <li>Safari (latest 2 versions)</li>
                <li>Edge (latest 2 versions)</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Technical Specifications</h2>
              <p className="text-gray-600 mb-4 text-xl">Accessibility of MyExamly.com relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <p className="text-gray-600 mb-4 text-xl mt-4">These technologies are relied upon for conformance with the accessibility standards used.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Assessment Approach</h2>
              <p className="text-gray-600 mb-4 text-xl">Examly Global LLC assessed the accessibility of MyExamly.com by the following approaches:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                <li>Self-evaluation</li>
                <li>External evaluation</li>
                <li>Automated testing using accessibility evaluation tools</li>
                <li>User testing with assistive technologies</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">Formal Approval</h2>
              <p className="text-gray-600 mb-4 text-xl">This Accessibility Statement was created on August 1, 2025, and was last updated on August 15, 2025. It was approved by:</p>
              <p className="text-gray-600 mb-4 text-xl">Examly Global LLC<br />Accessibility Team<br />accessibility@myexamly.com</p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}