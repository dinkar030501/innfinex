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
export const FEATURED_TASKS: Task[] = [
    {
        id: 1,
        title: 'AI Model Optimization Challenge',
        prize: 5000,
        image: '/challenges/ai-optimization.jpg',
        organizer_id: 1,
        organizer: {
            id: 1,
            name: 'TechCorp AI',
            image: '/organizers/techcorp.png',
        },
        slug: 'ai-model-optimization-challenge',
        summary:
            'Optimize AI models for better efficiency and performance in real-world scenarios.',
        description:
            'Participants will work on refining AI models to enhance accuracy, speed, and resource efficiency in real-world applications.',
        total_participants: 8745,
        taskDomains: ['Figma', 'Adobe Suite', 'Sketch'],
        timeline: [
            {
                date: '2024-01-01',
                title: 'Task 1',
                description: 'Description of task 1',
            },
        ],
    },
    {
        id: 2,
        title: 'Sustainable Code Architecture',
        prize: 3000,
        image: '/challenges/sustainable-arch.jpg',
        organizer_id: 2,
        organizer: {
            id: 2,
            name: 'GreenTech Solutions',
            image: '/organizers/greentech.png',
        },
        slug: 'sustainable-code-architecture',
        summary: 'Design scalable and energy-efficient software architectures.',
        description:
            'This challenge focuses on building robust, maintainable, and energy-efficient software architectures that minimize environmental impact.',
        total_participants: 2145,
        taskDomains: ['AWS', 'Docker', 'GitHub'],
        timeline: [
            {
                date: '2024-02-01',
                title: 'Initial Design',
                description: 'Create architecture blueprint',
            },
            {
                date: '2024-02-15',
                title: 'Implementation',
                description: 'Develop core components',
            },
        ],
    },
    {
        id: 3,
        title: 'Quantum Computing Algorithm',
        prize: 10000,
        image: '/challenges/quantum-comp.jpg',
        organizer_id: 3,
        organizer: {
            id: 3,
            name: 'QuantumLabs',
            image: '/organizers/quantumlabs.png',
        },
        slug: 'quantum-computing-algorithm',
        summary:
            'Develop groundbreaking algorithms leveraging the power of quantum computing.',
        description:
            'Participants will explore and create innovative quantum algorithms to solve complex computational problems more efficiently than classical approaches.',
        total_participants: 21945,
        taskDomains: ['Unity', 'InVision'],
        timeline: [
            {
                date: '2024-03-01',
                title: 'Research',
                description: 'Study quantum computing principles',
            },
            {
                date: '2024-03-15',
                title: 'Prototype',
                description: 'Develop initial algorithm',
            },
        ],
    },
]

// Extended list of engineering tasks and challenges
export const ALL_TASKS: Task[] = [
    {
        id: 1,
        title: 'ML Pipeline Optimization',
        prize: 2000,
        image: '/challenges/ai-optimization.jpg',
        slug: 'ml-pipeline-optimization',
        summary: 'Enhance machine learning pipelines for efficiency and scalability.',
        description:
            'This challenge involves optimizing ML workflows, improving data processing, and reducing training times while maintaining model accuracy.',
        total_participants: 9145,
        taskDomains: ['Sketch', 'Figma'],
        organizer_id: 1,
        organizer: {
            id: 1,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2024-06-01',
                title: 'Design',
                description: 'Create dashboard layout',
            },
            {
                date: '2024-06-15',
                title: 'Development',
                description: 'Implement data processing',
            },
        ],
    },
    {
        id: 2,
        title: 'Cloud Infrastructure Security',
        prize: 4000,
        image: '/challenges/sustainable-arch.jpg',
        slug: 'cloud-infrastructure-security',
        summary: 'Strengthen security measures for cloud-based systems.',
        description:
            'Participants will design and implement security solutions to protect cloud infrastructure against cyber threats and vulnerabilities.',
        total_participants: 2145,
        taskDomains: ['AWS', 'GitHub', 'Docker'],
        organizer_id: 2,
        organizer: {
            id: 2,
            name: 'TechCorp AI',
            image: '/organizers/techcorp.png',
        },
        timeline: [
            {
                date: '2024-07-01',
                title: 'Design',
                description: 'Create dashboard layout',
            },
        ],
    },
    {
        id: 3,
        title: 'Real-time Analytics Dashboard',
        prize: 3500,
        image: '/challenges/quantum-comp.jpg',
        slug: 'real-time-analytics-dashboard',
        summary: 'Develop a high-performance real-time data analytics platform.',
        description:
            'This challenge focuses on building dashboards capable of processing and visualizing large-scale streaming data in real-time.',
        total_participants: 2145,
        taskDomains: ['Adobe Suite'],
        organizer_id: 3,
        organizer: {
            id: 3,
            name: 'GreenTech Solutions',
            image: '/organizers/greentech.png',
        },
        timeline: [
            {
                date: '2024-07-01',
                title: 'Design',
                description: 'Create dashboard layout',
            },
        ],
    },
    {
        id: 4,
        title: 'Mobile App Performance',
        prize: 2000,
        image: '/challenges/ai-optimization.jpg',
        slug: 'mobile-app-performance',
        summary: 'Optimize mobile applications for speed and efficiency.',
        description:
            'Developers will work on enhancing mobile app responsiveness, battery efficiency, and load times for better user experience.',
        total_participants: 2145,
        taskDomains: ['Unity', 'Figma'],
        organizer_id: 4,
        organizer: {
            id: 4,
            name: 'QuantumLabs',
            image: '/organizers/quantumlabs.png',
        },
        timeline: [
            {
                date: '2024-07-01',
                title: 'Performance Analysis',
                description: 'Analyze current app performance metrics',
            },
            {
                date: '2024-07-15',
                title: 'Optimization',
                description: 'Implement performance improvements',
            },
        ],
    },
    {
        id: 5,
        title: 'Blockchain Smart Contracts',
        prize: 6000,
        image: '/challenges/blockchain.png',
        slug: 'blockchain-smart-contracts',
        summary: 'Build secure and efficient smart contracts on blockchain platforms.',
        description:
            'This challenge involves writing and optimizing smart contracts to ensure security, efficiency, and scalability in blockchain applications.',
        total_participants: 2145,
        taskDomains: ['GitHub', 'AWS'],
        organizer_id: 5,
        organizer: {
            id: 5,
            name: 'VirtualTech',
            image: '/organizers/virtualtech.png',
        },
        timeline: [
            {
                date: '2024-08-01',
                title: 'Design',
                description: 'Design smart contract architecture',
            },
            {
                date: '2024-08-15',
                title: 'Development',
                description: 'Develop and test smart contracts',
            },
        ],
    },
    {
        id: 6,
        title: 'DevOps Automation Challenge',
        prize: 3000,
        image: '/challenges/devops.jpeg',
        slug: 'devops-automation-challenge',
        summary: 'Automate and streamline DevOps pipelines for faster deployments',
        description:
            'Create innovative solutions to automate CI/CD pipelines, infrastructure provisioning, and monitoring systems for efficient software delivery.',
        total_participants: 2145,
        taskDomains: ['Docker', 'AWS'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2024-09-01',
                title: 'Assessment',
                description: 'Evaluate current DevOps processes',
            },
            {
                date: '2024-09-15',
                title: 'Automation',
                description: 'Implement automation solutions',
            },
        ],
    },
    {
        id: 7,
        title: 'Edge Computing Solutions',
        prize: 4500,
        image: '/challenges/edge-computing.jpg',
        slug: 'edge-computing-solutions',
        summary:
            'Develop efficient edge computing architectures for real-time processing',
        description:
            'Design and implement edge computing solutions that enable low-latency processing and data analysis closer to the source of data generation.',
        total_participants: 2145,
        taskDomains: ['AWS', 'Docker'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2024-10-01',
                title: 'Research',
                description: 'Research edge computing technologies',
            },
            {
                date: '2024-10-15',
                title: 'Implementation',
                description: 'Develop edge computing solutions',
            },
        ],
    },
    {
        id: 8,
        title: 'Natural Language Processing',
        prize: 5500,
        image: '/challenges/nlp.jpg',
        slug: 'natural-language-processing',
        summary: 'Create advanced NLP models for text understanding and generation',
        description:
            'Develop cutting-edge natural language processing models for tasks like sentiment analysis, text summarization, and language translation.',
        total_participants: 2145,
        taskDomains: ['GitHub', 'Unity'],
        organizer_id: 8,
        organizer: {
            id: 8,
            name: 'QuantumLabs',
            image: '/organizers/quantumlabs.png',
        },
        timeline: [
            {
                date: '2024-11-01',
                title: 'Model Design',
                description: 'Design NLP model architecture',
            },
            {
                date: '2024-11-15',
                title: 'Training',
                description: 'Train NLP models on datasets',
            },
        ],
    },
    {
        id: 9,
        title: 'Microservices Architecture',
        prize: 3800,
        image: '/challenges/microservices.jpg',
        slug: 'microservices-architecture',
        summary: 'Design scalable and maintainable microservices systems',
        description:
            'Create robust microservices architectures that enable independent deployment, scalability, and fault tolerance in distributed systems.',
        total_participants: 2145,
        taskDomains: ['Docker', 'AWS'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2024-12-01',
                title: 'Architecture Design',
                description: 'Design microservices architecture',
            },
            {
                date: '2024-12-15',
                title: 'Development',
                description: 'Develop microservices components',
            },
        ],
    },
    {
        id: 10,
        title: 'IoT Data Processing',
        prize: 4200,
        image: '/challenges/iot.jpg',
        slug: 'iot-data-processing',
        summary: 'Develop efficient IoT data processing pipelines',
        description:
            'Build systems for collecting, processing, and analyzing massive streams of data from IoT devices in real-time.',
        total_participants: 2145,
        taskDomains: ['AWS', 'GitHub'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2025-01-01',
                title: 'Data Collection',
                description: 'Set up IoT data collection systems',
            },
            {
                date: '2025-01-15',
                title: 'Processing',
                description: 'Implement data processing pipelines',
            },
        ],
    },
    {
        id: 11,
        title: 'API Security Challenge',
        prize: 3200,
        image: '/challenges/api-security.jpg',
        slug: 'api-security-challenge',
        summary: 'Enhance API security and protect against vulnerabilities',
        description:
            'Develop solutions to secure APIs against common threats like DDoS attacks, injection vulnerabilities, and unauthorized access.',
        total_participants: 2145,
        taskDomains: ['GitHub', 'Docker'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2025-02-01',
                title: 'Security Assessment',
                description: 'Assess current API security measures',
            },
            {
                date: '2025-02-15',
                title: 'Enhancement',
                description: 'Implement security enhancements',
            },
        ],
    },
    {
        id: 12,
        title: 'Database Optimization',
        prize: 2800,
        image: '/challenges/database.jpg',
        slug: 'database-optimization',
        summary: 'Optimize database performance and query efficiency',
        description:
            'Develop techniques to improve database query performance, indexing strategies, and storage optimization for large-scale systems.',
        total_participants: 2145,
        taskDomains: ['AWS', 'GitHub'],
        organizer_id: 8,
        organizer: {
            id: 8,
            name: 'QuantumLabs',
            image: '/organizers/quantumlabs.png',
        },
        timeline: [
            {
                date: '2025-03-01',
                title: 'Analysis',
                description: 'Analyze database performance issues',
            },
            {
                date: '2025-03-15',
                title: 'Optimization',
                description: 'Implement optimization strategies',
            },
        ],
    },
    {
        id: 13,
        title: 'UI/UX Innovation',
        prize: 2500,
        image: '/challenges/ui-ux.jpg',
        slug: 'ui-ux-innovation',
        summary: 'Create innovative and user-friendly interface designs',
        description:
            'Design and implement cutting-edge user interfaces that provide exceptional user experiences across different platforms and devices.',
        total_participants: 2145,
        taskDomains: ['Figma', 'Sketch'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2025-04-01',
                title: 'Design',
                description: 'Create UI/UX design concepts',
            },
            {
                date: '2025-04-15',
                title: 'Implementation',
                description: 'Develop and test UI/UX designs',
            },
        ],
    },
    {
        id: 14,
        title: '5G Network Solutions',
        prize: 5000,
        image: '/challenges/5g-network.jpg',
        slug: '5g-network-solutions',
        summary: 'Develop innovative solutions for 5G network optimization',
        description:
            'Create solutions to enhance 5G network performance, including latency reduction, bandwidth optimization, and network slicing techniques.',
        total_participants: 2145,
        taskDomains: ['AWS', 'Docker'],
        organizer_id: 6,
        organizer: {
            id: 6,
            name: 'DataFlow Inc',
            image: '/organizers/dataflow.png',
        },
        timeline: [
            {
                date: '2025-05-01',
                title: 'Research',
                description: 'Research 5G network technologies',
            },
            {
                date: '2025-05-15',
                title: 'Development',
                description: 'Develop 5G optimization solutions',
            },
        ],
    },
    {
        id: 15,
        title: 'AR/VR Development',
        prize: 4800,
        image: '/challenges/quantum-comp.jpg',
        slug: 'ar-vr-development',
        summary: 'Create immersive AR/VR experiences and applications',
        description:
            'Develop innovative augmented and virtual reality applications with focus on user interaction, performance optimization, and realistic rendering.',
        total_participants: 2145,
        taskDomains: ['Unity', 'Sketch'],
        organizer_id: 8,
        organizer: {
            id: 8,
            name: 'QuantumLabs',
            image: '/organizers/quantumlabs.png',
        },
        timeline: [
            {
                date: '2025-06-01',
                title: 'Concept Design',
                description: 'Design AR/VR application concepts',
            },
            {
                date: '2025-06-15',
                title: 'Development',
                description: 'Develop AR/VR applications',
            },
        ],
    },
]
