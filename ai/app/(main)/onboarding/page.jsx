import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/lib/data'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'



const OnBoarding = async() => {
  const  {isOnboarded} = await getUserOnboardingStatus();
  if(isOnboarded){
    redirect("/dashboard");
  }
  return (
    <div>
      <h1>Onboarding </h1>
      <OnboardingForm industries ={industries} />
    </div>
  )
}

export default OnBoarding
