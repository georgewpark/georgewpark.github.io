import { useCallback, useRef } from 'react'
import { projectUrl } from '../data/projects'
import type { Project } from '../types'
import { ExternalLinkIcon } from './icons'

type ProjectCardProps = {
  project: Project
  prefersReducedMotion: boolean
}

const ProjectCard = ({ project, prefersReducedMotion }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const host = project.github ? 'GitHub' : 'CodePen'

  const playPreview = useCallback(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion) return

    void video.play().catch(() => {})
  }, [prefersReducedMotion])

  const pausePreview = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0
  }, [])

  return (
    <article
      className='group relative flex w-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 ease-out-soft hover:border-line-strong focus-within:border-line-strong'
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
    >
      <div className='relative aspect-16/10 overflow-hidden bg-surface-raised'>
        {project.image && (
          <img
            src={`/images/portfolio/${project.image}.jpg`}
            alt=''
            loading='lazy'
            decoding='async'
            width={800}
            height={500}
            className='size-full object-cover'
          />
        )}
        {project.video && (
          <video
            ref={videoRef}
            src={`/video/portfolio/${project.video}.mp4`}
            preload='metadata'
            muted
            loop
            playsInline
            aria-hidden='true'
            tabIndex={-1}
            className='size-full object-cover'
          />
        )}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 bg-linear-to-t from-surface/80 to-transparent to-50%'
        />
      </div>

      <div className='flex flex-1 flex-col gap-3 p-5'>
        <h3 className='text-lg font-semibold tracking-tight text-fg'>
          {project.title}
        </h3>
        <p className='flex-1 text-sm/relaxed text-fg-muted'>
          {project.description}
        </p>
        <a
          href={projectUrl(project)}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-1 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-accent underline decoration-1 underline-offset-4 transition-colors duration-200 ease-out-soft hover:text-accent-hover'
        >
          View on {host}
          <span className='sr-only'>
            : {project.title} (opens in a new tab)
          </span>
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
