import { Task } from '@/types'

export const taskTags = {
    Figma: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Adobe Suite': 'bg-red-500/20 text-red-400 border-red-500/30',
    Sketch: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    InVision: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    GitHub: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    AWS: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Docker: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Unity: 'bg-green-500/20 text-green-400 border-green-500/30',
}

// Featured challenges for hero section
export const featuredChallenges: Task[] = [
    {
        title: 'AI Model Optimization Challenge',
        prize: '$5,000 Prize Pool',
        image: '/challenges/ai-optimization.jpg',
        organizer: 'TechCorp AI',
        organizerImage: '/organizers/techcorp.png',
        slug: 'ai-model-optimization-challenge',
        summary:
            'Optimize AI models for better efficiency and performance in real-world scenarios.',
        description:
            'Participants will work on refining AI models to enhance accuracy, speed, and resource efficiency in real-world applications.',
        participants: 8745,
        taskDomains: ['Figma', 'Adobe Suite', 'Sketch'],
    },
    {
        title: 'Sustainable Code Architecture',
        prize: '$3,000 Prize Pool',
        image: '/challenges/sustainable-arch.jpg',
        organizer: 'GreenTech Solutions',
        organizerImage: '/organizers/greentech.png',
        slug: 'sustainable-code-architecture',
        summary: 'Design scalable and energy-efficient software architectures.',
        description:
            'This challenge focuses on building robust, maintainable, and energy-efficient software architectures that minimize environmental impact.',
        participants: 2145,
        taskDomains: ['AWS', 'Docker', 'GitHub'],
    },
    {
        title: 'Quantum Computing Algorithm',
        prize: '$10,000 Prize Pool',
        image: '/challenges/quantum-comp.jpg',
        organizer: 'QuantumLabs',
        organizerImage: '/organizers/quantumlabs.png',
        slug: 'quantum-computing-algorithm',
        summary:
            'Develop groundbreaking algorithms leveraging the power of quantum computing.',
        description:
            'Participants will explore and create innovative quantum algorithms to solve complex computational problems more efficiently than classical approaches.',
        participants: 21945,
        taskDomains: ['Unity', 'InVision'],
    },
]

// Extended list of engineering tasks and challenges
export const engineeringChallenges: Task[] = [
    {
        title: 'ML Pipeline Optimization',
        prize: '$2,500 Prize Pool',
        image: '/challenges/ai-optimization.jpg',
        organizer: 'DataFlow Inc',
        organizerImage: '/organizers/dataflow.png',
        slug: 'ml-pipeline-optimization',
        summary: 'Enhance machine learning pipelines for efficiency and scalability.',
        description:
            'This challenge involves optimizing ML workflows, improving data processing, and reducing training times while maintaining model accuracy.',
        participants: 9145,
        taskDomains: ['Sketch', 'Figma'],
    },
    {
        title: 'Cloud Infrastructure Security',
        prize: '$4,000 Prize Pool',
        image: '/challenges/sustainable-arch.jpg',
        organizer: 'TechCorp AI',
        organizerImage: '/organizers/techcorp.png',
        slug: 'cloud-infrastructure-security',
        summary: 'Strengthen security measures for cloud-based systems.',
        description:
            'Participants will design and implement security solutions to protect cloud infrastructure against cyber threats and vulnerabilities.',
        participants: 2145,
        taskDomains: ['AWS', 'GitHub', 'Docker'],
    },
    {
        title: 'Real-time Analytics Dashboard',
        prize: '$3,500 Prize Pool',
        image: '/challenges/quantum-comp.jpg',
        organizer: 'GreenTech Solutions',
        organizerImage: '/organizers/greentech.png',
        slug: 'real-time-analytics-dashboard',
        summary: 'Develop a high-performance real-time data analytics platform.',
        description:
            'This challenge focuses on building dashboards capable of processing and visualizing large-scale streaming data in real-time.',
        participants: 2145,
        taskDomains: ['Adobe Suite'],
    },
    {
        title: 'Mobile App Performance',
        prize: '$2,000 Prize Pool',
        image: '/challenges/ai-optimization.jpg',
        organizer: 'QuantumLabs',
        organizerImage: '/organizers/quantumlabs.png',
        slug: 'mobile-app-performance',
        summary: 'Optimize mobile applications for speed and efficiency.',
        description:
            'Developers will work on enhancing mobile app responsiveness, battery efficiency, and load times for better user experience.',
        participants: 2145,
        taskDomains: ['Unity', 'Figma'],
    },
    {
        title: 'Blockchain Smart Contracts',
        prize: '$6,000 Prize Pool',
        image: '/challenges/blockchain.png',
        organizer: 'VirtualTech',
        organizerImage: '/organizers/virtualtech.png',
        slug: 'blockchain-smart-contracts',
        summary: 'Build secure and efficient smart contracts on blockchain platforms.',
        description:
            'This challenge involves writing and optimizing smart contracts to ensure security, efficiency, and scalability in blockchain applications.',
        participants: 2145,
        taskDomains: ['GitHub', 'AWS'],
    },
    {
        title: 'DevOps Automation Challenge',
        prize: '$3,000 Prize Pool',
        image: '/challenges/devops.jpeg',
        organizer: 'DataFlow Inc',
        organizerImage: '/organizers/dataflow.png',
        slug: 'devops-automation-challenge',
        summary: 'Automate and streamline DevOps pipelines for faster deployments',
        description:
            'Create innovative solutions to automate CI/CD pipelines, infrastructure provisioning, and monitoring systems for efficient software delivery.',
        participants: 2145,
        taskDomains: ['Docker', 'AWS'],
    },
    {
        title: 'Edge Computing Solutions',
        prize: '$4,500 Prize Pool',
        image: '/challenges/edge-computing.jpg',
        organizer: 'TechCorp AI',
        organizerImage: '/organizers/techcorp.png',
        slug: 'edge-computing-solutions',
        summary:
            'Develop efficient edge computing architectures for real-time processing',
        description:
            'Design and implement edge computing solutions that enable low-latency processing and data analysis closer to the source of data generation.',
        participants: 2145,
        taskDomains: ['AWS', 'Docker'],
    },
    {
        title: 'Natural Language Processing',
        prize: '$5,500 Prize Pool',
        image: '/challenges/nlp.jpg',
        organizer: 'QuantumLabs',
        organizerImage: '/organizers/quantumlabs.png',
        slug: 'natural-language-processing',
        summary: 'Create advanced NLP models for text understanding and generation',
        description:
            'Develop cutting-edge natural language processing models for tasks like sentiment analysis, text summarization, and language translation.',
        participants: 2145,
        taskDomains: ['GitHub', 'Unity'],
    },
    {
        title: 'Microservices Architecture',
        prize: '$3,800 Prize Pool',
        image: '/challenges/microservices.jpg',
        organizer: 'GreenTech Solutions',
        organizerImage: '/organizers/greentech.png',
        slug: 'microservices-architecture',
        summary: 'Design scalable and maintainable microservices systems',
        description:
            'Create robust microservices architectures that enable independent deployment, scalability, and fault tolerance in distributed systems.',
        participants: 2145,
        taskDomains: ['Docker', 'AWS'],
    },
    {
        title: 'IoT Data Processing',
        prize: '$4,200 Prize Pool',
        image: '/challenges/iot.jpg',
        organizer: 'DataFlow Inc',
        organizerImage: '/organizers/dataflow.png',
        slug: 'iot-data-processing',
        summary: 'Develop efficient IoT data processing pipelines',
        description:
            'Build systems for collecting, processing, and analyzing massive streams of data from IoT devices in real-time.',
        participants: 2145,
        taskDomains: ['AWS', 'GitHub'],
    },
    {
        title: 'API Security Challenge',
        prize: '$3,200 Prize Pool',
        image: '/challenges/api-security.jpg',
        organizer: 'TechCorp AI',
        organizerImage: '/organizers/techcorp.png',
        slug: 'api-security-challenge',
        summary: 'Enhance API security and protect against vulnerabilities',
        description:
            'Develop solutions to secure APIs against common threats like DDoS attacks, injection vulnerabilities, and unauthorized access.',
        participants: 2145,
        taskDomains: ['GitHub', 'Docker'],
    },
    {
        title: 'Database Optimization',
        prize: '$2,800 Prize Pool',
        image: '/challenges/database.jpg',
        organizer: 'QuantumLabs',
        organizerImage: '/organizers/quantumlabs.png',
        slug: 'database-optimization',
        summary: 'Optimize database performance and query efficiency',
        description:
            'Develop techniques to improve database query performance, indexing strategies, and storage optimization for large-scale systems.',
        participants: 2145,
        taskDomains: ['AWS', 'GitHub'],
    },
    {
        title: 'UI/UX Innovation',
        prize: '$2,500 Prize Pool',
        image: '/challenges/ui-ux.jpg',
        organizer: 'GreenTech Solutions',
        organizerImage: '/organizers/greentech.png',
        slug: 'ui-ux-innovation',
        summary: 'Create innovative and user-friendly interface designs',
        description:
            'Design and implement cutting-edge user interfaces that provide exceptional user experiences across different platforms and devices.',
        participants: 2145,
        taskDomains: ['Figma', 'Sketch'],
    },
    {
        title: '5G Network Solutions',
        prize: '$5,000 Prize Pool',
        image: '/challenges/5g-network.jpg',
        organizer: 'DataFlow Inc',
        organizerImage: '/organizers/dataflow.png',
        slug: '5g-network-solutions',
        summary: 'Develop innovative solutions for 5G network optimization',
        description:
            'Create solutions to enhance 5G network performance, including latency reduction, bandwidth optimization, and network slicing techniques.',
        participants: 2145,
        taskDomains: ['AWS', 'Docker'],
    },
    {
        title: 'AR/VR Development',
        prize: '$4,800 Prize Pool',
        image: '/challenges/quantum-comp.jpg',
        organizer: 'VirtualTech',
        organizerImage: '/organizers/virtualtech.jpg',
        slug: 'ar-vr-development',
        summary: 'Create immersive AR/VR experiences and applications',
        description:
            'Develop innovative augmented and virtual reality applications with focus on user interaction, performance optimization, and realistic rendering.',
        participants: 2145,
        taskDomains: ['Unity', 'Sketch'],
    },
]
