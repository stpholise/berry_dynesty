 

import { auth } from "@clerk/nextjs/server";


const page = async() => {
  await auth.protect()
  
  return (
    <div>page</div>
  )
}

export default page