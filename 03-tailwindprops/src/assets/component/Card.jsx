
import React from 'react'

function Card({username="Fathima", post=" not decided yet",para=""}) {
  return (
    <div>
        {/* <img src="https://storage.googleapis.com/pai-images/5c0f9c5330ef46bca6af562c7e15e749.jpeg" alt="mickey" className='w-96' />
        <h1 className='text-2xl bg-green-300 p-3 rounded'>Panda Bear</h1> */}
   
   <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-600">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://pics.craiyon.com/2023-09-12/2231bf45771b4d5eba6673008ccbc64b.webp" alt="sarah" width="384" height="512" />
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.<br/>{para}”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
       {post}
      </div>
    </figcaption>
  </div>
</figure>
<br/>

  
</div>
  )
}

export default Card

