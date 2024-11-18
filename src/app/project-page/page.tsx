import React from 'react'
import PropTypes from 'prop-types'
import { ClientOnly } from '../components/ClientOnly'
import ProjectClient from './ProjectClient'
import { projectR } from '../components/projects/ProjectR/ProjectRe'

const page = () => {
    const projects = projectR

    return (
        <ClientOnly>
            <ProjectClient
                project={projects}
            />
        </ClientOnly>
    )
}


export default page
