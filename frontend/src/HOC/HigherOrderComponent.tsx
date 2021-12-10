import React from "react";

const HigherOrderComponent = (BaseComponent: any) => {
    return function EnhancedComponent(props: any) {
        return (
            <React.Fragment>
                {props.dd}
                <BaseComponent {...props} />
            </React.Fragment>
        );
    };
}
export default HigherOrderComponent;