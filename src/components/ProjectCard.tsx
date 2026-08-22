import { useCallback, useRef } from 'react'
import { projectUrl } from '../data/projects'
import { useNearViewport } from '../hooks/useNearViewport'
import type { Project } from '../types'
import { ExternalLinkIcon } from './icons'

const SLOT_WIDTH = 800
const SLOT_HEIGHT = 500

type ProjectCardProps = {
  project: Project
  prefersReducedMotion: boolean
}

const ProjectCard = ({ project, prefersReducedMotion }: ProjectCardProps) => {
  const cardRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isNear = useNearViewport(cardRef)
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
      ref={cardRef}
      className='project-card group relative flex w-full flex-col overflow-hidden rounded-card bg-surface'
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
            width={SLOT_WIDTH}
            height={SLOT_HEIGHT}
            className='size-full object-cover'
          />
        )}
        {project.video && (
          <video
            ref={videoRef}
            src={isNear ? `/video/portfolio/${project.video}.mp4` : undefined}
            width={SLOT_WIDTH}
            height={SLOT_HEIGHT}
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
          className='project-card-link mt-1 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold underline decoration-1 underline-offset-4'
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
