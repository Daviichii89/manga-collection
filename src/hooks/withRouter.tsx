import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

const withRouter = <Props extends WithRouterProps> (Component: React.ComponentType<Props>) => {
    const ComponentWithRouterProp = (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return (
            <Component
                {...props as Props}
                router={{ location, navigate, params}}
            />
        )
    }
    return ComponentWithRouterProp
}

export default withRouter