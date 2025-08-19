import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'

type Milestone = {
  year: number
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: 2020,
    title: 'Founded',
    description: 'Started with a vision to revolutionize exam preparation'
  },
  {
    year: 2021,
    title: '100+ Partners',
    description: 'Reached our first major milestone with over 100 educational institutions'
  },
  {
    year: 2022,
    title: 'Expanded to 5 States',
    description: 'Successfully expanded our presence across five major states'
  },
  {
    year: 2023,
    title: 'Global Vision',
    description: 'Embarking on our journey to become a global education platform'
  }
]

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Section className="">
      <div className="container mx-auto max-w-container grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Image/Illustration */}
        <div className="relative overflow-hidden rounded-2xl bg-muted/20">
          <motion.div
            className="aspect-square w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Examly Team Growth"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Story Text & Timeline */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Story
            </h2>
            <p className="text-muted-foreground">
              From a simple idea to revolutionize exam preparation, we&apos;ve grown into a
              trusted platform serving students and institutions across the nation.
            </p>
          </div>

          {/* Timeline Slider */}
          <div className="space-y-6">
            <div className="relative h-1 w-full bg-muted">
              <div
                className="absolute h-full bg-primary transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {milestones.map((milestone, index) => (
                <button
                  key={milestone.year}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'relative flex flex-col items-center space-y-2 transition-all',
                    index <= activeIndex ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <span className="text-sm font-medium">{milestone.year}</span>
                  <motion.div
                    className={cn(
                      'h-3 w-3 rounded-full',
                      index <= activeIndex ? 'bg-primary' : 'bg-muted'
                    )}
                    initial={false}
                    animate={{
                      scale: index === activeIndex ? 1.5 : 1
                    }}
                  />
                </button>
              ))}
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">
                {milestones[activeIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {milestones[activeIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}