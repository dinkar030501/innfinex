import Image from 'next/image'
import Link from 'next/link'
import { Clock, Tag } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { taskTags } from '@/content/taskList'

interface TaskListCardProps {
    title: string
    description: string
    image: string
    status?: {
        text: string
        type: 'active' | 'completed' | 'upcoming'
    }
    prize: string
    additionalPrize?: string
    taskDomains?: string[]
    metrics?: {
        views: number
        participants: number
        submissions: number
    }
    organizer: string
    organizerImage: string
    slug: string
}

export function TaskListCard({
    title,
    description,
    image,
    prize,
    additionalPrize,
    taskDomains,
    organizer,
    organizerImage,
    slug,
}: TaskListCardProps) {
    return (
        <Link href={`/task/${slug}`}>
            <div className="group relative overflow-hidden rounded-xl bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image || '/placeholder.svg'}
                        alt={title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-purple-400" />
                            <span className="text-yellow-500 font-semibold">{prize}</span>
                        </div>
                        {additionalPrize && (
                            <div className="text-sm text-gray-400">
                                +{additionalPrize}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full overflow-hidden relative">
                                <Image
                                    src={organizerImage || '/placeholder.svg'}
                                    alt={organizer}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm text-gray-400">{organizer}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {taskDomains?.map((domain: string) => (
                                <Badge
                                    key={domain}
                                    variant="outline"
                                    className={`${
                                        taskTags[domain as keyof typeof taskTags]
                                    } transition-colors duration-200 bg-black hover:bg-opacity-30`}
                                >
                                    <Tag className="w-3 h-3 mr-1" />
                                    {domain}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
