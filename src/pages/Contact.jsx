import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import CtaSection from '../components/common/CtaSection';

import AssistanceSection from '../components/contact/AssistanceSection';
import assist1 from '../assets/assist/Factory.png';
import assist2 from '../assets/assist/Machine.png';
import assist3 from '../assets/assist/Drill.png';

const Contact = () => {
  return (
    <div className="bg-white">
      <Navbar bgColor="bg-[#0C001D]" textColor="text-white" itemColor="text-white" />
      <div className="pt-20">
        <ContactForm />
      </div>

      <div className="self-stretch px-20 pt-16 pb-10 bg-white inline-flex flex-col justify-start items-center gap-16 overflow-hidden">
        <div className="w-[1280px] px-8 flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-start items-center gap-12">
            <div className="w-[768px] flex flex-col justify-start items-center gap-5">
              <div className="self-stretch text-center text-slate-950 text-5xl font-bold font-['Space_Grotesk']">How we can assist you</div>
              <div className="self-stretch text-center text-neutral-600 text-2xl font-normal font-['Source_Sans_3']">Whether you’re sourcing packaging for the first time or scaling up your existing operations, Mukand’s team is ready to support you with product recommendations, volume estimates, documentation, and more.</div>
            </div>
          </div>
        </div>    
      </div>

      <AssistanceSection
        tag="Quality"
        title="Leading the Way in Flexible Packaging Solutions"
        description="With over 20 years in the industry, we deliver unmatched quality and reliability. Our commitment to customer satisfaction drives us to continuously improve and innovate."
        stat1Value="95%"
        stat1Description="Customer satisfaction rating based on recent surveys."
        stat2Value="5000"
        stat2Description="Tons of flexible packaging produced annually."
        imageUrl={assist1}
        imagePosition="left"
        padding="py-10"
      />

      <AssistanceSection
        tag="Quality"
        title="Performance You Can Measure. Reliability You Can Trust"
        description="With a strong focus on consistency, Mukand Industries delivers high-volume packaging solutions tailored to industrial needs. From stretch films to laminated rolls, our output is engineered to perform under pressure."
        stat1Value="Pan-India"
        stat1Description="Shipping capability"
        stat2Value="MOQs"
        stat2Description="Flexible MOQs for growing enterprises"
        imageUrl={assist2}
        imagePosition="right"
        padding="py-10"
      />

      <AssistanceSection
        tag="Quality"
        title="Built for Supply Chain Confidence"
        description="In a time when downtime and inconsistencies cost real money, Mukand’s systems are designed for stability. With rigorous QC, batch-level traceability, and in-house converting, we ensure packaging that performs at every stage."
        stat1Value="3 - stage"
        stat1Description="Quality check system"
        stat2Value="Compliance"
        stat2Description="Ready for food & pharma exports"
        imageUrl={assist3}
        imagePosition="left"
        padding="pt-10 pb-16"
      />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Contact;
