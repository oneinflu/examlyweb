import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { RocketIcon, GlobeIcon } from '@radix-ui/react-icons'

export function MissionVision() {
  return (
    <Section className=" bg-muted/10">
      <div className="container mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-block rounded-xl bg-primary/10 p-3 text-primary"
                whileHover={{ scale: 1.1 }}
              >
                <RocketIcon className="h-8 w-8" />
              </motion.div>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight group-hover:text-primary">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To democratize exam preparation by providing accessible, high-quality
              learning resources and innovative tools that empower students to achieve
              their academic goals with confidence.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-block rounded-xl bg-primary/10 p-3 text-primary"
                whileHover={{ scale: 1.1 }}
              >
                <GlobeIcon className="h-8 w-8" />
              </motion.div>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight group-hover:text-primary">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To become the global standard in educational technology, creating a
              world where every student has equal access to exceptional learning
              opportunities and the tools they need to succeed.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}