import React from 'react'

const data = [
    {
        id: 1,
        title: 'to do',
        identityColor: '#5030E5',
        count: 4,
        tasks: [
            {
                id:1,
                priority: 'low',
                title: 'Brainstorming',
                image: null,
                description: `Brainstorming brings team members' diverse experience into play. `,
                comments: 12,
                files: 0,
                users:3
            },
            {
                id:2,
                priority: 'high',
                title: 'Research',
                image: null,
                description: `User research helps you to create an optimal product for users. `,
                comments: 10,
                files: 3,
                users:2
            },
            {
                id:3,
                priority: 'high',
                title: 'Wireframes',
                image: null,
                description: `Low fidelity wireframes include the most basic content and visuals.. `,
                comments: 12,
                files: 13,
                users:3
            },
        ]
    },
    {
        id:2,
        title: 'on progress',
        identityColor: '#FFA500',
        count: 3,
        tasks: [
            {
                id:1,
                priority: 'low',
                title: 'Onboarding Illustrations ',
                image: null,
                description: null,
                comments: 14,
                files: 15,
                users:3
            },
            {
                id:2,
                priority: 'low',
                title: 'Moodboard',
                image: null,
                description: null,
                comments: 9,
                files: 10,
                users:1
            },
            {
                id:3,
                priority: 'high',
                title: 'Onboarding Illustrations ',
                image: null,
                description: null,
                comments: 14,
                files: 15,
                users:3
            },
            
        ]
    },
    {
        id:3,
        title: 'done',
        identityColor: '#76A5EA',
        count: 2,
        tasks: [
            {
                id:1,
                priority: 'completed',
                title: 'Mobile App Design',
                image: null,
                description: null,
                comments: 12,
                files: 15,
                users:2
            },
            {
                id:1,
                priority: 'completed',
                title: 'Design System',
                image: null,
                description: null,
                comments: 12,
                files: 15,
                users:3
            },
        ]
    },

]

export default data