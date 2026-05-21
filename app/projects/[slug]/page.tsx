import React, { ReactNode } from 'react'
import { projects } from "../../data/projectData"

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const pj = projects.find(p => p.slug === slug)

    if (!pj) return <div>Project not found</div>
  return (
    <div className='flex flex-col items-center px-10 py-15 flex flex-col w-screen text-sm md:px-20 lg:p-30 lg:text-base lg:text-base/7'>
        <div className='flex flex-col-reverse gap-10 items-center justify-end md:flex-row md:gap-20 lg:gap-50'>
            <div>
                <div>
                    <h1 className='text-2xl md:text-3xl'>{pj.title}</h1>
                    <h2 className='text-[var(--accent)] font-[var(--font-onest)]'>{pj.subtitle}</h2>
                    <p className='mt-3'>{pj.overview}</p>
                </div>
                <div >
                    <h3 className='text-[var(--accent)] font-[var(--font-onest)] mt-5'>Tech-Stack:</h3>
                    <p className='mt-2'>{pj.techStack.join(" · ")}</p>
                </div>
            </div>

            <img className='h-[400px] rounded-xl lg:h-[500]' src={pj.image[0]} alt="" />
        </div>

        <div className='py-10 flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-30 lg:my-20'>
            <div>
                <h3 className='text-[var(--accent)]'>Features</h3>
                <ul className='list-disc list-inside my-2'>
                    {pj.features.map((feature, i) => {
                      return  <li className='my-2' key={i}>{feature}</li>
                    })}
                </ul>
            </div>

            <div className='lg:w-[50vw]'>
                <h3 className='text-[var(--accent)]'>Technical challenges</h3>
                <p className='mt-2'>{pj.challenges}</p>
            </div>
        </div>

        <div>
            <a rel="stylesheet" href={pj.linkWebsite} />
            <a rel="stylesheet" href={pj.linkGit} />
        </div>
     
     <div className='flex flex-col md:flex-row gap-5'>
        {pj.image.map((image, i) => {
            return <img className='h-[400px] w-auto rounded-xl lg:h-[500px]' key={i} src={image}/>
        })}
     </div>

    </div>
  );
}
