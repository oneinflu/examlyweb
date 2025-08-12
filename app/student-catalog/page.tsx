import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";

export default function StudentCatalog() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        
        <div className="prose max-w-none">
          <div className="container mx-auto px-4 py-12 mt-16">
            <h1 className="font-plus-jakarta text-4xl font-bold mb-6 text-[#143E39] text-3xl md:text-4xl font-semibold mb-6">Student Catalog & Policies</h1>
            <p className="font-plus-jakarta text-base mb-4 text-xl text-gray-500 mb-8">Last Updated: August 2025</p>
            <div className="border border-solid mb-8"></div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4 text-xl">Welcome to Examly Global LLC&apos;s Student Catalog. This document outlines our educational offerings, policies, and procedures that govern your relationship with us as a student. By enrolling in any of our courses or programs, you agree to abide by these policies.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">2. Course Catalog</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">2.1 CPA Exam Review</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Comprehensive review for all four sections: FAR, AUD, REG, and BEC</li>
                  <li>Includes video lectures, textbooks, practice questions, simulations, and mock exams</li>
                  <li>Available in various packages: Essential, Premium, and Ultimate</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">2.2 CMA Exam Review</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Complete preparation for both parts of the CMA exam</li>
                  <li>Includes video lectures, textbooks, practice questions, and mock exams</li>
                  <li>Available in various packages: Essential, Premium, and Ultimate</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">2.3 EA Exam Review</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Comprehensive review for all three parts of the EA exam</li>
                  <li>Includes video lectures, practice questions, and mock exams</li>
                  <li>Available in various packages: Essential, Premium, and Ultimate</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">2.4 CPE Courses</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Continuing Professional Education for CPAs, CMAs, and EAs</li>
                  <li>Available as individual courses or subscription packages</li>
                  <li>NASBA-approved provider</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">3. Enrollment Policies</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">3.1 Eligibility</h3>
                <p className="text-gray-600 mb-2 text-xl">Students must meet the following eligibility requirements:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Be at least 18 years of age</li>
                  <li>Have a valid email address and payment method</li>
                  <li>Meet any specific prerequisites for individual courses (if applicable)</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">3.2 Registration Process</h3>
                <p className="text-gray-600 mb-2 text-xl">To enroll in any course or program:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Create an account on myexamly.com</li>
                  <li>Select your desired course or program</li>
                  <li>Complete the checkout process</li>
                  <li>Access your course materials immediately after payment confirmation</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">4. Academic Policies</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">4.1 Course Access</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Standard access period: 18 months from date of purchase</li>
                  <li>Extended access options available for an additional fee</li>
                  <li>Access to course materials ends when the access period expires</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">4.2 Academic Integrity</h3>
                <p className="text-gray-600 mb-2 text-xl">Students are expected to maintain high standards of academic integrity:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Do not share account credentials with others</li>
                  <li>Do not distribute, sell, or share course materials</li>
                  <li>Complete all assessments honestly and independently</li>
                  <li>Violations may result in account termination without refund</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">5. Student Support Services</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">5.1 Technical Support</h3>
                <p className="text-gray-600 mb-2 text-xl">Technical support is available via:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Email: support@myexamly.com</li>
                  <li>Live chat: Available Monday-Friday, 9 AM - 8 PM EST</li>
                  <li>Phone: (406) 555-0120, Monday-Friday, 9 AM - 6 PM EST</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">5.2 Academic Support</h3>
                <p className="text-gray-600 mb-2 text-xl">Academic support services include:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Instructor Q&A forums</li>
                  <li>Email support for content-related questions</li>
                  <li>Live webinars and Q&A sessions (Premium and Ultimate packages)</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">6. Grading and Certification</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">6.1 Grading System</h3>
                <p className="text-gray-600 mb-2 text-xl">Our practice exams and assessments use the following grading system:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>75% or higher: Passing score (recommended for exam readiness)</li>
                  <li>Below 75%: Additional study recommended</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl">6.2 CPE Certificates</h3>
                <p className="text-gray-600 mb-2 text-xl">For CPE courses:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl">
                  <li>Minimum passing score: 70%</li>
                  <li>Certificates issued immediately upon successful completion</li>
                  <li>Records maintained for 7 years</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">7. Changes to Policies</h2>
              <p className="text-gray-600 mb-4 text-xl">Examly Global LLC reserves the right to update or modify these policies at any time. Students will be notified of significant changes via email and/or announcements on the learning platform.</p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-plus-jakarta text-3xl font-bold mb-5 text-xl md:text-3xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-gray-600 mb-2 whitespace-pre-line text-xl">For questions regarding this Student Catalog & Policies document, please contact:

Examly Global LLC
30 N Gould St Ste R
Sheridan, WY 82801
Email: policies@myexamly.com
Phone: (406) 555-0120
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}