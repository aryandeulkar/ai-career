import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import HeroSection from "@/components/ui/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { faqs, features, howItWorks, testimonial } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" w-full grid-background ">

    <div className=" z-3  ">   </div>
     <HeroSection/>
     <section className=" w-full py-12 md:py-24 lg:py-32 bg-background">
<div className=" container mx-auto px-4 md:px-6">
  <h1 className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center pt-9 pb-5'>
    Powerful Features for Your Career Growth
  </h1>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
   
   {features.map((feature, index) => (
 <Card
 key={index}
 className="border-2 border-gray-700 hover:border-white transition-colors duration-300 rounded-xl p-4 cursor-pointer"
>
 <CardContent>
   <div className="text-center">
    <div className=" w-full flex justify-center">

    {feature.icon}
    </div>
     <h2 className="text-xl font-bold">{feature.title}</h2>
     <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
   </div>
 </CardContent>
</Card>

  ))}
  
   
  </div>
 

</div>

     </section>

     <section className=" w-full py-12 md:py-24 lg:py-32 bg-muted/50">
<div className=" container mx-auto px-4 md:px-6">
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">

  <div>
    <h1 className='  text-4xl font-bold md:text-4xl lg:text-5xl xl:text-6xl text-center '>50+</h1>
    <p className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center '>Industries Covered</p>
  </div>

  <div>
    <h1 className='  text-4xl font-bold md:text-4xl lg:text-5xl xl:text-6xl text-center '>1000+</h1>
    <p className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center '>Interview Questions</p>
  </div>

  <div>
    <h1 className='  text-4xl font-bold md:text-4xl lg:text-5xl xl:text-6xl text-center '>95%</h1>
    <p className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center '>Success Rate</p>
  </div>


  <div>
    <h1 className='  text-4xl font-bold md:text-4xl lg:text-5xl xl:text-6xl text-center '>24/7</h1>
    <p className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center '>AI Support</p>
  </div>
  </div>


  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
   
  
  
   
  </div>
 

</div>

     </section>
 
     <section className=" w-full py-12 md:py-24 lg:py-32 bg-background">
<div className=" container mx-auto px-4 md:px-6">
  <h1 className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center pt-9 pb-5'>
    How It Works 
  </h1>
  <p className='  text-lg font-thin md:text-xl lg:text-xl xl:text-2xl text-center pb-8 '>
    Four Simple Steps to Accelerate Your Growth 
  </p>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
   
   {howItWorks.map((feature, index) => (
 <Card
 key={index}
 className=" p-4 "
>
 <CardContent>
   <div className="text-center flex justify-center flex-col items-center">
   <div className="   bg-gray-500 rounded-full p-2">

{feature.icon}
</div>
     <h2 className="text-xl font-bold">{feature.title}</h2>
     <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
   </div>
 </CardContent>
</Card>

  ))}
  
   
  </div>
 

</div>

     </section>

     <section className=" w-full py-12 md:py-24 lg:py-32 bg-muted/50">
<div className=" container mx-auto px-4 md:px-6">
  <h1 className='  text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-center pt-9 pb-5'>
   What Our Users Say
  </h1>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl   mx-auto ">
   
   {testimonial.map((feature, index) => (
    <Card
  key={index}
  className="border-2 border-gray-700 hover:border-gray-200 transition-colors duration-300 rounded-xl p-4"
>
  <CardContent>
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Avatar */}
      <Image
        src={feature.image}
        width={80}
        height={80}
        className="rounded-full"
        alt="User avatar"
      />

      {/* Author Info */}
      <div>
        <h1 className="text-base font-semibold">{feature.author}</h1>
        <p className="text-sm text-muted-foreground">{feature.role}</p>
        <p className="text-sm text-muted-foreground">{feature.company}</p>
      </div>

      {/* Quote */}
      <p className="italic">"{feature.quote}"</p>
    </div>
  </CardContent>
</Card>
  ))}
  
   
  </div>
 

</div>

     </section>


     <section className="w-full py-8 md:py-16 lg:py-20 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl text-center pt-4 pb-2">
      Frequently Asked Questions 🧐🧐
    </h1>
    <p className="text-lg font-light md:text-xl text-center pb-6">
      Find answers to the common questions about our platform.
    </p>
    <div className="grid gap-4 max-w-2xl mx-auto">
      <Accordion type="single" collapsible>
        {faqs.map((feat, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{feat.question}</AccordionTrigger>
            <AccordionContent>{feat.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>



<section className="w-full  py-12 md:py-20 lg:py-24 text-black gradient">
  <div className="  container mx-auto px-4 md:px-6 text-center">
    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-6xl pt-6 pb-4">
      Ready to Accelerate Your Career?
    </h1>
    <p className="text-lg font-normal text-gray-600 md:text-xl xl:text-2xl pb-6 max-w-2xl mx-auto">
      Join thousands of professionals who are advancing their careers with AI-powered guidance.
    </p>
    <Link href="/dashboard" passHref>
      <Button
        size="lg"
        variant="secondary"
        className="h-11 mt-5 animate-bounce"
      >
        Start Your Journey Today
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
</section>




    </div>
  );
}
