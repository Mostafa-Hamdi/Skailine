import React from 'react'
import Case from '../Case'
import AllCaseDescription from '../AllCaseDescription'
import { case1,case2,case3 } from '@/app/assets'
import Return from './Return'

const page = () => {
  return (
    <div className='geospatial-sales '>
        <Return pageName="Geospatial Sales Optimization" collectionName="AI Case Studies" heading="Case Studies"/>
        <div className="container py-12 md:py-20 flex flex-col aftmd:flex-row max-w-[540px]  md:max-w-[720px] aftmd:max-w-[960px] aftlg:max-w-[1140px]  aftxl:max-w-[1320px] mx-auto">
            <div className="info px-3 order-2 aftmd:order-0 aftmd:w-[calc(100%/3)]">
                <h2 className='text-[#000014] pb-5 capitalize mb-8 text-[24px] leading-[24px] font-semibold relative'>Recent Case Studies</h2>
                <Case img={case1} link="revolutionising-marketing" caseName="Revolutionising Marketing Strategies in a Commoditised Market" date="April 24, 2024"/>
                <Case img={case2} link="innovation-driven" caseName="Innovation-driven demand planning" date="April 24, 2024"/>
                <Case img={case3} link="geospatial-sales" caseName="Geospatial Sales Optimization" date="April 3, 2024"/>
            </div>
            <div className="latest order-[0] aftmd:order-10 px-3 aftmd:flex-1">    
                <AllCaseDescription 
                    img={case3}
                    link="geospatial-sales"
                    date="April 3, 2024"
                    mainParagraph="We helped a regional FMCG company create a competitive advantage in a highly commoditised market by shifting from traditional media-based to digital marketing, leveraging the capabilities of a customer data platform."
                    head1="Revolutionising Marketing Strategies in a Commoditised Market"
                    head2="Embracing the Digital Frontier with Advanced Data Capabilities"
                    head3="Consumer Segmentation"
                    head4="Creative Personalisation"
                    head5="Consumer Trends Integration"
                    head6="Building a Foundation with Expertise"
                    paragraph1="In today’s fast-paced and highly competitive Fast-Moving Consumer Goods (FMCG) industry, staying ahead of the curve is not just an option but a necessity. Our latest collaboration with a  regional FMCG company exemplifies this ethos. We embarked on a journey to transform their marketing approach from a traditional, media-based strategy to an innovative, digitally-driven one. This shift not only carved a niche for the company in a commoditized market but also set a new benchmark in customer engagement and market penetration."
                    paragraph2="The cornerstone of this transformation was the integration of a sophisticated Customer Data Platform (CDP). This platform served as a vital tool in harnessing the power of data analytics and artificial intelligence. Our collaboration was grounded in a strategic approach where we worked closely with our client to identify and prioritise AI-driven use cases. These cases were meticulously chosen to target three critical areas: consumer segmentation, creative personalisation, and the integration of consumer trends into the innovation process."
                    paragraph3="In the realm of consumer segmentation, the AI capabilities of the CDP enabled us to delve deep into consumer data, uncovering insights that were previously unattainable. This allowed for the creation of highly targeted marketing campaigns, each tailored to specific consumer groups. The precision in segmentation led to more effective communication, driving engagement, and fostering loyalty among consumers."
                    paragraph4="Creative personalisation marked another leap forward. By leveraging AI, we could dynamically tailor marketing creatives to resonate with individual consumer preferences and behaviours. This not only enhanced the relevance of the marketing messages but also significantly increased the impact and conversion rates of our digital campaigns."
                    paragraph5="Perhaps the most innovative aspect was the integration of consumer trends into the company’s innovation process. By analysing real-time data, we could identify emerging trends, enabling the company to stay ahead of consumer demands. This integration formed a feedback loop that constantly fuelled the company’s product development and marketing strategies, ensuring they were always aligned with evolving market needs."
                    paragraph6="A pivotal factor in the success of this digital transformation was the formation of a highly skilled digital data and analytics team. Recognising the importance of expertise in driving such a transformation, we assisted the company in assembling a team of professionals with deep knowledge in data science and AI."
                    boxHead="The Outcome"
                    boxParagraph="A Pivotal Factor In The Success Of This Digital Transformation Was The Formation Of A Highly Skilled Digital Data And Analytics Team. Recognising The Importance Of Expertise In Driving Such A Transformation, We Assisted The Company In Assembling A Team Of Professionals With Deep Knowledge In Data Science And AI."
                />
            </div>
        </div>
    </div>
  )
}

export default page