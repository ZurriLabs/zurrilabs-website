"use client";

import { motion } from "framer-motion";


export default function Portfolio() {


const projects = [
  {
    title:"Fashion E-commerce",
    category:"E-commerce",
    description:"Modern online store focused on speed and conversion.",
  },
  {
    title:"Business Website",
    category:"Web Development",
    description:"Corporate website designed for digital growth.",
  },
  {
    title:"Analytics Dashboard",
    category:"Custom Software",
    description:"Data visualization interface with modern UX.",
  },
];



return (

<section
id="portfolio"
className="
w-full
bg-black
py-20
sm:py-24
px-6
sm:px-8
lg:px-16
overflow-hidden
"
>


<div className="section-line mb-16"/>



{/* HEADER */}

<div
className="
flex
flex-col
lg:flex-row
lg:items-end
justify-between
gap-8
mb-16
"
>


<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
text-5xl
sm:text-7xl
lg:text-8xl
font-black
text-white
leading-[0.85]
tracking-tighter
uppercase
"

>

OUR
<br/>
PROJECTS

</motion.h2>



<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
text-xs
sm:text-sm
text-white/40
max-w-sm
uppercase
tracking-widest
leading-relaxed
"

>

Digital experiences built with modern technology,
strategic design and high performance.

</motion.p>



</div>





{/* PROJECT CARDS */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{
projects.map((project,index)=>(


<motion.article

key={project.title}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:index*.15
}}

className="
group
relative
border
border-white/10
overflow-hidden
"

>


{/* MOCKUP AREA */}

<div

className="
aspect-4/3
bg-zinc-900
relative
overflow-hidden
"

>


<div
className="
absolute
inset-0
bg-linear-to-br
from-white/10
to-transparent
opacity-0
group-hover:opacity-100
transition
duration-500
"
/>



<div

className="
absolute
inset-0
opacity-10
"

style={{
backgroundImage:
"radial-gradient(rgba(255,255,255,.5) 1px,transparent 1px)",
backgroundSize:"20px 20px"
}}

/>



</div>





{/* INFO */}


<div
className="
p-6
border-t
border-white/10
"
>


<p
className="
text-[9px]
tracking-[0.3em]
uppercase
text-white/30
mb-3
"
>
{project.category}
</p>


<h3
className="
text-xl
font-bold
uppercase
text-white
tracking-tight
"
>
{project.title}
</h3>



<p
className="
text-xs
text-white/40
leading-relaxed
mt-3
"
>
{project.description}
</p>


</div>



</motion.article>


))
}



</div>





{/* CTA */}


<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

transition={{
delay:.4
}}

className="
mt-14
"

>


<a

href="#contact"

className="
inline-block
border
border-white/20
text-white
text-[10px]
font-bold
tracking-[0.3em]
uppercase
px-8
py-4

hover:bg-white
hover:text-black

transition-all
duration-300
"

>

START A PROJECT

</a>


</motion.div>





<div className="section-line mt-16"/>


</section>

);

}